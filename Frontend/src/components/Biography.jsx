import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          
          <h2>Who We Are</h2>
          <p>
          At HealthSphere, we are a dedicated team of healthcare professionals committed to providing exceptional care and support to our patients. Our team includes doctors, nurses, specialists, and administrative staff who work together with a shared vision: to enhance the quality of healthcare and ensure a seamless experience for every patient.

With compassion, expertise, and innovation at our core, we believe in a patient-centered approach that puts your health and well-being first. We are here to guide you through every step of your healthcare journey, offering personalized care and attention to meet your unique needs.
          </p>
          <p>
          With compassion, expertise, and innovation at our core, we believe in a patient-centered approach that puts your health and well-being first. We are here to guide you through every step of your healthcare journey, offering personalized care and attention to meet your unique needs.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
