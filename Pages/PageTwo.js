import React , {useState , useCallback ,useReducer} from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Text,
    Alert,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import firebase from'../firebase';
import '@firebase/firestore';
import {useSelector,useDispatch} from 'react-redux'
import * as reportActions from '../store/action/report'

const REPORT_UPDATE = "REPORT_UPDATE";

const PageTwoReducer = (state, action) => {
  if (action.type === REPORT_UPDATE) {
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

const Inputs = props =>{
    const dispatch= useDispatch();

    const [stateReport, dispatchReport] = useReducer(PageTwoReducer, {
        inputValues: {
          enteredInfoFiveInput: "",
          enteredInfoSixInput: "",
         
        },
        Validities:{
            enteredInfoFiveInput: false,
            enteredInfoSixInput: false,
         
        },
        isValid: false
      });

  
const inputTextHolder = (inputIdentifier, enteredText) => {
    let isValid = false;
    if (enteredText.trim().length > 0) isValid = true;

    dispatchReport({
      type: REPORT_UPDATE,
      value: enteredText,
      isValid: isValid,//true
      input: inputIdentifier
    });
  };





// to check that no field is blink 
const submitHandler = useCallback(() => {
    if (!stateReport.isValid) {
      Alert.alert("wrong input!", "please don't leave a field blink", [
        { text: "ok" }
      ]);
      return;
    } else {
      dispatch(
        reportActions.infoPageTwo(
          stateReport.inputValues.enteredInfoFiveInput,
          stateReport.inputValues.enteredInfoSixInput,
          
        )
      );
    }
  }, [dispatch , stateReport]);

 
   

      

    return(

    <KeyboardAvoidingView
        style={{flex:1}}
        behavior="padding"
        keyboardVerticalOffset={100}>
       <ScrollView>
        <View>
          <View style ={style.inputContainer}>
            <TextInput 
              onChangeText={inputTextHolder.bind(this, "enteredInfoFiveInput")}
              value={stateReport.inputValues.enteredInfoFiveInput}
             style={style.textInputDesign}
             returnKeyType="next"
               
             />
            {!stateReport.Validities.enteredInfoFiveInput }
            <TextInput 
             onChangeText={inputTextHolder.bind(this, "enteredInfoSixInput")}
              value={stateReport.inputValues.enteredInfoSixInput}
            style={style.textInputDesign}
            onEndEditing={submitHandler}
          
                />
          {!stateReport.Validities.enteredInfoSixInput}
            

           
           </View>

         </View> 
      </ScrollView>
   </KeyboardAvoidingView>)}

 
const style = StyleSheet.create({
    inputContainer:{
        alignItems:'center',

        justifyContent:'center'
    },
    textInputDesign:{
      width: 200,
      height: 50,
      borderWidth: 4,
      borderColor: "black",
      marginTop: 7,
     padding:10,
     fontSize:15,
       }
});


export default Inputs;