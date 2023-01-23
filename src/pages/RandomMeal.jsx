import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImYoutube2 } from "react-icons/im";
import Loader from "../loader/Loader";
import { v4 as uuidv4 } from "uuid";

const RandomMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState("");

  const getMealsDetails = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    console.log(data);
    setMeal(data?.meals[0]);
    setIsLoading(false);
    if (data && ingredients === "") {
      const meal = data.meals[0];
      createIngredientsArray(meal);
    }
  };

  useEffect(() => {
    getMealsDetails();
  }, []);

  const createIngredientsArray = (meal) => {
    const ingredientsData = [];
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredientsData.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    setIngredients(ingredientsData);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex font-Ubt">
          <div className="w-[50%]xxx">
            <img
              src={meal.strMealThumb}
              className="w-[90%] rounded-lg"
              alt=""
            />
          </div>
          <div className="w-[50%] space-y-4">
            <div className="flex justify-start items-center gap-5">
              <h3 className="text-2xl font-bold">{meal.strMeal}</h3>
              <div className="bg-light text-primary w-24 h-7 rounded flex justify-center items-center">
                <p className="text-center font-semibold text-sm">
                  {meal.strCategory}
                </p>
              </div>
            </div>
            <div className="">
              <h4 className="text-base">
                Originally from -{" "}
                <span className="italic font-medium">{meal.strArea}</span>
              </h4>
            </div>
            <div className="space-y-2 mb-10">
              <h4 className="text-xl font-bold mb-2">Ingredients</h4>
              <ul className="flex flex-wrap gap-5">
                {ingredients.map((ing) => (
                  <li
                    className="text-sm bg-success py-1 px-3 py rounded"
                    key={uuidv4()}
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold mb-2">Instructions</h4>
              <p className="text-sm text-light tracking-wide leading-6">
                {meal.strInstructions}
              </p>
            </div>
            <div className="group mb-10">
              <a
                href={meal.strYoutube}
                className="flex justify-start items-center gap-8"
              >
                <h6 className="text-base font-medium duration-500  group-hover:text-red-600">
                  Watch on Youtube
                </h6>
                <ImYoutube2 className="text-5xl text-red-500 duration-500 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RandomMeal;