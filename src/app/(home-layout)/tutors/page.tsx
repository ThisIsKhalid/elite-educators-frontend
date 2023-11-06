'use client'

import CourseBanner from '@/components/ui/Banner';
import BeTutorModal from '@/components/ui/BeTutorModal';
import React, { useState } from 'react'
import { BiSolidRightArrow } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

const TutorsPage = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div className="">
      <CourseBanner title="Tutors" />

      <div className="bg-gray-700 w-full py-3 flex items-center justify-between gap-2 px-5">
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="name, subject"
            className="input input-sm md:input-md input-bordered lg:w-72 w-full md:pl-10 pl-6"
          />
          <BsSearch className="absolute top-1/2 md:left-4 left-2 -translate-y-1/2" />
        </div>
        <div>
          <button
            onClick={() => {
              const dialog = document.getElementById(
                "be_tutor_modal"
              ) as HTMLDialogElement;
              if (dialog) {
                dialog.showModal();
              }
            }}
            className="btn btn-sm w-32 rounded-full flex items-center justify-center"
          >
            <span className="text-cOrange">
              <BiSolidRightArrow />
            </span>{" "}
            Be A Tutor
          </button>
        </div>
      </div>

      {/* modal */}
      <BeTutorModal />
      {/* modal end */}
    </div>
  );
}

export default TutorsPage