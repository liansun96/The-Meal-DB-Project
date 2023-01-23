import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TbSignRight } from "react-icons/tb";
import { BiArrowToRight } from "react-icons/bi";


const Home = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("Beef");

  const getMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
    );
    setMeals(data.meals);
    console.log(data);
    setIsLoading(false);
  };

  const getMealCategories = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(data);
    setCategories(data.categories);
  };

  useEffect(() => {
    getMeals();
    getMealCategories();
  }, [type]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="my-5 flex items-center">
            <div className="w-[20%] flex items-center space-x-4">
              <h4 className="text-2xl font-normal tracking-tight"><i>Meals Categories</i></h4>
              <TbSignRight className="text-5xl text-success" />
            </div>
            <div className="w-[80%] mx-auto">
              <Swiper
                slidesPerView={6}
                spaceBetween={5}
                loop={true}
                mousewheel={true}
                direction={"horizontal"}
                navigation={true}
                modules={[Autoplay, FreeMode, Navigation, Mousewheel]}
                className="mySwiper"
              >
                {categories.map((category) => (
                  <SwiperSlide
                    className="my-5 px-5"
                    key={category.idCategory}
                  >
                    <button
                      className={`${
                        category.strCategory.length > 10
                          ? "w-[150px] !mr-20"
                          : "w-[120px]"
                      }  py-1 border rounded-lg text-lg font-Ubt ${
                        category.strCategory === type &&
                        "bg-success border-success font-extrabold text-pirmary custom-shadow"
                      } `}
                      onClick={() => setType(category.strCategory)}
                    >
                      {category.strCategory}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex flex-wrap gap-11 mb-6">
            {meals?.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
