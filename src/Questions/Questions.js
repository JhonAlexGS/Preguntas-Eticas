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
    },
    {
        text: "¿Deberías ordenar el uso de armas químicas en batallas para asegurar victorias rápidas, aunque causen sufrimiento masivo a civiles?",
        changeStats: {
          si: [
            { name: "ambiente", porcent: -30 }, // Impacto negativo en el ambiente
            { name: "social", porcent: -25 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -15 },  // Impacto negativo en el militar
            { name: "social", porcent: 20 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías priorizar la construcción de campos de concentración adicionales para aumentar la capacidad de trabajo forzado?",
        changeStats: {
          si: [
            { name: "economia", porcent: 25 },  // Impacto positivo en la economía
            { name: "social", porcent: -30 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "economia", porcent: -20 }, // Impacto negativo en la economía
            { name: "social", porcent: 30 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías sacrificar a prisioneros de guerra para ahorrar recursos alimenticios y mejorar la logística militar?",
        changeStats: {
          si: [
            { name: "militar", porcent: 20 },   // Impacto positivo en el militar
            { name: "social", porcent: -25 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -15 },  // Impacto negativo en el militar
            { name: "social", porcent: 25 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías aprobar experimentos médicos inhumanos en prisioneros para avanzar en tecnología militar?",
        changeStats: {
          si: [
            { name: "militar", porcent: 30 },   // Impacto positivo en el militar
            { name: "social", porcent: -30 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -20 },  // Impacto negativo en el militar
            { name: "social", porcent: 25 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías ejecutar a desertores públicamente para mantener la disciplina en el ejército?",
        changeStats: {
          si: [
            { name: "militar", porcent: 25 },   // Impacto positivo en el militar
            { name: "social", porcent: -20 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -15 },  // Impacto negativo en el militar
            { name: "social", porcent: 15 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías permitir la destrucción de ciudades enteras para debilitar al enemigo, aunque miles de civiles inocentes mueran?",
        changeStats: {
          si: [
            { name: "ambiente", porcent: -30 }, // Impacto negativo en el ambiente
            { name: "militar", porcent: 25 }    // Impacto positivo en el militar
          ],
          no: [
            { name: "ambiente", porcent: 20 },  // Impacto positivo en el ambiente
            { name: "militar", porcent: -20 }   // Impacto negativo en el militar
          ]
        }
      },
      {
        text: "¿Deberías confiscar alimentos de poblaciones locales para abastecer a tus tropas?",
        changeStats: {
          si: [
            { name: "militar", porcent: 20 },   // Impacto positivo en el militar
            { name: "social", porcent: -25 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -15 },  // Impacto negativo en el militar
            { name: "social", porcent: 20 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías implementar tácticas de terror, como bombardeos indiscriminados, para desmoralizar al enemigo?",
        changeStats: {
          si: [
            { name: "militar", porcent: 25 },   // Impacto positivo en el militar
            { name: "social", porcent: -30 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -20 },  // Impacto negativo en el militar
            { name: "social", porcent: 25 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías ocultar información sobre derrotas militares para mantener la moral alta entre las tropas?",
        changeStats: {
          si: [
            { name: "militar", porcent: 15 },   // Impacto positivo en el militar
            { name: "social", porcent: -10 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -10 },  // Impacto negativo en el militar
            { name: "social", porcent: 20 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías sacrificar a tus propios soldados en misiones suicidas si eso garantiza una victoria estratégica?",
        changeStats: {
          si: [
            { name: "militar", porcent: 30 },   // Impacto positivo en el militar
            { name: "social", porcent: -25 }    // Impacto negativo en lo social
          ],
          no: [
            { name: "militar", porcent: -20 },  // Impacto negativo en el militar
            { name: "social", porcent: 20 }     // Impacto positivo en lo social
          ]
        }
      },
      {
        text: "¿Deberías retrasar el lanzamiento del transbordador debido a advertencias meteorológicas sobre tormentas eléctricas, aunque esto dañe la reputación de tu empresa?",
        changeStats: {
          si: [
            { name: "social", porcent: 25 },    // Impacto positivo en lo social (seguridad)
            { name: "economia", porcent: -20 }  // Impacto negativo en la economía (retraso)
          ],
          no: [
            { name: "social", porcent: -30 },   // Impacto negativo en lo social (riesgo de accidente)
            { name: "economia", porcent: 30 }   // Impacto positivo en la economía (lanzamiento exitoso)
          ]
        }
      },
      {
        text: "¿Deberías permitir que la profesora participe en el lanzamiento, sabiendo que existe un riesgo significativo para su vida debido a condiciones climáticas inestables?",
        changeStats: {
          si: [
            { name: "social", porcent: -25 },   // Impacto negativo en lo social (riesgo para la profesora)
            { name: "ambiente", porcent: 10 }   // Impacto positivo en el ambiente (inspiración científica)
          ],
          no: [
            { name: "social", porcent: 20 },    // Impacto positivo en lo social (protección de la profesora)
            { name: "ambiente", porcent: -15 }  // Impacto negativo en el ambiente (falta de avance científico)
          ]
        }
      },
      {
        text: "¿Deberías ocultar información sobre los riesgos climáticos a los medios de comunicación para evitar pánico público antes del lanzamiento?",
        changeStats: {
          si: [
            { name: "social", porcent: -20 },   // Impacto negativo en lo social (pérdida de confianza)
            { name: "economia", porcent: 25 }   // Impacto positivo en la economía (imagen corporativa)
          ],
          no: [
            { name: "social", porcent: 25 },    // Impacto positivo en lo social (transparencia)
            { name: "economia", porcent: -15 }  // Impacto negativo en la economía (posible crisis de imagen)
          ]
        }
      },
      {
        text: "¿Deberías priorizar la seguridad del equipo técnico sobre el éxito del lanzamiento, incluso si eso significa cancelar la misión?",
        changeStats: {
          si: [
            { name: "social", porcent: 30 },    // Impacto positivo en lo social (seguridad garantizada)
            { name: "economia", porcent: -25 }  // Impacto negativo en la economía (pérdida financiera)
          ],
          no: [
            { name: "social", porcent: -30 },   // Impacto negativo en lo social (riesgo para el equipo)
            { name: "economia", porcent: 30 }   // Impacto positivo en la economía (misión exitosa)
          ]
        }
      },
      {
        text: "¿Deberías invertir más recursos en mejorar la tecnología del transbordador para reducir el riesgo climático, aunque esto retrase el lanzamiento varios meses?",
        changeStats: {
          si: [
            { name: "ambiente", porcent: 20 },  // Impacto positivo en el ambiente (mejora tecnológica)
            { name: "economia", porcent: -25 }  // Impacto negativo en la economía (costos adicionales)
          ],
          no: [
            { name: "ambiente", porcent: -15 }, // Impacto negativo en el ambiente (riesgo ambiental)
            { name: "economia", porcent: 30 }   // Impacto positivo en la economía (ahorro de costos)
          ]
        }
      },
      {
        text: "¿Deberías usar datos climáticos incompletos para justificar el lanzamiento, sabiendo que podría haber un margen de error significativo?",
        changeStats: {
          si: [
            { name: "social", porcent: -25 },   // Impacto negativo en lo social (riesgo para el equipo)
            { name: "economia", porcent: 20 }   // Impacto positivo en la economía (lanzamiento rápido)
          ],
          no: [
            { name: "social", porcent: 25 },    // Impacto positivo en lo social (seguridad garantizada)
            { name: "economia", porcent: -15 }  // Impacto negativo en la economía (retraso)
          ]
        }
      },
      {
        text: "¿Deberías permitir que el lanzamiento se realice sin la autorización final de los expertos en clima, si crees que es la decisión correcta?",
        changeStats: {
          si: [
            { name: "social", porcent: -30 },   // Impacto negativo en lo social (riesgo extremo)
            { name: "economia", porcent: 30 }   // Impacto positivo en la economía (misión exitosa)
          ],
          no: [
            { name: "social", porcent: 25 },    // Impacto positivo en lo social (seguridad garantizada)
            { name: "economia", porcent: -20 }  // Impacto negativo en la economía (retraso)
          ]
        }
      },
      {
        text: "¿Deberías sacrificar el presupuesto de otros proyectos de la empresa para asegurar un lanzamiento seguro, aunque esto afecte otras áreas de innovación?",
        changeStats: {
          si: [
            { name: "ambiente", porcent: 25 },  // Impacto positivo en el ambiente (innovación espacial)
            { name: "economia", porcent: -20 }  // Impacto negativo en la economía (recortes)
          ],
          no: [
            { name: "ambiente", porcent: -15 }, // Impacto negativo en el ambiente (riesgo ambiental)
            { name: "economia", porcent: 30 }   // Impacto positivo en la economía (presupuesto equilibrado)
          ]
        }
      },
      {
        text: "¿Deberías aceptar la responsabilidad pública si algo sale mal durante el lanzamiento, incluso si fue causado por factores climáticos impredecibles?",
        changeStats: {
          si: [
            { name: "social", porcent: 30 },    // Impacto positivo en lo social (responsabilidad ética)
            { name: "economia", porcent: -25 }  // Impacto negativo en la economía (daño reputacional)
          ],
          no: [
            { name: "social", porcent: -20 },   // Impacto negativo en lo social (pérdida de confianza)
            { name: "economia", porcent: 20 }   // Impacto positivo en la economía (protección corporativa)
          ]
        }
      },
      {
        text: "¿Deberías permitir que la misión continúe si la profesora decide asumir el riesgo personalmente, a pesar de las advertencias climáticas?",
        changeStats: {
          si: [
            { name: "social", porcent: -25 },   // Impacto negativo en lo social (riesgo para la profesora)
            { name: "ambiente", porcent: 20 }   // Impacto positivo en el ambiente (avance científico)
          ],
          no: [
            { name: "social", porcent: 25 },    // Impacto positivo en lo social (protección de la profesora)
            { name: "ambiente", porcent: -15 }  // Impacto negativo en el ambiente (falta de avance científico)
          ]
        }
      }
  ];