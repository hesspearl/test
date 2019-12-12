import { createStackNavigator, createAppContainer } from "react-navigation";
import ViewDetails from "../screens/AdminScreen/ViewDeatils";
import FullMapPreview from "../components/FullMapPreview";
import Colors from "../Colors"

const mapNavigation = createStackNavigator(
    {
      ViewDeatils:ViewDetails,
      viewMap:FullMapPreview
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Colors.subColor
        },
        headerTintColor: 'white',
  
       
      },
  
  
    }
  );

  export default createAppContainer(mapNavigation);
