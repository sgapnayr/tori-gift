"use client";

import React from "react";
import { motion } from "framer-motion";
import Aquarium from "../assets/aquarium.jpg";
import Trip from "../assets/trip.png";
import Image from "next/image";

export default function BaseAquarium() {
  return (
    <div style={styles.container}>
      <div>
        <span id="confettiReward" style={{ position: "absolute" }} />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={styles.header}
        >
          🎉 Surprise! 🎉
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        style={styles.card}
      >
        <p style={styles.message}>Merry Christmas ya filthy animal! 💝</p>
        <p style={styles.funMessage}>
          Let&apos;s get hammered at the aquarium! 🐠🍹
        </p>
        <div className="my-4" />
        <Image src={Trip} alt="Trip" width={400} height={300} />
        <Image src={Aquarium} alt="Aquarium" width={400} height={300} />
      </motion.div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    overflow: "hidden",
  },
  header: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
  },
  message: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "1rem",
  },
  funMessage: {
    fontSize: "1.5rem",
    color: "#0077cc",
    fontWeight: "bold",
    marginTop: "1rem",
  },
};
