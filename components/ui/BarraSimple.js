import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FirebaseContext } from "@/firebase";
import { useRouter } from "next/router";
const Contenedor = styled.div`
  position: relative;
  width: 100vw;
  height: 48px;
  background-color: #b5b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  ul {
    display: flex;
    width: 90%;
    li {
      position: relative;
      list-style: none;
      display: flex;
      flex: 1;
      z-index: 1;
      align-items: center;
      justify-content: center;
    }
  }
  a {
    text-decoration: none;
    display: grid;
    text-align: center;
    font-size: 13px;
    color: black;
  }
  .activo {
    color: red !important;
  }
`;
const BarraSimple = () => {
  let valorInicial = "lista2"; // Valor por defecto
  const router = useRouter();

  if (typeof window !== "undefined") {
    valorInicial = localStorage.getItem("clave") || "lista1";
  }

  const [isActive, setIsActive] = useState("lista1");
  const { usuario, firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const loadDataFromLocalStorage = async () => {
      // Esperar hasta que se lea el valor del localStorage
      const valorInicial1 = (await localStorage.getItem("clave")) || "lista1";
      setIsActive(valorInicial1);
    };

    loadDataFromLocalStorage();
  }, [router]);
  return (
    <Contenedor className="navigation">
      <ul>
        <li className="list">
          <a
            href="/"
            className={isActive == "lista1" ? "activo" : ""}
            onClick={(e) => {
              setIsActive("lista1");
              localStorage.setItem("clave", "lista1");
              localStorage.removeItem("indice");
            }}
          >
            <span className="icon">
              <i className="bx bx-home-heart"></i>
            </span>
            <span className="text">Inicio</span>
          </a>
        </li>
        <li>
          <a
            href="/populares"
            className={isActive == "lista2" ? "activo" : ""}
            onClick={(e) => {
              setIsActive("lista2");
              localStorage.setItem("clave", "lista2");
              localStorage.removeItem("indice");
            }}
          >
            <span className="icon">
              <i className="bx bx-star"></i>
            </span>
            <span className="text">Destacados</span>
          </a>
        </li>

        {usuario && (
          <li>
            <a
              href="/nuevoProducto"
              className={isActive == "lista3" ? "activo" : ""}
              onClick={(e) => {
                setIsActive("lista3");
                localStorage.setItem("clave", "lista3");
                localStorage.removeItem("indice");
              }}
            >
              <span className="icon">
                <i className="bx bx-news"></i>
              </span>
              <span className="text">Nuevo Producto</span>
            </a>
          </li>
        )}
      </ul>
    </Contenedor>
  );
};

export default BarraSimple;
