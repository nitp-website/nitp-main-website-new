"use client";

import BackDepartment from "../../../components/department/BackDepartment";





export default function page() {
  return (
    <div className=" flex flex-col p-10 max-sm:p-2 text-black">
      <div className="flex flex-col  mb-6">
        <div>
          <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
            SYLLABUS
          </p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-base font-semibold">
            CIVIL ENGINEERING
          </p>
        </div>
        <BackDepartment navigate={"/Department/EE"} />
      </div>

      <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
        {/* UG PROGRAM */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            UG PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li className="mb-4">
              B.Tech Civil Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/1zRdX14UvcKVhHE-hI8Xpk4e1oXRAwEZK/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2022-2024 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1tvqpo-tNTyiej9KaahrENmY9dK9poFOn/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/10zGLobhgGZymsx7sKZN0BkyOag9qyDPH/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* PG PROGRAM  */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            PG PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li className="mb-4">
              M.Tech Water Resources Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/1Iuiz77Rg0dSqca51gDGWG6SVOq_-2-J8/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1b0sepurY3chcBg0wRjsjY2c5YaDtZwvm/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              M.Tech Transportation Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/19f5Y0LacTy1a70y-sqvXXiISJpAaJIPj/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1x2SeebDjSpjvCQGzSR8HJ1bLOCVpJHgR/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              M.Tech Structural Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/1TEkbF3hnugFPINiLaM0LBOt6NU9B9FYE/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1S6DoQ_Ye6znYCFdR7KtPqLDeD5gTTuOi/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              M.Tech Geotechnical Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/1TD5ZfeHPUjE20u1fUhEnion5Ngq0pNkp/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1MM0eK3fnLXEoanYBN70jMCE0kyS5jeHb/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-4">
              M.Tech Environmental Engineering
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/11-0-Li2A4MRNxnT1QGjGmSfEyy9wBOAk/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1XDD1pIO7yrWXKRYLfKjvHwFVfiaJMy7D/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* PHD PROGRAM  */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            PHD PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li className="mb-4">
              Dual Degree (B.Tech + M.Tech)
              <ul className="list-disc list-inside ml-5 mt-2 space-y-2 text-[16px] max-md:text-[14px] max-sm:text-xs">
                <li>
                  <a href="https://drive.google.com/file/d/1eP4CLl1dtNLGSA37SoFKdGDc6z54PkJ0/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2025 admitted students
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1MBNPmDiW9kOPmQsFsZ79r4AQ_VRjscVQ/view?usp=drivesdk" target="_blank" className="hover:text-blue-800 text-blue-600">
                    Effective from 2026-2027 onward
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
