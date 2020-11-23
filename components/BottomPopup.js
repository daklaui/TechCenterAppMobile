import {Modal,Dimensions,TouchableWithoutFeedback,StyleSheet,View,Text}from 'react-native'
import React from 'react'

export class BottomPopup
{
constructor(props)
{
    this.state={
        show:false
    }
}
show=()=>{
    this.setState({show:true})
}
close=()=>{
    this.setState({show:false})
}


render(){
    return(
        <Modal 
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={this.close}
        >
        
        </Modal>
    )
}
}