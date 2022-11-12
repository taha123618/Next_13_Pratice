"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  //   useEffect(() => {
  //     // Log the error to an error reporting service
  //     console.error(error);
  //   }, [error]);

  return (
    <div>
      <p>404! {error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
