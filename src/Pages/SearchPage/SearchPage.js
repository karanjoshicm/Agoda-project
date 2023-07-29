import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//components
import Navbar from "../../Components/Navbar/Navbar";
import CustomStar from "../../Components/CustomStar/CustomStar";

//styles
import styles from "./SearchPage.module.scss";
import "./style.css";

//assets
import map from "../../assets/map.svg";

//libraries
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import HotelCard from "../../Components/HotelCard/HotelCard";
// import "./styles.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log("Search params is ", searchParams.get("destination"));

  //function to fetch the data from an API
  const fetchHotelData = async () => {};

  //useeffect to fetch the Data of searched hotels
  useEffect(() => {
    fetchHotelData();
  }, []);

  const [filters, setFilters] = useState([
    {
      title: "Popular filters for Goa",
      links: [
        {
          name: "stars",
          id: "stars4",
          value: 4,
          checked: false,
        },
        {
          name: "stars",
          id: "stars3",
          value: 3,
          checked: false,
        },
        {
          name: "stars",
          id: "stars2",
          value: 2,
          checked: false,
        },
        {
          name: "Breakfast included",
          id: "breakFastIncluded",
          checked: false,
        },
        {
          name: "Baga Beach",
          id: "bagaBeach",
          checked: false,
        },
        {
          name: "Nightlife",
          id: "nightLife",
          checked: false,
        },
      ],
    },
    {
      title: "Property type",
      links: [
        {
          name: "Entire Apartment",
          id: "EntireApartment",
          checked: false,
        },
        {
          name: "Service Apartment",
          id: "serviceApartment",
          checked: false,
        },
        {
          name: "Hotel",
          id: "hotel",
          checked: false,
        },
      ],
    },
    {
      title: "Sustaiability",
      links: [
        {
          name: "Travel sustainable property",
          id: "travelSustainableProperty",
          checked: false,
        },
      ],
    },
  ]);

  const sortData = [
    { name: "Best match", dropDownData: null },
    { name: "Lowest price first", dropDownData: null },
    {
      name: "Distance",
      dropDownData: [
        {
          title: "Airports",
          links: ["Goa International Airport", "New Goa International Airport"],
        },
        {
          title: "Transportation",
          links: ["Panjim Bus Station", "Madgaon Junction Railway Station"],
        },
        {
          title: "Top Lanmarks",
          links: ["Agonda", "Panjim Church"],
        },
      ],
    },
    {
      name: "Top reviewed",
      dropDownData: null,
    },
    {
      name: "Hot Deals !",
      dropDownData: null,
    },
  ];

  const [selectedSort, setSelectedSort] = useState("Best match");
  return (
    <>
      <Navbar />
      <div className={styles.searchPage}>
        <div className={styles.searchPage_left}>
          <div className={styles.searchPage_left_map}>
            <img src={map} alt="" />
            <input
              className={styles.searchPage_left_textInput}
              placeholder="Text Search"
              type="text"
            />
          </div>
          <div className={styles.searchPage_left_budget}>
            <div className={styles.searchPage_left_budget_heading}>
              Your budget (per night)
            </div>
            <RangeSlider className={styles.range_slider} />
            <div className={styles.searchPage_left_budget_handlers}>
              <div className={styles.searchPage_left_budget_controller}>
                <div className={styles.searchPage_left_budget_handlers_label}>
                  Min
                </div>
                <span className={styles.searchPage_left_budget_rs}>Rs</span>
                <input type="text" />
              </div>
              <div className={styles.searchPage_left_budget_controller}>
                <div className={styles.searchPage_left_budget_handlers_label}>
                  Min
                </div>
                <span className={styles.searchPage_left_budget_rs}>Rs</span>

                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles.searchPage_left_filters}>
            {filters?.map((elem) => (
              <div className={styles?.filter_container}>
                <div className={styles.filter_title}>{elem?.title}</div>
                {elem?.links?.map((elem) => (
                  <Filter key={elem.id} filterData={elem} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.searchPage_mid}>
          <div className={styles.searchPage_mid_sortContainer}>
            <ul className={styles.searchPage_mid_sortContainer_list}>
              <li
                className={`${styles.searchPage_mid_sortContainer_listItem} ${styles.disable}`}
              >
                Sort
              </li>
              {sortData?.map((elem) => (
                <SortDiv
                  selectedSort={selectedSort}
                  setSelectedSort={setSelectedSort}
                  sortData={elem}
                />
              ))}
            </ul>
          </div>

          <div className={styles.searchPage_mid_hotelContainer}>
            <HotelCard />
          </div>
        </div>
        <div className={styles.searchPage_right}>If any ads? They will appears here</div>
      </div>
    </>
  );
};

export default SearchPage;

const Filter = ({ filterData = {} }) => {
  const [checked, setChecked] = useState(filterData?.checked);
  return (
    <div className={styles.filter}>
      <input
        type="checkbox"
        name={filterData?.id}
        id={filterData?.id}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label htmlFor={filterData?.id}>
        {filterData?.name === "stars" ? (
          <CustomStar value={filterData?.value} color2="#ffa726" />
        ) : (
          <>{filterData?.name}</>
        )}
      </label>
    </div>
  );
};

const SortDiv = ({ selectedSort, setSelectedSort = () => {}, sortData }) => {
  return (
    <li
      onClick={() => setSelectedSort(sortData.name)}
      className={`${styles.searchPage_mid_sortContainer_listItem} ${
        sortData?.name == selectedSort ? "active" : ""
      }`}
    >
      <span> {sortData?.name}</span>
    </li>
  );
};
