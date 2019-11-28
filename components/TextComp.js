import React from "react";
import {

  StyleSheet,
  Text,
  
} from "react-native";

const TextComp = props => {
 return(
     <Text
     style={styles.text}>{props.children}</Text>
 )
};

    
    
    

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        padding:10,
        fontWeight:'bold'
    }
  
});

export default TextComp;
