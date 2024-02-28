import Layout from "../components/layout/Layout";
import React, { useEffect, useState, useContext } from "react";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../Hooks/useProductos";
import Slider from "@/components/ui/Slider";
import { css } from "@emotion/react";
import estilos from "@/styles/Nosotros.module.css";
// npm i @emotion/core @emotio/styled babel-plugin-emotion @emotion/babel-preset-css-prop
// npm install @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop @babel-core @emotion/react –save

export default function Home() {
  const { productos } = useProductos("creado");

  const datosFiltrados = productos.filter(
    (item) => item.categoria !== "habilitacionUrbana"
  );

  return (
    <div>
      <Layout>
        <Slider />
        {/* <div className="listado-productos">
          <div className="contenedor">
            <ul >
              {datosFiltrados.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div> */}

        <div
          css={css`
            margin-top: 20px;
            margin-bottom: 10vh;
          `}
        >
          <div>
            <h1
              css={css`
                text-align: center;
                font-size: 2.5rem;
              `}
            >
              Cada casa tiene una historia, permítenos ser parte de la tuya
              <p
                css={css`
                  font-size: 3.5rem;
                  color: #085af0;
                  font-weight: bold;
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
                @media (max-width: 1000px) {
                  font-size: 3rem;
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
                  <h3>LOTES-TERRENOS DE 90m²</h3>
                  <p>
                    No pierdas la oportunidad de asegurar tu propio espacio en
                    uno de nuestros codiciados lotes. ¡El comienzo de una nueva
                    aventura te espera!
                  </p>
                  <div className={estilos.link}></div>
                </div>
              </div>

              <div className={estilos.card}>
                <div className={`${estilos.face} ${estilos.front}`}>
                  <img src="/static/img/terreno120.jpeg" />
                  <h3 className={estilos.nExpert}>LOTES-TERRENOS DE 120m²</h3>
                </div>

                <div className={`${estilos.face} ${estilos.back}`}>
                  <h3>LOTES-TERRENOS DE 120m²</h3>
                  <p>
                    Los sueños toman forma en nuestros lotes. ¡Descubre el lugar
                    donde tu imaginación puede florecer y tu hogar puede crecer!
                  </p>
                  <div className={estilos.link}></div>
                </div>
              </div>
            </section>
          </div>
          <div
            css={css`
              margin: 0 auto;
              height: 50vh;
              width: 98%;
              border-radius: 10px;
              background-color: #20c806;
              padding: 0 10px;
              display: flex;
              @media (max-width: 1000px) {
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
                  @media (max-width: 1000px) {
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
                @media (max-width: 1000px) {
                  width: 100%;
                  flex-direction: row;
                }
              `}
            >
              <p
                css={css`
                  font-size: 3rem;
                  color: white;
                  font-weight: bold;
                  text-align: center;
                  @media (max-width: 1000px) {
                    font-size: 1.2rem;
                  }
                `}
              >
                Con nuestra oferta especial de preventa, puedes ser propietario
                de un lote con un descuento del 7%. ¡No esperes más para
                asegurar tu futuro!
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
                    @media (max-width: 1000px) {
                      width: 80%;
                    }
                  `}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
