import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import * as Location from "expo-location";
import * as permissions from "expo-permissions";
import Colors from '../Colors'
import ButtonStyle from "../components/ButtonStyle";
import MapPreview from '../components/MapPreview'

const LocationPicker = props => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);

  console.log(pickedLocation)
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

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync()
     
      setPickedLocation({
        lat:location.coords.altitude,
        lng:location.coords.longitude

      })
    } catch (err) {
      Alert.alert("Couldnt find location!", " please try again " + err, [
        { text: "ok" }
      ]);
    }
    setIsFetching(false);
  };

  

  return (
    <View style={styles.locationPicker}>
      
       <MapPreview 
       style={styles.mapPreview}
       location={pickedLocation}
       >
       {isFetching ? <ActivityIndicator size="large" /> : <Text>no location</Text>}
       </MapPreview>
       <View>
       <ButtonStyle title="Get User Location" onSelect={getLocationHandler} />
      <ButtonStyle title="pick on map" onSelect={pickOnMapHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
  marginBottom:10
  },
  mapPreview: {
    
    width: "100%",
    height: "80%",
    borderColor: Colors.border,
    borderWidth: 1
  }
});

export default LocationPicker;
