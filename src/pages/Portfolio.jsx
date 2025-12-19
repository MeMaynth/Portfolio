import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Application To-Do",
      description: "Une app moderne pour gérer ses tâches. Développée en React.",
      link: "#",
    },
    {
      title: "Site E-commerce",
      description: "Un site complet avec panier, paiement et interface admin.",
      link: "#",
    },
    {
      title: "Portfolio John Doe",
      description: "Le site sur lequel vous êtes actuellement.",
      link: "#",
    },
    {
      title: "Blog Personnel",
      description: "Blog React avec système de commentaires et design responsive.",
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Tableaux de bord interactifs avec graphiques et stats en temps réel.",
      link: "#",
    },
    {
      title: "Landing Page Produit",
      description: "Page produit avec formulaire d’inscription et animation CSS.",
      link: "#",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Mes Réalisations</h2>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card portfolio-card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary portfolio-btn">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
