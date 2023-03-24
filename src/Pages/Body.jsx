import axios from 'axios';
import { useEffect, useState } from 'react'
import { Card } from '../Card';
import { CardContainer, ContainerMain, ContainerPeople, SubContainer } from '../Styles';

export function Body() {
  const [pokemons, setPokemons] = useState([]);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => setPokemons(res.data.data))      
  }; 

  useEffect(() => {
    getDados();
  }, []);

  const getDados = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setDados(res.data.data))      
  }; 

  return (
    <>
      <ContainerMain>
        <SubContainer>
          <ContainerPeople>
            {pokemons.map((pokemon, key) => (
              <CardContainer key={key}>
                <Card 
                  first_name={pokemon.first_name}
                  last_name={pokemon.last_name}
                  email={pokemon.email}
                  avatar={pokemon.avatar}
                />
              </CardContainer>
            ))}
          </ContainerPeople>
          <ContainerPeople>
            {dados.map((pokemon, key) => (
              <CardContainer key={key}>
                <Card 
                  first_name={pokemon.first_name}
                  last_name={pokemon.last_name}
                  email={pokemon.email}
                  avatar={pokemon.avatar}
                />
              </CardContainer>
            ))}
          </ContainerPeople>
        </SubContainer>
      </ContainerMain>
    </>
  )
}