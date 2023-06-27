import Head from "next/head";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";

function MiPagina() {
  return (
    <div
      css={css`
        width: 100%;

        height: 100%;
        margin: 0;
        position: absolute;
        box-sizing: border-box;
        overflow: hidden;
        top: 0;
        right: 0;
      `}
    >
      <Head>
        <title>Mi Página</title>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBB2CViIy1tu-h-NbBqKkNT97q68K6jgww"></script>
      </Head>
      <Layout>
        <iframe
          src="/prueba.html"
          style={{
            width: "100%",
            height: "76vh",
            boxSizing: "border-box",
            backgroundColor: "black",
            padding: "0",
            margin: "0",
          }}
        />
      </Layout>
    </div>
  );
}

export default MiPagina;
