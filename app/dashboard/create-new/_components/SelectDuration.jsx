import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectDuration = ({ onUserSelect }) => {
  const options = [
    { value: "15 Seconds", label: "15 Seconds" },
    { value: "30 Seconds", label: "30 Seconds" },
    { value: "45 Seconds", label: "45 Seconds" },
    { value: "60 Seconds", label: "60 Seconds" },
  ];

  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-primary">Duration</h2>
      <p className="text-gray-500">Select video duration</p>

      <Select
        value={selectedOption}
        onValueChange={(value) => {
          setSelectedOption(value);
          onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDuration;
