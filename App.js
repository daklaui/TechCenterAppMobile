import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />*/}

      <Image style={styles.logo} source={require('./assets/Images/logo.png')} />
      <TextInput style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor="black"
        autoCapitalize="none"
      />
      <TextInput style={styles.textInput}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        placeholder="password"
        placeholderTextColor="black"
        autoCapitalize="none"
      />


      <Button style={styles.button}
        title="Sign in"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: "20%",
    width: "90%",
    height: "50%",
    resizeMode: 'contain' 
  },
  textInput: {
    padding: 15,
    margin: "2%",
    height: "8%",
    width: "90%",
    borderColor: 'black',
    borderWidth: 1
  }
  ,
  button: {
    padding: 15,
    width: "90%",
    height: "8%"
  }
});
