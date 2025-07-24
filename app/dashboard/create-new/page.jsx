"use client";
import React from "react";
import SelectTopics from "./_components/SelectTopics";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";

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

  const getVideoScript = async () => {
    const prompt =
      "Create a short video on the topic: " +
      formData.topic +
      " in the style of " +
      formData.ImageStyle +
      " with a duration of " +
      formData.duration +
      " seconds.";

    console.log("Generated Prompt:", prompt);

    const result = await axios
      .post("/api/get-video-script", { prompt })
      .then((response) => console.log(response.data));

    if (result.data.error) {
      console.error("Error generating video script:", result.data.error);
      return;
    }
    console.log("Video Script Result:", result.data.result);
  };

  const onCreateHandler = () => {
    getVideoScript();
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
        <Button
          onClick={onCreateHandler}
          className="mt-10 w-full cursor-pointer"
        >
          Create Short Video
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
