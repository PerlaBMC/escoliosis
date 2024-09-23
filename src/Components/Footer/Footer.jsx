import styles from "./footer.module.css"
import WhatsAppButton from "./WhatsApp";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
  <div className={styles.footerContainer}>
  <div className={styles.seccionesFooter}>
    <section>
      <h2>CONTÁCTANOS PARA MAYOR INFORMACIÓN</h2>
    </section>
    <section className={styles.contacto}>
    <WhatsAppButton message="Hola, me gustaría recibir más información"/>
    </section>
    <section className={styles.contacto}>
    <IoIosMail className={styles.IconContact}/><a href="mailto:información.escoliosis1@gmail.com">información.escoliosis1@gmail.com</a>
    </section>
    </div>
    <NavLink to="/políticasDePrivacidad" style={{textDecoration: "none", color:"white"}}  > <p> <MdOutlinePrivacyTip className={styles.IconContact}/> Políticas de privacidad</p></NavLink>
  </div>
    </>
  )
}

export default Footer