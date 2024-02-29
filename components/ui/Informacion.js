import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Informacion = () => {
  const PiePagina = styled.footer`
    background: #375e97;
    padding-bottom: 0.1px;
    margin-top: 30px;
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 60px;
      padding-bottom: 40px;
    }
    .contact-us {
      width: 40%;
      color: #fff;
    }
    .brand {
      font-weight: 500;
      font-size: 40px;
      margin-bottom: 10px;
    }
    .brand + p {
      font-weight: 500;
    }
    .social-media {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
    .social-media-icon {
      display: inline-block;
      margin-left: 20px;
      width: 60px;
      height: 60px;
      border: 1px solid white;
      border-radius: 50%;
      text-align: center;
      color: white;
    }
    .social-media-icon:hover {
      background: white;
      color: #9f8ad0;
    }

    .social-media-icon i {
      font-size: 30px;
      line-height: 60px;
    }
    .line {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      height: 2px;
      background: white;
      margin-bottom: 60px;
    }
    .contenedor1 {
      width: 90%;
      max-width: 1200px;
      overflow: hidden;
      margin: auto;
      padding: 60px 0;
    }
    @media screen and (max-width: 800px) {
      .footer-content {
        justify-content: center;
      }
      .social-media {
        width: 80%;
        justify-content: space-evenly;
      }
      .social-media-icon {
        margin-left: 0;
      }

      .social-media i {
        margin-left: 0;
      }
      .contact-us {
        text-align: center;
        width: 80%;
        margin-bottom: 40px;
      }
    }

    @media screen and (max-width: 500px) {
      .social-media {
        width: 100%;
      }
      .contact-us {
        width: 90%;
      }
      .brand {
        font-size: 30px;
      }
    }
  `;
  return (
    <PiePagina id="contacto">
      <div className="contenedor1 footer-content">
        <div className="contact-us">
          <h2 className="brand">CORPORACIÓN FUTURE SAC</h2>
          <p>
            Expertos en encontrar el hogar perfecto que se adapte a tus
            necesidades y sueños
          </p>
          <p
            css={css`
              margin-top: 10px;
              font-weight: bold;
              font-size: 18px;
            `}
          >
            Tef: 977684050
          </p>
        </div>
        <div className="social-media">
          <a
            target="_blank"
            href="https://goo.gl/maps/PXo8dJAT9NnDjSzP6"
            className="social-media-icon"
          >
            <i className="bx bx-map"></i>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100091853778009"
            className="social-media-icon"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/Expense1Manager"
            className="social-media-icon"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://instagram.com/expen.semanager?igshid=ZDdkNTZiNTM="
            className="social-media-icon"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>
      <div className="line"></div>
    </PiePagina>
  );
};

export default Informacion;
