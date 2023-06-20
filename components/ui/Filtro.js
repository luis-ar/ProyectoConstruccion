import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Router from "next/router";

const Select = styled.select`
  text-align: center;
  margin-left: 2rem;
  margin-right: 0rem;
`;

const Filtro = () => {
  const [filtro, guardarFiltro] = useState("");

  useEffect(() => {
    if (filtro !== "regreso" && filtro !== "") {
      //redireccionar a /buscar
      Router.push({
        pathname: "/filtro",
        query: { q: filtro },
      });
    } else if (filtro === "regreso") {
      Router.push("/");
    }
  }, [filtro]);
  return (
    <Select
      id="categoria"
      name="categoria"
      value={filtro}
      onChange={(e) => {
        guardarFiltro(e.target.value);
      }}
    >
      <option value="regreso">-- Filtro --</option>
      <option value="departamento">Departamento</option>
      <option value="terreno">Terreno</option>
      <option value="casa">Casa</option>
      <option value="oficina">Oficina</option>
      <option value="localComercial">Local Comercial</option>
    </Select>
  );
};

export default Filtro;
