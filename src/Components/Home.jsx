import React from "react";
import { posts } from "../Data/posts";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-white px-12 py-4">
        <main>
          {posts.map((post) => (
            <div key={post.id} className="mb-4 py-6 border">
              <p>{post.category}</p>
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.desc}</p>

            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
