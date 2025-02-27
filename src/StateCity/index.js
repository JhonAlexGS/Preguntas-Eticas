import React, { useState, useEffect } from "react";
import BoxLoading from "./BoxLoading";

import "./index.css"

export default function StatusCity({items, setItems}) {

    

    const [, setProgress] = useState(0);

    // Simular el aumento del progreso con un temporizador
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval); // Detener cuando llegue al 100%
                    return 100;
                }
                return prevProgress + 10; // Incrementar en 10%
            });
        }, 500); // Actualizar cada 500ms

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div id="contentStatusCity">
            
            {items.map((item) => (
                <BoxLoading icon={item.icon} porcent={item.porcent} /> 
            ))}


        </div>
    );
};