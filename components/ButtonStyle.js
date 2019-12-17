import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ButtonStyle = props => {
  return (
    <View style={styles.btnContain}>
      <Button title={props.title}
      color="#F85C50"
      
       onPress={props.onSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    margin:5,
   
    
  }
  ,
  btnContain:{
    margin:20,
    width:"40%",
  }
});

export default ButtonStyle;
