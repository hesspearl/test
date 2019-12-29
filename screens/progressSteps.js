import React, {
  useState,
  useRef
} from "react";
import { View,  Text, StyleSheet ,Platform } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { ViewPager } from "rn-viewpager";
import PageTwo from "../Pages/PageTwo";
import PageOne from "../Pages/PageOne";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../components/ReportButton";
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import ButtonStyle from "../components/ButtonStyle"



const PAGES = ["Page 1", "Page 2", "Page 3", "Page 4"];

const ProgressSteps = props => {

  
  const newReportInfo =useSelector(state=>state.report)

  



  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: "#4aae4f",
    separatorUnFinishedColor: "#a4d4a5",
    stepIndicatorFinishedColor: "#4aae4f",
    stepIndicatorUnFinishedColor: "#a4d4a5",
    stepIndicatorCurrentColor: "#ffffff",
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: "#000000",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
    labelColor: "#666666",
    labelSize: 12,
    currentStepLabelColor: "#4aae4f"
  };

  const [currentPage, setCurrentPage] = useState(0);
const dispatch=useDispatch()
  

  const viewPager = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={["Section1", "Section2", "Section3", "Section4"]}
          renderLabel={renderLabel}
          stepCount={4}
        />
      </View>
      <ViewPager
        style={{ flexGrow: 1 }}
        ref={viewPager}
        onPageSelected={page => {
          setCurrentPage(page.position);
        }}
      >
        <View>
          <PageOne  />
        </View>
        <View>
          <PageTwo />
        </View>
      </ViewPager>
     <View style={styles.buttonContainer}>

     <ButtonStyle
      iconName='google-maps'
       onSelect={()=>props.navigation.navigate("changeAddress")}
      />
      <CustomButton report={newReportInfo}
        navigation={props.navigation}
      />
    
      </View>
      </View>
     )
};
    

onStepPress = position => {
  setCurrentPage(position);
  viewPager.setPage(position);
};

renderLabel = ({ position, stepStatus, label, currentPosition }) => {
  return (
    <Text
      style={
        position === currentPosition
          ? styles.stepLabelSelected
          : styles.stepLabel
      }
    >
      {label}
    </Text>
  );
};
renderViewPagerPage = data => {
  return (
    <View style={styles.page}>
      <Text>{data}</Text>

      {PAGES.map(page => renderViewPagerPage(page))}
    </View>
  );
};

ProgressSteps.navigationOptions=navData=>{
  return{
  headerTitle:'Steps',
  headerRight:(
    <HeaderButtons
     HeaderButtonComponent={HeaderButton}
    
    >
    <Item
      title="Delete"
      iconName={"trash"}
      onPress={() => {
      navData.navigation.navigate("PickImage")
      }}
    />
  </HeaderButtons>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
   
  
  },
  stepIndicator: {
    marginVertical: 50
  },
  stepLabel: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#999999"
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "500",
    color: "#4aae4f"
  },

  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
 buttonContainer:{
  flexDirection:"row",
  alignItems:"baseline",
  marginBottom:20,
  marginRight:60
 }
});
    
export default ProgressSteps;
