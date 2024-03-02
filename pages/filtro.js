import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../Hooks/useProductos";
import { css } from "@emotion/react";
import SliderBarra from "@/components/ui/SliderBarra";
const filtro = () => {
  //leer lo q me manda del querry en el link

  const router = useRouter();
  const {
    query: { q },
  } = router;
  //todos los productos
  const { productos } = useProductos("creado");
  const [resultado, guardarResultado] = useState([]);
  useEffect(() => {
    const busqueda = q !== undefined && q.toLowerCase();
    const filtro = productos.filter((producto) => {
      // return producto.categoria.toLowerCase().includes(busqueda);

      return (
        producto.categoria.toLowerCase().includes(busqueda) ||
        producto.situacion.estado.toLowerCase().includes(busqueda)
      );
    });
    console.log(filtro);
    guardarResultado(filtro);
  }, [q, productos]);
  return (
    <div>
      <Layout>
        <SliderBarra />
        <div className="listado-productos">
          <div className="contenedor">
            <ul>
              {resultado.length == 0 ? (
                <>
                  <h1
                    css={css`
                      text-align: center;
                      text-transform: uppercase;
                      color: white;
                    `}
                  >
                    No hay Lotes
                  </h1>
                </>
              ) : (
                <>
                  {resultado.map((producto) => (
                    <DetallesProducto key={producto.id} producto={producto} />
                  ))}
                </>
              )}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default filtro;
