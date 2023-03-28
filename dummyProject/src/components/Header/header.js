import Link from "next/link";
import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div>
      <header>
        <div className="headtag">
          <Image
            alt="logo"
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
            }
            width={50}
            height={50}
          />
          <nav>
            <img />
            <Link href="/" passHref>
              Events
            </Link>
            <Link href="events" passHref>
              Home
            </Link>
            <Link href="/about-us" passHref>
              About Us
            </Link>
          </nav>
        </div>
        <h1>Hello world set ut percpiciatis unde omnis</h1>
      </header>
    </div>
  );
}

export default Header;
