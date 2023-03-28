import React from "react";
import Image from "next/image";
function PageNotFound() {
  return (
    <div>
      <center>
        <Image
          src="https://www.shutterstock.com/image-vector/404-error-page-not-found-260nw-2013538025.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <h1>404 not found</h1>
      </center>
    </div>
  );
}

export default PageNotFound;
