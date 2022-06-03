import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import React, { useEffect, useState } from "react";
import DocentesCard from "../../components/DocentesCard/DocentesCard";
import "./Docentes.css"
import Button from "../../components/Button/Button";

function Docentes() {
    const [docentes, setDocentes] = useState([]);
    const [cpf, setCpf] = useState('');
    
    const getDocentes = async (docente) => {
        const url = `http://api--escola.herokuapp.com/docentes/${docente}`
        console.log(url)
        await axios
            .get(url)
            .then((res) => setDocentes(res.data))
            .catch((erro) => console.log(erro));
        console.log("passei pelo axios", docentes)
    }; 
  

    useEffect(() => {
        console.log("docentes", docentes);
        getDocentes(cpf);
    }, []);

    return (
        <div className="docentes">
            <h1>pagina docentes</h1>
            <div className="busca">
                <input
                    type="text"
                    placeholder="Digite o cpf do docente"
                    value={cpf}
                    className="campo-de-busca"
                    onChange={(e) => { setCpf(e.target.value) }}
                />
                <Button text="Pesquisar" className="btn-docente" onClick={(event) => { 
                    getDocentes(cpf);
                    }} />
            </div>

            {
                docentes.length > 0
                    ? (<div className="lista-docentes">
                        <h2>Nossos docentes</h2>
                        <div className="cards">
                            {docentes.map((docente) => {
                                return <DocentesCard key={docente.nome} docente={docente} />;
                            })}
                            <IoIosAddCircle size={70} className="add-icon" />
                        </div>
                    </div>) : (
                        <div className="empty">
                            <h2>Docente não encontrado</h2>
                        </div>
                    )

            }

        </div>
    )
}

export default Docentes