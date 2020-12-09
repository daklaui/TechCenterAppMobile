import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button, AsyncStorage } from 'react-native';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import { loginEtudiant } from '../Service/EtudiantService';
const Login = (props) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginErrorClick, setLoginErrorClick] = useState(true);
    const [passwordErrorClick, setPasswordErrorClick] = useState(true);

const  SetToken=async (text)=>{
    await  AsyncStorage.setItem("isLoggedIn",text).then( ()=>{
        console.log("It was saved successfully")
        } )
        .catch( ()=>{
        console.log("There was an error saving the product")
        } );
}
    const submit = () => {
        if (login == "") {
            setLoginError(true);
        }
        else {
            setLoginError(false);
        }
        if (password == "") {
            setPasswordError(true);
        }
        else {
            setPasswordError(false);
        }
        if (!loginError && !passwordError && !loginErrorClick && !passwordErrorClick) {
            loginEtudiant(login, password).then((response) => {
                if (response.status == 200 && (response.data != null || response.data != "")) {
                     if(response.data.type=="etudiant")
                     {
                        SetToken(JSON.stringify(response.data));
                       props.navigation.navigate('Home')
                     }
                     else
                     {
                          SetToken(JSON.stringify(response.data));
                       props.navigation.navigate('Profile') 
                     }
                }else{
                    alert("email or password is incorrect");
                }


            })
        }
    }


    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/Images/logo.png')}
                    resizeMode="center"
                    style={styles.image} />
                <Inputs name="Email" icon="user" Email={(value) => setLogin(value)} Error={loginError} ErroFromInput={(value) => { setLoginErrorClick(value) }} />
                <Inputs name="Password" icon="lock" pass={true} Password={(value) => setPassword(value)} Error={passwordError} ErroFromInput={(value) => { setPasswordErrorClick(value) }} />

                <Submit title="Sign in" color="#253575" submit={submit} />

            </View>
        </ScrollView>
    );
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: "90%",
        height: 250,
        marginTop: "25%",
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    },
    textErrors: {

        fontSize: 16,
        color: '#f00',

    },
    btnsubmit: {
        fontSize: 40,
        height: 500,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    },
    containerBtn: {
        width: '90%',
        height: 100,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 2.5,
    }
});