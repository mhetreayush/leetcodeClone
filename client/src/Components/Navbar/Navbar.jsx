import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  const activeClass = "font-semibold bg-gray-200 text-black rounded-t-md";
  const mainClass = "px-4  hover:text-black";
  const inactiveClass = "font-extralight text-gray-400";
  return (
    <div className="flex w-full justify-between p-4 items-center ">
      <div>Leetcode Clone</div>
      <div className="flex  bg-gray-800 pt-2 px-1">
        {["Home", "Practice"].map((option) => {
          //   return <Link to="/">{option}</Link>;
          return (
            <button
              className={`${mainClass} ${
                option.toLowerCase() === active ? activeClass : inactiveClass
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div>
        <button className="bg-red-400 px-4 py-2 text-white rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
