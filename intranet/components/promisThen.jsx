"use client"
import { useEffect, useState } from "react";
import "../app/styles/api.fetch.css";

export default function PromiseThen({link}) {
  const [data, setData] = useState(false)
  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(res => setData(res))
  })
  return (
    <div>
      {data ? <h2>{data.name}</h2>: <img src="/img/loading2.gif" alt="image"/>}
      {data ? <img src={data.sprites.front_default} alt="image" />: <img src="/img/loading2.gif" alt="image"/>}
      {data ? <p>{data.types[0].type.name}</p>: <img src="/img/loading2.gif" alt="image"/>}
      <h3>Promise .Then</h3>
    </div>
  )
}