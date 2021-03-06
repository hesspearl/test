import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Images from "../screens/Images";
import ProgressSteps from "../screens/progressSteps";
import MapScreen from "../screens/MapSceen";
import Login from "../screens/Login";
import viewMap from "../components/FullMapPreview"
import SingUp from '../screens/sign up'
import AdminLogIn from "../screens/AdminScreen/AdminLogIn";
import ViewDetails from "../screens/AdminScreen/ViewDeatils";
import ViewPicture from "../screens/ViewPicture"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import changeAddressMap from "../screens/userScreen/ChangeAddressMap"
import Colors from "../Colors";
import {} from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";


const appNavigation = createStackNavigator(
  {
  
    PickImage: Images,
    SingUp:SingUp,
    view: ViewDetails,
    ProgressSteps: ProgressSteps,
    MapScreen:MapScreen,
    viewMap:viewMap,
    changeAddress:changeAddressMap,
    ViewPicture:ViewPicture
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.mainColor
      },
      headerTintColor: "white",
     
    },
     
  }
);

const AdminNavigator = createStackNavigator(
  {
    AdminLog: AdminLogIn,
    view: ViewDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.subColor
      },
      headerTintColor: "white"
    }
  }
);
const tabScreenCongfig={
    user: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-box"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarColor:Colors.mainColor,
        
      }
    },
mainScreen:{ screen:appNavigation,
  navigationOptions:{
    tabBarVisible:false,
    
    tabBarColor:"white",
    title:"",
  

  }},

    Admin: {
      screen: AdminLogIn,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialCommunityIcons
              name="account-key"
              color={tabInfo.tintColor}
              size={25}
            />
          );
        },
        tabBarColor:Colors.subColor
      }
    }
  }

const LogInNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenCongfig,{
     shifting:true
    })
    : createBottomTabNavigator(
      tabScreenCongfig,
        {
          tabBarOptions: {
            activeTintColor: Colors.mainColor
          }
        }
      );

export default createAppContainer(LogInNavigator);
