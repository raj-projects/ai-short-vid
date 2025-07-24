"use client";
import React from "react";
import SelectTopics from "../_components/_components/SelectTopics";

const CreateNew = () => {
  const [formData, setFormData] = React.useState([]);
  const onHandleInputChange = (fieldName, fileldValue) => {
    console.log(fieldName, fileldValue);
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

        {/* Select Duration */}

        {/* Generate */}
      </div>
    </div>
  );
};

export default CreateNew;
