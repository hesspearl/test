import { createStackNavigator, createAppContainer } from "react-navigation";
import Images from "../screens/Images";
import ProgressSteps from "../screens/progressSteps";
import MapScreen from '../screens/MapSceen'

const appNavigation = createStackNavigator(
  {
    PickImage: Images,
    ProgressSteps: ProgressSteps,
    MapScreen:MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#F85C50"
      },
      headerTintColor: 'white',

     
    },
 initialRouteName:'ProgressSteps'

  }
);

export default createAppContainer(appNavigation);
