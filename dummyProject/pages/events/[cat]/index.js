import React from "react";
import Image from "next/image";
import Link from "next/link";
function EventPerCityPage({ data, pageName }) {
  return (
    <div>
      <div>
        <h1>Events in {pageName}</h1>
        <div>
          {data.map((ev) => (
            <Link
              key={ev.id}
              href={`/events/${ev.city}/${ev.id}`}
              // passHref={true}
            >
              <Image
                width={300}
                height={400}
                alt={`${ev.title}`}
                src={`${ev.image}`}
              />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          ))}
        </div>
        {data?.map((ev) => (
          <>
            <Link href={`/events/${ev.city}/${ev.id}`} key={ev.id} passHref>
              Event 1
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default EventPerCityPage;
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  // console.log(id);
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);
  // console.log(data);
  return { props: { data, pageName: id } };
}
