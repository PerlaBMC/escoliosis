import styles from "./tratamiento.module.css"

const Tratamiento = () => {
  return (
   <>
   <section className={styles.tratamientoContainer}>
    <div className={styles.tratamientoSection}>
    <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726638559/Escoliosis/Tratamiento1_w0bnow.png" alt="Tratamiento 1" />
    </div>
    <div className={styles.infTratamiento}>
        <h6><strong>Observación:</strong> En casos leves y en pacientes en crecimiento, se puede optar por monitorear la progresión.</h6>
    </div>
    </div>
    <div className={styles.tratamientoSection}>
    <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726638561/Escoliosis/Tratamiento2_ucvdho.png" alt="Tratamiento 2" />
    </div>
    <div className={styles.infTratamiento}>
        <h6><strong>Corsés:</strong> Utilizados principalmente en adolescentes con escoliosis progresiva para evitar que la curvatura empeore.</h6>
    </div>
    </div>
    <div className={styles.tratamientoSection}>
    <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726638562/Escoliosis/Tratamiento3_gn4ghe.png" alt="Tratamiento 3" />
    </div>
    <div className={styles.infTratamiento}>
        <h6><strong>Cirugía:</strong> En casos severos o progresivos que afectan la función o causan dolor, se puede considerar la cirugía para corregir la curvatura y estabilizar la columna vertebral.</h6>
    </div>
    </div>
   </section>
   </>
  )
}

export default Tratamiento