import styles from "./politicasDePrivacidad.module.css"


const PoliticasDePrivacidad = () => {
  return (
   <>
    <section className={styles.politicasContainer}>
    <h2>Política de Privacidad</h2>
    <p>En escoliosis.vercel.app, respetamos tu privacidad y estamos comprometidos con la protección de la información personal que nos proporcionas. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información.</p>
    <h6>Información que Recopilamos</h6>
      <li>Datos Personales: Al interactuar con nuestro sitio, podemos recopilar información como tu nombre, dirección de correo electrónico y preferencias.</li>
      <li>Datos de Navegación: Recopilamos datos sobre cómo usas nuestro sitio, incluidos cookies y direcciones IP.</li>
      <h6>Uso de la Información</h6>
      <p>Los datos recopilados se utilizan para mejorar la experiencia del usuario, personalizar el contenido y ofrecer publicidad relevante de acuerdo con las políticas de Google AdSense.</p>
      <h6>Compartición de Información</h6>
      <p>No compartimos ni vendemos tus datos personales a terceros sin tu consentimiento, salvo en casos donde sea necesario para cumplir con la ley o normativas aplicables.</p>
      <h6>Seguridad de la Información</h6>
      <p>Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados, alteraciones o divulgaciones. Sin embargo, no podemos garantizar la seguridad total de la información transmitida a través de internet.</p>
      <h6>Cookies</h6>
      <p>Utilizamos cookies para personalizar la experiencia en nuestro sitio, analizar el tráfico y mostrar anuncios relevantes. Al utilizar nuestro sitio, aceptas el uso de cookies según nuestra política.</p>
      <h6>Derechos del Usuario</h6>
      <p>Tienes derecho a acceder, rectificar o eliminar tu información personal en cualquier momento. Para hacerlo, puedes contactarnos a través del formulario disponible en el sitio.</p>
      <h6>Modificaciones a esta Política</h6>
      <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta página, y se te notificará a través del sitio.</p>
    </section>
   </>
  )
}

export default PoliticasDePrivacidad