"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const SelectStyle = ({ onUserSelect }) => {
  const styleOptions = [
    { name: "Cartoon", image: "/assets/img/placeholder.png" },
    { name: "Comic", image: "/assets/img/placeholder.png" },
    { name: "WaterColor", image: "/assets/img/placeholder.png" },
    { name: "GTA", image: "/assets/img/placeholder.png" },
    { name: "Anime", image: "/assets/img/placeholder.png" },
    { name: "Realistic", image: "/assets/img/placeholder.png" },
    { name: "3D", image: "/assets/img/placeholder.png" },
    { name: "Retro", image: "/assets/img/placeholder.png" },
    { name: "PixelArt", image: "/assets/img/placeholder.png" },
    { name: "Cyberpunk", image: "/assets/img/placeholder.png" },
    { name: "Fantasy", image: "/assets/img/placeholder.png" },
    { name: "Sci-Fi", image: "/assets/img/placeholder.png" },
    { name: "Minimalist", image: "/assets/img/placeholder.png" },
    { name: "Abstract", image: "/assets/img/placeholder.png" },
    { name: "Surreal", image: "/assets/img/placeholder.png" },
    { name: "Vintage", image: "/assets/img/placeholder.png" },
    { name: "Modern", image: "/assets/img/placeholder.png" },
    { name: "PopArt", image: "/assets/img/placeholder.png" },
    { name: "Impressionist", image: "/assets/img/placeholder.png" },
    { name: "Expressionist", image: "/assets/img/placeholder.png" },
    { name: "Baroque", image: "/assets/img/placeholder.png" },
    { name: "Renaissance", image: "/assets/img/placeholder.png" },
    { name: "Sketch", image: "/assets/img/placeholder.png" },
    { name: "Graffiti", image: "/assets/img/placeholder.png" },
    { name: "FantasyArt", image: "/assets/img/placeholder.png" },
    { name: "LineArt", image: "/assets/img/placeholder.png" },
    { name: "LowPoly", image: "/assets/img/placeholder.png" },
    { name: "HighContrast", image: "/assets/img/placeholder.png" },
    { name: "Monochrome", image: "/assets/img/placeholder.png" },
    { name: "PopSurrealism", image: "/assets/img/placeholder.png" },
    { name: "ConceptArt", image: "/assets/img/placeholder.png" },
    { name: "DigitalArt", image: "/assets/img/placeholder.png" },
    { name: "FantasyRealism", image: "/assets/img/placeholder.png" },
    { name: "Cinematic", image: "/assets/img/placeholder.png" },
    { name: "Steampunk", image: "/assets/img/placeholder.png" },
    { name: "Art Deco", image: "/assets/img/placeholder.png" },
    { name: "Futuristic", image: "/assets/img/placeholder.png" },
    { name: "Retro Futurism", image: "/assets/img/placeholder.png" },
    { name: "Cyber Art", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Landscape", image: "/assets/img/placeholder.png" },
    { name: "Character Design", image: "/assets/img/placeholder.png" },
    { name: "Illustration", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Portrait", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Creature", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Scene", image: "/assets/img/placeholder.png" },
    { name: "Fantasy World", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Art", image: "/assets/img/placeholder.png" },
    { name: "Fantasy Character", image: "/assets/img/placeholder.png" },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [showAll, setShowAll] = useState(false);
  const visibleCount = showAll ? styleOptions.length : 6;
  const visibleStyles = styleOptions.slice(0, visibleCount);

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Style</h2>
      <p className="text-gray-500">Select your video style</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {visibleStyles.map((item, index) => (
          <div
            key={index}
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${
              selectedOption === item.name ? "border-4 border-primary" : ""
            }`}
            onClick={() => {
              setSelectedOption(item.name);
              onUserSelect("ImageStyle", item.name);
            }}
          >
            <Image
              src={item.image}
              alt="Style Image"
              width={100}
              height={100}
              className="h-48 object-cover rounded-lg w-full"
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>

      {styleOptions.length > 6 && (
        <div className="text-center mt-5">
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                View Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SelectStyle;
