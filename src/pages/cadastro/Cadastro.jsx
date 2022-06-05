import React from "react";
import { Imput } from "../../components/imput/Imput";
import Button from "../../components/Button/Button";
import brasao from '../../assets/brasao.svg'
import './cadastro.css'

function Cadastro() {
  return (
    <form className='formCadastro'>

      <div className="divIcon">
        <img className='imgBrasao' src={brasao} alt="" />
        <h3 className="titleFormDocente">CADASTRO DE DOCENTES</h3>
      </div>

<div className='divImputCadastro'>
      <Imput
        textLabel="Nome"
        type="text"
        digite="Digite o nome..."
        value=""
        onChange=""
      />

      <Imput
        textLabel="CPF"
        type="text"
        digite="Digite o CPF..."
        value=""
        onChange=""
      />

      <Imput
        textLabel="Email"
        type="text"
        digite="Digite o email..."
        value=""
        onChange=""
      />

      <Imput
        textLabel="Telefone"
        type="text"
        digite="Digite o telefone..."
        value=""
        onChange=""
      />

      <Imput
        textLabel="Salario"
        type="number"
        digite="Digite o salario..."
        value=""
        onChange=""
      />

      <Imput
        textLabel="Disciplinas"
        type="text"
        digite="Digite as disciplinas..."
        value=""
        onChange=""
      />

</div>

      <div className="divButton">
        <Button className="buttonForm" text="Cadastrar" />
      </div>



    </form>
  );
}

export default Cadastro;
