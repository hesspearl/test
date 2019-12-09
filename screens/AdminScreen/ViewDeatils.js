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
import TextComp from "../../components/TextComp";
import MapView from "../../components/MapPreview";
import Colors from "../../Colors";
import useBackButton from "../../hook/useBackButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const ViewDetails = props => {
  const [data, setData] = useState();
  const [idInfo, setIdInfo] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [selctedMap, setSelectedMap] = useState();
  console.log(data);

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

  const showMap = () => {
    props.navigation.navigate("FullMap", { location: idInfo.location });
  };

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
                    userName={itemData.item.userName}
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
          <ScrollView>
            <TextComp>info1:{idInfo.info1}</TextComp>
            <TextComp>info2:{idInfo.info2}</TextComp>
            <TextComp>info3:{idInfo.info3}</TextComp>
            <TextComp>info4:{idInfo.info4}</TextComp>
            <TextComp>info5:{idInfo.info5}</TextComp>
            <TextComp>info6:{idInfo.info6}</TextComp>
            </ScrollView>
          </View>
       
      </View>

      <TouchableOpacity onPress={showMap} style={styles.location}>
        <MapView location={idInfo.location}>
          {isFetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text>no location</Text>
          )}
        </MapView>
      </TouchableOpacity>
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
  parent: {
    height: "100%"
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: "50%"
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
    height: "50%"
  }
});

export default ViewDetails;
