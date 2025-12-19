import React from "react";
import { Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet";
import "./Legal.css";

export default function Legal() {
  return (
    <div className="container mt-5">
      {/* React Helmet pour noindex */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales - John Doe</title>
      </Helmet>

      <h2 className="text-center mb-4">Mentions Légales</h2>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <p>
              John Doe<br/>
              123 Rue Exemple, 75000 Paris<br/>
              Email: john.doe@example.com
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            <p>
              Hébergeur : OVH Cloud<br/>
              2 rue Kellermann, 59100 Roubaix, France
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>
              Images utilisées : <a href="https://pixabay.com/" target="_blank" rel="noreferrer">Pixabay</a><br/>
              Favicon : <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">Flaticon</a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
