import React from "react";
import { UploadImage } from "../../../assets/images";

function ImageUpload({ label, onChange, name, value, required, accept }) {
  return (
    <div>
      <label>{label}</label>
      <div className="mt-2">
        <input
          type="file"
          onChange={onChange}
          accept={accept}
          name={name}
          style={{ display: "none" }}
          id="image-upload-input"
        />

        <label
          htmlFor="image-upload-input"
          className="image-upload-label"
        >

            <img src={UploadImage} alt="no image"
            className="upload-image-preview"
            />
        </label>
      </div>
    </div>
  );
}

export default ImageUpload;
