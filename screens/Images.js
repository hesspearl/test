import React, { useState, useCallback, useEffect } from "react";
import { View,
  BackHandler , StyleSheet, Alert } from "react-native";
import * as permissions from "expo-permissions";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import * as reportActions from "../store/action/report";
import MainButton from "../components/MainButton";
import HeaderButton from '../components/HeaderButton'



const Images = props => {

  const [img, setImg] = useState()


  dispatch = useDispatch();

  //permission to use camera
  const verifyCamera = async () => {
    const CameraResult = await permissions.askAsync(
      permissions.CAMERA,
      permissions.CAMERA_ROLL
    );

    if (CameraResult.status !== "granted") {
      Alert.alert(
        "permission",
        "you need to granted camera permission to use app ",
        [{ text: "ok" }]
      );
      return false;
    }
    return true;
    }



    useEffect(() => {

      if(img)
      props.navigation.navigate('MapScreen')
    }, [TakeImage, img])

  //to open up camera
  const TakeImage = async () => {
    const hasPermission = await verifyCamera();
    //if it give false it wont open app and return to function
    if (!hasPermission) {
      return;
    }

    const imageChoosed = await ImagePicker.launchCameraAsync({
    //   allowsEditing:true,
      //aspect:[9,16],
      quality: 0.5
    });

    const  imgURI=imageChoosed.uri



  setImg(imgURI)

    if(img)
   getLocationHandler();


  }

  useEffect(() => {
    dispatch(reportActions.infoImage(img))

  }, [img , dispatch])





 
 
  return (
    <View style={style.ButtonContainer}>
      <MainButton onPress={TakeImage}>Make near miss report</MainButton>
    </View>
  );

}

Images.navigationOptions= navData =>{
  return{
  headerTitle:'Main Page',
  headerLeft:(
    <HeaderButtons
     HeaderButtonComponent={HeaderButton}
    
    >
    <Item
      title="return"
      iconName={"back"}
      onPress={() => {
      navData.navigation.navigate("user")
      }}
    />
  </HeaderButtons>)
}}

const style = StyleSheet.create({
  Button: {
    width: 200
  },

  ButtonContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
backgroundColor:'#FFE0BC',
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1
  }
});

export default Images;
