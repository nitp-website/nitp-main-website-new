'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const MIN_SCALE = 0.8;
const MAX_SCALE = 1.7;
const STEP = 0.1;
const DEFAULT_SCALE = 1;
const STORAGE_KEY = 'nitp-accessibility-font-scale';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontScale, setFontScale] = useState(DEFAULT_SCALE);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Load saved font scale on mount and apply it
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseFloat(saved);
        if (!isNaN(parsed) && parsed >= MIN_SCALE && parsed <= MAX_SCALE) {
          setFontScale(parsed);
          document.documentElement.style.setProperty('--a11y-font-scale', parsed);
        }
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  // Apply font scale globally whenever it changes
  const applyScale = useCallback((scaleFn) => {
    setFontScale((prev) => {
      const nextRaw = typeof scaleFn === 'function' ? scaleFn(prev) : scaleFn;
      const clamped = Math.round(Math.max(MIN_SCALE, Math.min(MAX_SCALE, nextRaw)) * 10) / 10;
      document.documentElement.style.setProperty('--a11y-font-scale', clamped);
      try {
        localStorage.setItem(STORAGE_KEY, clamped.toString());
      } catch {
        // localStorage unavailable
      }
      return clamped;
    });
  }, []);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const scalePercent = Math.round(fontScale * 100);
  const isMin = fontScale <= MIN_SCALE;
  const isMax = fontScale >= MAX_SCALE;
  const isDefault = fontScale === DEFAULT_SCALE;

  return (
    <div
      id="accessibility-widget"
      className="fixed top-[100px] right-3 z-[999999] font-sans"
    >
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        id="accessibility-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Accessibility Options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        title="Accessibility Options"
        className="a11y-toggle-btn w-[38px] h-[38px] rounded-[10px] border-none text-white cursor-pointer flex items-center justify-center transition-all duration-200 ease-in-out outline-none"
      >
        {/* Accessibility SVG icon – universal accessibility symbol */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Head */}
          <circle cx="12" cy="4.5" r="2" fill="white" />
          {/* Body */}
          <path
            d="M12 8C12 8 8.5 9 6 9.5C5.45 9.62 5 10.1 5 10.65C5 11.35 5.6 11.85 6.28 11.7C7.5 11.45 9.5 11 10.5 10.75V14L8.35 20.15C8.1 20.85 8.5 21.6 9.2 21.85C9.9 22.1 10.65 21.7 10.9 21L12 17.5L13.1 21C13.35 21.7 14.1 22.1 14.8 21.85C15.5 21.6 15.9 20.85 15.65 20.15L13.5 14V10.75C14.5 11 16.5 11.45 17.72 11.7C18.4 11.85 19 11.35 19 10.65C19 10.1 18.55 9.62 18 9.5C15.5 9 12 8 12 8Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          id="accessibility-panel"
          role="region"
          aria-label="Font Size Controls"
          className="a11y-panel absolute top-[46px] right-0 w-[200px] bg-white rounded-xl border overflow-hidden"
        >
          {/* Header */}
          <div className="a11y-panel-header px-3.5 py-2.5 flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="4.5" r="2" fill="white" />
              <path
                d="M12 8C12 8 8.5 9 6 9.5C5.45 9.62 5 10.1 5 10.65C5 11.35 5.6 11.85 6.28 11.7C7.5 11.45 9.5 11 10.5 10.75V14L8.35 20.15C8.1 20.85 8.5 21.6 9.2 21.85C9.9 22.1 10.65 21.7 10.9 21L12 17.5L13.1 21C13.35 21.7 14.1 22.1 14.8 21.85C15.5 21.6 15.9 20.85 15.65 20.15L13.5 14V10.75C14.5 11 16.5 11.45 17.72 11.7C18.4 11.85 19 11.35 19 10.65C19 10.1 18.55 9.62 18 9.5C15.5 9 12 8 12 8Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-xs font-semibold tracking-wide">
              Accessibility
            </span>
          </div>

          {/* Font Size Section */}
          <div className="px-3.5 py-3">
            <div className="text-[11px] font-semibold text-gray-500 mb-2 uppercase tracking-wider">
              Font Size
            </div>

            {/* Current scale display */}
            <div
              className={`text-center mb-2.5 text-[13px] font-bold transition-colors duration-200 ${
                isDefault ? 'text-gray-400' : 'text-[#c0392b]'
              }`}
            >
              {scalePercent}%
            </div>

            {/* Buttons row */}
            <div className="flex gap-1.5 justify-center">
              {/* Decrease */}
              <button
                id="accessibility-decrease-font"
                onClick={() => applyScale((prev) => prev - STEP)}
                disabled={isMin}
                aria-label="Decrease font size"
                title="Decrease font size"
                className={`a11y-ctrl-btn flex-1 h-[34px] rounded-lg text-base font-bold flex items-center justify-center transition-all duration-150 ease-in-out ${
                  isMin
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 cursor-pointer'
                }`}
              >
                <span className="text-[11px] font-bold">A</span>
                <svg width="10" height="10" viewBox="0 0 10 10" className="ml-px">
                  <line x1="2" y1="5" x2="8" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              {/* Reset */}
              <button
                id="accessibility-reset-font"
                onClick={() => applyScale(DEFAULT_SCALE)}
                disabled={isDefault}
                aria-label="Reset font size"
                title="Reset font size"
                className={`a11y-ctrl-btn flex-1 h-[34px] rounded-lg text-[11px] font-semibold flex items-center justify-center gap-0.5 transition-all duration-150 ease-in-out ${
                  isDefault
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 cursor-pointer'
                }`}
              >
                {/* Reset icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
              </button>

              {/* Increase */}
              <button
                id="accessibility-increase-font"
                onClick={() => applyScale((prev) => prev + STEP)}
                disabled={isMax}
                aria-label="Increase font size"
                title="Increase font size"
                className={`a11y-ctrl-btn flex-1 h-[34px] rounded-lg text-base font-bold flex items-center justify-center transition-all duration-150 ease-in-out ${
                  isMax
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-700 cursor-pointer'
                }`}
              >
                <span className="text-[15px] font-bold">A</span>
                <svg width="10" height="10" viewBox="0 0 10 10" className="ml-px">
                  <line x1="2" y1="5" x2="8" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="5" y1="2" x2="5" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
