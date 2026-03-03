import Link from "next/link";
import styles from "../styles/robotica.module.css";

export default function Robotica() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ingeniería en Robótica</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ingeniería / Robótica
        </p>
        <p className={styles.descripcion}>
        Diseño y desarrollo de sistemas automatizados e inteligentes.
        </p>
        <div className={styles.info}>
        <div className={styles.box}>
            <h3>⏳ Duración</h3>
            <p>9 Semestres</p>
        </div>
        <div className={styles.box}>
            <h3>🎯 Perfil</h3>
            <p>Ingeniero especializado en automatización y control.</p>
        </div>
    </div>
        <h2 className={styles.subtitle}>📚 Materias</h2>
        <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/electronica.png" />
            <h3>⚡ Electrónica</h3>
            <p>Circuitos, sensores y actuadores.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/programacion.png" />
            <h3>💻 Programación</h3>
            <p>Lenguajes y control de sistemas robóticos.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/control.png" />
            <h3>🎛 Control</h3>
            <p>Automatización y sistemas de control.</p>
        </div>
    </div>
    <Link href="/ingenieria" className={styles.back}>
        ← Regresar a Ingeniería
    </Link>
    </div>
);
}