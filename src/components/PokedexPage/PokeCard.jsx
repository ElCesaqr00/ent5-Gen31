import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./PokeCard.css"

const PokeCard = ( {  url } ) => {

  const [infoPoke, getInfoPoke] = useFetch(url)

  useEffect(() => {
   getInfoPoke(url)
  }, [])
  
const navigate = useNavigate()

const handleNavigate = () => {
navigate( `/pokedex/${infoPoke.id}` )
}

  return (
    <section className='Card-Container'>
      <article className={`PokemonCard ${infoPoke?.types[0].type.name}` }>
        <header className={`PokemonCard_Header ${infoPoke?.types[0].type.name}` } onClick={handleNavigate}>
          <img className='PokemonCard_Image' src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className={`PokemonCard_Section `}>
          <h3 className='PokemonCard_Name'>{infoPoke?.name} </h3>
          <ul className='PokemonCard_Type'>
            {
              infoPoke?.types.map(infoType => (
                <li key={infoType.type.url} >{infoType.type.name} </li>
                ))
              }
          </ul>
              <p className='PokemonCard_TextType'>Type</p>
          <hr className='PokemonCard_Hr' />
          <ul className='PokemonCard_Stats'>
            {
              infoPoke?.stats.map(infoStats => (
                <div className='PokemonCard_Stats_li'>
                <li className='PokemonCard_Stats_list' key={infoStats.stat.url}>
                
                <span className='PokemonCard_Stats_Name'>{infoStats.stat.name} </span>
                <span className='PokemonCard_Stats_Number'>{infoStats.base_stat} </span>
                
                </li>
                </div>
              ))
            }
          </ul>
        </section>
      </article>
   </section>
  )
}

export default PokeCard