import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Button, Alert } from 'react-native';
import Input from '../components/Inputs';
import Submit from '../components/Submit';
import { addEtudiant } from '../Service/EtudiantService';


const SignUp = (props) => {
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [DateNaissence, setDateNaissence] = useState("");
    const [Phone, setPhone] = useState("");
    const [Password, setPassword] = useState("");

    const [FullNameError, setFullNameError] = useState(false);
    const [dateNError, setDateNError] = useState(false);
    const [EmailError, setEmailError] = useState(false);
    const [DateNaissenceError, setDateNaissenceError] = useState(false);
    const [PhoneError, setPhoneError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);

    const [FullNameErrorClick, setFullNameErrorClick] = useState(true);
    const [dateNErrorClick, setDateNErrorClick] = useState(true);
    const [EmailErrorClick, setEmailErrorClick] = useState(true);
    const [DateNaissenceErrorClick, setDateNaissenceErrorClick] = useState(true);
    const [PhoneErrorClick, setPhoneErrorClick] = useState(true);
    const [PasswordErrorClick, setPasswordErrorClick] = useState(true);
    const submit = () => {
        const Etudiant = {
            "nom": FullName,
            "email": Email,
            "num_tel": Phone,
            "date_de_naissance": DateNaissence,
            "mot_de_passe":Password,
        }

        addEtudiant(Etudiant).then((response) => {
            if (response.status == 200) {
                if (response.data = "L'étudiant a été ajouté avec succès!") {
                    props.navigation.navigate('Login')
                }
                else {
                    alert("probleme");
                }
            }
        });
    }
    return (<ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.container}>
            <Image source={require('../assets/Images/logo.png')} resizeMode="center" style={styles.image} />
            <Text style={styles.textTitle}>Let's Get Started</Text>
            <Text style={styles.textBody}>Create an account to get all features</Text>
            <Input 
            name="FullName" 
            icon="user" 
            value={FullName}
            FullName={(value) => setFullName(value)} 
            Error={FullNameError} 
            ErroFromInput={(value) => { setFullNameErrorClick(value) }} 
            />
            <Input 
            name="date" 
            icon="calendar" 
            value={DateNaissence}
            DateDeNaissence={(value) => setDateNaissence(value)} 
            Error={dateNError} 
            ErroFromInput={(value) => { setDateNaissenceErrorClick(value) }} 
            />
            <Input
             name="Email" 
             icon="envelope" 
             Email={(value) => setEmail(value)} 
             Error={EmailError}
             ErroFromInput={(value) => { setEmailErrorClick(value) }} 
             />
            <Input 
            name="Phone" 
            icon="phone" 
            Phone={(value) => setPhone(value)} 
            Error={PhoneError}
            ErroFromInput={(value) => { setPhoneErrorClick(value) }} 
            />
            <Input 
            name="Password" 
            icon="lock" 
            pass={true} 
            Password={(value) => setPassword(value)} 
            Error={PasswordError}
            ErroFromInput={(value) => { setPasswordErrorClick(value) }} 
            />
           
            <View style={styles.containerBtn}>
                <Button style={styles.btnsubmit} color="#253575" title="Create" onPress={() => { submit() }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textBody}>Aiready have an account</Text>
                <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('Login')}> Login here</Text>

            </View>
        </View>

    </ScrollView>);
}


export default SignUp;

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