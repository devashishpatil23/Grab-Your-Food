import React from "react";
const resData = {
  info: {
    id: "629818",
    name: "Hotel Darbar",
    cloudinaryImageId: "pt90q7xajsv51aztcxjj",
    locality: "Tulsiram Nagar",
    areaName: "Dhule Locality",
    costForTwo: "₹400 for two",
    cuisines: ["Biryani", "North Indian", "Snacks"],
    parentId: "98688",
    avgRatingString: "--",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-12 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textExtendedBadges: {},
        textBased: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹199",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "swiggy://menu?restaurant_id=629818",
    text: "RESTAURANT_MENU",
    type: "DEEPLINK",
  },
};

function RestaurantCard() {
  return (
    <div>
      <div className="w-full max-w-xs bg-white border border-gray-200  hover:shadow-md hover:cursor-pointer">
        <a href="#">
          <img
            className="p-2 rounded-t-lg"
            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U="
            alt="product image"
          />
        </a>
        <div className="px-3 pb-3">
          <h4 className="text-lg font-semibold tracking-tight text-black-500">
            Burger
          </h4>
          <h5 className="text-sm font-semibold tracking-tight text-gray-500">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>

          <div className="flex justify-between items-center mt-2.5 mb-5">
            <span className="bg-gray-100 text-orange-500 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
              5.0
            </span>
            <span className=" text-gray-500 text-sm pr-2">30-min</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg  text-gray-900 dark:text-white">$599</span>
            <a
              href="#"
              className="text-white bg-gray-400 hover:bg-gray-500 rounded-lg  text-sm px-2 py-1.5 text-center"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
