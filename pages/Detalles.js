import Layout from "@/components/layout/Layout";
import React from "react";
import { css } from "@emotion/react";
import Disposicion from "@/components/ui/Disposicion";
const Detalles = () => {
  const lugares = [
    {
      img: "piscina.jpeg",
      nombre: "Zona de Piscina",
      inf: "Nuestro colorido parque infantil es el lugar perfecto para que los más pequeños de la familia dejen volar su imaginación y se sumerjan en horas de diversión y aventura. Con columpios, toboganes, estructuras de escalada y áreas seguras para jugar, los niños pueden disfrutar de actividades al aire libre mientras desarrollan habilidades sociales, físicas y cognitivas.",
    },
    {
      img: "juegos.jpeg",
      nombre: "Zona de Juegos para Niños",
      inf: "Sumérgete en la serenidad de nuestras aguas cristalinas y déjate llevar por la calma y el relax que ofrece nuestra espectacular piscina. Desde refrescantes baños matutinos hasta animadas reuniones familiares bajo el sol, nuestra piscina es el lugar ideal para crear recuerdos inolvidables y disfrutar de momentos de felicidad y conexión con tus seres queridos.",
    },
    {
      img: "gimnasio.jpeg",
      nombre: "Zona de Gimnasio",
      inf: "Haz del bienestar una prioridad en tu vida y descubre un nuevo nivel de vitalidad y energía en nuestro innovador gimnasio al aire libre. Equipado con una amplia variedad de máquinas de ejercicio de última generación y espacios abiertos para practicar yoga o entrenamiento funcional, nuestro gimnasio te ofrece la libertad de ejercitarte en un entorno natural inspirador mientras te pones en forma y cuidas de tu salud y bienestar.",
    },
    {
      img: "areaVerde.jpg",
      nombre: "Espacios Verdes y Áreas de Descanso",
      inf: "Contamos con extensos espacios verdes y áreas de descanso donde puedes disfrutar de la tranquilidad y la belleza de la naturaleza. Desde caminatas matutinas hasta picnics familiares, estos espacios están diseñados para brindarte momentos de paz y serenidad en medio de la vida urbana.",
    },
  ];
  return (
    <Layout>
      <div>
        <h1
          css={css`
            text-align: center;
            @media (max-width: 600px) {
              font-size: 20px;
            }
          `}
        >
          TU FUTURO TE ESPERA
        </h1>
        <p
          css={css`
            text-align: justify;
            background-color: #f5f5f5;
            color: black;
            padding: 10px 30px;
            margin: 0 20px;
            font-size: 20px;
            @media (max-width: 600px) {
              font-size: 15px;
            }
          `}
        >
          ¡Descubre un estilo de vida excepcional en nuestro exclusivo
          desarrollo residencial, donde la felicidad y el bienestar se fusionan
          para crear un ambiente único y acogedor para ti y tu familia! En el
          corazón de nuestro complejo, encontrarás una serie de instalaciones
          recreativas diseñadas meticulosamente para ofrecer una experiencia de
          vida verdaderamente enriquecedora. Desde áreas de juego vibrantes
          hasta una reluciente piscina y un moderno gimnasio al aire libre, cada
          detalle ha sido cuidadosamente considerado para proporcionar el máximo
          disfrute y comodidad.
        </p>
      </div>
      <div
        css={css`
          text-align: center;
          margin-top: 20px;
          font-size: 30px;
          font-weight: bold;
          color: #9f8ad0;
          @media (max-width: 600px) {
            font-size: 15px;
          }
        `}
      >
        <p>DISPONEMOS DE:</p>
      </div>
      {lugares.map((lugar) => (
        <Disposicion lugar={lugar} />
      ))}
    </Layout>
  );
};

export default Detalles;
