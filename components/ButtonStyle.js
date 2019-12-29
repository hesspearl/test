import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { FAB } from "react-native-paper";
import Icons from "react-native-vector-icons/FontAwesome";
import Color from "../Colors";

const ButtonStyle = props => {
  return (
    <View style={styles.btnContain}>
      <FAB
        icon={props.iconName}
        onPress={props.onSelect}
        color="white"
        style={styles.btn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    
      backgroundColor:Color.progressBackground,
      borderColor:"black",
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 8,
      elevation:8,
         position: "absolute",
         margin: 16,
         right: 0,
         bottom: 0,
         
       
  },
  btnContain: {
    margin: 20,
    width: "40%",
  
  }
});

export default ButtonStyle;
