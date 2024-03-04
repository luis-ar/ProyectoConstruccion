import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";
import { css, keyframes } from "@emotion/react";

const Producto = styled.li`
  padding: 4rem;
  border-radius: 20px;
  border: 5px solid #046d87;
  margin-bottom: 7px;
  background-color: #FFD700;
  color: white;
  :last-child {
    margin-bottom: 5px;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 550px) {
    padding-top: 1em;
    padding-bottom: 1em;
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
  margin: 0;
  :hover {
    cursor: pointer;
    color: blue;
  }
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;

  span {
    font-size: 15px;
  }
  @media (max-width: 550px) {
    font-size: 15px;
    span {
      font-size: 12px;
    }
  }
`;

const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: black;
  @media (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
const Comentarios = styled.div`
  margin-top: rem;
  margin-bottom: 5px;
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
    @media (max-width: 550px) {
      width: 1.5rem;
    }
  }

  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
    @media (max-width: 550px) {
      font-size: 1.2rem;
    }
  }
`;

// npm i date-fns
const Imagen = styled.img`
  width: 200px;
  box-shadow: 0 0 5px 1px black;
  @media (max-width: 550px) {
    width: 150px;
  }
`;

const Votos = styled.div`
  flex: 0 0 auto;
  text-align: center;
  border: 1px solid #046d87;
  padding: 1rem 3rem;
  div {
    font-size: 2rem;
  }
  p {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
  @media (max-width: 550px) {
    padding: 5px;
    div {
      font-size: 1.3rem;
    }
    p {
      margin: 0;
      font-size: 1.3rem;
      font-weight: 700;
    }
  }
`;
const ContenedorImagen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Publicado = styled.p`
  margin-bottom: 5px;
  @media (max-width: 550px) {
    font-size: 12px;
  }
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
    categoria,
  } = producto;

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <>
      <Producto>
        <DescripcionProducto>
          <ContenedorImagen>
            <Imagen src={urlimagen} />
          </ContenedorImagen>
          <div>
            <Link
              href="/productos/[id]"
              as={`/productos/${id}`}
              css={css`
                color: white;
              `}
            >
              <Titulo>{nombre}</Titulo>
            </Link>
            <TextoDescripcion>{descripcion}</TextoDescripcion>
            <Precio>
              <span>Precio: </span> {formatearPresupuesto(parseInt(precio))}
            </Precio>
            <Precio>
              <span>Área: </span> {categoria}m²
            </Precio>
            <Comentarios>
              <div>
                <img src="/static/img/comentario.png" />
                <p>{comentarios.length} Comentarios</p>
              </div>
            </Comentarios>
            <Publicado>
              Publicado hace :{" "}
              {formatDistanceToNow(new Date(creado), { locale: es })}
            </Publicado>
          </div>
        </DescripcionProducto>
        <Votos>
          <div>&#9650;</div>
          <p>{votos}</p>
        </Votos>
      </Producto>
      {/* <style jsx>
        {`
          .prueba {
            color: red;
            
          }
        `}
      </style> */}
    </>
  );
};

export default DetallesProducto;
