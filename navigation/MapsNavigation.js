import { createStackNavigator, createAppContainer } from "react-navigation";
import ViewDetails from "../screens/ViewDeatils";
import FullMapPreview from "../components/FullMapPreview";

const mapNavigation = createStackNavigator(
    {
      ViewDeatils:ViewDetails,
      FullMap:FullMapPreview
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#F85C50"
        },
        headerTintColor: 'white',
  
       
      },
  
  
    }
  );

  export default createAppContainer(mapNavigation);
