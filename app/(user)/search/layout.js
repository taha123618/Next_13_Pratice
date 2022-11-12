import React from "react";

export default function RootLayout({ children }) {
  return (
    <main>
      <h1> Search </h1>
      <div>{children}</div>
    </main>
  );
}
