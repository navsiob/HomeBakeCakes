import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Cropper = ({ onCrop }) => {
  const [src, selectFile] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });

  const handleFileChange = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  };

  const getCroppedImg = () => {
    if (image && crop.width && crop.height) {
      const canvas = document.createElement("canvas");
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );

      canvas.toBlob((blob) => {
        const croppedImageUrl = URL.createObjectURL(blob);
        onCrop(croppedImageUrl); // Pass the cropped image URL back to the parent component
      }, "image/jpeg");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        {src && (
          <div className="col-6">
            <ReactCrop
              src={src}
              onImageLoaded={(img) => setImage(img)}
              crop={crop}
              onChange={setCrop}
            />
            <button className="btn btn-danger" onClick={getCroppedImg}>
              Crop Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cropper;
