import React, { useEffect, useState } from "react";
import Button from "../../components/Button";

//icons
import { BiSearch } from "react-icons/bi";
import { chooseParam } from "../../redux/slices/job";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const btnArray = [
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
      "Banking And Finance",
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
  { name: "type", options: ["Type Unlimited", "Full Time", "Part Time"] },
  { name: "location", options: ["Locations Unlimited", "Phnom Penh"] },
];

const SearchButton = ({ engText, khText }) => {
  const dispatch = useDispatch();
  const choose = () => {
    const text = engText.split(" ").slice(0, -1).join(" ");
    dispatch(chooseParam({ level: text, industry: "", category: "", type: "" }));
  };
  return (
    <Link
      to="/jobs"
      onClick={choose}
      className="transition-all w-full flex flex-col justify-center items-center p-2 py-4 sm:p-4 md:p-6 md:py-4 lg:p-4 lg:px-2 bg-purple-600 hover:bg-purple-700  lg:hover:scale-105 text-white text-sm sm:text-base rounded-md cursor-pointer"
    >
      <p lang="kh">{khText}</p>
      <p lang="eng">{engText}</p>
    </Link>
  );
};

const SearchbarButton = ({ submit }) => {
  return (
    <Button onClick={submit} className="bg-purple-600 rounded-md py-2 lg:px-8 hover:scale-105">
      <Link to="/jobs">Search</Link>
    </Button>
  );
};

const Searchbar = ({ buttonPos, submit, input, onChange }) => {
  return (
    <div className="flex w-full gap-2 lg:gap-4">
      <div className="flex flex-1 items-center bg-white relative rounded-md">
        <BiSearch
          onClick={submit}
          className="absolute right-2 cursor-pointer transition-all hover:scale-125 hover:text-purple-500"
          fontSize={24}
        />
        <input
          value={input}
          onChange={onChange}
          placeholder="Search Keywords..."
          className="duration-200 transition-all w-full outline-none py-2 pl-4 pr-10 ring-0 focus-within:ring-2 ring-purple-500 rounded-md border border-purple-300"
        />
      </div>
      {buttonPos === "top" && <SearchbarButton submit={submit} />}
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
  const { searchTerm } = useSelector((state) => state.job);
  const values = {};
  Object.keys(searchTerm).forEach((key) => {
    values[key] = searchTerm[key].split("+").join(" ");
  });
  const [selectValues, setSelectValues] = useState(values);
  const [input, setInput] = useState(searchTerm.keyword.split("+").join(" "));
  const dispatch = useDispatch();

  useEffect(() => {
    const changeButtonPos = () => (window.innerWidth >= 1024 ? setButtonPos("top") : setButtonPos("bottom"));
    changeButtonPos();
    window.addEventListener("resize", changeButtonPos);
    return () => window.removeEventListener("resize", changeButtonPos);
  }, []);

  const handleChange = (e) => setInput(e.target.value);

  const submit = (e) => e.preventDefault() || dispatch(chooseParam({ ...selectValues, keyword: input }));
  return (
    <form className="box" lang="eng" onSubmit={submit}>
      <div className="bg-gray-200 border border-gray-300 rounded-lg shadow-xl flex flex-col gap-4 md:gap-6 lg:gap-4 p-4 md:p-8 lg:p-4 xl:p-8">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {btnArray.map((btn) => (
            <SearchButton khText={btn.khText} engText={btn.engText} key={btn.engText} />
          ))}
        </div>
        <Searchbar buttonPos={buttonPos} submit={submit} input={input} onChange={handleChange} />
        <div className="flex flex-col lg:flex-row gap-4">
          {selectArray.map((select) => (
            <SelectComponent
              className="w-full transition-all duration-200 bg-white outline-none pl-4 py-2 md:py-3 lg:py-4 border border-purple-300 rounded-md ring-0 focus-within:ring-2 ring-purple-500"
              value={selectValues[select.name]}
              options={select.options}
              name={select.name}
              key={select.name}
              onChange={(e) => setSelectValues({ ...selectValues, [e.target.name]: e.target.value })}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">{buttonPos === "bottom" && <SearchbarButton submit={submit} />}</div>
      </div>
    </form>
  );
};

export default SearchComponent;
