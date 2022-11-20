import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

// for 404
export const dynamicParams = true;

// get static paths

// this for static
const fetchPost = async ({ id, postId }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, //ISR
    },

    //   for dynamic cache disable
    // cache: "no-store",
  });
  const posts = await res.json();
  return posts;
};

// get server side props
const post = async ({ params }) => {
  const post = await fetchPost({ id: params.id });

  // not found page
  if (!post.id) return notFound;

  return (
    <>
      <ul>
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <Link href="/">
          <button> Go Back Home</button>
        </Link>
      </ul>
    </>
  );
};

export default post;

// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const posts = await res.json();

//   // for demo just load the api only 10 time (Code with papa) work
//   const trimPosts = posts.splice(0, 10);

//   return trimPosts.map((post) => ({
//     id: post.id.toString,
//   }));
// }
