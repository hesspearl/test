import React , {useReducer} from "react";
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";
import {useDispatch} from 'react-redux';
import * as authActions from '../store/action/auth'


const FORM_UPDATE = "FORM_UPDATE";

const signupReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value
    };

    const updatedValidities={
        ...state.Validities,
        [action.input]:action.isValid
    }
    let formIsValid=true;

    for (let key in updatedValidities){
        formIsValid= formIsValid&& updatedValidities[key]
    }

    return {
     
      inputValues: updateValues,
      Validities:updatedValidities,
      isValid:formIsValid
    };
  }

  return state;
};


const login = () => {

    const dispatch = useDispatch()

    const [stateSignup, dispatchSignup] = useReducer(signupReducer, {
        inputValues: {
          email:"",
          password:""
        },
        Validities:{
           email:false,
           password:false
        },
        isValid: false
      });

    const signupHandler=()=>{
        dispatch(authActions.signup())
    }


  return (
    <LogLayout
    title="USER LOG IN">
      <LogInputs
      onChangeTextEmail= />
      <LogButtons>LOG IN</LogButtons>
      <LogButtons
      onPress={()=>()}>SIGN UP </LogButtons>
    </LogLayout>
  );
};

login.navigationOptions = {
  headerTitle: "User Account"
};

export default login;
