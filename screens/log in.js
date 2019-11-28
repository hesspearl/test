import React from 'react';
import {Text , TextInput , View , StyleSheet, Button}from 'react-native'

const login= ()=>{


    return(

        <View style={style.logStyle}>

        <View>
        <TextInput placeholder='email'></TextInput>
        
        <TextInput placeholder='password'></TextInput>

        </View>

        <View>

         <Text>forget password</Text>
          
          <Text onPress> creat new account</Text>
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

export default login;