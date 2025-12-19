// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>À propos de John Doe</h1>
      <p>
        John Doe est développeur front-end spécialisé dans la création
        d’interfaces modernes et accessibles. Il maîtrise React, Bootstrap,
        HTML5 et CSS3.
      </p>

      <h2>Compétences principales</h2>
      <ul>
        <li>React – 85%</li>
        <li>HTML / CSS – 90%</li>
        <li>JavaScript – 80%</li>
        <li>Bootstrap – 75%</li>
      </ul>

      <h2>Objectif</h2>
      <p>
        Fournir des sites web performants, responsives et esthétiques
        pour améliorer l'expérience utilisateur.
      </p>
    </div>
  );
}

export default About;
