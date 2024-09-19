import styles from "./footer.module.css"
import WhatsAppButton from "./WhatsApp";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
    <div className={styles.footerContainer}>
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
    </>
  )
}

export default Footer