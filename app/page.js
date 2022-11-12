import Link from "next/link";
import React from "react";
import Image from "next/image";
import show from "../public/show.jpeg";

function page() {
  return (
    <>
      <h1> Next 13</h1>
      <Image src={show} width={500} height={500} alt="Images" />
      <br />
      <Link href="/posts">
        <button>Posts</button>
      </Link>
    </>
  );
}

export default page;
