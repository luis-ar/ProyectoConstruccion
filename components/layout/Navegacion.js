import styled from "@emotion/styled";
import Link from "next/link";
import React, { useContext } from "react";
import { FirebaseContext } from "../../firebase";

const Nav = styled.nav`
  padding-left: 2rem;
  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gris2);
    font-family: "PT Sans", sans-serif;
    &:first-of-type {
      margin-left: 0rem;
    }
    &:last-of-type {
      margin-right: 0rem;
    }
  }
`;
const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href="/">Inicio</Link>
      <Link href="/populares">Populares</Link>
      {usuario && (
        <>
          <Link href="/nuevoProducto">Nuevo Producto</Link>
        </>
      )}
    </Nav>
  );
};

export default Navegacion;
