import React from "react";
import GithubModal from "./GithubModal";

export default function Hero() {
  return (
    <div className="hero text-center mt-5">
      <h1>Bienvenue sur le portfolio de John Doe</h1>
      <p>Développeur Fullstack & Passionné de tech</p>

      <button
        type="button"
        className="btn btn-primary mt-3"
        data-bs-toggle="modal"
        data-bs-target="#githubModal"
      >
        En savoir plus
      </button>

      <GithubModal />
    </div>
  );
}
