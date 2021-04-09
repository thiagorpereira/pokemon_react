import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDragon, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { List } from './styles';

const Main = () => {
  const [pokemons, setPokemons] = useState([])
  const [sprites, setSprites] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api.get('/').then(response => {
      const pokemonsResponse = response.data.results
      // GET SPRITES
      if (pokemonsResponse) {
        pokemonsResponse.map(pokemon => {
          api.get(`${pokemon.url}`).then(response => {
            pokemon.sprite = response.data.sprites.front_default
          })
        })
        setPokemons(pokemonsResponse)
      }
    })
    setLoading(false)
  }, [])

  return (

    <Container>
      {loading ? (
        <FaSpinner color="#FFF" size={14} />
      ) : (
          <>
            <h1>
              <FaDragon />
        Pokedex
        </h1>

            <List>
              {pokemons && pokemons.map(pokemon => (
                <li key={pokemon.name}>
                  {pokemon.sprite && (
                    <img src={`${pokemon.sprite}`} alt="image" />
                  )}
                  <FaDragon />

                  <span>{pokemon.name}</span>
                  <Link to={`/detail/${encodeURIComponent(pokemon.name)}`}>
                    Detalhes
              </Link>
                </li>
              ))}
            </List>
          </>
        )}
    </Container>
  );
}

export default Main;