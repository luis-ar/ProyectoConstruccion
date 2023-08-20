import React from "react";
import styles from "@/styles/Redes.module.css";
const BarraRedes = () => {
  return (
    <>
      <div className={styles.contenedor}>
        <ul>
          <li>
            <a href="#">
              <i className="bx bxl-gmail gmail"></i>Gmail
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-facebook facebook"></i>Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-twitter twitter"></i>Twitter
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-tiktok tiktok"></i>Tiktok
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BarraRedes;
