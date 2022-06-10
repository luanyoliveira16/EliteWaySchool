import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import {Imput} from "../../components/imput/Imput"
import "./Deletar.css"

function Deletar() {
  const url = `https://api--escola.herokuapp.com/docentes`;
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");

  const deletaDocente = (cpf) => {
    axios
      .delete(`${url}/${cpf}`)
      .then((res) => {
        console.log(res)
        setMessage(res.data.message)
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <main>
    <form className="form-delete">

      <Imput
          textLabel = "Digite o cpf do docente que deseja deletar"
          type="text"
          placeholder="Digite o cpf..."
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />

      <Button
        text="Deletar"
        className="btn-delete"
        onClick={(event) => {
          event.preventDefault();
          deletaDocente(cpf);
        }}
      />
    </form>

    <div className="mensagemDb">
      <h2>{message}</h2>
    </div>
    </main>
  );
}

export default Deletar;
