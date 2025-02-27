export default function BoxLoading({ icon, porcent }) {

    return (
        <div>


            <div
                style={{
                    width: "40px", // Ancho de la barra
                    height: "100px", // Altura total de la barra
                    border: "2px solid #fff", // Borde de la barra
                    // borderRadius: "8px", // Bordes redondeados
                    position: "relative", // Posición relativa para posicionar el indicador
                    overflow: "hidden", // Ocultar el desbordamiento
                }}
            >
                {/* Indicador de progreso */}
                <div
                    style={{
                        width: "100%", // Ocupa todo el ancho de la barra
                        height: `${porcent}%`, // Altura dinámica según el progreso
                        backgroundColor: "#4caf50", // Color del progreso
                        position: "absolute", // Posición absoluta dentro del contenedor
                        bottom: 0, // Comienza desde la parte inferior
                        transition: "height 0.3s ease", // Animación suave
                    }}
                ></div>

                {/* Etiqueta de porcentaje */}
                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Centrar el texto
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: "bold",
                    }}
                >
                    {icon}
                    {/* {porcent}% */}
                </div>
            </div>


        </div>
    );

}