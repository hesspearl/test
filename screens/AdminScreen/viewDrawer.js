import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import TextComp from "../../components/TextComp";
import Color from "../../Colors"

import BottomDrawer from "rn-bottom-drawer"
const TAB_BAR_HEIGHT =70;
//const HEADER_HEIGHT = 30;


const ViewDrawer = props => {


  renderContent=()=>{
    return(
      <View style={styles.text}>
      <TextComp
      style={{
        fontSize:20,
       margin:10,
       color:Color.subColor }}>
      user Name:{props.idInfo.userName}</TextComp>
      <TextComp>info1:{props.idInfo.info1}</TextComp>
      <TextComp>info2:{props.idInfo.info2}</TextComp>
      <TextComp>info3:{props.idInfo.info3}</TextComp>
      <TextComp>info4:{props.idInfo.info4}</TextComp>
      <TextComp>info5:{props.idInfo.info5}</TextComp>
      <TextComp>info6:{props.idInfo.info6}</TextComp>
</View>
    )
  }



return (
    <View>
      
          
        <BottomDrawer
        containerHeight={300}
        startUp={false}
        offset={TAB_BAR_HEIGHT }
       background="#eae9e9"
        
      >
        {renderContent()}
      </BottomDrawer>
    
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    margin:10,
   
  },
  location: {
    height: "50%"
  }
});
export default ViewDrawer;
