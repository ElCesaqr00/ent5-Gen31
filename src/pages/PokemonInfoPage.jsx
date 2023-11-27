import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import "./styles/PokemonInfoPage.css"
const PokemonInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getInfoPoke] = useFetch(url)

  useEffect(() => {
    getInfoPoke()
  }, [])

  console.log(pokemon)
  return (
    <>
      <header className='container'>
        <img className='poke_img' src="/public/Group217.svg" alt="" />
      </header>
      <section className='poke_general-info'>
        <article className='poke_info_stats'>
          <article className={`poke_stats ${pokemon?.types[0].type.name}`}>
            <div>
            <div className='poke_img_container'>
              <article className='test2' >
              <img className='poke_img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </article>
            </div>
            </div>
            <div className='test'>
            <article className='poke_name'>
              <h3>#{pokemon?.id}</h3>
              <h2>{pokemon?.name} </h2>
            </article>
            <article className='poke_article'>
              <div className='poke_info'><span >Weight</span><span className='poke_response'>{pokemon?.weight}</span></div>
              <div className='poke_info'><span>Height</span><span className='poke_response'>{pokemon?.height}</span></div>
            </article>
            </div>
          </article>
        </article>
        <article className='poke_movement'>

        </article>
      </section>
    </>
  )
}

export default PokemonInfoPage