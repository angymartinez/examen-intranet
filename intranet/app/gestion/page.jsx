import Link from "next/link";
import styles from "../styles/gestion.module.css";

export default function Gestion() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Gestión Económica Empresarial</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ciencias Económico Administrativas / Gestión
        </p>
        <p className={styles.descripcion}>
        Formación en administración y dirección de empresas.
        </p>
        <div className={styles.info}>
        <div className={styles.box}>
            <h3>⏳ Duración</h3>
            <p>8 Semestres</p>
        </div>
    </div>
    <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/contabilidad.png" />
            <h3>📘 Contabilidad</h3>
            <p>Control financiero y registros contables.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/economia.png" />
            <h3>📈 Economía</h3>
            <p>Análisis económico y toma de decisiones.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/administracion.png" />
            <h3>🏢 Administración</h3>
            <p>Gestión organizacional y liderazgo.</p>
        </div>
    </div>
    <Link href="/ciencias" className={styles.back}>
        ← Regresar
    </Link>
    </div>
);
}