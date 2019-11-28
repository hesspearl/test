import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

const InputTxt= props =>{
return (

    <TextInput
    onChangeText={props.changeText}
    value={props.value}
    returnKeyType={props.returnKeyType}
    onEndEditing={props.onEndEditing}
       style={styles.textInputDesign}
       />

)
}

const styles= StyleSheet.create({
    textInputDesign: {
        width: 200,
        height: 50,
        borderWidth: 4,
        borderColor: "black",
        marginTop: 7,
       padding:10,
       fontSize:15,
      }

})
export default InputTxt;