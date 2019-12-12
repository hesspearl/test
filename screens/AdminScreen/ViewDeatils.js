import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from "react-native";
import Card from "../../components/Cards";
import firebase from "../../firebase";
import viewMap from "./viewDrawer"
import Colors from "../../Colors";
import useBackButton from "../../hook/useBackButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const ViewDetails = props => {
  const [data, setData] = useState();
  const [idInfo, setIdInfo] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [selctedMap, setSelectedMap] = useState();
 

  useBackButton();

  const docData = [];

  async function getReport() {
    const ref = firebase
      .firestore()
      .collection("test")
      .get();

    await ref.then(snapShot =>
      snapShot.docs.forEach(data => {
        console.log(data.data().userName);
        docData.push({
          reportId: data.id,
          userName: data.data().userName,
          location: data.data().location,
          image: data.data().Image,
          info1: data.data().info1,
          info2: data.data().info2,
          info3: data.data().info3,
          info4: data.data().info4,
          info5: data.data().info5,
          info6: data.data().info6
        });

        return setData(docData);
      })
    );
  }

  useEffect(() => {
    getReport();
  }, []);

  const getDetails = id => {
    const selectedReport = data.find(idKey => idKey.reportId === id);
    setIdInfo(selectedReport);

    setIsFetching(true);
    

  };

  useEffect(() => {
  if(idInfo){
    props.navigation.navigate("viewMap", { infos: idInfo })
  }
  }, [idInfo])
  

 
  return (
 
      <View style={styles.container}>
        
          <FlatList
            data={data}
            keyExtractor={item => item.reportId}
            renderItem={itemData => (
              <TouchableOpacity
                onPress={() => getDetails(itemData.item.reportId)}
              >
                <Card
                  image={itemData.item.image}
                  userName={itemData.item.userName}
                  reportId={itemData.item.reportId}
                />
              </TouchableOpacity>
            )}
            initialNumToRender={3}
          />
     
       
       
      </View>

      
   
  );
};

ViewDetails.navigationOptions = navData => {
  return {
    headerTitle:"Reports",
    headerStyle: {
      backgroundColor: Colors.subColor
    },
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="return"
          iconName={"back"}
          onPress={() => {
            navData.navigation.navigate("Admin");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
 
  container: {
    flexDirection: "row",
    justifyContent:'center'
  
  },
 
});

export default ViewDetails;
