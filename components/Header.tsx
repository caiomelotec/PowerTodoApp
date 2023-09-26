"use client";

import React from "react";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

export const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gradient-to-br from-green-300 to-blue-800/5 rounded-b-2xl">
        <div
          className="absolute top-0 left-0 w-full h-4/5 bg-gradient-to-br from-green-500 to-black
        rounded-md filter blur-3xl opacity-50 -z-50"
        ></div>

        <h1 className="pb-10 md:pb-0 font-bold text-2xl ml-4 mr-4">
          Power Todo App
        </h1>

        {/* Seach Box */}
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" className="" hidden>
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Caio Melo" round size="50" color="#0055D1" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5 my-5">
        <p className=" flex items-center text-md  p-5 py-3 pr-5 shadow-xl rounded w-fit bg-white italic max-w-3xl text-black">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is Summarising your taks for the day
        </p>
      </div>
    </header>
  );
};
