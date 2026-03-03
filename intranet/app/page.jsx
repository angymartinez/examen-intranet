import Link from "next/link";
import Breadcrumbs from "./components/page.jsx";
import "./styles/inicio.css";

export default function Inicio() {
    return (
    <main className="main-container">
      {/* Breadcrumbs */}
        <div className="breadcrumbs-wrapper">
    </div>
        <section className="hero-section">
        <div className="card">
            <div className="icon-header">
            <img src="/icons/cap.png" alt="Icono Cap" width="60" height="40" />
        </div>
            <p className="breadcrumb">INICIO</p>
            <h1>Portal Universitario</h1>
            <p className="description">
            Bienvenido a la intranet académica.
            </p>
            <Link href="/facultades" className="btn-primary">
            Ver Facultades
            <img
                src="/icons/arrow.png"
                alt="ir"
                width="18"
                height="18"
                className="btn-icon"
            />
        </Link>
        </div>
    </section>
    </main>
);
}