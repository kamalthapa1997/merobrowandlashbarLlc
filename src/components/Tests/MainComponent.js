import React, { useState } from "react";
// import "./ImageUploadModal.css";

const ImageUploadModal = ({ isOpen, closeModal, onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (selectedImage) {
      // Convert data URL to Blob
      const base64String = selectedImage.split(",")[1];
      const blob = new Blob([atob(base64String)], { type: "image/png" }); // Adjust the type accordingly

      // Create a FormData object to send as a file
      const formData = new FormData();
      formData.append("image", blob, "image.png");
    }
  };

  return (
    <div className={`image-upload-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Upload Image</h2>
        {selectedImage && (
          <div className="preview-container">
            <img
              className="treatments__img"
              src={selectedImage}
              alt="Preview"
            />
          </div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  );
};

export default ImageUploadModal;
