"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SelectTopics = ({ onUserSelect }) => {
  const options = [
    { value: "custom-prompt", label: "Custom Prompt" },
    { value: "random-ai-story", label: "Random AI Story" },
    { value: "scary-story", label: "Scary Story" },
    { value: "historycal-facts", label: "Historycal Facts" },
    { value: "bad-time-story", label: "Bad Time Story" },
    { value: "motivational-story", label: "Motivational Story" },
    { value: "fun-facts", label: "Fun Facts" },
  ];
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Content</h2>
      <p>What is the topic of your video?</p>

      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          value !== "custom-prompt" && onUserSelect('topic', value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.label} value={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption === "custom-prompt" && (
        <Textarea
          className={"mt-3"}
            onChange={(e) => onUserSelect('topic', e.target.value)}
          placeholder="Write a prompt on which you want to generate"
        />
      )}
    </div>
  );
};

export default SelectTopics;
