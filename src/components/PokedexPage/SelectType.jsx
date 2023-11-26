import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import "./SelectType.css"

const SelectType = ( { setSelectValue } ) => {

const url = "https://pokeapi.co/api/v2/type"

const [type, infoTypes] = useFetch(url)

useEffect(() => {
    infoTypes(url)
}, [])

const selectElement = useRef()

const handleChange = () => {
    setSelectValue(selectElement?.current.value)
}
  return (
    <select className='pokedex_selector' ref={selectElement} onChange={handleChange}>
        <option value="allPokemons">All pokemon</option>
        {
            type?.results.map(type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType