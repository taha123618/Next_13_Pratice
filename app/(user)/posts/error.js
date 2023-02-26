"use client";

import Link from "next/link";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    alert(`Error on ${error}`);
  }, []);

  return (
    <div>
      <p>404! {error.message}</p>
      <Link href="/">
        <button> Go Home Page</button>
      </Link>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
