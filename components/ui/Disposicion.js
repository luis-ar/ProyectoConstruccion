import React from "react";
import { css } from "@emotion/react";

const Disposicion = ({ lugar }) => {
  const { img, inf, nombre } = lugar;
  return (
    <div
      css={css`
        display: flex;
        margin: 30px;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
        :last-child {
          border-bottom: none;
        }
        @media (max-width: 600px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 80%;
            border-radius: 20px;
            height: 300px;
          }
          @media (max-width: 600px) {
            width: 100%;
            margin: 20px 0;
            img {
              height: 200px;
            }
          }
        `}
      >
        <img src={`/static/img/${img}`} />
      </div>
      <div
        css={css`
          width: 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: justify;
          padding-right: 20px;
          @media (max-width: 600px) {
            width: 100%;
            justify-content: center;
            padding-right: 0;
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1995ad;
            border-radius: 10px;
            margin-bottom: 15px;
            color: white;
            font-size: 30px;
            font-weight: bold;
            @media (max-width: 600px) {
              font-size: 15px;
            }
          `}
        >
          {nombre}
        </div>
        <p>{inf}</p>
      </div>
    </div>
  );
};

export default Disposicion;
