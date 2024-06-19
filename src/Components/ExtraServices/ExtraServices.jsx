import React from 'react';
import styles from "./ExtraServices.module.css";

const ExtraServices = ({ services }) => {
  return (
    <section className={styles.extraServices_main}>
      <div className={styles.extraServices}>
        {services?.map((service, index) => (
          <div key={index} className={styles.extraServices_item}>
            <div className={styles.extraServices_img}>
              <img src={service.imgSrc} alt={service.altText} />
            </div>
            <div className={styles.extraServices_details}>
              <p className={styles.extrahead}>{service.header}</p>
              <p className={styles.extradesc}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraServices;
