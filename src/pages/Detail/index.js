import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';
import { Loading, DetailContainer, IssueList, IssueFilter, PageActions } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const Detail = () => {
  const [pokemonDetail, setPokemonDetail] = useState([])

  const { pokemon } = useParams();
  useEffect(() => {
    api.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(response => {
      const pokemonResponse = response.data
      setPokemonDetail(pokemonResponse)
    })
  }, [pokemon])

  return (
    <Container>
      {pokemonDetail.name && (
        <>
          <DetailContainer>
            <Link to="/">Voltar a listagem</Link>
            {pokemonDetail && pokemonDetail.sprites && pokemonDetail.front_default && (
              <img src={pokemonDetail.sprites.front_default} alt="image" />
            )}
            <img src={pokemonDetail.sprites.front_default} alt="image" />
            <h1>{pokemonDetail.name}</h1>
            <p> Número: {pokemonDetail.id}</p>
            <p> XP: {pokemonDetail.base_experience}</p>
            <div>
              <p>Altura: {pokemonDetail.height}</p>
            </div>
          </DetailContainer>

        </>
      )}

    </Container>
  );
}

export default Detail;