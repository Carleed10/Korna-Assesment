import React from "react";
import { posts } from "../Data/posts";
import { TbMessageCircleFilled } from "react-icons/tb";
import { MdWavingHand } from "react-icons/md";
import { LuSparkle } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center py-4">
        <main className="w-[90%] sm:w-[80%]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="py-7 border-b border-[rgb(244,244,244)] flex"
            >
              <div className="w-[65%]">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[rgba(252, 252, 7, 1)]"></div>

                  <p className="text-[10px] sm:text-[15px]">{post.category}</p>
                </div>
                <h1 className="text-[15px] sm:text-[28px] mt-3 font-extrabold">
                  {post.title}
                </h1>
                <p className="text-[10px] sm:text-[17px] text-[rgb(155,156,147)]">
                  {post.desc}
                </p>

                <div className="w-full text-[rgb(155,156,147)] flex justify-between items-center mt-4">
                  <div className="flex space-x-10">
                    <small className="flex items-center text-[7px] sm:text-[10px] gap-4">
                      <LuSparkle color="orange" size={18} /> {post.time}
                    </small>
                    <small className="flex items-center gap-2">
                      <MdWavingHand size={18} /> {post.views}
                    </small>
                    <small className="flex items-center gap-2">
                      <TbMessageCircleFilled size={18} /> {post.comments}
                    </small>
                  </div>

                  <div className="flex items-center gap-4 text-2xl">
                    <IoIosRemoveCircleOutline />
                    <MdOutlineBookmarkAdd />
                    <BsThreeDots />
                  </div>
                </div>
              </div>
              <div className="w-[35%] flex justify-center items-center">
                <img
                  src={post.img}
                  alt="Error loading image"
                  className="object-cover w-[80px] h-[50px] sm:w-[200px] sm:h-[150px]"
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
