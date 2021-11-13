import React, { useEffect, useState } from "react";
import Button from "./Button";

//icons
import { BiSearch } from "react-icons/bi";

const btnList = [
  { engText: "Entry Level", khText: "ការងារមិនត្រូវការបទពិសោធន៍" },
  { engText: "Junior Level", khText: "ការងារត្រូវការបទពិសោធន៍តិចតួច" },
  { engText: "Senior Level", khText: "ការងារត្រូវការបទពិសោធន៍ច្រើន" },
  { engText: "Top Executive Level", khText: "ការងារផ្នែកដឹកនាំជាន់ខ្ពស់" },
];

const SearchButton = ({ engText, khText }) => (
  <div className="transition-all w-full flex flex-col justify-center items-center p-2 py-4 sm:p-4 md:p-6 md:py-4 lg:p-4 lg:px-2 bg-purple-600 hover:bg-purple-700  lg:hover:scale-105 text-white text-sm sm:text-base rounded-md cursor-pointer">
    <p lang="kh">{khText}</p>
    <p lang="eng">{engText}</p>
  </div>
);

const SearchbarButton = () => {
  return <Button className="bg-purple-600 rounded-md lg:px-8 hover:scale-105">Search</Button>;
};

const Searchbar = ({ buttonPos }) => {
  return (
    <div className="flex w-full gap-2 lg:gap-4">
      <div className="flex flex-1 items-center bg-white relative rounded-md">
        <BiSearch className="absolute right-2 cursor-pointer transition-all hover:scale-125 hover:text-purple-500" fontSize={24} />
        <input
          placeholder="Search Keywords..."
          className="w-full outline-none py-2 pl-4 pr-10 ring-0 focus-within:ring-2 rounded-md ring-purple-500 border border-purple-300"
        />
      </div>
      {buttonPos === "top" && <SearchbarButton />}
    </div>
  );
};

const SearchComponent = () => {
  const [buttonPos, setButtonPos] = useState("top");
  useEffect(() => {
    const changeButtonPos = () => (window.innerWidth >= 768 ? setButtonPos("top") : setButtonPos("bottom"));
    window.addEventListener("resize", changeButtonPos);
    return () => window.removeEventListener("resize", changeButtonPos);
  }, []);
  return (
    <div className="box" lang="eng">
      <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl flex flex-col gap-4 md:gap-6 lg:gap-4 p-4 md:p-8 lg:p-4 xl:p-8">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {btnList.map((btn) => (
            <SearchButton khText={btn.khText} engText={btn.engText} key={btn.engText} />
          ))}
        </div>
        <div>
          <Searchbar buttonPos={buttonPos} />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
