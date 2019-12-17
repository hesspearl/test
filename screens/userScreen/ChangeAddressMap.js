import React, { useEffect, useState, useCallback } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import MapScreen from "../MapSceen";
import { useSelector, useDispatch } from "react-redux";
import * as reportActions from "../../store/action/report";
import MapView, { Marker, Callout } from "react-native-maps";

const ChangeAddress = props => {
  const [selectedLocation, setSelectedLocation] = useState();

  const location = useSelector(state => state.report.newLocation.location);
  console.log(location);

  const dispatch = useDispatch();

  //where to focus
  const mapRegin = {
    latitude: !location ? 0.0 : location.lat,
    longitude: !location ? 0.0 : location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectedLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  const saveHandler = useCallback(() => {
    if (location) {
      dispatch(reportActions.infoLocation(location));

      props.navigation.navigate("ProgressSteps");
    }

    if (selectedLocation) {
      dispatch(reportActions.infoLocation(selectedLocation));

      props.navigation.navigate("ProgressSteps");
    }
  }, [selectedLocation, location]);

  let markerCoordinates;

  if (location) {
    markerCoordinates = {
      latitude: location.lat,
      longitude: location.lng
    };
  }

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegin}
      onPress={selectedLocationHandler}
    >
      {markerCoordinates && (
        <Marker
          image={require("./../../assets/navigation.png")}
          title="Picked Location"
          
        >
          <Callout onPress={saveHandler}>
            <Text> Pick new address</Text>
          </Callout>
        </Marker>
      )}
    </MapView>
  );
};

ChangeAddress.navigationOptions = navData => {
  /*
   const save= navData.navigation.getParam('saveLocation')
    return{
      headerRight :(
        <TouchableOpacity
onPress={save}
         style={styles.headerButton}>
        <Text style={styles.headerButtonText}>SAVE</Text>
   
} */
};

styles = StyleSheet.create({
  map: { flex: 1 },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: "white"
  }
});

export default ChangeAddress;
