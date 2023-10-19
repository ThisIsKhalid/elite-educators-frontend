import React from 'react'
import SectionTitle from '../SectionTitle';
import EventCard from '../EventCard';

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
    </div>
  );
}

export default UpcomingEvents