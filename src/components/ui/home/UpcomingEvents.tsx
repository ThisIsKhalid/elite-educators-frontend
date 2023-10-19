import React from 'react'
import SectionTitle from '../SectionTitle';
import EventCard from '../EventCard';
import Link from 'next/link';
import { BiSolidRightArrow } from 'react-icons/bi';

const UpcomingEvents = () => {
  return (
    <div className="mb-20 px-5">
      <SectionTitle
        title="Join our upcoming event"
        subtitle="Join our upcoming event and get a chance to meet with our tutors"
      />
      <div className="mt-5 flex flex-col gap-5">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <div className="flex items-center justify-center mt-5">
        <Link href="/events">
          <button className="btn bg-gray-800 text-white btn-sm hover:bg-cBlue w-40 rounded-full flex items-center justify-center">
            <span className="text-cOrange mr-3">
              <BiSolidRightArrow />
            </span>{" "}
            Go to Events
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UpcomingEvents