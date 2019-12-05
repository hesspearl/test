import React, { useState } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import firebase from "../firebase";
import ReportClass from "../model/report";
import ButtonStyle from "../components/ButtonStyle";

import { useSelector } from "react-redux";

const CustomButton = props => {

  const   userId = useSelector(state => state.auth.userId)
const [imgUrl, setImgUrl] = useState()

  const newReport = () => {
    let nReport;

    try {
      nReport = new ReportClass(
       userId,
        props.report.report,
        props.report.newLocation.location,
        props.report.pageOne.info1,
        props.report.pageOne.info2,
        props.report.pageOne.info3,
        props.report.pageOne.info4,
        props.report.pageTwo.info5,
        props.report.pageTwo.info6
      );
    } catch (err) {
      Alert.alert(
        "Dont leave it blink",
        " please complete all fields before pressing ",
        [{ text: " ok " }]
      );

      return;
    }

    addReport(nReport);

  
  };

  async function addReport(data ) {
  firebase.auth().onAuthStateChanged (async (user)=>
  {
   if (user){

  
 
    const ref = firebase.firestore().collection("test");
  const refID = ref.doc().id
  
  await ref.doc(refID).set({
    ...data,
  });

    const response= await fetch(data.Image)
const blob= await response.blob()


const storage= firebase.storage().ref().child("image" ).child(refID)
    
await storage.put(blob);


firebase.storage().ref().child("image" )
.child(refID)
.getDownloadURL()
.then((url)=>{
   ref.doc(refID).update({
   Image:url
  });
 
   })


  }
  })
 



  }

  return <ButtonStyle title="Done" onSelect={newReport} />;
};



export default CustomButton;
