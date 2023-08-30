import React, { useContext } from "react";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../firebase";
import SliderBarra from "../ui/SliderBarra";
import BarraSimple from "../ui/BarraSimple";
import BarraRedes from "../ui/BarraRedes";
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
      <BarraRedes />
    </>
  );
};

export default Header;
