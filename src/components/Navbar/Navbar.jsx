import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/brasao.svg"

const Navbar = () => {
  return <nav className={styles.navbar}>
            <NavLink to = "/">
              <img src={Logo}/>
            </NavLink>
            <ul className={styles.menu}>
                      <a className={styles.opçoes}> <NavLink to = "/">Home</NavLink></a>
                      <a className={styles.opçoes}> <NavLink to = "/docentes">Docentes</NavLink></a>
                      <a className={styles.opçoes}> <NavLink to = "/cadastro">Cadastro</NavLink></a>
                      <a className={styles.opçoes}> <NavLink to = "/contato">Contatos</NavLink></a>
            </ul>
  </nav>
}

export default Navbar