import React  from "react";
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";





const login = (props) => {

    

  return (
    <LogLayout
    title="USER LOG IN">
      <LogInputs
     
       />
      <LogButtons>LOG IN</LogButtons>
      <LogButtons
      onPress={()=> props.navigation.navigate('SingUp')}>SIGN UP </LogButtons>
    </LogLayout>
  );
};

login.navigationOptions = {
  headerTitle: "User Account"
};

export default login;
