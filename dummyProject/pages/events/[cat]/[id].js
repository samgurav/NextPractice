import React from "react";
import Image from "next/image";
function SingleEventPage({ data }) {
  console.log(data);

  return (
    <div>
      {[data].map((ev) => (
        <>
          <Image src={ev.image} width={700} height={500} alt={ev.title} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </>
      ))}
    </div>
  );
}

export default SingleEventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json");
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: { data: eventData },
  };
}
