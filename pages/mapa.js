import Head from "next/head";
import { css } from "@emotion/react";
import Layout from "../components/layout/Layout";
import MostrarMapa from "@/components/ui/MostrarMapa";
function MiPagina() {
  return (
    <Layout>
      <div
        css={css`
          height: 76vh;
        `}
      >
        <MostrarMapa></MostrarMapa>
      </div>
    </Layout>
  );
}

export default MiPagina;
