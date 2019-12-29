import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AddressPreview from "../components/AddressPreview"
import Colors from "../Colors"

const ViewPicture = props => {
  const info = props.navigation.getParam("info");

  console.log(info)
  return (
    <View>
      <Image source={{uri: info.image}} style={styles.img} />
      <AddressPreview location={info.location}/>
    </View>
  );
};

ViewPicture.navigationOptions = navData => {
    return {
      headerTitle:"Details",
      headerStyle: {
        backgroundColor: Colors.subColor
      },
      
    };
  };

const styles = StyleSheet.create({
  img: {
  width:"100%",
  height:"100%"
  }
});
export default ViewPicture;
