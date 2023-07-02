import { css } from "@emotion/react";
const MapaAnimada = () => {
  return (
    <iframe
      css={css`
        width: 100%;
        height: 300px;
        box-sizing: border-box;
        overflow: hidden;
        border: 4px solid black;
        margin-top: 15px;
      `}
      src="/prueba2.html"
    />
  );
};

export default MapaAnimada;
