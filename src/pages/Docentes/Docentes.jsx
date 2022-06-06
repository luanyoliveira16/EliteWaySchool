import axios from "axios";
import "./Docentes.css";
import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";
import { IoMdBrush } from "react-icons/io";
import { Link } from "react-router-dom";
import DocentesCard from "../../components/DocentesCard/DocentesCard";
import Button from "../../components/Button/Button";
import {Imput} from "../../components/imput/Imput"

function Docentes() {
  const [docentes, setDocentes] = useState([]);
  const [cpf, setCpf] = useState("");

  const getDocentes = async () => {
    const url = `http://api--escola.herokuapp.com/docentes`;
    await axios
      .get(url)
      .then((res) => setDocentes(res.data))
      .catch((erro) => console.log(erro));
  };

  const getDocentePorCpf = async (cpf) => {
    const url = `http://api--escola.herokuapp.com/docentes/${cpf}`;
    await axios
      .get(url)
      .then((res) => {
        console.log("docente cpf", res.data);
        if (cpf.length != 0 ) {
            setDocentes([res.data])
        }else{
            setDocentes(res.data)
        };

      })
      .catch((erro) => console.log(erro));
  };

  useEffect(() => {
    getDocentes();
  }, []);

  return (
    <div className="docentes">
      <div className="busca">
        <h1>pagina docentes</h1>
        <Imput
          textLabel = "Digite o cpf do docente que deseja buscar"
          type="text"
          placeholder="Digite o cpf..."
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
        />
        <Button
          text="Pesquisar"
          className="btn-docente"
          onClick={(event) => {
            event.preventDefault();
            getDocentePorCpf(cpf);
          }}
        />
      </div>

      <div className="lista-docentes">
        <h2>Nossos docentes</h2>
        <div className="cards">
          {docentes.map((docente) => {
            return <DocentesCard key={docente.nome} docente={docente} />;
          })}
        </div>
      </div>

      <div className="icones">
        <Link to="/cadastro">
          <IoIosAddCircle size={50} color={"red"} />
        </Link>
        <Link to="/atualizar">
          <IoMdBrush size={50} color={"red"} />
        </Link>
        <Link to="/deletar">
          <IoMdTrash size={50} color={"red"} />
        </Link>
      </div>
    </div>
  );
}

export default Docentes;
