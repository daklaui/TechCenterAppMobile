
export const baseURL='http://192.168.137.1:6039';
const axios = require("axios").default;
let urlLogin = baseURL+"/login";
export const  loginFormateur=(email,password)=>{
    return axios.get(urlLogin+"/"+email+"/"+password);
}

/*export const  loginEtudiant=(email,password)=>{
    fetch(urlLogin+"/"+email+"/"+password, {
        method: 'POST'
     }) .then((response) => response.json())
     .then((responseJson) => {
         alert(responseJson);
        //console.log(responseJson);
        // this.setState({
        //    data: responseJson
        // })
     })
     .catch((error) => {
         alert(error)
       // console.error(error);
     });
}
*/

/**
 * 
 * fetch('url?email=a@gmail.com&password=a@gmail.com', {
     method: 'POST'
  })
  .then((response) => response.json())
  .then((responseJson) => {
     console.log(responseJson);
     // this.setState({
     //    data: responseJson
     // })
  })
  .catch((error) => {
     console.error(error);
  });
 * 
 * 
 */