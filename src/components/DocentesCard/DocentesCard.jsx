import React from "react";
import "./DocentesCard.css"

function DocentesCard({ docente }) {
    return (
        <div className="docente-card">
            <h2>{docente.nome}</h2>
            <p>{docente.cpf}</p>
            <p>{docente.email}</p>
            <p>{docente.disciplinas}</p>
        </div>
    )

}

export default DocentesCard;