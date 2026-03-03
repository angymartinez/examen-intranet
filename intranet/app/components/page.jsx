"use client";
import Link from "next/link";
import styles from "../styles/Breadcrumbs.module.css";

export default function Breadcrumbs({ items }) {
    return (
    <nav className={styles.breadcrumbs}>
        {items.map((item, index) => (
        <span key={index}>
            {item.href ? (
            <Link href={item.href} className={styles.link}>
                {item.label}
            </Link>
            ) : (
            <span className={styles.current}>{item.label}</span>
            )}
            {index < items.length - 1 && (
            <span className={styles.separator}> / </span>
            )}
        </span>
        ))}
    </nav>
);
}