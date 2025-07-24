import React from "react";
import Image from "next/image";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    { name: "Cartoon", image: "../../../../assets/img/placeholder.svg" },
    { name: "Comic", image: "/comic.png" },
    { name: "WaterColor", image: "/watercolor.png" },
    { name: "GTA", image: "/gta.png" },
    { name: "Anime", image: "/anime.png" },
    // { name: "Realistic", image: "/realistic.png" },
    // { name: "PixelArt", image: "/pixelart.png" },
    // { name: "Sketch", image: "/sketch.png" },
    // { name: "3D", image: "/3d.png" },
    // { name: "Retro", image: "/retro.png" },
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
            className={`relative hover:scale-105 transition-all cursor-pointer rounderd-xl ${
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
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectStyle;
