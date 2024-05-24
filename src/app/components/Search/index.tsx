import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="flex justify-between items-center w-24h-14 pr-4 bg-gray-50 rounded-xl shadow-md  cursor-pointer">
        <input
          className="pr-1 pl-3 pt-3 pb-3 bg-transparent text-black
            focus:outline-none text-lg"
          placeholder="Search"
        />
        <IoSearch className="w-5 h-5 text-black" />
      </div>
    </>
  );
};

export default Search;
