const pokemons = [
  { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 4, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { id: 7, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 25, name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' }
];

function displayPokemons(filter = '') {
  $('#pokemon-list').empty();
  pokemons.forEach(p => {
    if (p.name.toLowerCase().includes(filter.toLowerCase()) || String(p.id).includes(filter)) {
      $('#pokemon-list').append(`
        <div class="pokemon-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>#${p.id} ${p.name}</h3>
        </div>
      `);
    }
  });
}

$(document).ready(() => {
  displayPokemons();

  $('#search').on('input', function () {
    const keyword = $(this).val();
    displayPokemons(keyword);
  });
});
