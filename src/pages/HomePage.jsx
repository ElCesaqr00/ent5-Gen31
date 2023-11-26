import { useRef, useState } from "react";
import { setTrainerName } from "../store/slices/trainerNameSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage = () => {
  const inputName = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()));
    navigate("/pokedex");
  };
  return (
    <div className="pokedex_container">
      <div className="pokedex_img_container">
        <img className="pokedex_Img" src="/image11.png" alt="" />
      </div>
      <h1 className="pokedex_Title">Hi Trainer!</h1>
      <p className="pokedex_Text">To start, please give me your trainer name</p>
      <form className="pokedex_Form" onSubmit={handleSubmit}>
        <input className="pokedex_Input" ref={inputName} type="text" placeholder="Your name..." />
        <button className="pokedex_Btn">Let´s Go!</button>
      </form>
      <img className="pokedex_footer-image" src="/Group216.svg" alt="" />
    </div>
  );
};

export default HomePage;
