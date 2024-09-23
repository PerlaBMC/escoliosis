import { FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.css";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5519126641&text=${encodeURIComponent(message)}`;

  return (
    <div className={styles.enlaceWhatsApp}>
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <p> <FaWhatsapp className={styles.IconContact}/> 55-19-12-66-41</p>
    </a>
    </div>
  );
};

export default WhatsAppButton;