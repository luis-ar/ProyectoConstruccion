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
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
const Navegacion = () => {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link
        href="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Inicio
      </Link>
      <Link
        href="/Lotes"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Lotes
      </Link>
      <Link
        href="/populares"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Populares
      </Link>

      {usuario && usuario.email == "adminalborada@gmail.com" && (
        <>
          <Link
            href="/nuevoProducto"
            onClick={() => {
              localStorage.clear();
            }}
          >
            Nuevo Producto
          </Link>
        </>
      )}
      <Link
        href="/nosotros"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Nosotros
      </Link>
    </Nav>
  );
};

export default Navegacion;
