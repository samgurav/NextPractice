import Link from "next/link";
import React from "react";
import Image from "next/image";

function HomePage({ data }) {
  return (
    <div>
      <main>
        {data?.data.map((ev) => (
          <Link passHref className="card" href={`/events/${ev.id}`} key={ev.id}>
            <div className="image">
              <Image width={400} height={400} alt={ev.title} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
