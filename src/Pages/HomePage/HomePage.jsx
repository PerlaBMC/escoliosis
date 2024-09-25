import styles from "./homePage.module.css";
import Titulo from "../../Components/Titulo/Titulo";
import Tipos from "../../Components/Tipos/Tipos";
import Sintomas from "../../Components/Sintomas/Sintomas";
import Diagnostico from "../../Components/Diagnostico/Diagnostico";
import Tratamiento from "../../Components/Tratamiento/Tratamiento";
import Pronostico from "../../Components/Pronostico/prevencion/Pronostico";
import AtencionHospitalaria from "../../Components/AtencionHospitalaria/AtencionHospitalaria";
import Causas from "../../Components/Causas/Causas";
import EjerciciosPreventivos from "../../Components/EjerciciosPreventivos/EjerciciosPreventivos";


const HomePage = () => {
  return (
   <>
   <div className={styles.HomePageComatiner}>
    <section className={styles.bannerContainer}>
    <div className={styles.bannerInformation} id="QueEs">
      <h1>La escoliosis es una curvatura anormal de la columna vertebral que puede tener forma de “S” o “C”. Esta condición puede variar en gravedad, 
        desde leve hasta severa, y generalmente se detecta durante la infancia o adolescencia..</h1>
    </div>
    <div className={styles.bannerImg}>
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726630663/Escoliosis/Imagen_Escoliosis2_uati2d.png" alt="" />
    </div>
    </section>
    <section>
      <Titulo Titulo= "Causas de escoliosis" />
      <Causas/>
    </section>
    <section>
    <Titulo Titulo="Tipos de escoliosis"/>
    <Tipos/>
    </section>
    <section id="Sintomas">
    <Titulo Titulo="Síntomas de escoliosis"/>
    <Sintomas/>
    </section>
    <section id="Diagnostico" className={styles.Diagnostico}>
      <Titulo Titulo="Diagnóstico de escoliosis"/>
      <Diagnostico/>
    </section>
    <section id="Tratamiento" className={styles.Tratamiento}>
      <Titulo Titulo="Tratamiento de ecoliosis"/>
      <Tratamiento/>
    </section>
    <section>
      <Pronostico/>
    </section>
    <section>
      <EjerciciosPreventivos/>
    </section>
    <section id="Atencion">
      <AtencionHospitalaria/>
    </section>
   </div>
   </>
  )
}

export default HomePage