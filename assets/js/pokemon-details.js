
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get('id');

const modal = document.querySelector("#card_pokemon");


const convertPokemonToHtml = pokemon => {
   let zeroBeforeNumber;
   if (pokemon.number < 10) {
      zeroBeforeNumber = '#00' + pokemon.number;
   } else if (pokemon.number >= 10 && pokemon.number < 100) {
      zeroBeforeNumber = '#0' + pokemon.number;
   } else {
      zeroBeforeNumber = '#' + pokemon.number;
   }

   return `<section id="card_pokemon_detail" class="card_pokemon_detail">
        <div class="card_pokemon_detail--header">
          <div class="card_pokemon_detail--header--title">${pokemon.name}</div>
          <div class="card_pokemon_detail--header--number">
            ${zeroBeforeNumber}
          </div>
        </div>
        <div class="card_pokemon_detail--body">
          <div class="card_pokemon_detail--body--type">
            ${pokemon.types.map((type) => `<span class="type ${type}"
              >${type}</span
            >`).join('')}
          </div>
          <div class="card_pokemon_detail--body--photo">
            <img src="${pokemon.photo}" alt="${pokemon.name}" />
          </div>
        </div>
        <div class="card_pokemon_detail--footer">
          <div class="card_pokemon_detail--footer--abilities">
            <h3>Abilities</h3>
            ${pokemon.abilities.map((ability) => `<span class="type ${ability}"
              >${ability}</span
            >`).join('')}
          </div>
          <div class="card_pokemon_detail--footer--stats">
            <h3>Stats</h3>
           <div class="stat">             
            <span>HP <progress id="hp" value="${pokemon.stats["hp"]}" max="100"></progress></span>
           </div>
           <div class="stat">             
            <span>Attack <progress id="attack" value="${pokemon.stats["attack"]}" max="100"></progress></span>
           </div>
           <div class="stat">             
            <span>Defense <progress id="defense" value="${pokemon.stats["defense"]}" max="100"></progress></span>
           </div>
           <div class="stat">             
            <span>Special Attack <progress id="special-attack" value="${pokemon.stats["special-attack"]}" max="100"></progress></span>
           </div>
           <div class="stat">             
            <span>Special Defense <progress id="special-defense" value="${pokemon.stats["special-defense"]}" max="100"></progress></span>
           </div>
           <div class="stat">             
            <span>Speed <progress id="speed" value="${pokemon.stats["speed"]}" max="100"></progress></span>
           </div>
          </div>
        </div>
      </section>
         <div class="btn__prev">
       <a href="index.html"><button class="btn__prev--button">Voltar</button></a>
      </div>
   `
}

function processId(id) {

   pokeApi.getPokemonCardDetail(id).then((pokemon) => {
      const newHtml = convertPokemonToHtml(pokemon)
      modal.innerHTML = newHtml;
   })
}



processId(id);