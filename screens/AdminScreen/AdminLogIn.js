import React, { useState , useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import LogInputs from "../../components/logComponents/LogInputs";
import Colors from "../../Colors";
import LogButtons from "../../components/logComponents/LogButtons";
import LogLayout from "../../components/logComponents/LogLayout";
import { useDispatch,useSelector } from "react-redux";
import * as authActions from "../../store/action/auth";
import firebase from "../../firebase";


const AdminLog = props => {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();
  


  const filterPass=(doc , password)=>{
    let pass;
    if(doc.data().password===password){
        pass=doc.data().password
        console.log(pass)

        return pass
}}
  

 
 
  

  useEffect(() => {
    if (error) Alert.alert("An Error ", error, [{ text: "ok" }]);
  }, [error]);

  const loginHandler = async () => {
    setError(null);
    setIsLoading(true);

    try {

      await firebase.firestore().collection('admin')
                
                .get()
                .then(snapshot=>{
               (   snapshot.docs.filter(doc =>{
          
      // get the email from database
      if (inputs.password==doc.data().password){

    dispatch(authActions.loginAdmin(inputs.email, inputs.password));
    //  console.log(inputs.password)
    
    props.navigation.navigate("view");
  
   }

     else{
     //  setError("not valid")
       setIsLoading(false)
     }
     
    }))} )}catch (err) {
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
