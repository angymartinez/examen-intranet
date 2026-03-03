import Link from "next/link";
import styles from "../styles/capital.css";

export default function Capital() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Capital Humano</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ciencias Económico Administrativas / Capital Humano
        </p>
        <p className={styles.descripcion}>
        Formación enfocada en la gestión y desarrollo del talento humano.
        </p>
        <h2 className={styles.subtitle}>📚 Materias</h2>
        <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/recursos-humanos.png" />
            <h3>👥 Recursos Humanos</h3>
            <p>Gestión del personal y relaciones laborales.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/psicologia.png" />
            <h3>🧠 Psicología</h3>
            <p>Comportamiento humano en las organizaciones.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/evaluacion.png" />
            <h3>📋 Evaluación</h3>
            <p>Medición del desempeño y competencias.</p>
        </div>
    </div>
    <Link href="/ciencias" className={styles.back}>
        ← Regresar a Ciencias Económico Administrativas
    </Link>
    </div>
);
}