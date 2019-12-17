import { createStackNavigator, createAppContainer } from "react-navigation";
import ViewDetails from "../screens/AdminScreen/ViewDeatils";
import ProgressSteps from "../screens/progressSteps";
import Colors from "../Colors"

const mapNavigation = createStackNavigator(
    {
 ProgressSteps:ProgressSteps
  
  
    }
  );

  export default createAppContainer(mapNavigation);
