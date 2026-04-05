import React, { useState } from "react";

export default function UserData() {
  const [showAll, setShowAll] = useState(false);

 
  const users = [
    {
      id: 1,
      name: "Machel Plidium",
      username: "@machel",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      message1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      name: "Adison Dias",
      username: "@adison",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      message1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message2:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      id: 3,
      name: "Zain Franci",
      username: "@zain",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
      message1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 4,
      name: "Wilson Bator",
      username: "@wilson",
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      message1:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      message2:
        "Remaining essentially unchanged, it was popularised in the 1960s.",
    },
    {
      id: 5,
      name: "Abram Lipshutz",
      username: "@abram",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      message1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      name: "Cristofer Carder",
      username: "@cristofer",
      avatar: "https://randomuser.me/api/portraits/men/20.jpg",
      message1:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      message2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 7,
      name: "Roger George",
      username: "@roger",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      message1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 8,
      name: "Jaylon Press",
      username: "@jaylon",
      avatar: "https://randomuser.me/api/portraits/men/25.jpg",
      message1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      message2:
        "Remaining essentially unchanged, it was popularised in the 1960s.",
    },
    {
      id: 9,
      name: "Dulce Rosser",
      username: "@dulce",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      message1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 10,
      name: "Sara Nikson",
      username: "@sara",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      message1:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      message2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 11,
      name: "Ricky Dan",
      username: "@ricky",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      message1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 12,
      name: "Hailey Warner",
      username: "@hailey",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      message1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      message2:
        "Remaining essentially unchanged, it was popularised in the 1960s.",
    },
    {
      id: 13,
      name: "Dwayne Rhodes",
      username: "@dwayne",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      message1:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      id: 14,
      name: "Lara Stone",
      username: "@lara",
      avatar: "https://randomuser.me/api/portraits/women/36.jpg",
      message1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 15,
      name: "Noah Jensen",
      username: "@noah",
      avatar: "https://randomuser.me/api/portraits/men/37.jpg",
      message1:
        "It has survived not only five centuries, but also the leap into electronic typesetting.",
      message2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
 const visibleUsers = showAll ? users : users.slice(0, 6);
  return (
    <section className="bg-[#0a0118] min-h-screen py-10 text-white font-inter">
      <div className="w-full min-h-screen bg-[#0b001a] py-12 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-5">
          {visibleUsers.map((user) => (
            <div
              key={user.id}
              className="break-inside-avoid bg-gradient-to-br from-[#16002a] to-[#0d001b] p-6 rounded-2xl border border-[#2b1a42] shadow-lg inline-block w-full py-13"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full border border-purple-600"
                />
                <div>
                  <h3 className="font-semibold text-base text-white">{user.name}</h3>
                  <p className="text-sm text-gray-400">{user.username}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {user.message1}
                </p>
                {user.message2 && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {user.message2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

          <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
