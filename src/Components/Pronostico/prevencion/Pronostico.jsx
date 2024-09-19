import styles from "./pronostico.module.css"

const Pronostico = () => {
  return (
   <>
   <section className={styles.pronosticoContainer}>
    <div className={styles.sectionPronostico}>
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726672611/Escoliosis/TrozoDePapelConMasquinDerecho_glpxyi.png" alt="Trozo de papel" />
    <div>
    <h2>Pronóstico</h2>
    <p>La mayoría de las personas con escoliosis tienen una <strong>curva leve</strong> que no causa problemas <strong>significativos</strong>. 
        Sin embargo, en casos severos, la escoliosis puede llevar a <strong>dolor crónico y complicaciones respiratorias 
        si no se trata adecuadamente.</strong></p>
    </div>
    </div>
    <div className={styles.sectionPrevencion}>
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726672610/Escoliosis/TrozoDePapelIzq_bcb5zw.png" alt="Trozo de papel" />
    <div>
    <h2>Prevención</h2>
    <p><strong>No se puede prevenir la escoliosis idiopática</strong>, pero el diagnóstico temprano y el tratamiento adecuado pueden <strong>ayudar a 
    controlar la progresión y reducir las complicaciones.</strong></p>
    </div>
    </div>
   </section>
   </>
  )
}

export default Pronostico