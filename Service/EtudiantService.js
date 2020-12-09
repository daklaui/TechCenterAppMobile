
export const baseURL='http://192.168.43.123:6039';
const axios = require("axios").default;
let urlLogin = baseURL+"/login";
let urlGetEtudianyById = baseURL+"/getEtudiantById";
let urlAddEtudiant= baseURL+"/AjoutEtudiant";
export const  loginEtudiant=(email,password)=>{
 return axios.get(urlLogin+"/"+email+"/"+password);
}
export const  addEtudiant=(etudiant)=>{
    return axios.post(urlAddEtudiant,etudiant);
}
export const  getEtudiantById=(id)=>{
    return axios.get(urlGetEtudianyById+"/"+id);
}
