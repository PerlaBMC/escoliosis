import styles from "./tipos.module.css"


const Tipos = () => {
  return (
   <>
   <section>
   <div className={styles.tipos}>
    <div className={styles.tipo}>
      <div className={styles.tipoNumero}>
        <h6>1</h6>
      </div>
      <div>
        <p><strong>Escoliosis idiopática:</strong> La causa es desconocida y es la forma más común, especialmente en adolescentes.</p>
      </div>
    </div>
    <div className={styles.tipo}>
    <div className={styles.tipoNumero}>
        <h6>2</h6>
      </div>
      <div>
        <p><strong>Escoliosis congénita:</strong> Se debe a una anomalía en el desarrollo de la columna vertebral durante el embarazo.</p>
      </div>
    </div>
    <div className={styles.tipo}>
    <div className={styles.tipoNumero}>
        <h6>3</h6>
      </div>
      <div>
        <p><strong>Escoliosis neuromuscular:</strong> Resulta de condiciones neuromusculares como la parálisis cerebral o la distrofia muscular.</p>
      </div>
    </div>
    <div className={styles.tipo}>
    <div className={styles.tipoNumero}>
        <h6>4</h6>
      </div>
      <div>
        <p><strong>Escoliosis degenerativa:</strong> Ocurre en adultos debido al desgaste de los discos y articulaciones de la columna vertebral.</p>
      </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default Tipos