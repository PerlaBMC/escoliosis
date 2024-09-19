import styles from "./titulo.module.css"

const Titulo = (props) => {
  return (
   <>
   <div className={styles.titulo}>
    <h2>{props.Titulo}</h2>
    </div>
   </>
  )
}

export default Titulo