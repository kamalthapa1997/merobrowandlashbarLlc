import React, { useRef, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../FormValidation/FormAndValidation";
import PropTypes from "prop-types";
import "./AddServiceModal.css";
import imageUpload from "../../images/imgupload.png";

const AddServiceModal = ({
  addService,
  handleModalClose,
  emailNotFoundError,
}) => {
  const { isValid } = useFormAndValidation();
  // const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFruit, setSelectedFruit] = useState("orange");
  const fileInputRef = useRef(null); // Ref for the input field
  const [image, setImage] = useState(""); // State to store the image URL

  const [formData, setFormData] = useState({
    type: "",
    title: "",
    wallpaper: image,
    details: [{ time: "", money: "" }],
  });
  // const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDetailChange = (index, key, value) => {
    const newDetails = [...formData.details];
    newDetails[index][key] = value;
    setFormData({
      ...formData,
      details: newDetails,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Define the onSubmit logic here

    if (image) {
      // Convert data URL to Blob
      const base64String = image.split(",")[1];
      const blob = new Blob([atob(base64String)], { type: "image/png" }); // Adjust the type accordingly

      // Create a FormData object to send as a file
      const imageData = new FormData();
      const formDataWithImage = {
        ...formData,
        wallpaper: image,
      };
      console.log(formDataWithImage);
      imageData.append("image", blob, "image.png");
    }
  };

  const options = [
    { value: "eyelash", label: "Eyelash" },
    { value: "threading", label: "Threading" },
    { value: "combo", label: "Combo" },
    { value: "others", label: "Others" },
  ];

  return (
    <PopupWithForm
      handleModalClose={handleModalClose}
      title="Add service"
      // buttonText="Submit"
      name="addservice"
      onSubmit={handleSubmit}
      emailNotFoundError={emailNotFoundError}
      isValid={isValid}
      className={addService === "addservicemodal" ? "addservicemodal" : null}
    >
      <label className="addservicemodal__label">
        Type
        <select
          className="addservicemodal__options"
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="addservicemodal__label">
        Title:
        <input
          className="addservicemodal__inputs"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <div className="addservicemodal__uplodas">
        <h2 className="addservicemodal__upld-title"> Upload Image</h2>
        <div className="addservicemodal__upld-container">
          <img
            src={image || imageUpload} // Default image URL
            alt="Uploaded"
            // onClick={() => setModalOpen(true)}
            className="addservicemodal__img"
          />
          <input
            ref={fileInputRef}
            className="addservicemodal__upload-file"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {/* 
          {modalOpen && (
            <div className="modal">
              <div
                className="modal-content"
                style={{ width: "100px", height: "100px" }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          )} */}
        </div>
      </div>
      <div>
        Details:
        {formData.details.map((detail, index) => (
          <div key={index}>
            <label className="addservicemodal__label">
              Time:
              <input
                className="addservicemodal__inputs"
                type="text"
                value={detail.time}
                onChange={(e) =>
                  handleDetailChange(index, "time", e.target.value)
                }
              />
            </label>
            <label className="addservicemodal__label">
              Money:
              <input
                className="addservicemodal__inputs"
                type="text"
                value={detail.money}
                onChange={(e) =>
                  handleDetailChange(index, "money", e.target.value)
                }
              />
            </label>
          </div>
        ))}
      </div>
      <button type="submit">Submit</button>
    </PopupWithForm>
  );
};

AddServiceModal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  emailNotFoundError: PropTypes.func.isRequired,
  addService: PropTypes.func.isRequired,
};

export default AddServiceModal;
