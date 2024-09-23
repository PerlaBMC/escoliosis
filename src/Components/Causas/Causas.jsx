import styles from "./causas.module.css";

const Causas = () => {
	return (
		<>
			<section className={styles.causasContainer}>
				<h4>
					Las causas exactas de la escoliosis no siempre se conocen, pero pueden
					estar relacionadas con factores genéticos, defectos congénitos en la
					formación de la columna o afecciones neuromusculares que afectan el
					control muscular.
				</h4>
			</section>
			<section className={styles.fxRiesgoContainer}>
				<h2>Factores de Riesgo para el Desarrollo de la Escoliosis</h2>
				<div className={styles.fxRiesgo}>
					<div className={styles.fx}>
                        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727043145/Escoliosis/19_td9hl9.png" alt="" />
						<h3>Factores Genéticos</h3>
						<p>
							La herencia juega un papel importante en el desarrollo de la
							escoliosis, especialmente en su forma idiopática. Las personas con
							antecedentes familiares de escoliosis tienen más probabilidades de
							desarrollar la afección, lo que sugiere una predisposición
							genética.
						</p>
					</div>
					<div className={styles.fx}>
                        <h3>Factores Ambientales</h3>
						<p>
							Crecimiento acelerado: Los períodos de crecimiento rápido durante
							la adolescencia aumentan el riesgo de desarrollar escoliosis, ya
							que la columna se somete a más estrés. Lesiones o condiciones
							médicas: Lesiones previas en la columna vertebral o enfermedades
							neuromusculares, como la parálisis cerebral o distrofia muscular,
							también pueden contribuir a la escoliosis.
						</p>
					</div>
					<div className={styles.fx}>
                        <h3>Factores Biomecánicos</h3>
                        <p>
                        La postura corporal y la distribución desigual del peso 
                        (debido a piernas de diferentes longitudes, por ejemplo) pueden agravar la curvatura de la columna y favorecer la escoliosis.
                        </p>
                        <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1727043145/Escoliosis/20_et7lk7.png" alt="" />
                    </div>
				</div>
			</section>
		</>
	);
};

export default Causas;
