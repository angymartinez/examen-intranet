import Link from "next/link";
import styles from "../styles/ingenieria.module.css";

export default function Ingenieria() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Facultad de Ingeniería</h1>
        <p className={styles.ruta}>Inicio / Facultades / Ingeniería</p>
        <div className={styles.grid}>
            <Link href="software" className={styles.card}>
            <img src="/img/software.png" />
            <h3>🧑‍💻 Ingeniería en Desarrollo de Software</h3>
            <p>Programación, bases de datos y aplicaciones web.</p>
            </Link>
            <Link href="innovacion" className={styles.card}>
            <img src="/img/innovacion.png" />
            <h3>💡 Ingeniería en Innovación Digital</h3>
            <p>Creatividad, transformación digital y UX.</p>
            </Link>
            <Link href="robotica" className={styles.card}>
            <img src="/img/robotica.png" />
            <h3>🤖 Ingeniería en Robótica</h3>
            <p>Automatización, sensores y sistemas inteligentes.</p>
            </Link>
        </div>
    </div>
);
}