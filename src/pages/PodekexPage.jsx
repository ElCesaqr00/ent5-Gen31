import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux"
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import "./styles/PodekexPage.css"

const PodekexPage = () => {

  const [search, setSearch] = useState("")
  const [selectValue, setSelectValue] = useState("allPokemons")
  
  const trainerName = useSelector(store => store.trainerName)
  
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  const [pokemons, getPokemons, getTypesPokemon ] = useFetch(url)

  useEffect(() => {
    if(selectValue === "allPokemons"){
      getPokemons()
    } else {
      getTypesPokemon(selectValue)
    }
  }, [selectValue])
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ""
  } 
  const cdFilter = (poke) => {
    const nameFilter = poke.name.includes(search)

    return nameFilter
  }
    console.log(pokemons)
  return (
    <>
    <section className='pokedex-page_container'>
      <article className='pokedex-page_img-container'>
      <img className='pokedex-page_img' src="/Group217.svg" alt="" />
      <img className="pokedex_Img" src="/image11.png" alt="" />
      </article>
      <article className='pokedex-page_container-form'>
        <p className='pokedex_welcome'>Welcome<span className='pokedex_span'> {trainerName}</span>, here you can find your favorite
          pokemon, Let´s go!</p>
          <section className='pokedex_forms'>
          <article className='pokedex_search'>
          <form className='pokedex_form' onSubmit={handleSubmit}>
            <input className='pokedex_Input' ref={inputSearch} type="text" />
            <button className='pokedex_Btn' >Search</button>
          </form>
          </article>
          <article className='pokedex_selector'>
          <SelectType 
          setSelectValue={setSelectValue} />
          </article>
          </section>
      </article>
      </section>
      <div className='pokedex-page_poke-cards'>
        {
          pokemons?.results.filter(cdFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      
    </>
  )
}

export default PodekexPage