import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import data from "../utills/mockData";
import { useState } from "react";

function Body() {
  const [restData, setRestData] = useState(data);
  function filterTopRatedRest() {
    const filteredData = restData
      .filter((res) => res.info.avgRating > 4)
      .sort((a, b) => b.info.avgRating - a.info.avgRating);
    setRestData(filteredData);
  }

  return (
    <div className="container mx-auto">
      <SearchBar />
      <div className="flex">
        <button
          className="text-white bg-gray-400 hover:bg-gray-500 rounded-lg  text-sm px-2 py-1.5 text-center mx-auto m-5"
          onClick={filterTopRatedRest}
        >
          Top rated restorent
        </button>
      </div>
      <div className="mx-auto flex flex-wrap justify-center gap-5 ">
        {restData.map((item) =>
          item ? (
            <RestaurantCard key={item?.info.id} resObj={item?.info} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default Body;
