import Layout from "../components/layout/Layout";
import React, { useEffect, useState, useContext } from "react";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../Hooks/useProductos";
import Spinner from "@/components/ui/Spinner";
import SliderBarra from "@/components/ui/SliderBarra";
// npm i @emotion/core @emotio/styled babel-plugin-emotion @emotion/babel-preset-css-prop
// npm install @emotion/core @emotion/styled babel-plugin-emotion @emotion/babel-preset-css-prop @babel-core @emotion/react –save

export default function populares() {
  const { productos } = useProductos("votos");
  if (Object.keys(productos).length === 0) return <Spinner />;

  return (
    <div>
      <Layout>
        <SliderBarra />

        <div className="listado-productos">
          <div className="contenedor">
            <ul>
              {productos.map((producto) => (
                <DetallesProducto key={producto.id} producto={producto} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
