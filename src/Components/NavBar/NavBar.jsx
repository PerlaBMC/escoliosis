import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
    <div className={styles.NavBarContainer}>
    <section className={styles.logo}>
    <NavLink to="/">    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726690589/Escoliosis/Escoliosis_1_qppg9e.png" alt="Loco Escoliosis" /></NavLink>
    </section>
    <section className={styles.menu}>
    <a href="#QueEs">¿Qué es?</a>
    <a href="#Sintomas">Síntomas</a>
    <a href="#Diagnostico">Diagnóstico</a>
    <a href="#Tratamiento">Tratamiento</a>
    <a href="#Atencion">Atención Hospitalaria</a>
    </section>
    </div>
    </>
  )
}

export default NavBar