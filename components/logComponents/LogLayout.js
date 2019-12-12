import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../Colors';

const LogLayout= props =>{
return (
<View style={{...styles.logStyle,...props.style}}>

<Text style={styles.Title}>{props.title} </Text>
    {props.children}
</View>
)
}

const styles= StyleSheet.create({
    logStyle: {
      backgroundColor:Colors.backgroundLayout,
        alignItems: "center",
        marginTop: 30,
        marginBottom: 15,
        paddingTop: 50,
        flex: 1,
        borderColor: Colors.mainColor,
        borderWidth: 3,
        borderRadius: 101,
        overflow: "hidden",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 8
      },
      Title: {
        fontSize: 24,
        fontWeight: "bold"
      },
})
export default LogLayout;