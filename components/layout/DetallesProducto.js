import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";
const Producto = styled.li`
  padding: 4rem;

  border-top: 5px solid #8e8e8e;
  border-right: 5px solid #8e8e8e;
  border-left: 5px solid #8e8e8e;

  :nth-child(1) {
    border-bottom: none;
  }

  :last-child {
    border-bottom: 5px solid #8e8e8e;
    margin-bottom: 5px;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const DescripcionProducto = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr); /* Dos columnas de igual ancho */
  }
`;
const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
  span {
    font-size: 15px;
  }
`;

const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`;
const Comentarios = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: 0.3rem 1rem;
    margin-right: 2rem;
  }

  img {
    width: 2rem;
    margin-right: 2rem;
  }

  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;

// npm i date-fns
const Imagen = styled.img`
  width: 200px;
`;

const Votos = styled.div`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid #e1e1e1;
  padding: 1rem 3rem;
  div {
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;
const ContenedorImagen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const DetallesProducto = ({ producto }) => {
  const {
    id,
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    urlimagen,
    votos,
    precio,
  } = producto;

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <Producto>
      <DescripcionProducto>
        <ContenedorImagen>
          <Imagen src={urlimagen} />
        </ContenedorImagen>
        <div>
          <Link href="/productos/[id]" as={`/productos/${id}`}>
            <Titulo>{nombre}</Titulo>
          </Link>
          <TextoDescripcion>{descripcion}</TextoDescripcion>
          <Precio>
            <span>Precio: </span> {formatearPresupuesto(parseInt(precio))}
          </Precio>
          <Comentarios>
            <div>
              <img src="/static/img/comentario.png" />
              <p>{comentarios.length} Comentarios</p>
            </div>
          </Comentarios>
          <p>
            Publicado hace :{" "}
            {formatDistanceToNow(new Date(creado), { locale: es })}
          </p>
        </div>
      </DescripcionProducto>
      <Votos>
        <div>&#9650;</div>
        <p>{votos}</p>
      </Votos>
    </Producto>
  );
};

export default DetallesProducto;
