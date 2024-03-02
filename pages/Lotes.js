import useProductos from "@/Hooks/useProductos";
import DetallesProducto from "@/components/layout/DetallesProducto";
import Layout from "@/components/layout/Layout";
import SliderBarra from "@/components/ui/SliderBarra";
import Spinner from "@/components/ui/Spinner";
import React from "react";
const Lotes = () => {
  const { productos } = useProductos("creado");
  //   console.log(productos);
  //   const datosFiltrados = productos.filter(
  //     (item) => item.categoria !== "habilitacionUrbana"
  //   );
  //   console.log(datosFiltrados);
  if (Object.keys(productos).length === 0) return <Spinner />;
  return (
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
  );
};

export default Lotes;
