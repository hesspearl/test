import React , {useState, useEffect}from "react";
import {
   ActivityIndicator ,
   Alert , 
   Text ,
    TouchableOpacity ,
     View ,
      StyleSheet}from 'react-native'
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";
import {useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth'
import Colors from '../Colors'
import useBackButton from "../hook/useBackButton"
import InputTxt from "../components/InputTxt";


const signup = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [inputs, setInputs] = useState()
    const dispatch=useDispatch()
    const [name, setName] = useState("")
   

    useEffect(() => {
        if (error) Alert.alert("An Error ", error, [{ text: "ok" }]);
      }, [error]);

      useBackButton()

    const signupHandler= async ()=>{
    
        setError(null);
    setIsLoading(true);
    try {
       await dispatch(authActions.signup(
            inputs.email,
            inputs.password,
            name
         ));
      props.navigation.navigate("PickImage");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

        
    

  return (
    <LogLayout title="USER SIGN UP">
    <InputTxt
        changeText={setName}
        placeholder="Name"
        keyboardType="default"
        
       
        autoCapitalize="none"
        
        style={styles.input}
      ></InputTxt>
     

      <LogInputs 
     
      onInputChange={setInputs}
     />
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.mainColor} />
      ) : (
        <LogButtons onPress={signupHandler}>LOG IN</LogButtons>
      )}
      <TouchableOpacity
      onPress={()=>props.navigation.navigate("user")}>
      <View style={styles.contain}>  
       <Text
       style = {styles.text}> return</Text>
       </View>

     
      </TouchableOpacity>
    </LogLayout>
  );
};
signup.navigationOptions = {
header:null

  
};

const styles= StyleSheet.create({

  contain:{
    justifyContent:'flex-end',
    alignItems:'center',
    marginTop:10
  },

  text:{
    color:Colors.mainColor,
    fontSize:20,
    fontWeight:"bold"

  },
  input: {
    width: 350,
    height: 70,
    marginTop:30

  }

})
export default signup;
