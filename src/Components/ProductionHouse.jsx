import React from "react";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: "/src/assets/Images/disney.png",
      video: "/src/assets/Videos/disney.mp4",
    },
    {
      id: 2,
      image: "/src/assets/Images/pixar.png",
      video: "/src/assets/Videos/pixar.mp4",
    },
    {
      id: 3,
      image: "/src/assets/Images/marvel.png",
      video: "/src/assets/Videos/marvel.mp4",
    },
    {
      id: 4,
      image: "/src/assets/Images/starwar.png",
      video: "/src/assets/Videos/star-wars.mp4",
    },
    {
      id: 5,
      image: "/src/assets/Images/nationalG.png",
      video: "/src/assets/Videos/national-geographic.mp4",
    },
  ];
  return (
    <div className="flex gap-5 py-5 px-9 lg:px-20">
      {productionHouseList.map((item, index) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out relative shadow-xl shadow-black z-10"
        >
         
          
          <img src={item.image} alt="....." className="w-full" /> <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-lg opacity-0 z-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
