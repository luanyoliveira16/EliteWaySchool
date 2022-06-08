import styles from './Footer.module.css'
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import { NavLink } from "react-router-dom";



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.EWS}>Elite Way School</span>
      <div className={styles.icons}>
        <img src={Facebook} />
        <img src={Instagram} />
      </div>
      <spam className={styles.separador}>____________________________________________________________________</spam>

      <div className={styles.endereços}>
        <div className={styles.botafogoBarra}>
          <span className={styles.unidades}>RIO DE JANEIRO</span>
          <span> Rua General Severiano, 258</span>
          <span>Telefone (21)2458-7896</span>
        </div>

        <div className={styles.botafogoBarra}>
          <span className={styles.unidades}>SOROCABA</span>
          <span> Avenida Ayrton Senna, 4560</span>
          <span>Telefone (15)2458-7896</span>
        </div>
      </div>
      <div>
        <h6 className={styles.copyright}>© 2022 Elite Way School</h6>
      </div>

    </footer>

  )
}

export default Footer