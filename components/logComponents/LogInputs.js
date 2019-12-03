import React from 'react';
import {Text  ,View , StyleSheet}from 'react-native'
import InputTxt from '../InputTxt'


const LogInputs =(props)=>{

    return(
        <View  style={styles.inputContainer} >
        <InputTxt 
        {...props}
        onChangeText={props.onChangeTextEmail}
        placeholder='email'
        keyboardType="email-address"
        required
        email
        autoCapitalize="none"
        errorMassage="please enter a valid email address"
        style={styles.input}></InputTxt>
        
        <InputTxt
         {...props}
         onChangeText={props.onChangeTextPassword}
         placeholder='password'
         keyboardType="default"
         secureTextEntry
        required
        email
        autoCapitalize="none"
        errorMassage="please enter a valid password address"
         style={styles.input}></InputTxt>

        </View>

    )
}

const styles=StyleSheet.create({
    inputContainer:{
        margin:20,
       
    },
    
    input:{
        width:350,
        height:70,
    },
})

export default LogInputs;