import React, { useContext, useEffect, useState } from "react";
import styles from "@/styles/BarraCelular.module.css";
import styled from "@emotion/styled";
import { FirebaseContext } from "@/firebase";
const MenuContenedor = styled.div`
  display: none;
  width: 100vw;
  @media (max-width: 1000px) {
    display: block;
  }
`;
const MenuCelular = () => {
  const [isActive, setIsActive] = useState("lista1");
  const { usuario, firebase } = useContext(FirebaseContext);
  const mostrarMensaje = () => {};
  return (
    <>
      <MenuContenedor>
        <div className={styles.navigation}>
          <ul>
            {!usuario && mostrarMensaje()}
            <li
              className={`${styles.list} ${
                isActive == "lista1" ? styles.active : ""
              }`}
            >
              <a
                href="#"
                onClick={() => {
                  setIsActive("lista1");
                }}
              >
                <span className={styles.icon}>
                  <i className="bx bx-home-heart"></i>
                </span>
                <span className={styles.text}>Inicio</span>
              </a>
            </li>
            <li
              className={`${styles.list} ${
                isActive == "lista2" ? styles.active : ""
              }`}
            >
              <a
                href="#"
                onClick={() => {
                  setIsActive("lista2");
                }}
              >
                <span className={styles.icon}>
                  <i className="bx bx-star"></i>
                </span>
                <span className={styles.text}>Destacados</span>
              </a>
            </li>

            {usuario && (
              <li
                className={`${styles.list} ${
                  isActive == "lista3" ? styles.active : ""
                }`}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive("lista3");
                  }}
                >
                  <span className={styles.icon}>
                    <i className="bx bx-news"></i>
                  </span>
                  <span className={styles.text}>Nuevo Producto</span>
                </a>
              </li>
            )}
            {!usuario ? (
              <div className={styles.contenedorIndicator} id="container">
                <div className={styles.indicator}></div>
              </div>
            ) : (
              <div className={styles.contenedorIndicator1}>
                <div className={styles.indicator}></div>
              </div>
            )}
          </ul>
        </div>
      </MenuContenedor>
    </>
  );
};

export default MenuCelular;
