import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MainButton from "../MainButton";
import Colors from "../../Colors";

const LogButtons= props =>{
return (

        <MainButton 
        {...props}
        style={styles.button} 
        btnStyle={{...styles.btnStyle , ...props.btnStyle}}>
        {props.children}
        </MainButton>
     
)
}

const styles= StyleSheet.create({
    button: {
        width: 350,
        margin: 10
      },
      btnStyle: {
        backgroundColor: Colors.mainColor,
        height: 70
      }
})
export default LogButtons;