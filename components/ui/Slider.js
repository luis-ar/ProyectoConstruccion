import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Contenedor = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 300px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 500px) {
    height: 280px;
  }
`;
const TextoInformativo = styled.div`
  background-color: black;
  z-index: 1;
  color: white;
`;
const Slider = () => {
  return (
    <>
      <Contenedor className="container">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            gap: "1rem",
            autoplay: true,
            interval: "3000",
          }}
        >
          <SplideSlide>
            <Image src="/static/img/familia.jpg" alt="Picture of the author" />
          </SplideSlide>
          <SplideSlide>
            <Image src="/static/img/casa.jpg" alt="Picture of the author" />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/static/img/departamento.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>{" "}
          <SplideSlide>
            <Image
              src="/static/img/recreacion.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
        </Splide>
      </Contenedor>
    </>
  );
};

export default Slider;
