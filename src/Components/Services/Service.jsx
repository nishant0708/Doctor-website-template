"use client";
import React, { useState } from "react";
import style from "./Service.module.css";
import { SiPicardsurgeles } from "react-icons/si";
import Modal from "./Modal";

const services = [
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },
  {
    img: "/work3.jpg",
    icon: <SiPicardsurgeles className={style.icon} />,
    department: "Surgery Dep",
    hoverHead: "Childcare Dep",
    hoverDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    detailDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo obcaecati commodi soluta sequi vero laudantium deleniti vitae ut eius temporibus perspiciatis doloribus voluptates impedit, quibusdam amet ipsum natus, eligendi ab
     Amet porro facilis incidunt fugit itaque corrupti, error distinctio culpa animi ut aperiam odio magnam, sit, inventore ratione qui repudiandae. Ea laborum asperiores dolores veniam quis fugiat tempore accusamus est.
     Explicabo quisquam similique vero nemo expedita commodi, vitae officiis sed esse quaerat iure voluptatum unde. Voluptatem illo consequatur quod dolorem numquam odio vitae sint quos, fugit, pariatur doloremque laboriosam ipsa.`,
  },

  // Add more service objects as needed
];

const Service = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleDetailsClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className={style.Service}>
      <p className={style.servicehead}>
        <span>
          <img src="/vaccine.png" alt="" />
        </span>
        Services We Offer
        <span>
          <img src="/vaccine.png" alt="" />
        </span>
        
      </p>
      <hr />
      <div className={style.sevicecontainer}>
        {services.map((service, index) => (
          <div key={index} className={style.servicebox}>
            <img src={service.img} alt="" className={style.serviceimg} />
            <p className={style.servicetext}>
              {service.icon} {service.department}
            </p>
            <div className={style.hovertext}>
              <p className={style.hovertexthead}>{service.hoverHead}</p>
              <p className={style.hovertextdesc}>{service.hoverDesc}</p>
              <a
                className={style.hovertextbut}
                onClick={() => handleDetailsClick(service)}
              >
                Details
              </a>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal service={selectedService} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Service;
