"use client";
import React from "react";
import SelectTopics from "./_components/SelectTopics";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";

const CreateNew = () => {
  const [formData, setFormData] = React.useState([]);
  const onHandleInputChange = (fieldName, fileldValue) => {
    console.log(fieldName, fileldValue);

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fileldValue,
    }));
    console.log("Form Data Updated:", formData);
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-2xl text-primary text-center">
        Create new
      </h2>

      <div className="mt-10 shadow-sm p-10">
        {/* Select Topic */}
        <SelectTopics onUserSelect={onHandleInputChange} />

        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange} />

        {/* Select Duration */}
        <SelectDuration onUserSelect={onHandleInputChange} />

        {/* Generate video */}
        <Button className="mt-10 w-full cursor-pointer">
          Create Short Video
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
