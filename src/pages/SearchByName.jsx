import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";

const SearchByName = () => {
  const [searchName, setSearchName] = useState("");
  const [meals, setMeals] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchByName = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`
    );
    console.log(data.meals);
    setMeals(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchByName();
  }, [searchName]);

  const handleChange = (e) => {
    e.preventdefault;
    setSearchName(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          className="text-black text-2xl font-Ubt px-3 w-96 h-12 rounded outline-none placeholder:text-xl placeholder:font-Ubt focus:outline-2 focus:outline-success"
          placeholder="&#128269;   Search Meals By Name"
          onChange={handleChange}
          defaultValue={searchName}
        />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap gap-11 mb-6">
            {meals?.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchByName;
