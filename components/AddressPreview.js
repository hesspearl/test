import React ,{useEffect} from "react";
import { Text } from "react-native";
import env from "../envOfMapKey";
import BottomDrawer from "rn-bottom-drawer"
 import Color from "../Colors"

const AddressPreview = props => {
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
<BottomDrawer
 containerHeight={300}
        startUp={false}
        offset={10}
       >
        <Text
        style={{color:Color.subColor }}>
          address {geoLocation}
        </Text>  
          </BottomDrawer>
  );
};



export default AddressPreview;
