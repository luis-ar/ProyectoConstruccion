import React, { useContext, useState } from "react";
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
import Informacion from "../ui/Informacion";
import BarraMenu from "../ui/BarraMenu";

const ContenedorHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  height: 15vh;
  border-bottom: 4px solid black;
  z-index: 5;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    height: 12vh;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      width: 100px;
      margin-right: 10px;
      margin-left: 5px;
    }
  }
`;

const Header = () => {
  const { usuario, firebase } = useContext(FirebaseContext);
  const [pase, setPase] = useState(false);
  return (
    <>
      <header>
        <ContenedorHeader>
          {pase && <BarraMenu setPase={setPase} />}

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
                <img
                  src="/static/img/alboradaIcono1.png"
                  className="iconoCelular"
                />
                <img
                  src="/static/img/alboradaIcono1.png"
                  className="iconoEscritorio"
                />
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
              </>
            ) : (
              <div
                css={css`
                  cursor: pointer;
                  display: none;
                  @media (min-width: 1000px) {
                    display: flex;
                  }
                `}
              >
                <Link href="/Login">
                  <Boton
                    bgColor="true"
                    css={css`
                      margin-right: 10px !important;
                    `}
                  >
                    Login
                  </Boton>
                </Link>
                <Link href="/crear-cuenta">
                  <Boton
                    css={css`
                      margin-right: 10px !important;
                    `}
                  >
                    Crear Cuenta
                  </Boton>
                </Link>
              </div>
            )}

            <div>
              <i
                onClick={() => {
                  setPase(true);
                }}
                className="bx bx-menu"
                css={css`
                  font-size: 25px;
                  cursor: pointer;
                  @media (min-width: 1000px) {
                    display: none;
                  }
                `}
              ></i>
            </div>
          </div>
        </ContenedorHeader>
      </header>
    </>
  );
};

export default Header;
