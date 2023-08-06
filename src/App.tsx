import { useState, useEffect } from 'react';
import './App.css';
import { PokeAPI } from "pokeapi-types";


import Pokemon from './components/Pokemon'

export default function App() {

  const [pokemons, setPokemons] = useState<PokeAPI.NamedAPIResource[]>([]);

  useEffect(() => {
    (async () => {
      const { results } = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(res => res.json());
      setPokemons(results)
    })()
  }, [])

  return (
    <main>
      {pokemons.map(pokemon => <Pokemon url={pokemon.url} name={pokemon.name} />)}
    </main>
  )
}