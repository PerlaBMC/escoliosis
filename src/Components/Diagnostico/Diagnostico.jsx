import styles from "./diagnostico.module.css"

const Diagnostico = () => {
	return (
		<>
			<section className={styles.diagnosticoContainer}>
                <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624636/Escoliosis/StikerEscoliosis_lpwzmd.png" alt="stiker placa escoliosis" className={styles.imgStikerPlaca}/>
				<div className={styles.dxSection}>
					<h5>
						<strong>Examen físico:</strong> El médico evalúa la alineación de la
						columna y busca signos visibles de curvatura.
					</h5>
				</div>
				<div className={styles.dxSection}>
					<h5>
						<strong>Radiografías:</strong> Se utilizan para medir el ángulo de
						la curvatura y determinar la severidad.
					</h5>
				</div>
				<div className={styles.dxSection}>
					<h5>
						<strong>
							Resonancia magnética (RM) o tomografía computarizada (TC):
						</strong>{" "}
						Pueden ser usadas para obtener una vista más detallada en casos
						complejos.
					</h5>
				</div>
                <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1726624636/Escoliosis/Radiografia_gunmp4.png" alt="stiker Aparato RX" className={styles.stikerAparatoRX} />
			</section>
		</>
	);
};

export default Diagnostico