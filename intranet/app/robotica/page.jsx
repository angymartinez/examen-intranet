"use client"

import Link from "next/link";
import styles from "../styles/software.module.css";
import AsyncAwait from "../../components/asyncAwait";
import PromiseThen from "../../components/promisThen";
import { useEffect, useState } from "react";

export default function Robotica() {
    const [data, setData] = useState(false)
    useEffect(() => {
        Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon/caterpie").then(res => res.json()),
            fetch("https://rickandmortyapi.com/api/character/?name=summer").then(res => res.json()),
            fetch("https://www.swapi.tech/api/people/1").then(res => res.json()),
        ])
        .then((info) => {
            setData(info)
            console.log(info)
        });
    },[]);

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Ingeniería en Robotica</h1>
        <p className={styles.ruta}>
        Inicio / Facultades / Ingeniería / Robotica
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
            <AsyncAwait link="https://pokeapi.co/api/v2/pokemon/paras" />
        </div>

        <div className={styles.card}>
            <PromiseThen link="https://pokeapi.co/api/v2/pokemon/diglett"/>
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
    <Link href="/ingenieria" className={styles.back}>
        ← Regresar a Ingeniería
    </Link>
    </div>
);
}