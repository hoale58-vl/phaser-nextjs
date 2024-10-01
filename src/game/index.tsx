"use client";
import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./PhaserGame";

function Game() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <div id="app">
      <PhaserGame ref={phaserRef} />
    </div>
  );
}

export default Game;
