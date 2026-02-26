import { useState } from "react";
import "./App.css";
import ComplimentDisplay from "./ComplimentDisplay";
import GenerateButton from "./GenerateButton";

const compliments = [
  "You are like a mango — sweet, rare, and worth the wait.",
  "You are like my favorite API — everything works better when you respond.",
  "You are like clean code — simple, elegant, and impossible to ignore.",
  "You are like Wi-Fi with full signal — I feel complete around you.",
  "You are like a perfect commit — small, meaningful, and powerful.",
  "You are like dark mode — easy on my eyes and hard to live without.",
  "You are like a cache hit — fast and satisfying.",
  "You are like semicolons in JavaScript — technically optional but you make everything safer.",
  "You are like a warm compiler — you turn my errors into something useful.",
  "You are like version control — I don’t want to lose you.",
  "You are like a responsive design — perfect on every screen of my life.",
  "You are like optimized code — you reduce all my unnecessary complexity.",
  "You are like a successful build — my whole mood turns green.",
  "You are like a good variable name — instantly understandable and memorable.",
  "You are like a stable release — no bugs, only happiness.",
  "You are like a perfectly timed animation — smooth and impossible not to watch.",
  "You are like a protected branch — high value and not accessible to everyone.",
  "You are like a memory that never leaks — you stay with me.",
  "You are like a 100% test coverage — you give me confidence.",
  "You are like production access — serious, powerful, and I don’t take you lightly.",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleGenerate() {
    if (compliments.length <= 1) return;

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * compliments.length);
    } while (randomIndex === currentIndex);

    setCurrentIndex(randomIndex);
  }

  return (
    <div className="app">
      <h1>Fambi</h1>
      <ComplimentDisplay text={compliments[currentIndex]} />
      <GenerateButton onGenerate={handleGenerate} />
    </div>
  );
}

export default App;
