import React, { useEffect, useState, useRef } from "react";
import { getTrendingVideos } from "../Services/GlobalApi";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi2";
import { Carousel } from "@material-tailwind/react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(0);
  useEffect(() => {
    getTrendingMovies();
    console.log('ref : ',elementRef.current.focus)
    
  }, [movieList]);

  const getTrendingMovies = () => {
   getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
      
    });
  };

  return (
    <div>
       <Carousel
        loop={true}
        autoplay={true}
        className="rounded-xl h-fit w-fit m-auto"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className=" hidden md:flex absolute bottom-2 left-2/4 z-50 -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="img"
            className=" h-full w-[90%] lg:h-[500px] object-fill m-auto rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
