"use client";

import { useState } from "react";
import { LuSettings2, LuSearch, LuMap } from "react-icons/lu";
import { TbSmartHome } from "react-icons/tb";

const HeroSearch = () => {
  const [searchType, setSearchType] = useState("shortlet");

  let bodyContent = (
    <>
      <div className="w-[8rem] py-3 px-3 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
        <LuMap size={16} />
        Location
      </div>
      <div className="w-[8rem] py-3 px-3 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
        <TbSmartHome size={16} />
        Duration
      </div>
      <div className="w-[8rem] py-3 px-3 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
        <TbSmartHome size={16} />
        Guests
      </div>
    </>
  );

  if (searchType === "rent") {
    bodyContent = (
      <>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <LuMap size={16} />
          Location
        </div>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <TbSmartHome size={16} />
          Type
        </div>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <TbSmartHome size={16} />
          Bedrooms
        </div>
      </>
    );
  }

  if (searchType === "sale") {
    bodyContent = (
      <>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <LuMap size={16} />
          Location
        </div>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <TbSmartHome size={16} />
          Type
        </div>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <TbSmartHome size={16} />
          Bedrooms
        </div>
        <div className="w-[7rem] py-3 px-2 flex flex-row gap-2 justify-start items-center text-black text-sm font-semibold rounded-lg bg-gray-100">
          <TbSmartHome size={16} />
          Price
        </div>
      </>
    );
  }
  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-fit px-5 flex flex-row items-center justify-center bg-white rounded-t-lg border-b border-[#ef626218]">
        <div
          onClick={() => setSearchType("rent")}
          className={`${
            searchType === "rent"
              ? "text-black  border-black"
              : "text-gray-500 border-white"
          } border-b-2 p-3 text-sm font-bold cursor-pointer`}
        >
          For Rent
        </div>
        <div
          onClick={() => setSearchType("sale")}
          className={`${
            searchType === "sale"
              ? "text-black  border-black"
              : "text-gray-500 border-white"
          } border-b-2 p-3 text-sm font-bold cursor-pointer`}
        >
          For Sale
        </div>
        <div
          onClick={() => setSearchType("shortlet")}
          className={`${
            searchType === "shortlet"
              ? "text-black  border-black"
              : "text-gray-500 border-white"
          } border-b-2 p-3 text-sm font-bold cursor-pointer`}
        >
          Short Let
        </div>
      </div>
      <div className="w-fit p-4 flex flex-row gap-4 items-center bg-white rounded-tr-lg rounded-b-lg hover:shadow-md cursor-pointer transition">
        <div className="flex flex-row gap-3 items-center">{bodyContent}</div>
        {/* <div className=" py-3 px-2 flex flex-row gap-2 items-center justify-start text-black text-sm font-semibold rounded-lg">
          <LuSettings2 size={16} />
          Filters
        </div> */}
        <div className=" py-3 px-6 flex flex-row gap-2 items-center justify-start text-sm font-semibold text-white rounded-lg bg-black">
          Search
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
