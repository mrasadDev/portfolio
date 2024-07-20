"use client";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Forest", "Building", "Tree", "Color"];

export default function MovingText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="d-flex justify-content-center">
      We Deliver
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
}
