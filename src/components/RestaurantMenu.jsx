import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const menuData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.918084723615898&lng=74.76579799034471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await menuData.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return <div>rest menu</div>;
};

export default RestaurantMenu;
