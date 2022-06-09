import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return <nav className={styles.navbar}>
            <Link to = "/">
              <img src={Logo}/>
            </Link>
            <ul className={styles.menu}>
                      <a className={styles.opçoes}> <Link to = "/">Home</Link></a>
                      <a className={styles.opçoes}> <Link to = "/docentes">Docentes</Link></a>
                      <a className={styles.opçoes}> <Link to = "/cadastro">Cadastro</Link></a>
                      <a className={styles.opçoes}> <Link to = "/contato">Contatos</Link></a>
            </ul>
  </nav>
}

export default Navbar