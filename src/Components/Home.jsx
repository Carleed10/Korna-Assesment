import React from "react";
import { posts } from "../Data/posts";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-[purple] py-4">
        <main className="w-[80%] bg-[green]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="mb-4 py-6 border-b border-[rgb(244,244,244)] flex"
            >
              <div className="w-[70%] bg-[pink]">
                <p>{post.category}</p>
                <h2 className="text-[28px] font-bold">{post.title}</h2>
                <p className="text-[17px]">{post.desc}</p>
              </div>
              <div className="w-[30%] bg-[yellow] flex justify-center items-center">
                <img
                  src={`../Images/${post.img}`}
                  alt="Error loading image"
                  className="object-cover w-[200px] h-[150px]"
                />
                
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
