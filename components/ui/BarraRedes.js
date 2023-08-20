import React, { useState } from "react";
import styles from "@/styles/Redes.module.css";
const BarraRedes = () => {
  const [hidden, setHidden] = useState(false);
  const ocultarDiv = () => {
    setHidden(true);
    setTimeout(() => {
      setHidden(false);
    }, 3000);
  };

  return (
    <>
      <div className={styles.contenedor}>
        <ul>
          <li className={` ${hidden ? "ocultar" : ""}`} onClick={ocultarDiv}>
            <a href="#">
              <i className="bx bxl-gmail gmail"></i>Gmail
            </a>
          </li>
          <li className={` ${hidden ? "ocultar" : ""}`} onClick={ocultarDiv}>
            <a href="#">
              <i className="bx bxl-facebook facebook"></i>Facebook
            </a>
          </li>
          <li className={` ${hidden ? "ocultar" : ""}`} onClick={ocultarDiv}>
            <a href="#">
              <i className="bx bxl-twitter twitter"></i>Twitter
            </a>
          </li>
          <li className={` ${hidden ? "ocultar" : ""}`} onClick={ocultarDiv}>
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
