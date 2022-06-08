import React from "react";
import "./Contato.css";
import hadoniasImage from "../../assets/image/Hadonias.jpg";
import caiqueImage from "../../assets/image/92965546.jpg";
import hadassaImage from "../../assets/image/hadassa.jpg";
import luanyImage from "../../assets/image/Luany.jpg";
import EquipeCard from "../../components/EquipeCard/EquipeCard";

function Contato() {
  return (
    <>
      <div className="Cards">
        <EquipeCard
          name="Hadonias"
          image={hadoniasImage}
          linkLinkedin="https://www.linkedin.com/in/hadonias-leite-barbosa-5b6b31219/"
          linkGithub="https://github.com/hadonias"
        />
        <EquipeCard
          name="Caique"
          image={caiqueImage}
          linkLinkedin="https://www.linkedin.com/in/caique-araujo-267b36163/"
          linkGithub="https://github.com/ocaique72"
        />

        <EquipeCard
          name="Hadassa"
          image={hadassaImage}
          linkLinkedin="https://www.linkedin.com/in/hadassa-moraes-5a6712230/"
          linkGithub="https://github.com/hadmoraes"
        />
        <EquipeCard
          name="Luany"
          image={luanyImage}
          linkLinkedin="https://www.linkedin.com/in/luanyboliveira/"
          linkGithub="https://github.com/luanyoliveira16"
        />
      </div>
    </>
  );
}

export default Contato;
