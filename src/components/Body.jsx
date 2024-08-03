import RestaurantCard from "./RestaurantCard";
import apiData from "../utills/apiData.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [restData, setRestData] = useState([]);
  const [fiteredData, setfiteredData] = useState([]);

  const [searchedItem, setSearchedItem] = useState("");

  function filterTopRatedRest() {
    const topRatedRest = restData
      .filter((res) => res.info.avgRating > 4)
      .sort((a, b) => b.info.avgRating - a.info.avgRating);
    setfiteredData(topRatedRest);
  }

  function searchedRest(e) {
    e.preventDefault();
    const searchedRestList = restData.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
        (res.info.cuisines &&
          res.info.cuisines.some((item) =>
            item.toLowerCase().includes(searchedItem.toLowerCase())
          ))
    );
    setfiteredData(searchedRestList);
    setSearchedItem("");
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.918084723615898&lng=74.76579799034471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const jsonData = await data.json()

    const restaurants =
      apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setfiteredData(restaurants);
    setRestData(restaurants);
  };

  return restData.length === 0 ? (
    <Shimmer cards={restData} />
  ) : (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="py-3 my-3">
          <form
            className="flex items-center max-w-64 lg:max-w-sm mx-auto"
            onSubmit={searchedRest}
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus-visible:border-gray-400 focus:outline-none"
                placeholder="Search for restaurants"
                value={searchedItem}
                onChange={(e) => setSearchedItem(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="px-2.5 py-2 ml-2 text-sm font-medium text-white flex items-center bg-orange-500 rounded-lg border hover:bg-orange-600"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
              <span className="ml-2 hidden md:block">Search</span>
            </button>
          </form>
        </div>
        <button
          className="text-white bg-gray-400 hover:bg-gray-500 rounded-lg text-sm px-2 py-1.5 text-center mb-3 "
          onClick={filterTopRatedRest}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-5">
        {fiteredData.map((item) =>
          item ? (
            <Link key={item?.info.id} to={`/restaurants/${item?.info.id}`}>
              {" "}
              <RestaurantCard resObj={item?.info} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Body;
