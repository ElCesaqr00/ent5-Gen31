import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/PokemonInfoPage.css"
const PokemonInfoPage = () => {
 
  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getInfoPoke] = useFetch(url)

  useEffect(() => {
    getInfoPoke()
  }, []) 

 
  return (
  <>
  <div className='container'>
    <img className='poke_img' src="/public/Group217.svg" alt="" />
  </div>
    <section className='poke_general-info'>
      <article className='poke_info_stats'>
      <header className='poke_stats'>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h2>{pokemon?.name} </h2>
      </header>
      </article>
      <article className='poke_movement'>

      </article>
    </section>
    </>
  )
}

export default PokemonInfoPage