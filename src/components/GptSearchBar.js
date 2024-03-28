import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  
  const langKey = useSelector(store => store.config.lang); 

  return (
    <div className=" pt-[20%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
          type="text"
          className=" p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 mr-4 mt-4 mb-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
