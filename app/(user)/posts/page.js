// "use client";

// import React from "react";

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
//   return posts;
// };
// const getPosts = async () => {
//   const postsData = await fetchPosts();
//   console.log("result", postsData);
//   return postsData;
// };

// const post = ({ postsData }) => {
//   console.log("postsData", postsData);
//   // useEffect(() => {
//   //   getPosts();
//   // }, []);

//   return (
//     <>
//       <h1>posts</h1>
//       {postsData.map((post) => {
//         <div key={post.id}>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//         </div>;
//       })}
//     </>
//   );
// };

// export default post;

// Server Side Code
import React from "react";
import Link from "next/link";

// get server side props
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
};

const posts = async () => {
  const postsData = await fetchPosts();

  if (postsData.length < 0) {
    throw Error("I am Down ");
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {postsData.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link href={`/posts/${post.id}`}>
                <button>Go to Page</button>
              </Link>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default posts;
