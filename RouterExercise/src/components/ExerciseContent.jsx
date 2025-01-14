import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../assets/data/data.js";

function ExerciseContent() {
  const { topic } = useParams();
    
  const currentTopic = data.find(
    (item) => item.path.toLowerCase().replace(/ /g, "") === topic
  );

  return (
    <div>
      <h2>{currentTopic.title}</h2>
      <p>{currentTopic.content}</p>
      <pre>
        <code>
            {currentTopic.example}
        </code>
    </pre>
    </div>
   
  );
}

export default ExerciseContent;
