const URL_BASE = "https://pokeapi.co/api/v2/";

https: fetch(`${URL_BASE}pokemon/pikachu`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch(error => console.log('ERROR', error))
.finally(console.log('termine'));