import React, { useContext } from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";
import BarraFiltro from "../ui/BarraFiltro";
import MenuCelular from "../ui/MenuCelular";
import SliderBarra from "../ui/SliderBarra";
import BarraSimple from "../ui/BarraSimple";
const ContenedorHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  height: 10vh;
  border-bottom: 4px solid black;
  z-index: 5;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
// const BarraLateral = styled.div`
//   background-color: aqua;
//   width: 40%;
//   height: 88vh;
//   position: fixed;
//   top: 12vh;
//   z-index: 10;
//   background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//   display: flex;
//   flex-direction: column;
//   grid-template-rows: 1fr 1fr 1fr;
//   align-items: center;
//   transform: translate(-110%);
//   box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.5);
//   a {
//     flex: 1;
//     font-size: 20px;
//     color: white;
//     text-decoration: none;
//     height: 20%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     text-align: center;
//     &:hover {
//       background-color: rgb(229, 221, 221, 0.3);
//     }
//   }
//   @media (max-width: 490px) {
//     width: 32%;
//     a {
//       font-size: 15px;
//     }
//   }
// `;

const Logo = styled.div`
  .iconoEscritorio {
    width: 150px;
    margin-right: 15px;
    margin-left: 5px;
  }

  .iconoCelular {
    display: none;
  }

  @media (max-width: 800px) {
    .iconoEscritorio {
      display: none;
    }

    .iconoCelular {
      display: block;
      width: 30px;
      margin-right: 40px;
      margin-left: 5px;
    }
  }
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  // let pase = true;
  // const MostrarBarra = () => {
  //   const barraLateral = document.querySelector(".barraLateral");
  //   if (pase) {
  //     barraLateral.style.transform = "translate(0)";
  //     pase = false;
  //   } else {
  //     barraLateral.style.transform = "translate(-110%)";
  //     pase = true;
  //   }
  // };

  return (
    <>
      <header>
        <ContenedorHeader>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            {/* <div
              css={css`
                display: flex;
                align-items: center;
                font-size: 40px;
                margin-left: 10px;
                display: none;
                @media (max-width: 1000px) {
                  display: block;
                }
                @media (max-width: 550px) {
                  font-size: 3rem;
                }
              `}
              onClick={MostrarBarra}
            >
              <i class="bx bx-menu"></i>
            </div> */}
            <Link
              href="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <Logo>
                <img src="/static/img/logo.png" className="iconoCelular" />
                <img src="/static/img/future.png" className="iconoEscritorio" />
              </Logo>
            </Link>
            {/* Buscador aqui */}
            <Buscar />

            {/* Nav aqui */}
            <Navegacion />
          </div>

          <div
            css={css`
              display: flex;
              align-items: center;
              margin-right: 10px;
            `}
          >
            {usuario ? (
              <>
                {/* Menu de administracion */}
                <p
                  css={css`
                    margin-right: 2rem;
                    text-align: center;
                    @media (max-width: 490px) {
                      font-size: 1.1rem;
                      margin-right: 2rem;
                    }
                  `}
                >
                  Hola: {usuario.displayName}
                </p>
                <Boton
                  bgColor="true"
                  onClick={() => {
                    firebase.cerrarSesion();
                  }}
                >
                  Cerrar Sesion
                </Boton>
              </>
            ) : (
              <>
                <Link href="/Login">
                  <Boton
                    bgColor="true"
                    css={css`
                      margin-right: 10px !important;
                      padding: 6px 6px !important;
                    `}
                  >
                    Login
                  </Boton>
                </Link>
                <Link href="/crear-cuenta">
                  <Boton
                    css={css`
                      margin-right: 10px !important;
                      padding: 6px 6px !important;
                    `}
                  >
                    Crear Cuenta
                  </Boton>
                </Link>
              </>
            )}
          </div>
        </ContenedorHeader>
      </header>
      {/* <div>
        <BarraLateral className="barraLateral">
          <a href="/">Inicio</a>
          <a href="/populares">Populares</a>
          {usuario && (
            <>
              <a href="/nuevoProducto">Nuevo Producto</a>
            </>
          )}
        </BarraLateral>
      </div> */}

      <SliderBarra />
      <div
        css={css`
          position: fixed;
          bottom: 0;
          z-index: 1;
        `}
      >
        <BarraSimple />
      </div>
    </>
  );
};

export default Header;
