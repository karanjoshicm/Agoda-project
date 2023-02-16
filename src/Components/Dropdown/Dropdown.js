import React, { useEffect, useRef, useState } from "react";

//styles
import "./Dropdown.scss";

const Dropdown = ({
  elements = [],
  value = {},
  setValue = () => {},
  search = false,
}) => {
  //States
  const [isOpen, setIsOpen] = useState(false);
  const [searchedString, setSearchedString] = useState("");
  const ref = useRef(null);

  //closes the dropdown if we click outside the dropdown
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div ref={ref} className="dropdown">
      <div
        onClick={() => {
          setIsOpen(() => !isOpen);
        }}
        className="dropdown-header"
      >
        <div className="dropdown-header-title">{value.mobileCode}</div>
        <div className={`dropdown-header-icon ${isOpen ? "active" : ""}`}>
          <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13.416 17.998a2 2 0 0 1-2.828 0l-.004-.005-9.377-9.436A1.5 1.5 0 0 1 2.27 6h19.522a1.5 1.5 0 0 1 1.06 2.56l-9.437 9.438z"></path>
          </svg>
        </div>
      </div>

      <div className={`dropdown-menuItems ${isOpen ? "active" : ""}`}>
        {search && (
          <div className="dropdown-search">
            <input
              onChange={(e) => setSearchedString(e.target.value)}
              type="search"
              name=""
              id=""
              placeholder="Search..."
              value={searchedString}
            />
          </div>
        )}

        <div className="dropdown-menuItems-list">
          {elements
            .filter((e) => e.name.toLowerCase().includes(searchedString))
            .map((elem) => (
              <li
                key={elem.mobileCode}
                onClick={() => {
                  setValue(elem);
                  setIsOpen(false);
                  setSearchedString("");
                }}
              >
                {" "}
                {elem.mobileCode} {elem.name}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
