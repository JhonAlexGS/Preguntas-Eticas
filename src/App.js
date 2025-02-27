import './App.css';
// import perfil from './img/perfil.jpg';
import StatusCity from './StateCity'
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";

import { PiPlantFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import { GiCrossedPistols } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

import { dilemma } from './Questions/Questions'

import React, { useState, useEffect } from "react";

function App() {

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [items, setItems] = useState([
    { name:"ambiente", icon: <PiPlantFill />, porcent: 50 },
    { name:"social", icon: <HiUserGroup />, porcent: 50 },
    { name:"militar", icon: <GiCrossedPistols />, porcent: 50 },
    { name:"economia", icon: <MdOutlineAttachMoney />, porcent: 50 },
  ]);

  const [text, setText] = useState("");
  const [dictionary, setDictionary] = useState({});

  const updateMultiplePorcent = (updates) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        const update = updates.find(u => u.name === item.name);
        if (update) {
          if ((update.porcent+item.porcent)>100) {
            return { ...item, porcent: 100 };
          } else if ((update.porcent+item.porcent)<0) {
            return { ...item, porcent: 0 };
          } else{
            return { ...item, porcent: update.porcent+item.porcent};
          }
        }
        return item;
      });
      return updatedItems;
    });
  };
  
  const handleClick = (param) => {

    updateMultiplePorcent(dictionary[param]);
    const itemRandom = getRandom(dilemma);
    setText(itemRandom.text);
    setDictionary(itemRandom.changeStats);

  };

  useEffect(() => {

    const itemRandom = getRandom(dilemma);
    setText(itemRandom.text);
    setDictionary(itemRandom.changeStats);

  }, [])

  return (
    <div className="App">

      <div className="App-header">

        <div id="ContentAll">
          <div>
            <h1 style={{
              marginTop: '0px', // Añade un padding de 20px en todos los lados
            }}>Dilemas Eticos</h1>
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
              gap: "25px"
            }}>

              <div onClick={() => handleClick("si")} style={{ cursor: 'pointer' }}>
                <BsCheckCircleFill size={50} color="#00FF00" />
              </div>
              <div onClick={()=>{handleClick("no")} } style={{ cursor: 'pointer' }}>
                <BsXCircleFill size={50} color="#FF0000" />
              </div>

            </div>
            <h5>Score: 123'102.313</h5>
          </div>

          <div>
            <h5 className='formateInitial'>Universidad Sergio Arboleda</h5>
            <h5 className='formateInitial'>Maestría en Inteligencia Artificial</h5>
            <h5 className='formateInitial'>Jhon García</h5>
            <br></br>
            <h6 className='formateInitial'>"La idea y propiedad intelectual del juego le pertenece a <strong>Lapse</strong>"</h6>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
