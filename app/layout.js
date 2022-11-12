import "./globals.css";
import NavBar from "./Compontent/Navbar";
import Footer from "./Compontent/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
