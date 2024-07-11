import "./App.css";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <SearchBar />
        <div className="mx-auto flex flex-wrap justify-center gap-5 ">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

export default App;
