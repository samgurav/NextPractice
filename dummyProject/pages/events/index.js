import React from "react";
import Image from "next/image";
import Link from "next/link";

function EventPage({ data }) {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data?.map((ev) => (
          <Link passHref className="card" href={`/events/${ev.id}`} key={ev.id}>
            <div className="image">
              <Image width={400} height={300} alt={ev.title} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
