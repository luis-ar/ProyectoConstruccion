import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Router from "next/router";

const InputText = styled.input`
  color: black;
  background-color: white;
  border: 1px solid var(--gris3);
  padding: 1rem;
  width: 180px;
  border: solid 2px #0ae542;
  border-radius: 15px;
  padding-right: 3rem;
  @media (min-width: 550px) {
    min-width: 300px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
    width: 150px;
  }
`;
const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no-repeat;
  background-color: transparent;
  position: absolute;
  right: 1rem;
  top: 1px;
  border: none;
  text-indent: -9999px;
  &:hover {
    cursor: pointer;
  }
`;

const Buscar = () => {
  const [busqueda, guardarBusqueda] = useState("");
  const buscarProducto = (e) => {
    e.preventDefault();
    if (busqueda.trim() === "") return;
    //redireccionar a /buscar
    Router.push({
      pathname: "/buscar",
      query: { q: busqueda },
    });
  };
  return (
    <form
      css={css`
        position: relative;
      `}
      onSubmit={buscarProducto}
    >
      <InputText
        placeholder="Buscar Productos"
        type="text"
        onChange={(e) => {
          guardarBusqueda(e.target.value);
        }}
      />
      <InputSubmit type="submit">Buscar</InputSubmit>
    </form>
  );
};

export default Buscar;
