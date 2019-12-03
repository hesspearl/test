import React from "react";
import LogInputs from "../../components/logComponents/LogInputs";
import Colors from "../../Colors";
import LogButtons from "../../components/logComponents/LogButtons";
import LogLayout from "../../components/logComponents/LogLayout";

const AdminLog = props => {
  return (
    <LogLayout
     title="ADMIN LOG IN">
      <LogInputs />
      <LogButtons btnStyle={{ backgroundColor: Colors.subColor }}>
        LOG IN
      </LogButtons>
    </LogLayout>
  );
};

AdminLog.navigationOptions = {
  headerTitle: "Admin Account"
};


export default AdminLog;
