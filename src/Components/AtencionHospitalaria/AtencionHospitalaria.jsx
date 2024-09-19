import styles from "./atencionhospitalaria.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const AtencionHospitalaria = () => {
  return (
    <>
    <section className={styles.hospitalesContainer}>
        <div className={styles.hospitalizacionImg}>
            <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726673994/Escoliosis/PlacaToraxica_mnc7av.png" alt="Img hospitalizacion" />
        </div>
        <div className={styles.hospitalizacionInf}>
            <h1>¿Sabías que existen <strong>jornadas 
            de cirugías gratuitas</strong> para personas con <strong>escoliosis</strong>?</h1>
            <h3>Se llevan a cabo entre el mes de <strong>abril y mayo</strong>, en Monterrey, México. En el hospital <strong>Christus Muguerza.</strong></h3>
            <div className={styles.infHospitales}>
                <FaPlusCircle className={styles.iconPlus}/><h2>HOSPITALES ESPECIALIZADOS</h2>
            </div>
            <section className={styles.hospitales}>
            <div className={styles.hospital}>
                <div className={styles.NombreDeHospital}>
                    <h6>Christus Muguerza</h6>
                </div>
                <div className={styles.datosDeHospital}>
                    <a href="https://maps.app.goo.gl/PcofeCv4a9CNsQ6b7" target="_blanket"><FaLocationDot className={styles.iconDirection}/> Monterrey, N.L.</a>
                    <a href="tel:81 8122 8104"><FaPhoneAlt className={styles.iconDirection}/> 81 8122 8104</a>
                </div>
            </div>
            <div className={styles.hospital}>
            <div className={styles.NombreDeHospital}>
                    <h6>Shriners</h6>
                </div>
                <div className={styles.datosDeHospital}>
                    <a href="https://maps.app.goo.gl/5C266vXtvbF3uLjZ8" target="_blanket"><FaLocationDot className={styles.iconDirection}/> Av. del Iman 257, Coyoacán, CDMX </a>
                    <a href="tel:52 55 5424 7850"><FaPhoneAlt className={styles.iconDirection}/> 52 55 5424 7850, 800 237 5055</a>
                </div>
            </div>
            <div className={styles.hospital}>
            <div className={styles.NombreDeHospital}>
                    <h6>Instituto Nacional de Rehabilitación</h6>
                </div>
                <div className={styles.datosDeHospital}>
                    <a href="https://maps.app.goo.gl/9fttU6ZaouzSuzy57" target="_blanket"><FaLocationDot className={styles.iconDirection}/>Calzada México Xochimilco No. 289, Tlalpan, CDMX. </a>
                    <a href="tel:55 5999 1000"><FaPhoneAlt className={styles.iconDirection}/> 55 5999 1000, Ext.: 12209 y 12206, 12813 y 12814</a>
                </div>
            </div>
            <div className={styles.hospital}>
            <div className={styles.NombreDeHospital}>
                    <h6>Clínica de columna</h6>
                </div>
                <div className={styles.datosDeHospital}>
                    <a href="https://maps.app.goo.gl/ybnDeWdizQawWJJDA" target="_blanket"><FaLocationDot className={styles.iconDirection}/>Nueva York 115, Colonia Nápoles, Benito Juárez, CDMX. </a>
                    <a href="tel:55 8663 5255"><FaPhoneAlt className={styles.iconDirection}/> 55 8663 5255</a>
                </div>
            </div>
            </section>
        </div>
    </section>
    </>
  )
}

export default AtencionHospitalaria