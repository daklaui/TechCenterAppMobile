
export const baseURL='http://192.168.137.1:6039';
const axios = require("axios").default;
let urlListeFormations = baseURL+"/ListedesFormations";
let urlListeFormationsByText = baseURL+"/getFormationByTitres";

export const  listeFormations=()=>{
    return axios.get(urlListeFormations);
}
export const  listeFormationsBySearchMot=(text)=>{
    return axios.get(urlListeFormationsByText+"/"+text);
}
