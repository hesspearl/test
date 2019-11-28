import React from "react";
import { View, Image, StyleSheet } from "react-native";
import env from "../envOfMapKey";
import Colors from '../Colors'

const MapPreview = props => {
  let imagePreviewUrl;

 

  if (props.location) {
   //needs API key active to show image 
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${env.googleApiKey}`;



console.log(imagePreviewUrl)
  }

  return (
    <View  style={styles.mapPreview}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  flex:1,
    
      borderColor: Colors.border,
      borderWidth: 1
  },
  mapImage: {
    width:'100%',
    height:'100%',
  }
  
});

export default MapPreview;
