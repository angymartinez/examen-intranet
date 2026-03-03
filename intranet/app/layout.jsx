import './globals.css'
import Link from 'next/link'
import Breadcrumbs from './components/page.jsx'

export default function RootLayout({ children }) {
    return (
    <html>
        <body>

        {/* ===== BARRA AZUL ===== */}
        <nav className="menu">
            <Link href="/">Inicio</Link>
            <Link href="/facultades">Facultades</Link>
        </nav>
        {/* ===== BREADCRUMB ARRIBA ===== */}
        <Breadcrumbs
            items={[
            { label: "Inicio", href: "/" },
            { label: "Facultades", href: "/facultades" },
            { label: "Ingeniería", href: "/ingenieria" },
            { label: "Ciencias", href: "/ciencias"}
            ]}
        />
        <main>
            {children}
        </main>
        {/* ===== BREADCRUMB ABAJO ===== */}
        </body>
    </html>
);
}