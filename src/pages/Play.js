// import './App.css';
// import perfil from './img/perfil.jpg';
import StatusCity from './StateCity'
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import { PiPlantFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import { FaInfoCircle } from "react-icons/fa";
import { GiCrossedPistols } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { dilemma } from './Questions/Questions'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imagenes } from '../constant/constant.js'
import "../css/play.css"

function App() {

  const { img, name, round } = useParams();

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [items, setItems] = useState([
    { name: "ambiente", icon: <PiPlantFill />, porcent: 30 },
    { name: "social", icon: <HiUserGroup />, porcent: 30 },
    { name: "militar", icon: <GiCrossedPistols />, porcent: 30 },
    { name: "economia", icon: <MdOutlineAttachMoney />, porcent: 30 },
  ]);

  const [text, setText] = useState("");
  const [dictionary, setDictionary] = useState({});
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(true);
  const [flagInfo, setFlagInfo] = useState(false);

  let dataDictionary = {
    img: img,
    name: name,
    round: round,
    maxScore1: 0,
    maxScore2: 0,
    maxScore3: 0, 
  }

  // const [itemsScore, setItemsScore] = useState({})
  
  const diccionarioGuardado = JSON.parse(localStorage.getItem("saveData2"));
  if (diccionarioGuardado){
    dataDictionary = {
      img: diccionarioGuardado.img,
      name: diccionarioGuardado.name,
      round: round,
      maxScore1: diccionarioGuardado.maxScore1,
      maxScore2: diccionarioGuardado.maxScore2,
      maxScore3: diccionarioGuardado.maxScore3, 
    }
  }
  
  localStorage.setItem("saveData2", JSON.stringify(dataDictionary));

  const [user,setUser] = useState(dataDictionary);

  const updateMultiplePorcent = (updates) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        const update = updates.find(u => u.name === item.name);
        if (update) {
          if ((update.porcent + item.porcent) > 100) {
            return { ...item, porcent: 100 };
          } else if ((update.porcent + item.porcent) < 0) {
            return { ...item, porcent: 0 };
          } else {
            return { ...item, porcent: update.porcent + item.porcent };
          }
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleClick = (param) => {

    if (param === "info") {
      setFlagInfo(true);


    }else{

        if (flag) {
          updateMultiplePorcent(dictionary[param]);
          const itemRandom = getRandom(dilemma);
          setText(itemRandom.text);
          setDictionary(itemRandom.changeStats);
          
          let diccionarioGuardado = JSON.parse(localStorage.getItem("saveData2"));
          let selectRound = parseInt(diccionarioGuardado.round)

          if (selectRound === 1) {
            if (parseInt(diccionarioGuardado.maxScore1)<score){
              diccionarioGuardado.maxScore1 = score;
            }
          } else if (selectRound === 2) {
            if (parseInt(diccionarioGuardado.maxScore2)<score){
              diccionarioGuardado.maxScore2 = score;
            }
          } else if (selectRound === 3) {
            if (parseInt(diccionarioGuardado.maxScore2)<score){
              diccionarioGuardado.maxScore3 = score;
            }
          }

          setUser(diccionarioGuardado)
          localStorage.setItem("saveData2", JSON.stringify(diccionarioGuardado));
    
          const hasZeroPorcent = items.some(item => item.porcent === 0);
    
          if (hasZeroPorcent) {
            setFlag(false);
          } else {
            setScore(score + 200);
          }
        }
    }

  };

  const hidePopup = () => {
    setFlag(true);
    setItems([
      { name: "ambiente", icon: <PiPlantFill />, porcent: 30 },
      { name: "social", icon: <HiUserGroup />, porcent: 30 },
      { name: "militar", icon: <GiCrossedPistols />, porcent: 30 },
      { name: "economia", icon: <MdOutlineAttachMoney />, porcent: 30 },
    ]);
    setScore(0);
  };

  const hidePopupInfo = () => {
    setFlagInfo(false);
  };

  const imagen = imagenes[user.img];

  useEffect(() => {

    const itemRandom = getRandom(dilemma);
    setText(itemRandom.text);
    setDictionary(itemRandom.changeStats);
    setScore(0);

  }, [])

  const styles = {
    fila: {
      display: 'flex', // Organiza los elementos en fila
      gap: '10px', // Espacio entre los elementos
      alignItems: 'center', // Centra verticalmente los elementos
      justifyContent: 'flex-start', // Alinea los elementos al inicio
    },
    imagenIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solidrgb(16, 80, 148)', // Borde opcional
    },
  };

  return (
    <div className="App">

      <div>
        {/* Botón para mostrar el popup */}

        {/* Popup */}
        {!flag && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Perdiste 🥲</h2>
              <p>Puntuación {score}</p>
              <button onClick={hidePopup}>Cerrar</button>
            </div>
          </div>
        )}
        {flagInfo && (
          <div className="popup-overlay">
            <div className="popup-content">
              <h2>Resultados</h2>
              <hr></hr>
              <p>{`Max Score Round 1: ${user.maxScore1}`}</p>
              <p>{`Max Score Round 2:  ${user.maxScore2}`}</p>
              <p>{`Max Score Round 3: ${user.maxScore3}`}</p>
              <h3><strong>Puntuación Total: </strong>{user.maxScore1 + user.maxScore2 + user.maxScore3}</h3>
              <button onClick={hidePopupInfo}>Cerrar</button>
            </div>
          </div>
        )}
      </div>

      <div className="App-header">

        <div id="ContentAll">


          <div className='contenedor-x1' style={styles.fila}>
            <div>
              <img
                src={imagen.src}
                alt={imagen.alt}
                style={styles.imagenIcon}
              />
            </div>
            <div className='contenedorUser'>
              <p className='paddingNone'>Nombre: {user.name}</p>
              <p className='paddingNone'>Round: {user.round}</p>
              <p className='paddingNone'>Score: {score}</p>
            </div>
          </div>

          <div>
            <StatusCity items={items} setItems={setItems} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "rgba(170, 170, 170, 0.3)",
                height: "20vh ",
                width: "30vh",
                display: "flex", // También centra el texto dentro del div
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center", // Asegura que el texto esté centrado
              }}
            >
              <p className="custom-text">{text}</p>
            </div>
          </div>

          <div>
            <div style={{
              display: "flex", /* Activa Flexbox */
              padding: "10px", /* Espacio interno (opcional) */
              /* border: 1px solid #ccc;  */
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
              margin: "10px"
            }}>

              <div onClick={() => handleClick("si")} style={{ cursor: 'pointer' }}>
                <BsCheckCircleFill size={50} color="#00FF00" />
              </div>
              <div onClick={() => { handleClick("info") }} style={{ cursor: 'pointer' }}>
                <FaInfoCircle size={50} color="#FFFF00" />
              </div>
              <div onClick={() => { handleClick("no") }} style={{ cursor: 'pointer' }}>
                <BsXCircleFill size={50} color="#FF0000" />
              </div>

            </div>

          </div>


          <div>
            <h5 className='formateInitial'>Universidad Sergio Arboleda</h5>
            <h5 className='formateInitial'>Maestría en Inteligencia Artificial</h5>
            <h5 className='formateInitial'>Creado por: Jhon García</h5>
            <br></br>
            <h6 className='formateInitial'>"La idea y propiedad intelectual del juego le pertenece a <strong>Lapse</strong>"</h6>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
