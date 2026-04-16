import { useState } from "react";
import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";
import { levels } from "./levels";

function generateAvatar(seed) {
  return createAvatar(bottts, {
    seed,
    size: 100,
  }).toDataUri();
}

export default function App() {
  const [cssInput, setCssInput] = useState("");
  const [style, setStyle] = useState({});
  const [levelIndex, setLevelIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("");

  const level = levels[levelIndex];
  const robots = level?.robots.map((r, i) =>
    generateAvatar(r + "-" + levelIndex + "-" + i)
  );

  const parseCSS = (input) => {
    const styleObj = {};

    const cleaned = input
      .replace(/\.fabrica\s*\{/g, "")
      .replace(/\}/g, "");

    cleaned.split(";").forEach((rule) => {
      const [prop, value] = rule.split(":");
      if (prop && value) {
        const key = prop
          .trim()
          .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value.trim();
      }
    });

    return styleObj;
  };

  const getErrors = (parsed, expected) => {
    const errors = [];

    Object.keys(expected).forEach((key) => {
      if (!(key in parsed)) {
        errors.push(`Falta: ${key}`);
      } else if (parsed[key] !== expected[key]) {
        errors.push(`${key} debería ser "${expected[key]}"`);
      }
    });

    Object.keys(parsed).forEach((key) => {
      if (!(key in expected)) {
        errors.push(`Propiedad innecesaria: ${key}`);
      }
    });

    return errors;
  };

  const applyStyles = () => {
    const parsed = parseCSS(cssInput);
    setStyle(parsed);

    const isCorrect =
      Object.keys(level.expected).every(
        (key) => parsed[key] === level.expected[key]
      ) &&
      Object.keys(parsed).every((key) => key in level.expected);

    if (isCorrect) {
      setMessage("✅ Correcto +10 puntos");
      setPoints((p) => p + 10);

      setTimeout(() => {
        setLevelIndex((i) => i + 1);
        setCssInput("");
        setStyle({});
        setMessage("");
      }, 1000);
    } else {
      const errors = getErrors(parsed, level.expected);
      setMessage("❌ " + errors.join(" | "));
      setPoints((p) => Math.max(0, p - 1)); // 👈 penalización
    }
  };

  if (!level) {
    return (
      <div className="win">
        <h1>🎉 ¡Fábrica completada!</h1>
        <h2>🏆 Puntos: {points}</h2>
      </div>
    );
  }

  return (
    <div className="layout">
      {/* EDITOR */}
      <div className="editor-panel">
        <h2>💻 Código CSS</h2>

        <p className="instruction">{level.instruction}</p>

        <textarea
          className="editor"
          spellCheck={false}
          autoCorrect="off"
          autoCapitalize="off"
          value={cssInput}
          onChange={(e) => setCssInput(e.target.value)}
          placeholder={`.fabrica {
  display: flex;
  ????????????????
}`}
        />

        <button onClick={applyStyles}>🚀 Ejecutar</button>

        <p className="msg">{message}</p>
        <p className="points">⭐ Puntos: {points}</p>
      </div>

      {/* JUEGO */}
      <div className="game-panel">
        <h2>🏭 Fábrica</h2>

        <div className="fabrica" style={style}>
          {robots.map((src, i) => (
            <img key={i} src={src} className="robot" alt="robot" />
          ))}
        </div>
      </div>
    </div>
  );
}