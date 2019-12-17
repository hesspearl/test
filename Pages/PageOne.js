import React, { useCallback, useReducer } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { useDispatch } from "react-redux";
import * as reportActions from '../store/action/report'


const REPORT_UPDATE = "REPORT_UPDATE";

const PageOneReducer = (state, action) => {
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

const Inputs = props => {
  const dispatch = useDispatch();

  const [stateReport, dispatchReport] = useReducer(PageOneReducer, {
    inputValues: {
      enteredInfoOneInput: "",
      enteredInfoTwoInput: "",
      enteredInfoThreeInput: "",
      enteredInfoFourInput: ""
    },
    Validities:{
        enteredInfoOneInput: false,
        enteredInfoTwoInput: false,
        enteredInfoThreeInput: false,
        enteredInfoFourInput: false
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
        reportActions.infoPageOne(
          stateReport.inputValues.enteredInfoOneInput,
          stateReport.inputValues.enteredInfoTwoInput,
          stateReport.inputValues.enteredInfoThreeInput,
          stateReport.inputValues.enteredInfoFourInput
        )
      );
    }
  }, [dispatch , stateReport]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <View>
          <View style={style.inputContainer}>
            <TextInput
              onChangeText={inputTextHolder.bind(this, "enteredInfoOneInput")}
              value={stateReport.inputValues.enteredInfoOneInput}
              style={style.textInputDesign}
              returnKeyType="next"
              
            />
            {!stateReport.Validities.enteredInfoOneInput }
            <TextInput
              onChangeText={inputTextHolder.bind(this, "enteredInfoTwoInput")}
              value={stateReport.inputValues.enteredInfoTwoInput}
              style={style.textInputDesign}
              returnKeyType="next"
             
            />
        
        {!stateReport.Validities.enteredInfoTwoInput}
            <TextInput
              onChangeText={inputTextHolder.bind(this, "enteredInfoThreeInput")}
              value={stateReport.inputValues.enteredInfoThreeInput}
              style={style.textInputDesign}
              returnKeyType="next"
            
            /> 
            {!stateReport.Validities.enteredInfoThreeInput }
      
            <TextInput
              onChangeText={inputTextHolder.bind(this, "enteredInfoFourInput")}
              value={stateReport.inputValues.enteredInfoFourInput}
              style={style.textInputDesign}
              onEndEditing={submitHandler}
            />
             {!stateReport.Validities.enteredInfoFourInput}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    alignItems: "center",

    justifyContent: "center"
  },
  textInputDesign: {
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
