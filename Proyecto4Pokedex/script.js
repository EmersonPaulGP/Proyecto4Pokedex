const pokemons = [
  { number: "1", name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { number: "2", name: "Ivysaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
  { number: "3", name: "Venusaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
  { number: "4", name: "Charmander", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { number: "5", name: "Charmeleon", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
  { number: "6", name: "Charizard", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
  { number: "7", name: "Squirtle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
  { number: "8", name: "Wartortle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
  { number: "9", name: "Blastoise", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
  { number: "10", name: "Caterpie", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
  { number: "11", name: "Metapod", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
  { number: "12", name: "Butterfree", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
  { number: "13", name: "Weedle", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
  { number: "14", name: "Kakuna", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
  { number: "15", name: "Beedrill", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
  { number: "16", name: "Pidgey", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
  { number: "17", name: "Pidgeotto", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
  { number: "18", name: "Pidgeot", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
  { number: "19", name: "Rattata", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
  { number: "20", name: "Raticate", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" },
  { number: "21", name: "Spearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png" },
  { number: "22", name: "Fearow", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" },
  { number: "23", name: "Ekans", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" },
  { number: "24", name: "Arbok", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" },
  { number: "25", name: "Pikachu", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
];

const pokemonContainer = document.getElementById("pokemon-container");
const refreshButton = document.getElementById("refresh-button");

function getRandomPokemons() {
  const shuffledPokemons = pokemons.slice();
  for (let i = shuffledPokemons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPokemons[i], shuffledPokemons[j]] = [shuffledPokemons[j], shuffledPokemons[i]];
  }
  return shuffledPokemons.slice(0, 6);
}

function displayPokemons() {
  pokemonContainer.innerHTML = "";
  const randomPokemons = getRandomPokemons();
  randomPokemons.forEach(pokemon => {
    const pokemonElement = document.createElement("div");
    pokemonElement.className = "pokemon-card";
    pokemonElement.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>No. ${pokemon.number}</p>
      <p>${pokemon.name}</p>
    `;
    pokemonContainer.appendChild(pokemonElement);
  });
}

refreshButton.addEventListener("click", displayPokemons);

displayPokemons();