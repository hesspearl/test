import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

const InputTxt= props =>{
return (

    <TextInput
    {...props}
    onChangeText={props.changeText}
    value={props.value}
    returnKeyType={props.returnKeyType}
    onEndEditing={props.onEndEditing}
       style={{...styles.textInputDesign , ...props.style}}
       />

)
}

const styles= StyleSheet.create({
    textInputDesign: {
        backgroundColor:'#f6f6f6',
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