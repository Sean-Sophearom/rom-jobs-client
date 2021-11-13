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

const selectArray = [
  {
    name: "industry",
    options: [
      "Industry Unlimited",
      "Banking & Finance",
      "Information Technology",
      "Telecommunication",
      "Manufacturings",
      "Food and Beverages",
      "Real Estate",
      "Entertainment",
      "Automotive",
      "Insurance",
    ],
  },
  {
    name: "category",
    options: [
      "Category Unlimited",
      "Backend Developer",
      "Manager",
      "Web Development",
      "Network Engineering",
      "System Development",
      "Mobile App Development",
      "Software Development",
      "System Administration",
      "Sale Consultant",
      "Project Management",
      "ERP Development",
      "Quality Assurance",
      "Design",
      "Business Analysis",
      "Data Science",
      "Communication",
      "Artifical Intelligence",
      "Digital Marketing",
    ],
  },
  { name: "type", options: ["Type Unlimited", ",Full Time", "Part Time"] },
  { name: "location", options: ["Locations Unlimited", "Phnom Penh"] },
];

const SearchButton = ({ engText, khText }) => (
  <div className="transition-all w-full flex flex-col justify-center items-center p-2 py-4 sm:p-4 md:p-6 md:py-4 lg:p-4 lg:px-2 bg-purple-600 hover:bg-purple-700  lg:hover:scale-105 text-white text-sm sm:text-base rounded-md cursor-pointer">
    <p lang="kh">{khText}</p>
    <p lang="eng">{engText}</p>
  </div>
);

const SearchbarButton = () => {
  return <Button className="bg-purple-600 rounded-md py-2 lg:px-8 hover:scale-105">Search</Button>;
};

const Searchbar = ({ buttonPos }) => {
  return (
    <div className="flex w-full gap-2 lg:gap-4">
      <div className="flex flex-1 items-center bg-white relative rounded-md">
        <BiSearch className="absolute right-2 cursor-pointer transition-all hover:scale-125 hover:text-purple-500" fontSize={24} />
        <input
          placeholder="Search Keywords..."
          className="duration-200 transition-all w-full outline-none py-2 pl-4 pr-10 ring-0 focus-within:ring-2 ring-purple-500 rounded-md border border-purple-300"
        />
      </div>
      {buttonPos === "top" && <SearchbarButton />}
    </div>
  );
};

const SelectComponent = ({ value, onChange, name, options, className }) => {
  return (
    <select name={name} onChange={onChange} value={value} className={className}>
      {options.map((option) => (
        <option value={option.toLowerCase()} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const SearchComponent = () => {
  const [buttonPos, setButtonPos] = useState("top");
  const [selectValues, setSelectValues] = useState({ industry: "", category: "", type: "", location: "" });
  useEffect(() => {
    const changeButtonPos = () => (window.innerWidth >= 1024 ? setButtonPos("top") : setButtonPos("bottom"));
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
        <div className="flex flex-col gap-4 ">
          {selectArray.map((select) => (
            <SelectComponent
              className="transition-all duration-200 outline-none p-2 md:p-3 lg:p-4 border border-purple-300 rounded-md ring-0 focus-within:ring-2 ring-purple-500"
              value={selectValues[select.name]}
              options={select.options}
              name={select.name}
              key={select.name}
              onChange={(e) => setSelectValues({ ...selectValues, [e.target.name]: e.target.value })}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">{buttonPos === "bottom" && <SearchbarButton className="" />}</div>
      </div>
    </div>
  );
};

export default SearchComponent;
