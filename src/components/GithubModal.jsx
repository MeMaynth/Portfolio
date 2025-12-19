import React, { useState } from "react";

export default function GithubModal() {
  const [userData, setUserData] = useState(null);

  const handleOpen = () => {
    if (!userData) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.error("Erreur API GitHub:", err));
    }
  };

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
      onClick={handleOpen}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="githubModalLabel">
              {userData ? `Profil GitHub de ${userData.login}` : "Chargement..."}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          {userData && (
            <div className="modal-body text-center">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="rounded-circle mb-3"
                width="120"
                loading="lazy"
              />
              <p><strong>Nom :</strong> {userData.name || "Non renseigné"}</p>
              <p><strong>Bio :</strong> {userData.bio || "Non renseigné"}</p>
              <p><strong>Repos publics :</strong> {userData.public_repos}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-2"
              >
                Voir le profil complet
              </a>
            </div>
          )}
          {!userData && (
            <div className="modal-body text-center">
              <p>Chargement des informations...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
