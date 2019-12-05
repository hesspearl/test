import React ,{useState} from "react";
import LogInputs from "../../components/logComponents/LogInputs";
import Colors from "../../Colors";
import LogButtons from "../../components/logComponents/LogButtons";
import LogLayout from "../../components/logComponents/LogLayout";
import {useDispatch} from 'react-redux';
import * as authActions from '../../store/action/auth'


const AdminLog = props => {

  const [inputs, setInputs] = useState()
    const dispatch=useDispatch()
    console.log(inputs)

    const loginHandler=()=>{
       
     // get the email from database
        dispatch(authActions.login(
           inputs.email,
           inputs.password
        ))
    }
  return (
    <LogLayout
     title="ADMIN LOG IN"
     style={{ borderColor: Colors.subColor}}>
      <LogInputs 
        onInputChange={setInputs}
      />
      <LogButtons
      onPress={loginHandler}
       btnStyle={{ backgroundColor: Colors.subColor }}>
        LOG IN
      </LogButtons>
    </LogLayout>
  );
};

AdminLog.navigationOptions = {
  headerTitle: "Admin Account"
};


export default AdminLog;
