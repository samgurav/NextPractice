import Link from "next/link";
import React from "react";

function Blog({ page = 100 }) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <Link href={`/blog/${1}`} replace>
        {" "}
        <h1>blog 1</h1>
      </Link>
      <Link href={`/blog/${2}`}>
        {" "}
        <h1>blog 2</h1>
      </Link>
      <Link href={`/blog/${3}`}>
        {" "}
        <h1>blog 3</h1>
      </Link>
      <Link href={`/blog/${4}`}>
        {" "}
        <h1>blog 4</h1>
      </Link>
    </div>
  );
}

export default Blog;
