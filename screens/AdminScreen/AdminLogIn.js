import React, { useState , useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import LogInputs from "../../components/logComponents/LogInputs";
import Colors from "../../Colors";
import LogButtons from "../../components/logComponents/LogButtons";
import LogLayout from "../../components/logComponents/LogLayout";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/action/auth";

const AdminLog = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();
  console.log(inputs);

  useEffect(() => {
    if (error) Alert.alert("An Error ", error, [{ text: "ok" }]);
  }, [error]);

  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);

    try {
      // get the email from database
      await dispatch(authActions.loginAdmin(inputs.email, inputs.password));
      props.navigation.navigate("view");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <LogLayout title="ADMIN LOG IN" style={{ borderColor: Colors.subColor }}>
      <LogInputs onInputChange={setInputs} />

      {isLoading ? (
        <ActivityIndicator size="small" color={Colors.subColor} />
      ) : (
        <LogButtons
          onPress={loginHandler}
          btnStyle={{ backgroundColor: Colors.subColor }}
        >
          LOG IN
        </LogButtons>
      )}
    </LogLayout>
  );
};

AdminLog.navigationOptions = {
  headerTitle: "Admin Account"
};

export default AdminLog;
