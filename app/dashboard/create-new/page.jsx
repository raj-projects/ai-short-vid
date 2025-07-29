"use client";

import React, { useState } from "react";
import SelectTopics from "./_components/SelectTopics";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";

const CreateNew = () => {
  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState(null);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  const getVideoScript = async () => {
    const prompt = `Write a script to generate a ${formData.duration} video on topic: ${formData.topic}, along with AI image prompts in ${formData.ImageStyle} format for each scene. Return result in JSON format with "imagePrompt" and "Content Text" fields.`;

    try {
      const res = await axios.post("/api/get-video-script", { prompt });
      console.log("✅ Gemini Response:", res.data);
      setResponse(res.data.result);
    } catch (err) {
      console.error("❌ Failed to get video script:", err);
    }
  };

  const onCreateHandler = () => {
    getVideoScript();
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-2xl text-primary text-center">
        Create new
      </h2>

      <div className="mt-10 shadow-md p-10">
        <SelectTopics onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />

        <Button
          onClick={onCreateHandler}
          className="mt-10 w-full cursor-pointer"
        >
          Create Short Video
        </Button>

        {response && (
          <pre className="mt-8 bg-gray-100 p-4 rounded-md overflow-auto text-sm">
            {typeof response === "string"
              ? response
              : JSON.stringify(response, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default CreateNew;
