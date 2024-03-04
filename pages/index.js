import Layout from "../components/layout/Layout";
import React, { useEffect, useState, useContext } from "react";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../Hooks/useProductos";
import Slider from "@/components/ui/Slider";
import { css } from "@emotion/react";
import estilos from "@/styles/Nosotros.module.css";
import styled from "@emotion/styled";
import Router from "next/router";
// npm i @emotion/core @emotio/styled babel-plugin-emotion @emotion/babel-preset-css-prop
// npm install @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop @babel-core @emotion/react –save

export default function Home() {
  const { productos } = useProductos("creado");

  const datosFiltrados = productos.filter(
    (item) => item.categoria !== "habilitacionUrbana"
  );

  const seleccionarLote = (filtro) => {
    Router.push({
      pathname: "/filtro",
      query: { q: filtro },
    });
  };

  return (
    <div>
      <Layout>
        <Slider />

        <div css={css``}>
          <div
            css={css`
              padding: 0 20px;
            `}
          >
            <h1
              css={css`
                text-align: center;
                font-size: 3.5rem;
                font-family: "Anton", sans-serif;
                font-weight: 400;
                font-style: normal;
                color: white;
                @media (max-width: 1000px) {
                  font-size: 1.5rem;
                }
              `}
            >
              Cada casa tiene una historia, permítenos ser parte de la tuya
              <p
                css={css`
                  font-size: 4rem;
                  color: #3bc4f8;
                  font-weight: bold;
                  @media (max-width: 1000px) {
                    font-size: 2rem;
                  }
                `}
              >
                ¡Encuentra tu próximo hogar con nosotros!
              </p>
            </h1>
          </div>
          <div
            className={estilos.contenedor1}
            id="expertos"
            css={css`
              padding-top: 0 !important;
            `}
          >
            <h2
              className={estilos.subtitulo}
              css={css`
                font-size: 5rem;
                font-weight: bold;
                color: white;
                @media (max-width: 1000px) {
                  font-size: 2.3rem;
                }
              `}
            >
              Contamos con:
            </h2>
            <section className={estilos.experts}>
              <div className={estilos.card}>
                <div className={`${estilos.face} ${estilos.front}`}>
                  <img src="/static/img/terreno90.jpeg" />
                  <h3 className={estilos.nExpert}>LOTES-TERRENOS DE 90m²</h3>
                </div>

                <div className={`${estilos.face} ${estilos.back}`}>
                  <h3
                    css={css`
                      @media (max-width: 400px) {
                        font-size: 2rem !important;
                      }
                    `}
                  >
                    LOTES-TERRENOS DE 90m²
                  </h3>
                  <p>
                    No pierdas la oportunidad de asegurar tu propio espacio en
                    uno de nuestros codiciados lotes. ¡El comienzo de una nueva
                    aventura te espera!
                  </p>
                  <div className={estilos.link}>
                    <button
                      onClick={() => {
                        seleccionarLote("90");
                      }}
                      css={css`
                        cursor: pointer;
                        padding: 10px 20px;
                        margin-top: 10px;
                        background-color: #0881df;
                        color: white;
                        font-weight: bold;
                        border-radius: 10px;
                      `}
                    >
                      VER LOTES
                    </button>
                  </div>
                </div>
              </div>

              <div className={estilos.card}>
                <div className={`${estilos.face} ${estilos.front}`}>
                  <img src="/static/img/terreno120.jpeg" />
                  <h3 className={estilos.nExpert}>LOTES-TERRENOS DE 120m²</h3>
                </div>

                <div className={`${estilos.face} ${estilos.back}`}>
                  <h3
                    css={css`
                      @media (max-width: 400px) {
                        font-size: 2rem !important;
                      }
                    `}
                  >
                    LOTES-TERRENOS DE 120m²
                  </h3>
                  <p>
                    Los sueños toman forma en nuestros lotes. ¡Descubre el lugar
                    donde tu imaginación puede florecer y tu hogar puede crecer!
                  </p>
                  <div className={estilos.link}>
                    <button
                      css={css`
                        cursor: pointer;
                        padding: 10px 20px;
                        margin-top: 10px;
                        background-color: #0881df;
                        color: white;
                        font-weight: bold;
                        border-radius: 10px;
                      `}
                      onClick={() => {
                        seleccionarLote("120");
                      }}
                    >
                      VER LOTES
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            css={css`
              margin: 0 auto;
              height: auto;
              width: 98%;
              border-radius: 10px;
              background-color: #038bab;
              display: flex;
              flex-direction: column;
              @media (max-width: 400px) {
                flex-direction: column;
                align-items: center;
              }
            `}
          >
            <div
              css={css`
                display: flex;

                @media (max-width: 400px) {
                  flex-direction: column;
                  align-items: center;
                }
              `}
            >
              <div
                css={css`
                  width: 40%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  src="/static/img/casaDinero.png"
                  css={css`
                    width: 60%;
                    @media (max-width: 400px) {
                      width: 100%;
                    }
                  `}
                />
              </div>
              <div
                css={css`
                  width: 60%;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  padding-top: 15px;
                  justify-content: center;
                  @media (max-width: 400px) {
                    width: 100%;
                    flex-direction: row;
                  }
                `}
              >
                <p
                  css={css`
                    font-size: 3rem;
                    text-align: center;
                    padding: 0 10px;
                    text-transform: uppercase;
                    font-family: "Abril Fatface", serif;
                    font-weight: 400;
                    font-style: normal;
                    color: white;
                    @media (max-width: 400px) {
                      font-size: 1.2rem;
                    }
                  `}
                >
                  Con nuestra oferta especial de preventa, puedes ser
                  propietario de un lote con un descuento del 7%. ¡No esperes
                  más para asegurar tu futuro!
                </p>

                <div
                  css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <img
                    src="/static/img/compraCasa.png"
                    css={css`
                      width: 40%;
                      border-radius: 10px;
                      @media (max-width: 400px) {
                        width: 80%;
                      }
                    `}
                  />
                </div>
              </div>
            </div>
            <div
              css={css`
                width: 100%;
              `}
            >
              <div
                css={css`
                  width: 100%;
                  background-color: #ffa500;
                  height: 60px;
                  margin-top: 20px;
                  border-bottom-left-radius: 10px;
                  border-bottom-right-radius: 10px;
                  font-size: 30px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-weight: bold;
                  text-transform: uppercase;
                  cursor: pointer;
                  @media (max-width: 400px) {
                    font-size: 20px;
                  }
                `}
              >
                <p
                  onClick={() => {
                    Router.push("/Detalles");
                  }}
                >
                  Más detalles
                </p>
                <i
                  className="bx bx-chevrons-right"
                  css={css`
                    font-size: 50px;
                    @media (max-width: 400px) {
                      font-size: 30px;
                    }
                  `}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
