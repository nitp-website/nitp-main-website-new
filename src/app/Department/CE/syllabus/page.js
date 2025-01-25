"use client";

import BackDepartment from "../../../components/department/BackDepartment";
import { useState } from "react";

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
            <li>
              <a href="https://drive.google.com/file/d/1TTblz48XLiUYs5JRHlqa37VWqpyWXb_w/view?usp=drivesdk">
                B.Tech Civil Engineering (Effective from 2022-2023 onward)
              </a>
            </li>
          </ul>
        </div>
        {/* PG PROGRAM  */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            PG PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li>
              <a href="https://drive.google.com/file/d/16XTey9OYvtOJFERcuBfNXlzZU_NskNEg/view?usp=drivesdk">
                M.Tech Water Resources Engineering (Effective from 2021-2022
                onward)
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1fXR4RROFC2UQo461jiNn7--ZQJoN384i/view?usp=drivesdk">
                M.Tech Transportation Engineering (Effective from 2021-2022
                onward)
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1q8Wndh5pM4EcILaTqfafpnag20XqOtS6/view?usp=drivesdk">
                M.Tech Structural Engineering (Effective from 2021-2022 onward)
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1-r7SS3hmSbMl52e2VIqJnti8yPlLWiLa/view?usp=drivesdk">
                M.Tech Geotechnical Engineering (Effective from 2021-2022
                onward)
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1X57Lq9nCBjK7Db8m990hYBuj_81tRfkE/view?usp=drivesdk">
                M.Tech Environmental Engineering (Effective from 2021-2022
                onward)
              </a>
            </li>
          </ul>
        </div>
        {/* PHD PROGRAM  */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            PHD PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li>
              <a href="https://drive.google.com/file/d/1jsKFA6qu4OGyIJSAf8Bp6Ow8Wz2houq0/view?usp=drivesdk">
                Dual Degree (B.Tech (Civil Engineering) + M.Tech (Construction
                Technology Management)) Effective from 2022-2023 onward
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
