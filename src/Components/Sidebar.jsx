import React from "react";
import { staffPicks } from "../Data/staffPicks";

const Sidebar = () => {

    //List of recommended topics 
  const recommendedTopics = [
    "Data Science",
    "React",
    "Coding",
    "Mental Health",
    "UX",
    "Python",
    "Productivity",
  ];

  return (
    <>
      <aside className="p-8 bg-red-200 sticky top-0">
        <div>
          <h3 className="font-bold">Staff Picks</h3>
          {staffPicks.map((pick) => (
            <ul className="mt-4 space-y-4 text-sm text-gray-700">
            <li>
                <p className="font-semibold">{pick.name}</p>
              <p className="font-semibold">
                {pick.desc}
              </p>
              {/* <span className="text-xs text-gray-500">2d ago</span> */}
              <p>{pick.date}</p>
            </li>

          </ul>
          ))}
        </div>

        <div>
          <h3 className="font-bold">Recommended topics</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {recommendedTopics.map((topic, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[rgb(243,243,244)] rounded-full text-sm cursor-pointer hover:bg-gray-200"
              >
                {topic}
              </span>
            ))}
          </div>
            <a href="#">See more topics</a>

        </div>

        {/* Who to Follow */}
        <div className="mt-8">
          <h3 className="font-bold">Who to follow</h3>
          <ul className="mt-4 space-y-4">
            {["Dr. Derek Austin", "ITNEXT Publication", "Oliver Foster"].map(
              (person, i) => (
                <li key={i} className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-black"></div>

                  <div>
                    <p className="font-semibold">{person}</p>
                    <p className="text-xs text-gray-500">Follow suggestion</p>
                  </div>
        </div>

                  <button className="px-3 py-1 text-sm border rounded-full hover:bg-gray-100">
                    Follow
                  </button>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="text-xs text-gray-500">
          <p className="font-semibold">Reading list</p>
          <p className="mt-1">
            Click the <strong>+</strong> on any story to save it to your reading
            list.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
