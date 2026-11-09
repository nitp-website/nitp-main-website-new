export const metadata = {
  title: 'Admissions | National Institute of Technology Patna',
  description: 'Admission details for B.Tech, M.Tech, MCA, PhD, and Study in India programs at NIT Patna. Find information about JoSAA, DASA, CCMT, and other admission portals.',
  keywords: 'NIT Patna, NITP, admissions, B.Tech admissions, M.Tech admissions, MCA admissions, PhD admissions, JoSAA, DASA, CCMT, NIMCET, Study in India, engineering college',
  openGraph: {
    title: 'Admissions | National Institute of Technology Patna',
    description: 'Admission information for various programs at NIT Patna',
    images: ['/MainBuilding.jpg'],
  },
};

export default function AdmissionLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
