export const dilemma = [
    {
      text: "¿Deberías permitir la construcción de una fábrica que contamine el ambiente pero genere miles de empleos?",
      changeStats: {
        si: [
          { name: "ambiente", porcent: -20 }, // Impacto negativo en el ambiente
          { name: "social", porcent: 30 }    // Impacto positivo en lo social
        ],
        no: [
          { name: "ambiente", porcent: 20 }, // Impacto positivo en el ambiente
          { name: "social", porcent: -10 }   // Impacto negativo en lo social
        ]
      }
    },
    {
      text: "¿Deberías aumentar los impuestos para financiar programas sociales aunque afecte la economía?",
      changeStats: {
        si: [
          { name: "economia", porcent: -25 }, // Impacto negativo en la economía
          { name: "social", porcent: 25 }     // Impacto positivo en lo social
        ],
        no: [
          { name: "economia", porcent: 15 },  // Impacto positivo en la economía
          { name: "social", porcent: -15 }    // Impacto negativo en lo social
        ]
      }
    },
    {
      text: "¿Deberías permitir la explotación minera en áreas protegidas para generar divisas?",
      changeStats: {
        si: [
          { name: "ambiente", porcent: -30 }, // Impacto negativo en el ambiente
          { name: "economia", porcent: 30 }   // Impacto positivo en la economía
        ],
        no: [
          { name: "ambiente", porcent: 30 },  // Impacto positivo en el ambiente
          { name: "economia", porcent: -20 }  // Impacto negativo en la economía
        ]
      }
    },
    {
      text: "¿Deberías implementar políticas autoritarias para garantizar la seguridad nacional?",
      changeStats: {
        si: [
          { name: "militar", porcent: 25 },  // Impacto positivo en el militar
          { name: "social", porcent: -20 }   // Impacto negativo en lo social
        ],
        no: [
          { name: "militar", porcent: -15 }, // Impacto negativo en el militar
          { name: "social", porcent: 20 }    // Impacto positivo en lo social
        ]
      }
    },
    {
      text: "¿Deberías sacrificar áreas verdes para construir viviendas económicas?",
      changeStats: {
        si: [
          { name: "ambiente", porcent: -25 }, // Impacto negativo en el ambiente
          { name: "social", porcent: 25 }     // Impacto positivo en lo social
        ],
        no: [
          { name: "ambiente", porcent: 25 },  // Impacto positivo en el ambiente
          { name: "social", porcent: -15 }    // Impacto negativo en lo social
        ]
      }
    },
    {
      text: "¿Deberías invertir en tecnología militar aunque reduzca fondos para educación?",
      changeStats: {
        si: [
          { name: "militar", porcent: 30 },  // Impacto positivo en el militar
          { name: "social", porcent: -20 }   // Impacto negativo en lo social
        ],
        no: [
          { name: "militar", porcent: -15 }, // Impacto negativo en el militar
          { name: "social", porcent: 20 }    // Impacto positivo en lo social
        ]
      }
    },
    {
      text: "¿Deberías permitir la censura de medios para evitar desinformación?",
      changeStats: {
        si: [
          { name: "social", porcent: -25 },  // Impacto negativo en lo social
          { name: "militar", porcent: 15 }   // Impacto positivo en el militar
        ],
        no: [
          { name: "social", porcent: 25 },   // Impacto positivo en lo social
          { name: "militar", porcent: -10 }  // Impacto negativo en el militar
        ]
      }
    },
    {
      text: "¿Deberías privatizar servicios básicos como agua y electricidad?",
      changeStats: {
        si: [
          { name: "economia", porcent: 20 }, // Impacto positivo en la economía
          { name: "social", porcent: -25 }   // Impacto negativo en lo social
        ],
        no: [
          { name: "economia", porcent: -15 },// Impacto negativo en la economía
          { name: "social", porcent: 25 }    // Impacto positivo en lo social
        ]
      }
    },
    {
      text: "¿Deberías prohibir manifestaciones públicas para mantener el orden?",
      changeStats: {
        si: [
          { name: "social", porcent: -30 },  // Impacto negativo en lo social
          { name: "militar", porcent: 20 }   // Impacto positivo en el militar
        ],
        no: [
          { name: "social", porcent: 30 },   // Impacto positivo en lo social
          { name: "militar", porcent: -15 }  // Impacto negativo en el militar
        ]
      }
    },
    {
      text: "¿Deberías usar drones militares para combatir el crimen organizado?",
      changeStats: {
        si: [
          { name: "militar", porcent: 30 },  // Impacto positivo en el militar
          { name: "social", porcent: -20 }   // Impacto negativo en lo social
        ],
        no: [
          { name: "militar", porcent: -15 }, // Impacto negativo en el militar
          { name: "social", porcent: 20 }    // Impacto positivo en lo social
        ]
      }
    }
  ];