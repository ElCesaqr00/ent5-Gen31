import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./styles/PokemonInfoPage.css";
const PokemonInfoPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [pokemon, getInfoPoke] = useFetch(url);

  useEffect(() => {
    getInfoPoke();
  }, []);

  return (
    <>
      <header className="container">
        <img className="poke_img" src="/public/Group217.svg" alt="" />
      </header>
      <section className="poke_general-info">
        <article className={`poke_stats ${pokemon?.types[0].type.name}`}>
          <div className="poke_img_container">
            <article className="test2">
              <img
                className="poke_img2"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </article>
          </div>
          <div className="test">
            <article className="poke_name">
              <h3>#{pokemon?.id}</h3>
              <h2>{pokemon?.name} </h2>
            </article>
            <article className="poke_article">
              <div className="poke_info">
                <span>Weight</span>
                <span className="poke_response">{pokemon?.weight}</span>
              </div>
              <div className="poke_info">
                <span>Height</span>
                <span className="poke_response">{pokemon?.height}</span>
              </div>
            </article>
            <article className="poke_type">
              <div className="poke_type_info">
                <h2>Type</h2>
                <ul className="poke_list">
                  <li className={`poke_type1 ${pokemon?.types[0].type.name}1`}>
                    {pokemon?.types[0].type.name}
                  </li>
                  <li className={`poke_type2 ${pokemon?.types[1].type.name}1`}>
                    {pokemon?.types[1].type.name}
                  </li>
                </ul>
              </div>
              <div>
                <h2>Habilities</h2>
                <ul className="poke_list">
                  <li className="poke_hability1">
                    {pokemon?.abilities[0].ability.name}
                  </li>
                  <li className="poke_hability1">
                    {pokemon?.abilities[1].ability.name}
                  </li>
                </ul>
              </div>
            </article>
      <section className="poke_movemen_container">
        <ul className="poke_movement">
          <li>{pokemon?.moves[0].move.name}</li>
          <li>{pokemon?.moves[1].move.name}</li>
          <li>{pokemon?.moves[2].move.name}</li>
          <li>{pokemon?.moves[3].move.name}</li>
          <li>{pokemon?.moves[4].move.name}</li>
          <li>{pokemon?.moves[5].move.name}</li>
          <li>{pokemon?.moves[6].move.name}</li>
          <li>{pokemon?.moves[7].move.name}</li>
          <li>{pokemon?.moves[8].move.name}</li>
          <li>{pokemon?.moves[9].move.name}</li>
          <li>{pokemon?.moves[10].move.name}</li>
          <li>{pokemon?.moves[11].move.name}</li>
          <li>{pokemon?.moves[12].move.name}</li>
          <li>{pokemon?.moves[13].move.name}</li>
          <li>{pokemon?.moves[14].move.name}</li>
          <li>{pokemon?.moves[15].move.name}</li>
          <li>{pokemon?.moves[16].move.name}</li>
          <li>{pokemon?.moves[17].move.name}</li>
          <li>{pokemon?.moves[18].move.name}</li>
          <li>{pokemon?.moves[19].move.name}</li>
          <li>{pokemon?.moves[20].move.name}</li>
          <li>{pokemon?.moves[21].move.name}</li>
          <li>{pokemon?.moves[22].move.name}</li>
          <li>{pokemon?.moves[23].move.name}</li>
        </ul>
      </section>
          </div>
        </article>
      </section>
    </>
  );
};

export default PokemonInfoPage;
