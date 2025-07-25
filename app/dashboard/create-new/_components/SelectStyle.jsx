import React from "react";
import Image from "next/image";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    { name: "Cartoon", image: "/assets/img/placeholder.png" },
    { name: "Comic", image: "/assets/img/placeholder.png" },
    { name: "WaterColor", image: "/assets/img/placeholder.png" },
    { name: "GTA", image: "/assets/img/placeholder.png" },
    { name: "Anime", image: "/assets/img/placeholder.png" },
    { name: "Realistic", image: "/assets/img/placeholder.png" },
    // { name: "Sketch", image: "/assets/img/placeholder.png" },
    // { name: "3D", image: "/assets/img/placeholder.png" },
    // { name: "Retro", image: "/assets/img/placeholder.png" },
    // { name: "PixelArt", image: "/assets/img/placeholder.png" },
  ];
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div
            key={index}
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${
              selectedOption == item.name && "border-4 border-primary"
            }`}
          >
            <Image
              src={item.image}
              alt="Style Image"
              width={100}
              height={100}
              className="h-48 object-cover rounded-lg w-full"
              onClick={() => {
                setSelectedOption(item.name);
                onUserSelect("ImageStyle", item.name);
              }}
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
