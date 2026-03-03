"use client"
import { useEffect, useState } from "react";
import "../app/styles/api.fetch.css";

export default function AsyncAwait({link}) {
  const [data, setData] = useState(false)
  useEffect(() => {
    async function get() {
      const info = await fetch(link);
      const parseInfo = await info.json() 
      setData(parseInfo);
    }

    get()
  }, [])

  return (
    <div>
      {data ? <h2>{data.name}</h2>: <img src="/img/loading1.gif" alt="image"/>}
      {data ? <img src={data.sprites.front_default} alt="image" />: <img src="/img/loading1.gif" alt="image"/>}
      {data ? <p>{data.types[0].type.name}</p>: <img src="/img/loading1.gif" alt="image"/>}
      <h3>Async Await</h3>
    </div>
  )
}