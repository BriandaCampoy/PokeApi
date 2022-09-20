const callback = require('./callback.js');
const API = 'https://pokeapi.co/api/v2/pokemon';
let result;
callback.fetchData(`${API}/1`, (error1,data1)=>{
    if(error1){return console.error(error1);}
     document.write(data1)
})

console.log(result)


