import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";
import Colors from "../Colors";

const login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    if (error) Alert.alert("An Error ", error, [{ text: "ok" }]);
  }, [error]);

  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authActions.login(inputs.email, inputs.password));
      
      props.navigation.navigate("PickImage");
      setIsLoading(false)
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <LogLayout title="USER LOG IN">
      <LogInputs onInputChange={setInputs} />
      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.mainColor} />
      ) : (
        <LogButtons onPress={loginHandler}>LOG IN</LogButtons>
      )}
      <LogButtons onPress={() => props.navigation.navigate("SingUp")}>
        SIGN UP{" "}
      </LogButtons>
    </LogLayout>
  );
};



export default login;
