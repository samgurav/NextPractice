import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
Link;
function HomgPage() {
  const router = useRouter();
  const handler = () => {
    alert("placing your order");
    router.push("/blog");
  };
  return (
    <div>
      <h1> Home Page</h1>
      <Link href={"/blog"} passHref>
        Blog
      </Link>
      <div>
        {" "}
        <button onClick={handler}>Place Order</button>
      </div>
    </div>
  );
}

export default HomgPage;
