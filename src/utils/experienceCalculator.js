/**
 * Helper utility for calculating faculty experience.
 *
 * Rules:
 * 1. 30 Days per Month standard (12 months = 360 days per year).
 * 2. Multi-level validation on work experience records.
 * 3. Union (merge) of overlapping work experience intervals.
 * 4. Ongoing/Present jobs update dynamically every day.
 * 5. Fall back to joining date if no valid work experience exists.
 * 6. Return null if no valid work experience or joining date exists.
 */

export const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Safely parse date from string (YYYY-MM-DD), ISO string, or Date object.
 */
export const parseDate = (value) => {
  if (!value) return null;
  if (value instanceof Date && !isNaN(value.getTime())) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  const str = value.toString().trim().split("T")[0];
  if (!str) return null;

  const parts = str.split("-").map(Number);
  if (parts.length < 3) return null;

  const [year, month, day] = parts;
  if (!year || !month || !day || isNaN(year) || isNaN(month) || isNaN(day)) return null;

  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return date;
};

/**
 * Format calculated duration into human-readable string.
 * e.g. "5 Years 2 Months 14 Days", "1 Year 1 Month 1 Day"
 */
export const formatDuration = (years, months, days) => {
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "Year" : "Years"}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? "Month" : "Months"}`);
  }
  if (days > 0) {
    parts.push(`${days} ${days === 1 ? "Day" : "Days"}`);
  }

  return parts.length > 0 ? parts.join(" ") : "Less than a day";
};

/**
 * Check if a work experience object has actual input data.
 */
export const hasWorkExperienceData = (exp) => {
  if (!exp || typeof exp !== "object") return false;
  return Boolean(
    (exp.work_experiences && String(exp.work_experiences).trim()) ||
    (exp.institute && String(exp.institute).trim()) ||
    exp.start_date ||
    exp.start ||
    exp.end_date ||
    exp.end
  );
};

/**
 * Validate work experience items and return valid intervals.
 */
export const getValidWorkExperiences = (workExperience = []) => {
  if (!Array.isArray(workExperience)) return [];

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const validItems = [];

  for (const exp of workExperience) {
    if (!hasWorkExperienceData(exp)) continue;

    const startDateStr = exp.start_date || exp.start;
    const endDateStr = exp.end_date || exp.end;

    const start = parseDate(startDateStr);
    if (!start || start > todayDate) continue; // Start date is missing or in the future

    let end = null;
    const isOngoing =
      !endDateStr ||
      typeof endDateStr !== "string" ||
      ["ongoing", "present", "current", "till date", "till now"].includes(
        endDateStr.trim().toLowerCase()
      );

    if (isOngoing) {
      end = todayDate;
    } else {
      end = parseDate(endDateStr);
      if (!end) {
        // If end date text is provided but unparseable, treat as ongoing up to today
        end = todayDate;
      } else {
        if (end < start) continue; // Invalid: end date before start date
        if (end > todayDate) end = todayDate; // Cap future end date to today
      }
    }

    validItems.push({ start, end });
  }

  return validItems;
};

/**
 * Calculate the union (merge) of overlapping or continuous work periods.
 */
export const mergeWorkPeriods = (periods) => {
  if (!periods || periods.length === 0) return [];

  // Sort periods by start date
  const sorted = [...periods].sort((a, b) => a.start.getTime() - b.start.getTime());

  const merged = [{ start: sorted[0].start, end: sorted[0].end }];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const last = merged[merged.length - 1];

    // Overlapping or contiguous (start <= last.end + 1 day)
    if (current.start.getTime() <= last.end.getTime() + DAY_MS) {
      if (current.end.getTime() > last.end.getTime()) {
        last.end = current.end;
      }
    } else {
      merged.push({ start: current.start, end: current.end });
    }
  }

  return merged;
};

/**
 * Calculate combined duration of merged work intervals using 30-day month standard.
 */
export const calculateMergedDuration = (mergedPeriods) => {
  if (!mergedPeriods || mergedPeriods.length === 0) return null;

  let totalMonths = 0;
  let totalDays = 0;

  mergedPeriods.forEach(({ start, end }) => {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      days += 30; // 30-day month standard
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    totalMonths += years * 12 + months;
    totalDays += days;
  });

  // Normalize accumulated 30 days into 1 month
  totalMonths += Math.floor(totalDays / 30);
  totalDays = totalDays % 30;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0 && months === 0 && totalDays === 0) {
    return "Less than a day";
  }

  return formatDuration(years, months, totalDays);
};

/**
 * Calculate experience from joining date using 30-day month standard.
 */
export const getJoiningExperience = (joiningDateStr) => {
  const joiningDate = parseDate(joiningDateStr);
  if (!joiningDate) return null;

  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  if (joiningDate > currentDate) return null; // Future joining date

  let years = currentDate.getFullYear() - joiningDate.getFullYear();
  let months = currentDate.getMonth() - joiningDate.getMonth();
  let days = currentDate.getDate() - joiningDate.getDate();

  if (days < 0) {
    months--;
    days += 30; // 30 days per month rule
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years < 0 || (years === 0 && months === 0 && days === 0)) {
    return "Less than a day";
  }

  return formatDuration(years, months, days);
};

/**
 * Main Experience Calculator function for Faculty.
 *
 * Priority:
 * 1. Calculate union duration of valid work experience records.
 * 2. Fall back to joining date if no valid work experience entries exist.
 * 3. Return null if neither is available/valid.
 */
export const getExperience = (joiningDateStr, workExperience = []) => {
  const validPeriods = getValidWorkExperiences(workExperience);

  if (validPeriods.length > 0) {
    const mergedPeriods = mergeWorkPeriods(validPeriods);
    const result = calculateMergedDuration(mergedPeriods);
    if (result) return result;
  }

  // Fall back to joining date if work experience is empty or invalid
  return getJoiningExperience(joiningDateStr);
};

export default getExperience;
