"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const startDate = new Date("2025-06-10T08:29:00");
  const [time, setTime] = useState({ years: 0, days: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const music = new Audio("/music.mp3");
    music.volume = 0.6;
    music.play().catch(() => {}); // tenta autoplay

    const tick = () => {
      const now = new Date();
      const diff = now - startDate;
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTime({ years, days, minutes, seconds });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "0 0 10px black",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>With Yamily Since 💞</h1>
      <h2 style={{ fontSize: "1.5rem" }}>
        {time.years}y {time.days}d {time.minutes}m {time.seconds}s
      </h2>
    </main>
  );
}
