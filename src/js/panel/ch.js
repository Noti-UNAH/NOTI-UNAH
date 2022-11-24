// import {datos} from "./cambiar"

const titulo = document.getElementById("editTitulo");
fetch("https://api-noticias.onrender.com", {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            "Content-Type": "Application/json",
        },
    })
    .then((res) => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let option = document.createElement("option");
            option.value = data[i].id;
            option.text = data[i].title;
            titulo.appendChild(option);
        }
    })





    console.log(titulo.value)
function pasarID() {
    return ;
}


export {pasarID};