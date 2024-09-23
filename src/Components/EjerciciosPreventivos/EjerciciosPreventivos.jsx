import styles from "./ejerciciosPreventivos.module.css";
import Carousel from 'react-bootstrap/Carousel';

const EjerciciosPreventivos = () => {
  return (
   <>
   <section className={styles.ejerciciosContainer}>
   <h2>Ejercicios preventivos</h2>
   <Carousel>
   <Carousel.Item>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727115755/Escoliosis/6_bpv7ei.png" alt="" />
        <Carousel.Caption indicators="false">
          <h3>Puente de Glúteos</h3>
          <p>Fortalece los músculos de la espalda baja y mejora la alineación pélvica.</p>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727115755/Escoliosis/5_lvuckt.png" alt="" />
        <Carousel.Caption>
          <h3>Estiramiento de Gato-Vaca</h3>
          <p>Este movimiento ayuda a mejorar la flexibilidad de la columna.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727115755/Escoliosis/7_thc64v.png" alt="" />
        <Carousel.Caption>
          <h3>Plancha</h3>
          <p>
          Refuerza el core y promueve una postura saludable.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.botonCarrusel}>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727115755/Escoliosis/8_xnque7.png" alt="" />
        <Carousel.Caption className={styles.botonCarrusel}>
          <h3>Estiramientos Laterales</h3>
          <p>
          Ayudan a alinear los músculos del tronco y mejorar la simetría.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </section>
   </>
  )
}

export default EjerciciosPreventivos