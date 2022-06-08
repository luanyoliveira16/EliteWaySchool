import React from "react";
import "./EquipeCard.css";

function EquipeCard(props) {
  return (
    <div className="Card">
      <img src={props.image} class="imagem" />

      <div className="cardConteudo">
        <h1 className="titulo">{props.name}</h1>
        <div>
          <a className="link" target="_blank" href={props.linkGithub}>
            {" "}
            Github{" "}
          </a>

          <a className="link" target="_blank" href={props.linkLinkedin}>
            Linkedin{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default EquipeCard;
