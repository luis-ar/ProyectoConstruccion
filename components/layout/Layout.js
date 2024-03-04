import React from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";
import Informacion from "../ui/Informacion";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
            --verde: #1da507;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto Slab", serif;
            font-weight: 700;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          img {
            max-width: 100%;
          }
        `}
      />

      <Head>
        <title>Alborada del Sur</title>

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/static/img/alboradaIcono1.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@300;400;700&family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/static/CSS/app.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script
          src="https://kit.fontawesome.com/9199bd82d8.js"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main
        css={css`
          margin-top: 17vh;
          background-color: #045776;
          padding-bottom: 30px;
          @media (max-width: 800px) {
            margin-top: 13vh;
          }
        `}
      >
        {props.children}
      </main>
      <Informacion />
    </>
  );
};

export default Layout;
