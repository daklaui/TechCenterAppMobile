import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button } from 'react-native';
import Inputs from '../components/Inputs';
import Submit from '../components/Submit';
import {isEmail,isValidationPassword,isEmpty}from '../Validator/validator'
import { loginEtudiant } from '../Service/EtudiantService';


class Login extends Component {



    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        };


    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: ''
        }
    }


    /**
     * 
     *  fetch('url?email=a@gmail.com&password=a@gmail.com', {
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

    submit() {
        if (!this.validateEmail(this.state.Email)) {
            alert('Invalid email.')
            }
            else if (isEmpty(this.state.Password)) {
                alert('Invalid Password.')
                }
else
{
    loginEtudiant(this.state.Email, this.state.Password).then((response) => {
        if (response.status == 200) {
           if( response.data=="")
           {
            alert('Invalid email or Password.')
           }
           else
           {
               if(response.data=="formateur")
               {
                this.props.navigation.navigate('Profile')  
               }
               else
               {
                this.props.navigation.navigate('Home')
               }

               
           }
            //this.alertShow();
        }
    });
}


        
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <Image
                        source={require('../assets/Images/logo.png')}
                        resizeMode="center"
                        style={styles.image} />
                    <Inputs name="Email" icon="user" Email={(value) => this.setState({ Email: value })} />
               
                    <Inputs name="Password" icon="lock" pass={true} Password={(value) => this.setState({ Password: value })} />
                    <View style={{ width: '90%', marginTop: 10, marginBottom: 10 }}>
                        <Text style={[styles.textBody], { alignSelf: 'flex-end' }}>Forgot Password?</Text>
                    </View>

                    <View style={styles.containerBtn}>
                        <Button style={styles.btnsubmit} color="#253575" title="Login" onPress={() => { this.submit() }} />
                    </View>


                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={styles.textBody}>Don't Have an account ?</Text>
                        <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default Login;

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
    btnsubmit: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    },
    containerBtn: {
        width: '90%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
    }
});

