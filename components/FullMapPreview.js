import React, { useState ,useEffect , useCallback } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import ViewDrawer from "../screens/AdminScreen/viewDrawer";
import * as Location from "expo-location";
import * as permissions from "expo-permissions";
import MapPreview from "../components/MapPreview"
import Colors from "../Colors"

const FullMapPreview = props => {
  // const location = props.navigation.getParam('location')
  const idInfo = props.navigation.getParam("infos");

  const [pickedLocation, setPickedLocation] = useState();
  console.log(pickedLocation)
  

  useEffect(() => {
    getLocationHandler()

 
  }, [])

  
  //permission to use map
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

  const getLocationHandler =async () => {
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
    
  }

  


  const mapRegin = {
    latitude: idInfo.location.lat,
    longitude: idInfo.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };





  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegin}>
        <Marker
        image={require('./../assets/location.png')}
          coordinate={{
            latitude: idInfo.location.lat,
            longitude: idInfo.location.lng
          }}
        >
          <MapPreview
              location={idInfo.location}
          />
         
        </Marker>
    {pickedLocation?   <Marker
        image={require('./../assets/locationAdmin.png')}
          coordinate={{
        latitude:pickedLocation.lat,
        longitude: pickedLocation.lng
      }}
        >
          <Callout>
         
            <Text> my Location</Text>
          </Callout> 
         
        </Marker>: null}
      </MapView>

      <ViewDrawer idInfo={idInfo} />
    </View>
  );
};

FullMapPreview.navigationOptions = navData => {
    return {
      headerTitle:"Details",
      headerStyle: {
        backgroundColor: Colors.subColor
      },
      
    };
  };

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
export default FullMapPreview;
