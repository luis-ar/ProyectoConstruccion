import React, { useEffect } from "react";
import estilos from "@/styles/Nosotros.module.css";
import Imagen6 from "@/public/static/img/seis.jpg";
const nosotros = () => {
  const ContenedorLight = (e) => {
    const imagenesLight = document.querySelector(".agregarImagen");
    const contenedorLight = document.querySelector(".imagenLight");
    if (e.target !== imagenesLight) {
      contenedorLight.classList.toggle("show");
      imagenesLight.classList.toggle("showImage");
    }
  };
  const ImagenAmplia = () => {
    const imagenesLight = document.querySelector(".agregarImagen");
    const contenedorLight = document.querySelector(".imagenLight");
    imagenesLight.src = e.target.src;
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
  };

  useEffect(() => {}, []);
  return (
    <div style={{ margin: "-8px" }}>
      <header className={estilos.header} id="inicio">
        <nav className={estilos.menuNavegacion}>
          <a href="#inicio">Inicio</a>
          <a href="#servicio">Servicio</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#expertos">Expertos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className={`${estilos.contenedor1} ${estilos.head}`}>
          <h1 className={estilos.titulo}>Convertimos tus sueños en realidad</h1>
          <p className={estilos.copy}>
            "El dinero no es el objetivo final, sino una herramienta para lograr
            tus metas. Administra sabiamente tus gastos y convierte tus metas en
            realidad"
          </p>
        </div>
      </header>
      <main>
        <section className={`${estilos.services} ${estilos.contenedor1}`}>
          <h2 className={estilos.subtitulo}>Nuestro Servicio</h2>
          <div className={estilos.contenedorServicio}>
            <img src="/static/img/recreacion.jpg" alt="" />
            <div className={estilos.checklistServicio}>
              <div className={estilos.service}>
                <h3 className={estilos.nService}>
                  <span className={estilos.number}>1</span>Educación Financiera
                </h3>
                <p>
                  Los administradores de gastos pueden proporcionarte educación
                  financiera y enseñarte técnicas y estrategias para administrar
                  tus finanzas de manera más efectiva.
                </p>
              </div>
              <div className={estilos.service}>
                <h3 className={estilos.nService}>
                  <span className={estilos.number}>2</span>Asesoramiento
                  Financiero
                </h3>
                <p>
                  Ayudamos a identificar áreas en las que puedes reducir gastos,
                  ofrecerte estrategias para ahorrar dinero y brindarte
                  recomendaciones sobre cómo mejorar tu situación financiera.
                </p>
              </div>
              <div className={estilos.service}>
                <h3 className={estilos.nService}>
                  <span className={estilos.number}>3</span>Seguimiento a tus
                  Ingresos y Gastos
                </h3>
                <p>
                  Para tener una visión clara de tu situación financiera, es
                  fundamental hacer un seguimiento de todos tus ingresos y
                  gastos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={estilos.gallery} id="portafolio">
          <div className={estilos.contenedor1}>
            <h2 className={estilos.subtitulo}>Galeria</h2>
            <div className={estilos.contenedorGaleria}>
              <img
                src="/static/img/recreacion.jpg"
                onClick={(e) => {
                  const imagenesLight =
                    document.querySelector("#agregarImagen");
                  const contenedorLight =
                    document.querySelector("#imagenLight");
                  imagenesLight.src = e.target.src;
                  contenedorLight.classList.toggle("show");
                  imagenesLight.classList.toggle("showImage");
                }}
                alt=""
                className={estilos.imgGaleria}
              />
              <img
                src="/static/img/recreacion.jpg"
                onClick={ImagenAmplia}
                alt=""
                className={estilos.imgGaleria}
              />
              <img
                src="/static/img/recreacion.jpg"
                onClick={ImagenAmplia}
                alt=""
                className={estilos.imgGaleria}
              />
              <img
                src="/static/img/recreacion.jpg"
                onClick={ImagenAmplia}
                alt=""
                className={estilos.imgGaleria}
              />
              <img
                src="/static/img/recreacion.jpg"
                onClick={ImagenAmplia}
                alt=""
                className={estilos.imgGaleria}
              />
              <img
                src="/static/img/recreacion.jpg"
                onClick={ImagenAmplia}
                alt=""
                className={estilos.imgGaleria}
              />
            </div>
          </div>
        </section>
        <section
          className={estilos.imagenLight}
          id="imagenLight"
          onClick={ContenedorLight}
        >
          <img
            src="/static/img/recreacion.jpg"
            alt=""
            className={estilos.close}
          />
          <img
            src="/static/img/recreacion.jpg"
            alt=""
            className={estilos.agregarImagen}
            id="agregarImagen"
          />
        </section>

        <div className={estilos.contenedor1} id="expertos">
          <h2 className={estilos.subtitulo}>Expertos en:</h2>
          <section className={estilos.experts}>
            <div className={estilos.card}>
              <div className={`${estilos.face} ${estilos.front}`}>
                <img src="/static/img/recreacion.jpg" />
                <h3 className={estilos.nExpert}>Analisis</h3>
              </div>

              <div className={`${estilos.face} ${estilos.back}`}>
                <h3>Analisis</h3>
                <p>
                  Se pueden identificar ineficiencias o gastos innecesarios,
                  esto puede llevar a la implementación de medidas de reducción
                  de costos.
                </p>
                <div className={estilos.link}></div>
              </div>
            </div>

            <div className={estilos.card}>
              <div className={`${estilos.face} ${estilos.front}`}>
                <img src="/static/img/recreacion.jpg" />
                <h3 className={estilos.nExpert}>Gestión</h3>
              </div>

              <div className={`${estilos.face} ${estilos.back}`}>
                <h3>Gestión</h3>
                <p>
                  Permite tener un mayor control sobre los recursos financieros
                  de la empresa, al establecer políticas claras, procesos de
                  aprobación y límites de gastos.
                </p>
                <div className={estilos.link}></div>
              </div>
            </div>

            <div className={estilos.card}>
              <div className={`${estilos.face} ${estilos.front}`}>
                <img src="/static/img/recreacion.jpg" />
                <h3 className={estilos.nExpert}>Administración</h3>
              </div>

              <div className={`${estilos.face} ${estilos.back}`}>
                <h3>Administración</h3>
                <p>
                  Involucra la creación de presupuestos detallados que asignan
                  los recursos financieros de manera adecuada, esto permite
                  establecer límites y metas de gastos.
                </p>
                <div className={estilos.link}></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default nosotros;
