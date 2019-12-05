import React , {useState, useEffect}from "react";
import { ActivityIndicator , Alert}from 'react-native'
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";
import {useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth'
import Colors from '../Colors'



const signup = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [inputs, setInputs] = useState()
    const dispatch=useDispatch()
    console.log(inputs)

    useEffect(() => {
        if (error) Alert.alert("An Error ", error, [{ text: "ok" }]);
      }, [error]);


    const signupHandler= async ()=>{
    
        setError(null);
    setIsLoading(true);
    try {
       await dispatch(authActions.signup(
            inputs.email,
            inputs.password
         ));
      props.navigation.navigate("PickImag");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

        
    

  return (
    <LogLayout title="USER SIGN UP">
      <LogInputs 
     
      onInputChange={setInputs}
     />
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.mainColor} />
      ) : (
        <LogButtons onPress={signupHandler}>LOG IN</LogButtons>
      )}
    </LogLayout>
  );
};
signup.navigationOptions = {
header:null

  
};
export default signup;
