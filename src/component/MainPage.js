import React, { useState } from "react";
import "./MainPage.css";
import Modal from "./Modal";

const MainPage = () => {
  const [openModal, setModal] = useState(false);
  return (
    <>
      <div className='mainPage-container'>
        <button className='mainPage-btn' onClick={() => setModal(true)}>
          Click Me!
        </button>
      </div>
      <Modal openModal={openModal} setModal={setModal} />
    </>
  );
};

export default MainPage;
