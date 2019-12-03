import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Card from "../../components/Cards";
import firebase from "../../firebase";
import TextComp from "../../components/TextComp";
import MapView from "../../components/MapPreview";
import Colors from "../../Colors";

const ViewDetails = props => {
  const [data, setData] = useState();
  const [idInfo, setIdInfo] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [selctedMap, setSelectedMap] = useState();



  const docData = [];

  async function getReport() {
    const ref = firebase
      .firestore()
      .collection("test")
      .get();

    await ref.then(snapShot =>
      snapShot.docs.forEach(data => {
        docData.push({
          reportId: data.id,
          userID: data.data().userID,
          location:data.data().location,
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


      setIsFetching(true)
    
    
  };

  const showMap=()=>{
    props.navigation.navigate('FullMap',{location:idInfo.location})
  }

  
  if (idInfo === undefined) {
    return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <View style={styles.list}>
            <FlatList
              data={data}
              keyExtractor={item => item.reportId}
              renderItem={itemData => (
                <TouchableOpacity
                  onPress={() => getDetails(itemData.item.reportId)}
                >
                  <Card
                    image={itemData.item.image}
                    userID={itemData.item.userID}
                    reportId={itemData.item.reportId}
                  />
                </TouchableOpacity>
              )}
              initialNumToRender={3}
            />
          </View>
          <View style={styles.text}>
            <View style={{ alignItems: "center" }}>
              <TextComp> no details</TextComp>
            </View>
          </View>
        </View>

        <View style={styles.location}>
          <MapView>
            <TextComp>no location</TextComp>
          </MapView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={item => item.reportId}
            renderItem={itemData => (
              <TouchableOpacity
                onPress={() => getDetails(itemData.item.reportId)}
              >
                <Card
                  image={itemData.item.image}
                  userID={itemData.item.userID}
                  reportId={itemData.item.reportId}
                />
              </TouchableOpacity>
            )}
            initialNumToRender={3}
          />
        </View>

        <View style={styles.text}>
          <TextComp>info1:{idInfo.info1}</TextComp>
          <TextComp>info2:{idInfo.info2}</TextComp>
          <TextComp>info3:{idInfo.info3}</TextComp>
          <TextComp>info4:{idInfo.info4}</TextComp>
          <TextComp>info5:{idInfo.info5}</TextComp>
          <TextComp>info6:{idInfo.info6}</TextComp>
        </View>
      </View>

      <TouchableOpacity 
      onPress={showMap}
       style={styles.location}>
      <MapView location={idInfo.location}>
        {isFetching ? <ActivityIndicator size="large" /> : <Text>no location</Text>}
      </MapView>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: "100%"
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: "50%",
    
  },
  list: {
    width: "50%",
   
    borderWidth: 1,
    borderColor: Colors.border
  },
  text: {
    justifyContent: "center",

    borderWidth: 1,
    borderColor: Colors.border,
    width: "50%"
  },
  location: {
    height: "50%",
   
    
  }
});

export default ViewDetails;
