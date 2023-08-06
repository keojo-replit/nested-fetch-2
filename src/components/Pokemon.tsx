import { useState, useEffect } from 'react';
import { PokeAPI } from "pokeapi-types";

const Pokemon = ({ url, name }: { url: string, name: string }) => {
  const [detail, setDetail] = useState<PokeAPI.Pokemon | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch(url).then(res => res.json());
      console.log('data', data)
      setDetail(data)
    })()
  }, [])

  return (
    <div key={name} style={{ width: 'min-content' }}>
      <p>{name}</p>
      <img src={detail?.sprites?.front_default ?? ''} alt={`${name} image`} />
    </div>
  )
}

export default Pokemon