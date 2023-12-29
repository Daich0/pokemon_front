import React, { useState ,useEffect ,useRef} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Api = ({ count }) => {
  const [inputValue, setInputValue] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const searchButtonRef = useRef(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await getPokemonData(inputValue);
      setPokemon(response);
    } catch (error) {
      console.error('Error al obtener datos del Pokémon:', error);
    }
  };

  const getPokemonData = async (pokemon) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const { name, sprites,types } = response.data;

      const pokemonData = {
        name: name,
        image: sprites.front_default,// Obtiene la URL de la imagen del Pokémon
        types: types.map(({ type }) => type.name),
      };
      
      return pokemonData;
    } catch (error) {
      console.error('Error al obtener datos del Pokémon:', error);
      throw error;
    }
  };

 // Se ejecuta cada vez que inputValue cambie

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
 
  useEffect(() => {
    
      setInputValue(String(count));
      
    
  }, [count]);

  useEffect(() => {
    // Realizar la búsqueda del Pokémon solo al montar el componente
    getPokemonData(String(count)).then((response) => {
      console.log("hello worl");
      setPokemon(response);
      console.log(count);
    })
    
  }, [count]);

  Api.propTypes = {
    count: PropTypes.number.isRequired,
  };

  return (
    <div> 
  
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="flex items-center  border-b-2 border-teal-500 py-2">
        <input
         
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="Ingresa el nombre del Pokémon"
        />
        <button  type="submit" ref={searchButtonRef} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-64">
          Buscar Pokémon
        </button>
      </div>

      {pokemon && (
      <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-4 border-sky-500 p-4 max-w-md">
      <p className="text-lg font-bold">Nombre: {pokemon.name}</p>
      <img src={pokemon.image} alt={pokemon.name} className="mt-2 rounded-lg shadow-md  border-2 border-sky-300" />
      <p className="text-lg font-bold  text-center">Tipo: {pokemon.types.join(', ')}</p>
    </div>
    
      )}
    </form>
    </div>
  );
};
export default Api;
