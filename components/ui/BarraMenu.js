import React, { useContext } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Router from "next/router";
import { FirebaseContext } from "@/firebase";

const BarraMenu = ({ setPase }) => {
  const { usuario, firebase } = useContext(FirebaseContext);

  const handleOpciones = (lugar) => {
    Router.push(lugar);
  };
  return (
    <div>
      <div
        css={css`
          height: auto;
          width: 100vw;
          position: fixed;
          z-index: 200;
          background-color: rgba(0, 0, 0, 0.5);
          height: 100vh;
        `}
      >
        <div
          css={css`
            background-color: #f6a419;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: solid 0.5px white;
              padding: 10px 30px;
            `}
          >
            <img
              src="/static/img/menuIcono.png"
              className="iconoCelular"
              css={css`
                width: 120px;
              `}
            />
            <i
              className="bx bx-x"
              onClick={() => {
                setPase(false);
              }}
              css={css`
                font-size: 50px;
                color: white;
                cursor: pointer;
              `}
            ></i>
          </div>
          <div
            css={css`
              div {
                color: white;
                padding: 15px 40px;
                font-size: 20px;
                display: flex;
                align-items: center;
                :hover {
                  background-color: #d88800;
                  cursor: pointer;
                }
                i {
                  margin-right: 5px;
                  font-size: 25px;
                }
              }
            `}
          >
            {!usuario && (
              <>
                <div
                  onClick={() => {
                    handleOpciones("/Login");
                    setPase(false);
                  }}
                >
                  <i className="bx bxs-log-in"></i> <p>Login</p>
                </div>{" "}
                <div
                  onClick={() => {
                    handleOpciones("/crear-cuenta");
                    setPase(false);
                  }}
                >
                  <i className="bx bxs-universal-access"></i>{" "}
                  <p>Crear Cuenta</p>
                </div>
              </>
            )}

            <div
              onClick={() => {
                handleOpciones("/");
                setPase(false);
              }}
            >
              <i className="bx bxs-home-heart"></i> <p>Inicio</p>
            </div>
            <div>
              <i className="bx bxs-institution"></i> <p>Lotes</p>
            </div>
            <div
              onClick={() => {
                handleOpciones("/populares");
              }}
            >
              <i className="bx bxs-star"></i>
              <p>Populares</p>
            </div>
            <div
              onClick={() => {
                handleOpciones("/nosotros");
              }}
            >
              <i className="bx bxs-user-circle"></i>
              <p>Nosotros</p>
            </div>

            {usuario && (
              <>
                <div
                  onClick={() => {
                    firebase.cerrarSesion();
                    setPase(false);
                    handleOpciones("/");
                  }}
                >
                  <i className="bx bxs-log-in-circle"></i> <p>Cerrar Sesión</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraMenu;
