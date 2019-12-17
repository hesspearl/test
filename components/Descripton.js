import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Description= props =>{
return (
    <View style={styles.buttonContainer}>
    <View style={styles.bubble}>
      <Text>Tap on marker to make report</Text>
    </View>
  </View>
)
}

const styles= StyleSheet.create({
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent:"center"
      },
      buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
      },
})
export default Description;