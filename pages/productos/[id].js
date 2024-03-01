import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import { FirebaseContext } from "../../firebase";
import {
  collection,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Error404 from "../../components/layout/404";
import Layout from "../../components/layout/Layout";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton1";
import Spinner from "../../components/ui/Spinner";
import MapPage from "@/components/ui/MapaPrueba";
import MapaAnimada from "@/components/ui/MapaAnimada";

const ContenedorProducto = styled.div`
  /* @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  } */
`;
const CreadorProducto = styled.p`
  padding: 0.5rem 2rem;
  background-color: #da552f;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  text-align: center;
`;

const Mapa = styled.div`
  width: 100%;
  height: 300px;
  border: 4px solid black;
`;
const Producto = () => {
  //state del componente
  const [producto, guardarProducto] = useState({});
  const [error, guardarError] = useState(false);
  const [comentario, guardarComentario] = useState({});
  const [consultarDB, guardarConsultarDB] = useState(true);
  const [inputComentario, SetInputComentario] = useState("");

  //routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;
  //context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDB) {
      const obtenerProducto = async () => {
        const productoQuerry = await doc(
          collection(firebase.db, "productos"),
          id
        );
        const producto = await getDoc(productoQuerry);
        if (producto.exists()) {
          guardarProducto(producto.data());
          guardarConsultarDB(false);
        } else {
          guardarError(true);
          guardarConsultarDB(false);
        }
      };
      obtenerProducto();
    }
  }, [id, producto]);

  if (Object.keys(producto).length === 0 && !error) return <Spinner />;

  const {
    comentarios,
    creado,
    descripcion,
    empresa,
    nombre,
    url,
    urlimagen,
    votos,
    creador,
    haVotado,
    cordenadas,
    categoria,
    situacion,
  } = producto;

  //administrar y validar votos
  const votarProducto = () => {
    if (!usuario) {
      return router.push("/login");
    }
    //obtener y sumar un nuevo voto
    const nuevoTotal = votos + 1;

    //verificar si el usuario actual ha votado
    if (haVotado.includes(usuario.uid)) {
      return;
    }
    //guardar el ID del usuario que ha votado
    const nuevoHaVotado = [...haVotado, usuario.uid];

    //actualizar en la bd
    const docRef = doc(firebase.db, "productos", `${id}`);
    updateDoc(docRef, {
      votos: nuevoTotal,
      haVotado: nuevoHaVotado,
    });
    //actualizar el state

    guardarProducto({
      ...producto,
      votos: nuevoTotal,
    });
    guardarConsultarDB(true); //hay un voto, por lo tanto consultar a la db
  };

  //funciones para crear comentario

  const comentariosChange = (e) => {
    guardarComentario({
      ...comentario,
      [e.target.name]: e.target.value,
    });
    SetInputComentario(e.target.value);
  };

  //identifica si el comentario es del creador del producto
  const esCreador = (id) => {
    if (creador.id == id) {
      return true;
    }
  };

  const agregarComentario = async (e) => {
    e.preventDefault();
    if (!usuario) {
      return router.push("/login");
    }

    //informacion extra al comentario
    comentario.usuarioId = usuario.uid;
    comentario.usuarioNombre = usuario.displayName;

    // tomar copia de comentarios y agregar al arreglo

    const nuevosComentarios = [...comentarios, comentario];
    //actualizar la bd
    const docRef = doc(firebase.db, "productos", `${id}`);
    updateDoc(docRef, {
      comentarios: nuevosComentarios,
    });
    //actualizar el state
    guardarProducto({
      ...producto,
      comentarios: nuevosComentarios,
    });
    guardarConsultarDB(true); //hay un conentario, por lo tanto consultar a la db
    SetInputComentario("");
  };
  const cambiarEstado = async (nuevoEstado) => {
    let nuevaSituacion = {};
    if (!usuario) {
      return router.push("/login");
    }
    if (nuevoEstado != "disponible") {
      nuevaSituacion = {
        estado: nuevoEstado,
        comprador: usuario.displayName,
      };
    } else {
      nuevaSituacion = {
        estado: nuevoEstado,
        comprador: "",
      };
    }

    const docRef = doc(firebase.db, "productos", `${id}`);
    await updateDoc(docRef, {
      situacion: nuevaSituacion,
    });
    guardarProducto({
      ...producto,
      situacion: nuevaSituacion,
    });
    guardarConsultarDB(true); //hay un conentario, por lo tanto consultar a la db
  };
  //funcion que revisa que el creador del producto sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;
    if (creador.id === usuario.uid) {
      return true;
    }
  };
  //elimina un producto de la bd
  const eliminarProducto = async () => {
    if (!usuario) {
      return router.push("/login");
    }
    if (creador.id !== usuario.uid) {
      return router.push("/");
    }
    try {
      const docRef = doc(firebase.db, "productos", `${id}`);
      await deleteDoc(docRef);
      router.push("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Layout>
      <>
        {error ? (
          <Error404 />
        ) : (
          <div className="contenedor">
            <h1
              css={css`
                text-align: center;
              `}
            >
              {nombre}
            </h1>
            <ContenedorProducto>
              <div
                css={css`
                  display: flex;
                  gap: 20px;
                  @media (max-width: 800px) {
                    flex-direction: column;
                  }
                `}
              >
                <div
                  css={css`
                    width: 60%;
                    @media (max-width: 800px) {
                      width: 100%;
                    }
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      justify-content: center;
                      margin-bottom: 15px;
                    `}
                  >
                    <img
                      src={urlimagen}
                      css={css`
                        border-radius: 20px;
                        box-shadow: 0 0 10px 1px black;
                        margin-bottom: 5px;
                        margin-top: 10px;
                      `}
                    />
                  </div>

                  <p>
                    Publicado hace :{" "}
                    {formatDistanceToNow(new Date(creado), { locale: es })}
                  </p>
                  <p
                    css={css`
                      span {
                        font-size: 20px;
                        font-weight: bold;
                      }
                    `}
                  >
                    Ubicación: <span>{empresa}</span>
                  </p>
                  <p
                    css={css`
                      span {
                        font-size: 20px;
                        font-weight: bold;
                      }
                    `}
                  >
                    Área: <span>{categoria} m²</span>
                  </p>
                  {situacion.comprador && (
                    <>
                      <p
                        css={css`
                          span {
                            font-size: 20px;
                            font-weight: bold;
                          }
                        `}
                      >
                        Propietario: <span>{situacion.comprador}</span>
                      </p>
                    </>
                  )}
                  <div
                    css={css`
                      background-color: #eeeded;
                      border-radius: 10px;
                      border: 1px solid #c2c2c2;
                      margin-top: 10px;
                    `}
                  >
                    <div
                      css={css`
                        text-transform: uppercase;
                        text-align: center;
                        background-color: #e6e5e5;
                        border-top-right-radius: 10px;
                        border-top-left-radius: 10px;
                        font-weight: bold;
                        border-bottom: 1px solid #c2c2c2;
                        padding: 10px;
                      `}
                    >
                      Descripción
                    </div>
                    <div
                      css={css`
                        padding: 10px;
                      `}
                    >
                      <p>{descripcion}</p>
                    </div>
                  </div>
                </div>
                <div
                  css={css`
                    width: 40%;
                    @media (max-width: 800px) {
                      width: 100%;
                    }
                  `}
                >
                  <aside>
                    <div
                      css={css`
                        background-color: ${situacion.estado == "disponible"
                          ? "#05AC19"
                          : situacion.estado == "ocupado"
                          ? "#DD1909"
                          : "#CD8505"};
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-transform: uppercase;
                        border-radius: 10px;
                        color: white;
                        font-weight: bold;
                      `}
                    >
                      {situacion.estado}
                    </div>
                    <div
                      css={css`
                        margin-top: 5rem;
                      `}
                    >
                      <p
                        css={css`
                          text-align: center;
                        `}
                      >
                        {votos} Votos
                      </p>
                      {usuario && <Boton onClick={votarProducto}>Votar</Boton>}
                    </div>
                    <div
                      css={css`
                        display: flex;
                        margin-bottom: 15px;
                        div {
                          width: 50%;
                          text-align: center;
                          cursor: pointer;
                          height: 40px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          border: 1px solid grey;
                          font-weight: bold;
                          text-transform: uppercase;
                          :hover {
                            background-color: #bebcbc;
                          }
                          :first-child {
                            margin-right: 10px;
                          }
                        }
                      `}
                    >
                      {situacion.estado == "disponible" ? (
                        <>
                          <div
                            onClick={() => {
                              cambiarEstado("ocupado");
                            }}
                          >
                            Comprar Lote
                          </div>
                          <div
                            onClick={() => {
                              cambiarEstado("reservado");
                            }}
                          >
                            Reservar Lote
                          </div>
                        </>
                      ) : situacion.estado == "ocupado" ? (
                        <>
                          <div
                            css={css`
                              width: 100% !important;
                            `}
                            onClick={() => {
                              cambiarEstado("disponible");
                            }}
                          >
                            Anular Compra
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            onClick={() => {
                              cambiarEstado("ocupado");
                            }}
                          >
                            Comprar Lote
                          </div>
                          <div
                            onClick={() => {
                              cambiarEstado("disponible");
                            }}
                          >
                            Anular Reservar
                          </div>
                        </>
                      )}
                    </div>
                    <Mapa>
                      <MapPage cordenadas={cordenadas} />
                    </Mapa>
                  </aside>
                </div>
              </div>
              <div
                css={css`
                  width: 60%;
                  @media (max-width: 800px) {
                    width: 100%;
                  }
                `}
              >
                {usuario && (
                  <>
                    <h2
                      css={css`
                        margin-top: 10px;
                      `}
                    >
                      Agrega tu comentario
                    </h2>
                    <form onSubmit={agregarComentario}>
                      <Campo>
                        <input
                          type="text"
                          name="mensaje"
                          value={inputComentario}
                          onChange={comentariosChange}
                        />
                      </Campo>
                      <InputSubmit type="submit" value="Agregar Comentario" />
                    </form>
                  </>
                )}

                <h2
                  css={css`
                    margin: 2rem 0;
                  `}
                >
                  Comentarios
                </h2>
                {comentarios.length === 0 ? (
                  "Aún no hay comentarios"
                ) : (
                  <ul>
                    {comentarios.map((comentario, i) => (
                      <li
                        key={`${comentario.usuarioId}-${i}`}
                        css={css`
                          border: 1px solid #e1e1e1;
                          padding: 2rem;
                        `}
                      >
                        <p>{comentario.mensaje}</p>
                        <p>
                          Escrito por:
                          <span
                            css={css`
                              font-weight: bold;
                            `}
                          >
                            {""} {comentario.usuarioNombre}
                          </span>
                        </p>
                        {esCreador(comentario.usuarioId) && (
                          <CreadorProducto>Es Creador</CreadorProducto>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ContenedorProducto>
            {puedeBorrar() && (
              <Boton
                onClick={eliminarProducto}
                css={css`
                  :hover {
                    background-color: #e0e0e0;
                  }
                `}
              >
                Eliminar Producto
              </Boton>
            )}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Producto;
