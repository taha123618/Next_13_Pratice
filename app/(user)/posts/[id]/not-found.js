import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1> 404 Error</h1>
      <Link href="/">
        <button> Go Back</button>
      </Link>
    </>
  );
}
