import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button, Alert } from 'react-native';
import Input from '../components/Inputs';
import Submit from '../components/Submit';
import { addEtudiant } from '../Service/EtudiantService';
import DatePicker from 'react-native-datepicker'
import { isEmail, isValidationPassword, isEmpty } from '../Validator/validator'
class SignUp extends Component {

    validateEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            Email: '',
            Phone: '',
            Password: '',
            Confirm_Password: ''
        }
    }
    alertShow() {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    submit() {
        if (isEmpty(this.state.FullName)) {
            alert('Invalid FullName.')
        }
        else if (!this.validateEmail(this.state.Email)) {
            alert('Invalid email.')
        }
        else if (isEmpty(this.state.Phone)) {
            alert('Invalid Phone.')
        }
        else if (isEmpty(this.state.Password)) {
            alert('Invalid Password.')
        }
        else if (this.state.Password != this.state.Confirm_Password) {
            alert('Invalid Confirm_Password.')
        }
        else {

            const Etudiant = {
                "nom": this.state.FullName,
                "email": this.state.Email,
                "num_tel": this.state.Phone,
                "mot_de_passe": this.state.Confirm_Password,
            }
            console.log(Etudiant);
            addEtudiant(Etudiant).then((response) => {
                if (response.status == 200) {
                    if (response.data = "L'étudiant a été ajouté avec succès!") {
                        this.props.navigation.navigate('Login')
                    }
                    else {
                        alert("probleme");
                    }
                }
            });
        }

       
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <Image source={require('../assets/Images/logo.png')} resizeMode="center" style={styles.image} />
                    <Text style={styles.textTitle}>Let's Get Started</Text>
                    <Text style={styles.textBody}>Create an account to get all features</Text>
                    <Input name="FullName" icon="user" FullName={(value) => this.setState({ FullName: value })} />
                    <Input name="Email" icon="envelope" Email={(value) => this.setState({ Email: value })} />
                    <Input name="Phone" icon="phone" Phone={(value) => this.setState({ Phone: value })} />
                    <Input name="Password" icon="lock" pass={true} Password={(value) => this.setState({ Password: value })} />
                    <Input name="Confirm_Password" icon="lock" pass={true} Confirm_Password={(value) => this.setState({ Confirm_Password: value })} />
                    <View style={styles.containerBtn}>
                        <Button style={styles.btnsubmit} color="#253575" title="Create" onPress={() => { this.submit() }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textBody}>Aiready have an account</Text>
                        <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('Login')}> Login here</Text>

                    </View>
                </View>

            </ScrollView>
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: "90%",
        height: 250,


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

export default SignUp;