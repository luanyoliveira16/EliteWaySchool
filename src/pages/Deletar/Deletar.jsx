import axios from "axios";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import {Imput} from "../../components/imput/Imput"
import "./Deletar.css"

function Deletar() {
  const url = `http://api--escola.herokuapp.com/docentes`;
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
    <div>
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
        className="btn-docente"
        onClick={(event) => {
          event.preventDefault();
          deletaDocente(cpf);
        }}
      />
    </form>

    <div>
      <h2>{message}</h2>
    </div>
    </div>
  );
}

export default Deletar;
