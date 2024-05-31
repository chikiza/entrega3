const API_URL = "https://jsonplaceholder.typicode.com/";

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
.then((response)=> response.json())
.then((users) =>{
    const tpl = users.map(user => <li></li>)
})
