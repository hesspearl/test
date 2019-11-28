import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps'

const FullMapPreview= props =>{

    const location = props.navigation.getParam('location')
    
    console.log(location)

    const mapRegin = {
        latitude:location.lat,
        longitude:location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
return (
<MapView
style={styles.map}
    region={mapRegin}
>
    <Marker
        coordinate={{
            latitude:location.lat,
            longitude:location.lng
        }}
    />
</MapView>
)
}

const styles= StyleSheet.create({
    map:{
        flex:1
    }
})
export default FullMapPreview;