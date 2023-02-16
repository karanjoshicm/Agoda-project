import React, { useEffect, useReducer, useState } from "react";

//components
import Destinations from "../../Components/Destinations/Destinations";
import HeroSection from "../../Components/HeroSection/HeroSection";
import NewUpdate from "../../Components/NewUpdate/NewUpdate";
import Promotions from "../../Components/Promotions/Promotions";
import Loader from "../../Components/Loader/Loader";
import Footer1 from "../../Components/Footer1/Footer1";
import Rentals from "../../Components/Rentals/Rentals";
import FeaturedHomes from "../../Components/FeaturedHomes/FeaturedHomes";
import RecommendedPlace from "../../Components/RecommendedPlace/RecommendedPlace";

//helpers
import { reducerFunction } from "../../helpers/reducerFunction";
import useToast from "../../helpers/useToast";

//api
import { homeData } from "../../api/homePage/homeData";

//styles
import "./Home.scss";

const Home = () => {
  const { errorToast } = useToast();
  const INITIAL_STATE = {
    loading: false,
    data: {},
    error: false,
  };
  const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);
  const [homePageData, setHomePageData] = useState({});

  const getHomeData = async () => {
    dispatch({ type: "FETCH_START" });
    const data = await homeData();
    console.log("data us ", data);
    if (data.status) {
      setHomePageData(data.data[0]);
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } else {
      setHomePageData(null);
      dispatch({ type: "FETCH_ERROR", payload: data });
      errorToast("Something went wrong");
    }
  };
  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <div>
      <NewUpdate />
      <HeroSection />
      <div className="homeWrapper">
        {state?.loading ? (
          <div className="loader-center">
            <Loader />
          </div>
        ) : (
          <>
            {homePageData && (
              <>
                <Promotions promotionData={homePageData?.promotions?.images} />
                <Destinations
                  title="Top destinations in India"
                  destinationData={homePageData?.topDestination}
                />
                <Rentals rentalData={homePageData?.rentals} />

                <FeaturedHomes homeData={homePageData?.recommendedHotel} />
                <RecommendedPlace placeData={homePageData?.recommendedPlace} />
                <Destinations
                  title="Popular destinations outside India"
                  destinationData={homePageData?.Destination}
                />
              </>
            )}
          </>
        )}
      </div>
      <Footer1 />
    </div>
  );
};

export default Home;
