import React, {useState ,useCallback,useEffect} from "react";
import { TouchableOpacity , Text, StyleSheet , Alert} from "react-native";
import MapView ,{Marker} from "react-native-maps";
import * as Location from "expo-location";
import * as permissions from "expo-permissions";
import {  useDispatch } from "react-redux";
import * as reportActions from "../store/action/report";


const MapScreen = props => {

  const [selectedLocation, setSelectedLocation] = useState(pickedLocation)
  const [pickedLocation, setPickedLocation] = useState();
console.log( selectedLocation)
const dispatch=useDispatch()

    const verifyPermission = async () => {

        const result = await permissions.askAsync(permissions.LOCATION);
        if (result.status !== "granted") {
          Alert.alert(
            "permission",
            "you need to granted location permission to use app ",
            [{ text: "ok" }]
          );
          return false;
        }
        return true;
      };
  
      const getLocationHandler = async () => {
        const hasPermission = await verifyPermission();
        if (!hasPermission) {
          return;
        }
        try {
        
          const location = await Location.getCurrentPositionAsync()
          console.log(location)
          setPickedLocation({
            lat:location.coords.latitude,
            lng:location.coords.longitude
            
          })

        } catch (err) {
          Alert.alert("Couldnt find location!", " please try again " + err, [
            { text: "ok" }
          ]);
        }
        
      };

      useEffect(() => {
         getLocationHandler()
        
      }, [])

      
    


    

  //where to focus
  const mapRegin = {
    latitude:!pickedLocation? 0.0: pickedLocation.lat,
    longitude:!pickedLocation? 0.0: pickedLocation.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };



  const selectedLocationHandler= event=>{
      setSelectedLocation({
          lat:event.nativeEvent.coordinate.latitude,
          lng:event.nativeEvent.coordinate.longitude,
      })

  }

  const saveHandler = useCallback(
      () => {
        
        console.log( selectedLocation)
          if (!selectedLocation)
          return;

         dispatch(reportActions.infoLocation(selectedLocation))

         props.navigation.navigate('ProgressSteps')
      },
      [selectedLocation],
  )

  useEffect(() => {
    props.navigation.setParams({saveLocation:saveHandler})
  }, [saveHandler])


  let markerCoordinates;

  if(selectedLocation){
      markerCoordinates={
          latitude:selectedLocation.lat,
          longitude:selectedLocation.lng
      }
  }
  return <MapView 
  style={styles.map} 
  region={mapRegin}
  onPress={selectedLocationHandler} >
   {markerCoordinates && <Marker

      title="Picked Location"
      coordinate={markerCoordinates}
      ></Marker>}
  </MapView>;
};

MapScreen.navigationOptions= navData=>{

   const save= navData.navigation.getParam('saveLocation')
    return{
        headerRight :(
        <TouchableOpacity
onPress={save}
         style={styles.headerButton}>
        <Text style={styles.headerButtonText}>SAVE</Text>
        </TouchableOpacity>)
    }
}

styles = StyleSheet.create({

    map:{ flex: 1 ,
        },
        headerButton:{
            marginHorizontal:20
        },
        headerButtonText:{
            fontSize:16,
            color:'white'
        }
});

export default MapScreen;
