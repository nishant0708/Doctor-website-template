import React from 'react';
import style from "./Modal.module.css"; // Create this CSS file to style your modal
import { IoMdClose } from "react-icons/io";

const Modal = ({ service, closeModal }) => {
  if (!service) return null;

  return (
    <div className={style.modalBackdrop} onClick={closeModal}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{service.hoverHead}</h2>
        <img src={service.img} alt=""/>
        <p>{service.detailDesc}</p>
        <p className={style.cross} onClick={closeModal}><IoMdClose size={40} /></p>
      </div>
    </div>
  );
};

export default Modal;
