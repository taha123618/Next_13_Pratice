import Link from "next/link";
import React, { Suspense } from "react";
import Image from "next/image";
import show from "../public/show.jpeg";

function page() {
  return (
    <>
      <Suspense fallback={<h1> Loading the Home Page................</h1>}>
        <h1> Next 13</h1>
        <Image src={show} width={500} height={500} alt="Images" />
        <br />
        <Link href="/posts">
          <button>Posts</button>
        </Link>
      </Suspense>
    </>
  );
}

export default page;
