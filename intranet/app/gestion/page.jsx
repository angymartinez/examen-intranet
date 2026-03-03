"use client"

import Link from "next/link";
import styles from "../styles/software.module.css";
import AsyncAwait from "../../components/asyncAwait";
import PromiseThen from "../../components/promisThen";
import { useEffect, useState } from "react";

export default function Gestion() {
    const [data, setData] = useState(false)
    useEffect(() => {
        Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/blastoise").then(res => res.json()),
            fetch("https://rickandmortyapi.com/api/character/?name=jerry").then(res => res.json()),
            fetch("https://www.swapi.tech/api/people/6").then(res => res.json()),
        ])
        .then((info) => {
            setData(info)
            console.log(info)
        });
    },[]);
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Gestion empresarial</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ciencias Económico Administrativas / Gestion
        </p>
        <p className={styles.descripcion}>
        Análisis financiero empresarial y toma de decisiones estratégicas.
        </p>
    <div className={styles.grid}>
        <div className={styles.card}>
            <AsyncAwait link="https://pokeapi.co/api/v2/pokemon/arcanine" />
        </div>

        <div className={styles.card}>
            <PromiseThen link="https://pokeapi.co/api/v2/pokemon/abra"/>
        </div>

        <div className={styles.card}>
            {data ? <h2>{data[0].name}</h2>: <img src="/img/loading3.gif" alt="image"/>}
            {data ? <img src={data[0].sprites.front_default} alt="image" />: <img src="/img/loading3.gif" alt="image"/>}
            {data ? <p>{data[0].types[0].type.name}</p>: <img src="/img/loading3.gif" alt="image"/>}
            <h3>Promise .All</h3>
        </div>

        <div className={styles.card}>
            {data ? <h2>{data[1].results[0].name}</h2>: <img src="/img/loading4.gif" alt="image"/>}
            {data ? <img src={data[1].results[0].image} alt="image" />: <img src="/img/loading4.gif" alt="image"/>}
            {data ? <p>{data[1].results[0].species}</p>: <img src="/img/loading4.gif" alt="image"/>}
            <h3>Promise .All</h3>
        </div>

        <div className={styles.card}>
            {data ? <h2>{data[2].result.properties.name}</h2>: <img src="/img/loading5.gif" alt="image"/>}
            {data ? <p>{data[2].result.properties.gender}</p>: <img src="/img/loading5.gif" alt="image"/>}
            {data ? <p>{data[2].result.properties.skin_color}</p>: <img src="/img/loading5.gif" alt="image"/>}
            {data ? <p>{data[2].result.description}</p>: <img src="/img/loading5.gif" alt="image"/>}
            <h3>Promise .All</h3>
        </div>
    </div>
    <Link href="/ciencias" className={styles.back}>
        ← Regresar
    </Link>
    </div>
);
}