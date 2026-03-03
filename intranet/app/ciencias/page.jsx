import Link from "next/link";
import styles from "../styles/ciencias.module.css";

export default function Ciencias() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Ciencias Económico Administrativas</h1>
            <p className={styles.ruta}>Inicio / Facultades / Económicas</p>
            
            <div className={styles.grid}>
                <Link href="/capital-humano" className={styles.card}>
                    <img src="/img/Admin.png" alt="Capital Humano" />
                    <h3>📈 Licenciatura en Capital Humano</h3>
                    <p>Gestión empresarial y liderazgo.</p>
                </Link>
                <Link href="/finanzas" className={styles.card}>
                    <img src="/img/Contabilidad.png" alt="Finanzas" />
                    <h3>💰 Licenciatura en Finanzas Corporativas</h3>
                    <p>Finanzas, auditoría y fiscal.</p>
                </Link>
                <Link href="/gestion" className="card-link"> {/* Puedes usar clases normales si prefieres */}
                    <div className={styles.card}>
                        <img src="/img/Mercadotecnia.png" alt="Gestión" />
                        <h3>📊 Licenciatura en Gestión económica empresarial</h3>
                        <p>Estrategias comerciales y ventas.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}