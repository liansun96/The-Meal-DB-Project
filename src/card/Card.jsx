import React from "react";
import { GoLink } from "react-icons/go";
import { Link } from "react-router-dom";
import { MdOutlineBookmarks } from "react-icons/md";
import "./card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

const Card = ({ meal }) => {
  return (
    <div className="group font-Ubt">
      <div className="card-group p-[10px] relative bg-transparent flex flex-col items- justify-between rounded-2xl group-hover:shadow-xl duration-300">
        <div className="mb-3">
          <div className="relative">
            <LazyLoadImage
              effect="blur"
              src={meal.strMealThumb}
              className="rounded-xl mx-auto shadow duration-500 scale-[99%]"
              alt=""
            />
            <Link to={`/detail/${meal.idMeal}`}>
              <button            
                className="bg-primary p-2 bg-opacity-80 rounded scale-0 cursor-pointer duration-500 group-hover:scale-100 absolute top-5 right-5"
              >
                <MdOutlineBookmarks
                  className="text-light"
                />
              </button>
            </Link>
          </div>
          <h3 className="text-xl -tracking-normal font-medium mt-2">
            {meal.strMeal.length > 22
              ? `${meal.strMeal.substring(0, 20)} ...`
              : meal.strMeal}
          </h3>
        </div>
        <div className="mb-3 group/btn w-40">
          <button className="py-2 px-4 bg-light bg-opacity-90 group-hover/btn:bg-primary duration-200 rounded-lg">
            <Link
              to={`/detail/${meal.idMeal}`}
              className="flex items-center  gap-3"
            >
              <p className="text-sm text-primary group-hover/btn:text-light font-semibold">
                View Detail
              </p>
              <GoLink className="text-lg text-primary  group-hover/btn:text-light font-bold" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
5;
export default Card;
