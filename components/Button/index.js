import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-2xl font-medium py-3 px-6 mt-5 rounded-lg ${
          theme === "dark" ? "bg-white text-black hover:bg-green-500" : "bg-black text-white  hover:bg-green-500"
        }  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${classes} p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:bg-green-500 "
          : "hover:bg-green-400" 
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        data.showCursor && "cursor-none"
      }  link`}
    >
      {children}
    </button>
  );
};

export default Button;
