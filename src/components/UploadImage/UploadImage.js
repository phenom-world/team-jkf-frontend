import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./UploadImage.css";

const UploadAndDisplayImage = ({ imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage ? (
        <>
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Profile Picture"
            width="150px"
            height="150px"
            className="img"
            fluid
          />
        </>
      ) : (
        <>
          <Image
            src={imageUrl}
            alt="Profile Picture"
            width="150px"
            height="150px"
            className="img"
            fluid
          />
        </>
      )}
      <label htmlFor="file" className="Upload">
        Upload an Image
      </label>
      <input
        id="file"
        type="file"
        name="myImage"
        style={{ display: "none" }}
        onChange={(event) => {
          // console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
