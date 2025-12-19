import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web responsives et performants.",
    },
    {
      title: "Applications React",
      description: "Développement d'applications interactives avec React.",
    },
    {
      title: "Back-end Node.js",
      description: "API REST et services serveur sécurisés avec Node.js.",
    },
    {
      title: "Base de données",
      description: "Conception et gestion de bases SQL et NoSQL.",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitif et expérience utilisateur optimisée.",
    },
    {
      title: "Maintenance & Support",
      description: "Suivi, mise à jour et correction des applications existantes.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Mes Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card service-card h-100 p-3">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
