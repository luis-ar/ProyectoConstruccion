import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Router from "next/router";
import { useRouter } from "next/router";
const Lista = styled.div`
  /* border-bottom: 4px solid blue; */
  text-align: center;

  i {
    font-size: 15px;
    margin-top: 6px;
  }
  h2 {
    font-size: 12px;
    font-weight: 200;
    margin-bottom: 3px;
  }
`;
const Content = styled.div`
  background-color: #0590b2;
  color: white;
  .css-qen1cq-SliderBarra {
    height: auto;
  }
  .nuevo {
    background-color: #eaeae9 !important;
    border-bottom: 6px solid black !important;
  }
  .splide__arrows {
    @media (max-width: 700px) {
      display: none !important;
    }
  }

  div {
    .splide__track--nav > .splide__list > .splide__slide {
      border: none;
    }

    li {
      :hover {
        background-color: #03809f;
      }
    }
  }
`;

const SliderBarra = () => {
  const [filtro, guardarFiltro] = useState("");
  //   const [activeDiv, setActiveDiv] = useState(null);

  const handleDivClick = (divId) => {
    setActiveDiv(divId);
    console.log("clcik");
  };
  useEffect(() => {
    if (filtro !== "regreso" && filtro !== "") {
      //redireccionar a /buscar
      Router.push({
        pathname: "/filtro",
        query: { q: filtro },
      });
    } else if (filtro === "regreso") {
      Router.push("/");
      localStorage.clear();
    }
  }, [filtro]);

  const router = useRouter();
  const [activeDiv, setActiveDiv] = useState(0);

  useEffect(() => {
    const loadDataFromLocalStorage = async () => {
      // Esperar hasta que se lea el valor del localStorage
      const valorInicial1 = (await localStorage.getItem("indice")) || 0;
      setActiveDiv(valorInicial1);
    };

    loadDataFromLocalStorage();
  }, [router]);

  return (
    <>
      <Content className="container">
        <Splide
          aria-label="My Favorite Images"
          options={{
            drag: true,
            gap: 10,
            pagination: false,
            isNavigation: true,
            perPage: 3,
            arrows: false,
            focus: "center",
            perMove: 1,
            lazyLoad: false,
          }}
        >
          <SplideSlide>
            <Lista
              className={`div-box ${activeDiv == 1 ? "nuevo" : ""}`}
              onClick={() => {
                guardarFiltro("disponible");
                handleDivClick("1");
                localStorage.setItem("indice", "1");
              }}
            >
              <div>
                <i className="bx bxs-home-alt-2"></i>
                <h2>Disponibles</h2>
              </div>
            </Lista>
          </SplideSlide>
          <SplideSlide>
            <Lista
              className={`div-box ${activeDiv == 2 ? "nuevo" : ""}`}
              onClick={() => {
                guardarFiltro("reservado");
                handleDivClick("2");
                localStorage.setItem("indice", "2");
              }}
            >
              <div>
                <i className="bx bxs-business"></i> <h2>Reservados</h2>
              </div>
            </Lista>
          </SplideSlide>
          <SplideSlide>
            <Lista
              className={`div-box ${activeDiv == 3 ? "nuevo" : ""}`}
              onClick={() => {
                guardarFiltro("ocupado");
                handleDivClick("3");
                localStorage.setItem("indice", "3");
              }}
            >
              <i className="bx bxs-store-alt"></i> <h2>Ocupados</h2>
            </Lista>
          </SplideSlide>
        </Splide>
      </Content>
    </>
  );
};

export default SliderBarra;
