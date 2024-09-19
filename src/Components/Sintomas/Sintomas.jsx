import styles from "./sintomas.module.css"

const Sintomas = () => {
  return (
    <>
     <div className={styles.sintomas}>
    <div className={styles.sintoma}>
      <div>
        <p>Desviación visible de la columna vertebral.</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624634/Escoliosis/DesviacionColumna_vqcl85.png" alt="" />
      </div>
    </div>
    <div className={styles.sintoma}>
      <div>
        <p>Diferencias en la altura de los hombros o las caderas.</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624634/Escoliosis/DesviacionEspalda_wqzxi0.png" alt="" />
      </div>
    </div>
    <div className={styles.sintoma}>
      <div>
        <p>Dolor en la espalda (en algunos casos).</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624634/Escoliosis/DolorDeEspalda_bkcdr7.png" alt="" />
      </div>
    </div>
    <div className={styles.sintoma}>
      <div>
        <p>Problemas respiratorios en casos severos, debido a la compresión de los pulmones.</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624636/Escoliosis/Pulmones_pn3aws.png" alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Sintomas