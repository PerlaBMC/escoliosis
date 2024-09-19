import styles from "./homePage.module.css";
import Titulo from "../../Components/Titulo/Titulo";
import Tipos from "../../Components/Tipos/Tipos";
import Sintomas from "../../Components/Sintomas/Sintomas";
import Diagnostico from "../../Components/Diagnostico/Diagnostico";
import Tratamiento from "../../Components/Tratamiento/Tratamiento";
import Pronostico from "../../Components/Pronostico/prevencion/Pronostico";
import AtencionHospitalaria from "../../Components/AtencionHospitalaria/AtencionHospitalaria";


const HomePage = () => {
  return (
   <>
   <div className={styles.HomePageComatiner}>
    <section className={styles.bannerContainer}>
    <div className={styles.bannerInformation} id="QueEs">
      <h1>La escoliosis se caracteriza por una <strong>curvatura lateral de la columna vertebral,</strong> 
        que puede adoptar la forma de una “S” o de una “C” en lugar de una alineación recta.</h1>
    </div>
    <div className={styles.bannerImg}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726630663/Escoliosis/Imagen_Escoliosis2_uati2d.png" alt="" />
    </div>
    </section>
    <section>
    <Titulo Titulo="Tipos"/>
    <Tipos/>
    </section>
    <section id="Sintomas">
    <Titulo Titulo="Síntomas"/>
    <Sintomas/>
    </section>
    <section id="Diagnostico" className={styles.Diagnostico}>
      <Titulo Titulo="Diagnóstico"/>
      <Diagnostico/>
    </section>
    <section id="Tratamiento" className={styles.Tratamiento}>
      <Titulo Titulo="Tratamiento"/>
      <Tratamiento/>
    </section>
    <section>
      <Pronostico/>
    </section>
    <section id="Atencion">
      <AtencionHospitalaria/>
    </section>
   </div>
   </>
  )
}

export default HomePage