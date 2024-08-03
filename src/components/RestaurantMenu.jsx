import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const menuData = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.918084723615898&lng=74.76579799034471&restaurantId=${resId}&submitAction=ENTER`
      );
      const jsonData = await menuData.json();
      setResinfo(jsonData);
      console.log(resInfo);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  const { name, areaName, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  console.log(itemCards);

  return resInfo === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <p>{name}</p>
      <p>{areaName}</p>
      <p>{cuisines ? cuisines.join(", ") : "Cuisines not available"}</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info.id}>
            {item?.card?.info.name} - Rs.{" "}
            {item?.card?.info.price || item?.card?.info.defaultPrice / 100}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
