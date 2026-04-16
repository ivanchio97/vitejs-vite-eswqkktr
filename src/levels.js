export const levels = [
  {
    instruction: "Nivel 1: Centra los robots horizontalmente",
    hint: "justify-content",
    expected: {
      display: "flex",
      justifyContent: "center",
    },
    robots: ["R1", "R2", "R3"],
  },
  {
    instruction: "Nivel 2: Coloca los robots abajo",
    hint: "align-items",
    expected: {
      display: "flex",
      alignItems: "flex-end",
    },
    robots: ["A1", "A2", "A3"],
  },
  {
    instruction: "Nivel 3: Ponlos en columna",
    hint: "flex-direction",
    expected: {
      display: "flex",
      flexDirection: "column",
    },
    robots: ["B1", "B2", "B3"],
  },
  {
    instruction: "Nivel 4: Espacio entre robots",
    hint: "space-between",
    expected: {
      display: "flex",
      justifyContent: "space-between",
    },
    robots: ["C1", "C2", "C3"],
  },
  {
    instruction: "Nivel 5: Espacio entre cada robot",
    hint: "gap",
    expected: {
      display: "flex",
      gap: "20px",
    },
    robots: ["D1", "D2", "D3", "D4"],
  },
  {
    instruction: "Nivel 6: Centra todo vertical y horizontalmente",
    hint: "justify-content + align-items",
    expected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    robots: ["E1", "E2"],
  },
  {
    instruction: "Nivel 7: Columna centrada con espacio",
    hint: "flex-direction + align-items + gap",
    expected: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    },
    robots: ["F1", "F2", "F3"],
  },
  {
    instruction: "Nivel 8: Distribuye con espacio alrededor",
    hint: "space-around",
    expected: {
      display: "flex",
      justifyContent: "space-around",
    },
    robots: ["G1", "G2", "G3"],
  },
  {
    instruction: "Nivel 9: Columna alineada a la derecha",
    hint: "flex-direction + align-items",
    expected: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    robots: ["H1", "H2", "H3"],
  },
  {
    instruction: "Nivel 10: Todo centrado en columna con espacio",
    hint: "todo combinado",
    expected: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    robots: ["Z1", "Z2", "Z3"],
  },
];