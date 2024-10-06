import { useState } from 'react';

export default function Home() {
  // useState to manage image visibility
  const [showImage, setShowImage] = useState(false);

  // Function to toggle image visibility
  const handleClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js Button to Display Image</h1>

      {/* Button to toggle image display */}
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>

      {/* Conditional rendering of image */}
      {showImage && (
        <div className="mt-4">
          <img
            src="/your-image.jpg" // Make sure to place the image in the public folder
            alt="Displayed when button is clicked"
            className="max-w-full h-auto"
          />
        </div>
      )}
/* Add this CSS to your global styles or a CSS module */
.button {
  background-color: #3490dc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.button:hover {
  background-color: #2779bd;
}

.image-container {
  margin-top: 20px;
}

.image {
  max-width: 100%;
  height: auto;
}
<button onClick={handleClick} className="button">
  {showImage ? 'Hide Image' : 'Show Image'}
</button>

{showImage && (
  <div className="image-container">
    <img
      src="/your-image.jpg"
      alt="Displayed when button is clicked"
      className="image"
    />
  </div>
)}

        
    </div>
  );
}







// import React from "react";

// function Button(props) {

// const {buttonText} = props

//     return(

//         <button>{buttonText}</button>
//     )

// }

// export default Button;
