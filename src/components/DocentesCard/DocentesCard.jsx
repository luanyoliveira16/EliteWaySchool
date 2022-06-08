import React from "react";
import "./DocentesCard.css"

function DocentesCard({ docente }) {
    return (
        <div className="docente-card">
            <div className="conteudoDiv">
            <h2>{docente.nome}</h2>
            <p>CPF: {docente.cpf}</p>
            <p>Email: {docente.email}</p>
            <p>Disciplinas: {docente.disciplinas}</p>
            </div>
        </div>
    )

}

export default DocentesCard;