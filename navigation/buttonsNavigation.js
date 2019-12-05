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
import SingUp from '../screens/sign up'
import AdminLogIn from "../screens/AdminScreen/AdminLogIn";
import ViewDetails from "../screens/AdminScreen/ViewDeatils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Colors";
import {} from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import signup from "../screens/sign up";

const appNavigation = createStackNavigator(
  {
    Login: Login,
    SingUp:signup,
   
    PickImage: Images,
    ProgressSteps: ProgressSteps,
    MapScreen: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.mainColor
      },
      headerTintColor: "white"
    }
    //initialRouteName:'ProgressSteps'
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
      screen: appNavigation,
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
        tabBarColor:Colors.mainColor
      }
    },

    Admin: {
      screen: AdminNavigator,
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
