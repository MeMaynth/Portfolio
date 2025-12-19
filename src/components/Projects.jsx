import React from "react";

export default function Projects() {
  const projectList = [
    {
      title: "Application To-Do",
      description: "Une app moderne pour gérer ses tâches. Développée en React.",
      link: "#"
    },
    {
      title: "Site E-commerce",
      description: "Un site complet avec panier, paiement et interface admin.",
      link: "#"
    },
    {
      title: "Portfolio John Doe",
      description: "Le site sur lequel tu es actuellement.",
      link: "#"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mes Projets</h2>

      <div className="row">
        {projectList.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
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
