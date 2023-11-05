import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
    // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line
  const [username, setUsername] = useState("");
    // eslint-disable-next-line
  const [doctorData, setDoctorData] = useState(null);
  // eslint-disable-next-line
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {1 && 1 && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content" style={{
                backgroundColor: "DodgerBlue",
                color: "white",
                fontSize: "1em",
                padding: "1em",
                width: "30%",
                borderRadius: "5px",
                marginTop: "10px",
                textAlign: "left"
                }}>
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> Dr. Alex Als
              </p>
              <p className="appointment-card__message">
                <strong>Speciality:</strong> Dentist
              </p>
              <p className="appointment-card__message">
                <strong>Name:</strong> Krit
              </p>
              <p className="appointment-card__message">
                <strong>Phone:</strong> 0123456789
              </p>
              <p className="appointment-card__message">
                <strong>Date of Appointment:</strong> 2023-11-05
              </p>
              <p className="appointment-card__message">
                <strong>Time Slot:</strong> 9:00 AM
              </p>

            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;