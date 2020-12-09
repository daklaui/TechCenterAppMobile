import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { isEmail, isEmpty } from '../Validator/validator';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
const Inputs = (props) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

      const handleConfirm = (date) => {
       props.DateDeNaissence(format(date, "dd/MM/yyyy"));
        hideDatePicker();
      };
    const onTextChange = (text) => {

        switch (props.name) {
            case "FullName":
                props.FullName(text);
                if (isEmpty(text)) {
                    setError(true);
                    setErrorMessage("obligatoire");
                    props.ErroFromInput(true);
                }
                else {
                    setError(false);
                    props.ErroFromInput(false);
                    setErrorMessage("");
                }
                break;
            case "Email":
                props.Email(text);
                if (isEmpty(text)) {
                    setError(true);
                    setErrorMessage("obligatoire");
                    props.ErroFromInput(true);
                }
                else if (!isEmail(text)) {
                    setError(true);
                    setErrorMessage("is not email");
                    props.ErroFromInput(true);
                }
                else {
                    setError(false);
                    props.ErroFromInput(false);
                    setErrorMessage("");
                }
                break;
            case "Phone":
                props.Phone(text);
                if (isEmpty(text)) {
                    setError(true);
                    setErrorMessage("obligatoire");
                    props.ErroFromInput(true);
                }
                else {
                    setError(false);
                    props.ErroFromInput(false);
                    setErrorMessage("");
                }
                break;

            case "Password":
                props.Password(text);
                if (isEmpty(text)) {
                    setError(true);
                    props.ErroFromInput(true);
                    setErrorMessage("obligatoire");
                }
                else {
                    setError(false); 
                    props.ErroFromInput(false);
                    setErrorMessage("");

                }

                break;

          

            default:
                break;
        }
    }

    return (
        <View style={[styles.containerA]}>
            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
            <View style={[styles.containerB, props.Error == false ? { borderColor: error ? '#df4759' : '#253575' } : { borderColor: '#df4759' }]}>
                <Input
                    placeholder={props.name}
                    value={props.value} 
                    keyboardType={props.name=="Phone"?"number-pad":""}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    onChangeText={value => onTextChange(value)}
                    secureTextEntry={props.pass}
                    editable = {props.name=="date"?false:true}
                    rightIcon={ props.name=="date"?
                        <Icon
                            name={props.icon}
                            onPress={showDatePicker}
                            size={22}
                            color={props.Error == false ? error ? '#df4759' : '#253575' : '#df4759'}
                        />
                        :
                        <Icon
                        name={props.icon}
                       
                        size={22}
                        color={props.Error == false ? error ? '#df4759' : '#253575' : '#df4759'}
                    />
                    }
                />

            </View>
            <View style={{}}>
                <Text style={styles.textError}>{props.Error == false ? errorMessage : "ce champs est obligatoire"}</Text>
            </View>
        </View>
    )


}
export default Inputs;


const styles = StyleSheet.create({
    containerA: {

        width: '90%',

    },
    containerB: {

        height: 50,
        borderRadius: 10,
        marginVertical: 5,
        borderWidth: 3.5
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color: '#0779e4',
        fontWeight: 'bold',
        marginLeft: 5
    },
    textError:
    {
        marginLeft: 10,
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: "bold",
        color: "#df4759"
    }
});