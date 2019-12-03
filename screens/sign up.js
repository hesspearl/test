import React , {useState, useCallback}from "react";
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";
import {useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth'




const signup = () => {

    const [inputs, setInputs] = useState()
    const dispatch=useDispatch()
    console.log(inputs)

    const signupHandler=()=>{
       
     
        dispatch(authActions.signup(
           inputs.email,
           inputs.password
        ))
    }

  return (
    <LogLayout title="USER SIGN UP">
      <LogInputs 
        required
      onInputChange={setInputs}
     />
      <LogButtons
      onPress={signupHandler}>SIGN UP </LogButtons>
    </LogLayout>
  );
};

export default signup;
