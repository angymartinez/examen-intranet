import Link from "next/link";
import styles from "../styles/finanzas.css";

export default function Finanzas() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Finanzas Corporativas</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ciencias Económico Administrativas / Finanzas
        </p>
        <p className={styles.descripcion}>
        Análisis financiero empresarial y toma de decisiones estratégicas.
        </p>
    <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/contabilidad.png" />
            <h3>📘 Contabilidad</h3>
            <p>Estados financieros y control contable.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/inversiones.png" />
            <h3>💰 Inversiones</h3>
            <p>Análisis y evaluación de proyectos financieros.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/mercados.png" />
            <h3>📊 Mercados Financieros</h3>
            <p>Sistemas financieros y mercado de capitales.</p>
        </div>
    </div>
    <Link href="/ciencias" className={styles.back}>
        ← Regresar
    </Link>
    </div>
);
}