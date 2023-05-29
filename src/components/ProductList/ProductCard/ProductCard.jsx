import React, { useState, useEffect } from "react";
import "./productCard.scss";
import {ButtonDetail} from "../../ButtonDetail"; // Corregido: se debe importar sin las llaves

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, title, image , handleClick}) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [allowNavigation, setAllowNavigation] = useState(true);

  const generateRandomTime = (maxTime) => {
    const randomTime = Math.floor(Math.random() * maxTime);
    return randomTime;
  };

  const formatTimeLeft = () => {
    if (timeLeft === null) {
      return "Time Over";
    }

    const minutes = Math.floor(timeLeft / 1000 / 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    const maxTime = 120 * 1000 ; // 1 minuto en milisegundos
    const randomTime = generateRandomTime(maxTime);
    setTimeLeft(randomTime);
  }, []);

  useEffect(() => {
    if (timeLeft !== null) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1000);
      }, 1000);

      if (timeLeft <= 0) {
        setAllowNavigation(false);
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  }, [timeLeft]);


  const  redirect = () => {
    handleClick(id)
  }
  

  return (
    <div className={`card ${!allowNavigation ? "disabled" : ""}`} >
      <div className="card__img">
        <img src={image} alt={title} />
      </div>
      <p className="card__title">{title}</p>
      <div className="card__time-container">
        <p className="card__time-left">{formatTimeLeft()}</p>
      </div>
      <div className="card__button-container" onClick={redirect}>
        {allowNavigation && <ButtonDetail />}
      </div>
    </div>
  );
};

export default ProductCard;
