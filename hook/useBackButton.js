import {useEffect} from 'react'
import {BackHandler} from 'react-native'


export default useBackButton=()=>{
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
           
            return true;
          });
        return () => {
          BackHandler.removeEventListener("hardwareBackPress",() => {
           
            return true;
          });
        };
      }, [BackHandler]);
    }
