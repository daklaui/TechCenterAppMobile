import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class Inputs extends Component {
    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }
     onTextChange = (text) => {
      switch (this.props.name) {
          case "FullName":
                this.props.FullName(text);
              break;
          case "Email":
                this.props.Email(text);
              break;
          case "Phone":
                this.props.Phone(text);
              break;
      
          case "Password":
                this.props.Password(text);
              break;
      
          case "Confirm_Password":
                this.props.Confirm_Password(text);
              break;
      
          default:
              break;
      }
     
    }


    render() {
        return(
            <View style={[styles.container, {borderColor: this.state.isFocused ? '#253575': '#eee'}]}>
                <Input 
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    onChangeText={value=>  this.onTextChange(value)}
                    secureTextEntry={this.props.pass}
                    rightIcon= {
                        <Icon 
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#253575' : 'grey'}
                        />
                    }
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 3.5
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color: '#0779e4',
        fontWeight: 'bold',
        marginLeft: 5
    }
});

export default Inputs;