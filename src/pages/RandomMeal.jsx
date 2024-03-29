import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImYoutube2 } from "react-icons/im";
import Loader from "../loader/Loader";
import { v4 as uuidv4 } from "uuid";
import { MdBookmarkAdd, MdBookmarkAdded } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Add, Remove } from "../store/reducer/BookmarkSlicer";

const RandomMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (localStorage.getItem("savedMeals")) {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    } else {
      localStorage.setItem("savedMeals", JSON.stringify([]));
    }
  }, [id]);

  const handleSaveButtonClick = (idMeal) => {
    const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
    if (!isSaved) {
      savedMeals.push(meal.idMeal);
      localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
      setIsSaved(true);
      dispatch(Add(meal));
    } else {
      savedMeals.splice(savedMeals.indexOf(idMeal), 1);
      localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
      setIsSaved(false);
      dispatch(Remove(idMeal));
    }
  };

  // const handleSaveButtonClick = (idMeal) => {
  //   const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
  //   if (!isSaved) {
  //     savedMeals.push(meal.idMeal);
  //     localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
  //     setIsSaved(true);
  //   } else {
  //     savedMeals.splice(savedMeals.indexOf(meal.idMeal), 1);
  //     localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
  //     setIsSaved(false);
  //   }
  //   isSaved ? dispatch(Remove(idMeal)) : dispatch(Add(meal));
  // };

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
        <div className="lg:flex font-Ubt">
          <div className="w-[95%] mb-10 lg:w-[50%] relative">
            <img
              src={meal.strMealThumb}
              className="w-[95%] mx-auto ml-[20px] md:ml-[40px] lg:ml-0 lg:w-[90%] rounded-lg"
              alt=""
            />
            {
              <button
                className="bg-primary py-2 px-1 bg-opacity-90 text-xl rounded cursor-pointer duration-500 absolute top-8 right-8 lg:top-8 lg:right-24"
                onClick={ 
                  isSaved
                  ? ()=> handleSaveButtonClick(meal.idMeal)
                  : handleSaveButtonClick}
                title={isSaved ? "Remove From Bookmarks" : "Add To Bookmarks"}
                aria-label={
                  isSaved ? "Remove From Bookmarks" : "Add To Bookmarks"
                }
              >
                {/* {bookmark.false ? "Remove" : "Add"} */}
                {isSaved ? (
                  <MdBookmarkAdded className="text-4xl" />
                ) : (
                  <MdBookmarkAdd className="text-4xl" />
                )}
              </button>
            }
          </div>
          <div className="w-[95%] mx-auto lg:w-[50%] space-y-4">
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
                target="_blank"
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
