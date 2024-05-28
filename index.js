const URL_BASE = "https://pokeapi.co/api/v2/";

/*https: fetch(`${URL_BASE}pokemon/pikachu`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch(error => console.log('ERROR', error))
.finally(console.log('termine'));*/

const getPokemon = async() => {
    try {
        const response = await fetch(`${URL_BASE}pokemon/charizard`)
        const data = await response.json()
        console.log(data)
    } catch (error) {

    } finally {

    }
}
getPokemon()