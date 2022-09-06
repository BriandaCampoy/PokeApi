const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://pokeapi.co/api/v2/pokemon';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState ===4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
            const error = new Error('Error' + urlApi);
            return callback(error,null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/1`,(error1,data1)=>{
    if(error1){return console.error(error1);}
    console.log(data1);
})