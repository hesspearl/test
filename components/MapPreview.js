import React ,{useEffect} from "react";
import { Text } from "react-native";
import env from "../envOfMapKey";
import {Callout } from "react-native-maps"

const MapPreview = props => {
  let geoLocation

  useEffect(() => {
    if(props.location)

    getLocation()
  }, [])
 

 const getLocation=async()=>{
 

    const response= await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.location.lat},${props.location.lng}
     &key=${env.googleApiKey}`)

const resData= await response.json()

     console.log(resData)
     if(!resData.results){
         throw new Error("something Wrong")
     }
 //  geoLocation= response.results[0].formatted_address
   
   
  }
  

  return (
    <Callout>
         
    <Text> Report location  ${geoLocation} </Text>
  </Callout>
  );
};



export default MapPreview;
