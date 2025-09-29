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

  const follow = [
    {
    id: 1,
    name: "Dr. Derek Austin",
    info: "AI Context Engineer | teach LLMS to think Full...",
  },
  {
    id: 2,
    name: "ITNEXT",
    info: "AI Context Engineer | teach LLMS to think Full...",
  },
  {
    id: 3,
    name: "Oliver Foster",
    info: "Primarily proficient in the Java Programming",
  },
]

  return (
    <>
      <aside  style={{ boxShadow: '-4px 0 8px -4px rgba(0,0,0,0.07)' }} className="p-8 shadow-sm sticky top-0">
        <div>
          <h3 className="font-bold">Staff Picks</h3>
          {staffPicks.map((pick) => (
            <ul className="mt-4 space-y-4 text-sm">
            <li>
            <div className="flex items-center mb-3 space-x-2">

                    <div className="w-6 h-6 rounded-full bg-black"></div>

                <small className="font-semibold">{pick.name}</small>

            </div>
              <p className="font-bold text-[16px]">
                {pick.desc}
              </p>
              {/* <span className="text-xs text-gray-500">2d ago</span> */}
              <p className="mt-3">{pick.date}</p>
            </li>

          </ul>
          ))}
          <p className="mt-4">See the full list</p>
        </div>

        <div>
          <h3 className="mt-10 font-bold">Recommended topics</h3>
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
            <p className="mt-4">See more topics</p>

        </div>

        {/* Who to Follow */}
        <div className="mt-10">
          <h3 className="font-bold">Who to follow</h3>
          <ul className="mt-4 space-y-4">
            {follow.map((person, i) => (
                <li key={i} className="flex items-center justify-between">
        <div className="flex space-x-3">
            <div className="w-8 h-8 rounded-full bg-black"></div>

                  <div>
                    <p className="font-bold">{person.name}</p>
                    <small>{person.info}</small>
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

                        <p className="mt-4">See more suggestions</p>


        </div>

        <div className="text-xs text-gray-500">
          <p className="font-semibold mt-10">Reading list</p>
          <p className="mt-1 mb-6">
            Click the <strong>+</strong> on any story to easily add it to your reading ;ist or a custom list that ou can share
            list.
          </p>
          <small>Help status about Careers Press Blog. Privacy Rules Terms Text to Speech</small>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
