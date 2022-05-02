import React, { useState } from "react";
import { Image } from "react-bootstrap";
import "./UploadImage.css";

const UploadAndDisplayImage = ({ imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(null);

    const uploadHandle = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      setUploading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const { data } = await instance.post("/api/upload", formData, config);

        setImage(data);
        setUploading(false);
      } catch (error) {
        console.error(error);
        setUploading(false);
      }
    };

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
