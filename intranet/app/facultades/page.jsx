import Link from "next/link";
import styles from "../styles/facultades.module.css";

export default function Facultades() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Facultades</h1>
        <p className={styles.ruta}>Inicio / Facultades</p>
        <div className={styles.grid}>
            <Link href="/ingenieria" className={styles.card}>
            <span className={styles.icon}>🛠</span>
            <h3>Facultad de Ingeniería</h3>
            <p>Carreras tecnológicas e innovación</p>
            </Link>
            <Link href="/ciencias" className={styles.card}>
            <span className={styles.icon}>📊</span>
            <h3>Ciencias Económico Administrativas</h3>
            <p>Negocios, contabilidad y administración</p>
            </Link>
        </div>
    </div>
);
}