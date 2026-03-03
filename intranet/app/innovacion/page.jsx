import Link from "next/link";
import styles from "../styles/innovacion.module.css";

export default function Innovacion() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ingeniería en Innovación Digital</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ingeniería / Innovación Digital
        </p>

        <p className={styles.descripcion}>
        Especialistas en tecnologías emergentes y soluciones digitales.
        </p>

        <div className={styles.info}>
        <div className={styles.box}>
            <h3>⏳ Duración</h3>
            <p>8 Semestres</p>
        </div>

        <div className={styles.box}>
            <h3>🎯 Perfil de Egreso</h3>
            <p>
            Diseñador digital y creador de soluciones tecnológicas innovadoras.
            </p>
        </div>
        </div>

        <h2 className={styles.subtitle}>📚 Materias</h2>

        <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/ux.png" alt="UX/UI" />
            <h3>UX / UI</h3>
        </div>

        <div className={styles.card}>
            <img src="/img/marketing.png" alt="Marketing Digital" />
            <h3>Marketing Digital</h3>
        </div>

        <div className={styles.card}>
            <img src="/img/vr.png" alt="Realidad Virtual" />
            <h3>Realidad Virtual</h3>
        </div>

        <div className={styles.card}>
            <img src="/img/creatividad.png" alt="Creatividad" />
            <h3>Creatividad</h3>
        </div>
        </div>

        <Link href="/ingenieria" className={styles.back}>
        ← Regresar a Ingeniería
        </Link>
    </div>
);
}