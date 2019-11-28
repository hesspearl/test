import React from 'react';
import {Text , TextInput , View , StyleSheet, Button}from 'react-native'

const signup= ()=>{


    return(

        <View style={style.logStyle}>

        <View>
        <TextInput placeholder='email'></TextInput>
        
        <TextInput placeholder='password'></TextInput>

        </View>

        

         <Button/>

</View>
    )
}

const style = StyleSheet.creat({

    logStyle:{

        justifyContent :'center',

},
     
       
    


})

export default signup;