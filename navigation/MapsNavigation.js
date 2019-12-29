import { createStackNavigator, createAppContainer } from "react-navigation";
import ViewDetails from "../screens/AdminScreen/ViewDeatils";
import ProgressSteps from "../screens/progressSteps";
import Colors from "../Colors"
import AddressPreview from "../components/AddressPreview"

const mapNavigation = createStackNavigator(
    {
 //ProgressSteps:ProgressSteps
  AddressPreview:AddressPreview
  
    }
  );

  export default createAppContainer(mapNavigation);
