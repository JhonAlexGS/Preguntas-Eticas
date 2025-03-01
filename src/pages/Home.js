import { imagenes } from '../constant/constant.js'
import React, { useState, useEffect } from "react";
import "../App.css"

import { useNavigate } from "react-router-dom";

const styles = {

  bebasNeueRegular: {
    fontFamily: "Bebas Neue serif",
    fontWeight: "400",
    fontStyle: "normal",
  },

  formulario: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    backgroundColor: "rgba(240, 240, 240, 0.3)",
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '20px',
    alignItems: 'center',
    justifyContent: 'center', // Centra horizontalmente

  },
  contenedorImagenes: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: '50%', // Hace que el contenedor de la imagen sea circular
    padding: '5px', // Espacio interno
    cursor: 'pointer',
    transition: 'border-color 0.3s ease', // Transición suave para el borde
  },
  imagen: {
    width: '100px',
    height: '100px',
    borderRadius: '50%', // Hace que las imágenes sean circulares
  },
};

const Home = () => {

  const navigate = useNavigate(0);

  const [nombre, setNombre] = useState("");
  const [selected, setSelected] = useState("");
  const [imagenSeleccionada, setImagenSeleccionada] = useState({});

  
  useEffect(() => {
    try{

      let diccionarioGuardado = JSON.parse(localStorage.getItem("saveData2"));
      if(diccionarioGuardado){
        setNombre(diccionarioGuardado.name);
        setImagenSeleccionada(imagenes[diccionarioGuardado.img]);
      }
    }catch(error){
      console.log(error)
    }
  }, []);


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleImagenChange = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombre.trim()) {
      alert('Por favor, ingresa tu nombre.');
      return;
    }
    if (!imagenSeleccionada) {
      alert('Por favor, selecciona una imagen.');
      return;
    }
    if (!selected) {
      alert('Por favor, selecciona una Round.');
      return;
    }

    navigate(`/play/${imagenSeleccionada.id}/${nombre}/${selected}`);
  };

  return (
    <div
      style={{
        display: 'flex', // Activa Flexbox
        alignItems: 'center', // Centra verticalmente
        justifyContent: 'center', // Centra horizontalmente
        height: '100vh', // Ocupa toda la altura de la pantalla
        // backgroundColor: '#f9f9f9', // Color de fondo opcional
      }}
    >

      <form onSubmit={handleSubmit} style={styles.formulario}>

        <div style={{ justifyContent: 'center', alignItems: 'center', color: "#ffffff", marginBottom: "0px" }}>
          <hr style={{ width: '30vh', margin: 0, justifyContent: 'center' }}></hr>
          <div ></div>
          <h1 style={{ display: "flex", justifyContent: 'center', alignItems: 'center',}} ><strong>¿Cuál Eliges?</strong></h1>
          <hr style={{ width: '30vh', margin: 0 }}></hr>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "#ffffff" }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
            <br></br>

            <div className="flex flex-col gap-2" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',

            }}>
              
              <select
                id="dropdown"
                className="border p-2 rounded-md"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                style={{
                  padding:"2px",
                  width: '100%',
                }}
              >
                <option value="">Seleccione el Round</option>
                <option value="1">Round 1</option>
                <option value="2">Round 2</option>
                <option value="3">Round 3</option>
              </select>
              
            </div>

          </div>
        </div>

        <div style={styles.contenedorImagenes}>
          {imagenes.map((imagen) => (
            <div
              key={imagen.id}
              style={{
                ...styles.imageContainer,
                border: imagenSeleccionada?.id === imagen.id ? '3px solid #007bff' : '3px solid transparent',
              }}
              onClick={() => handleImagenChange(imagen)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                style={styles.imagen}
              />
            </div>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};



export default Home;