import React from "react";
import LogInputs from "../components/logComponents/LogInputs";
import LogButtons from "../components/logComponents/LogButtons";
import LogLayout from "../components/logComponents/LogLayout";

const signup = () => {
  return (
    <LogLayout title="USER SIGN UP">
      <LogInputs />
      <LogButtons>SIGN UP </LogButtons>
    </LogLayout>
  );
};

export default signup;
