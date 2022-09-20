const API =' https://pokeapi.co/api/v2/pokemon/';

// const call = require('./asyncCall.js')

const fetchdata = async (urlApi)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


const load = async()=>{
    try{

        const pokelist =  await fetchdata(API);
        console.log(pokelist)        
        }catch(error){
        console.log(error)
        }
}


load();