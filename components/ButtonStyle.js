import React from "react";
import { View, Button, StyleSheet } from "react-native";

const ButtonStyle = props => {
  return (
    <View style={styles.btn}>
      <Button title={props.title} color="#F85C50" onPress={props.onSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: "12%",
    marginHorizontal: "30%"
  }
});

export default ButtonStyle;
