"use client";

import dynamic from "next/dynamic";
const Game = dynamic(() => import("@/game").then((module) => module) as any, {
  ssr: false,
}) as any;

export default function Home() {
  return <Game />;
}
