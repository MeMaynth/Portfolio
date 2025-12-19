import React from "react";

export default function Mentions() {
  return (
    <div className="container mt-5">
      <meta name="robots" content="noindex" />

      <h2 className="text-center mb-4">Mentions légales</h2>

      <div className="accordion" id="mentions">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#editeur">
              Éditeur du site
            </button>
          </h2>
          <div id="editeur" className="accordion-collapse collapse show">
            <div className="accordion-body">
              John Doe – Développeur Web
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#hebergeur">
              Hébergeur
            </button>
          </h2>
          <div id="hebergeur" className="accordion-collapse collapse">
            <div className="accordion-body">
              Hébergeur : OVH – France
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#credits">
              Crédits
            </button>
          </h2>
          <div id="credits" className="accordion-collapse collapse">
            <div className="accordion-body">
              Images : Pixabay — Icônes : Flaticon
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
