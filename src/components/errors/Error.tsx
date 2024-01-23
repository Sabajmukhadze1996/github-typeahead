import React from "react";
import "./error.css";
import { ErrorProps } from "../../types/types";


const Error: React.FC<ErrorProps> = ({ errorMessage }) => {
  
  return (
    <div className="error-container">
      <img src="error.jpg" alt="Error-Img" loading="lazy" />
      <p>{errorMessage} :(</p>
    </div>
  );

};

export default Error;
