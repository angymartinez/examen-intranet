import Link from "next/link";
import styles from "../styles/software.module.css";

export default function Software() {
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ingeniería en Desarrollo de Software</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ingeniería / Desarrollo de Software
        </p>
        <p className={styles.descripcion}>
        Forma profesionales capaces de diseñar, desarrollar y mantener sistemas
        de software modernos.
        </p>
        <div className={styles.info}>
        <div className={styles.box}>
            <h3>⏳ Duración</h3>
            <p>9 Semestres</p>
        </div>
        <div className={styles.box}>
            <h3>🎯 Perfil de egreso</h3>
            <p>
            Programador Full Stack, analista de sistemas y desarrollador web.
            </p>
        </div>
    </div>
        <h2 className={styles.subtitle}>📚 Materias</h2>
    <div className={styles.grid}>
        <div className={styles.card}>
            <img src="/img/programacion.png" />
            <h3>💻 Programación</h3>
            <p>Algoritmos, estructuras y lógica computacional.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/basesdatos.png" />
            <h3>🗄 Bases de Datos</h3>
            <p>Modelado, consultas y administración de datos.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/ingenieria-software.png" />
            <h3>📐 Ingeniería de Software</h3>
            <p>Diseño, calidad y gestión de proyectos.</p>
        </div>
        <div className={styles.card}>
            <img src="/img/web.png" />
            <h3>🌐 Desarrollo Web</h3>
            <p>Aplicaciones web modernas y responsivas.</p>
        </div>
    </div>
    <Link href="/ingenieria" className={styles.back}>
        ← Regresar a Ingeniería
    </Link>
    </div>
);
}