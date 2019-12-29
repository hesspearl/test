import React, { useState, useCallback, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import * as permissions from "expo-permissions";
import { useDispatch } from "react-redux";
import * as reportActions from "../store/action/report";
import PickImage from "../screens/Images";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import useBackButton from "../hook/useBackButton";
import Description from "../components/Descripton";

const MapScreen = props => {
  const [selectedLocation, setSelectedLocation] = useState(pickedLocation);
  const [pickedLocation, setPickedLocation] = useState();
  console.log(pickedLocation);
  useBackButton();

  const dispatch = useDispatch();

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
      const location = await Location.getCurrentPositionAsync();

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (err) {
      Alert.alert("Couldnt find location!", " please try again " + err, [
        { text: "ok" }
      ]);
    }
  };

  useEffect(() => {
    getLocationHandler();
  }, []);

  //where to focus
  const mapRegin = {
    latitude: !pickedLocation ? 0.0 : pickedLocation.lat,
    longitude: !pickedLocation ? 0.0 : pickedLocation.lng,
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
    if (pickedLocation) {
      dispatch(reportActions.infoLocation(pickedLocation));
    } else if (selectedLocation) {
      dispatch(reportActions.infoLocation(selectedLocation));
    } else {
      console.log("none");
    }
  }, [selectedLocation, pickedLocation]);

  useEffect(() => {
    saveHandler();
  }, [saveHandler]);

  let markerCoordinates;

  if (pickedLocation)
    markerCoordinates = {
      latitude: pickedLocation.lat,
      longitude: pickedLocation.lng
    };

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  return (
    <View style={styles.contain}>
      <MapView
        style={styles.map}
        region={mapRegin}
        onPress={selectedLocationHandler}
      >
        {markerCoordinates && (
          <Marker
            image={require("./../assets/navigation.png")}
            title="Picked Location"
            coordinate={markerCoordinates}
            description="tab"
            showCallout
          >
            <PickImage navigation={props.navigation} />
          </Marker>
        )}
      </MapView>
      <Description />
    </View>
  );
};

MapScreen.navigationOptions = {

 
  //const save= navData.navigation.getParam('saveLocation')
  
    header:null,
    /*headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="return"
          iconName={"back"}
          onPress={() => {
            navData.navigation.navigate("user");
          }}
        />
      </HeaderButtons>
    )*/
  
  
};

const styles = StyleSheet.create({
  contain: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: "white"
  }
});

export default MapScreen;
