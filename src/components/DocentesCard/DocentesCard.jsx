import React from "react";
import "./DocentesCard.css"

function DocentesCard({ docente }) {
    return (
        <div className="docente-card">
            <h2>{docente.nome}</h2>
            <p>Cpf: {docente.cpf}</p>
            <p>E-mail: {docente.email}</p>
            <p>Disciplinas: {docente.disciplinas}</p>
        </div>
    )

}

export default DocentesCard;