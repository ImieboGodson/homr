"use client";

const Search = () => {
  return (
    <div
      onClick={() => {}}
      className="w-fit p-2 flex flex-row justify-between items-center text-sm rounded-md bg-white border shadow-md hover:shadow-lg cursor-pointer transition"
    >
      <div className="py-2 px-3.5 border-r-[1px] font-semibold">Location</div>
      <div className="py-2 px-4 border-r-[1px] font-semibold">Type</div>
      <div className="hidden md:block py-2 px-3.5 font-semibold">Bedrooms</div>
      <div className="ml-2 px-3.5 py-2 rounded-md bg-black text-white cursor-pointer">
        Search
      </div>
    </div>
  );
};

export default Search;
