import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, Dimensions } from "react-native";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";

import firebase from "../api/firebase";
import colors from "../config/colors";

//screen dimensions
const windowHeight = Dimensions.get("window").height;
const cardContanier = windowHeight * (60 / 100);
const windowWidth = Dimensions.get("window").width;

function Cards(props) {
  //vitals state
  const [myvitals, setVitals] = useState({ blood: "0/0", bpm: 0, temp: 0 });

  //gets data from firebase backend whenever date value is changed
  //backend is made up of a collection called vitals, within there are documents with the id being set to a date, within the documents lies the vitals data (blood: , bpm: , temp:)
  // collection(vitals) -> docid(date "YYYY-MM-DD") -> data
  function getData(date) {
    useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db
          .collection("vitals")
          .doc(date)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              setVitals(doc.data());
            } else {
              setVitals({ blood: "0/0", bpm: 0, temp: 0 });
            }
          });
      };
      fetchData();
    }, [date]);
  }

  //call to retrieve data
  getData(props.date);

  return (
    <View
      style={{
        backgroundColor: colors.grey,
        height: cardContanier,
        width: "100%",
        flexDirection: "row",
        alignContent: "flex-start",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        position: "absolute",
        top: windowHeight / 3,
      }}
    >
      <View style={styles.temp}>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            position: "absolute",
            top: 20,
          }}
        >
          <FontAwesome5 name="temperature-low" size={22} color="white" />
          <Text style={styles.text}>Temperature</Text>
        </View>
        <Image
          style={styles.beatsTemp}
          source={require("../assets/linechart.png")}
        />
        <Text style={styles.vitalText}>{myvitals.temp}</Text>
        <Text style={styles.vitalType}>F</Text>
      </View>
      <View style={styles.blood}>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            position: "absolute",
            top: 20,
          }}
        >
          <Fontisto name="blood-drop" size={22} color="white" />
          <Text style={styles.text}>Blood</Text>
        </View>
        <Image
          style={styles.beats}
          source={require("../assets/linechart.png")}
        />
        <Text style={styles.vitalText}>{myvitals.blood}</Text>
        <Text style={styles.vitalType}>mmHg</Text>
      </View>

      <View style={styles.oxi}>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            position: "absolute",
            top: 20,
          }}
        >
          <Fontisto name="heartbeat-alt" size={22} color="white" />
          <Text style={styles.text}>Oximeter</Text>
        </View>
        <Image
          style={styles.beats}
          source={require("../assets/heartbeat.png")}
        />
        <Text style={styles.vitalText}>{myvitals.bpm}</Text>
        <Text style={styles.vitalType}>bpm</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  temp: {
    backgroundColor: colors.pink,
    width: windowWidth / 2.5,
    height: cardContanier / 2.8,
    margin: 10,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  blood: {
    backgroundColor: colors.teal,
    width: windowWidth / 2.5,
    height: cardContanier / 2.2,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  oxi: {
    backgroundColor: colors.primary,
    width: windowWidth / 2.5,
    height: cardContanier / 2.2,
    left: -windowWidth / 4.5,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
  },
  vitalText: {
    color: colors.white,
    fontSize: 35,
    fontWeight: "600",
    alignSelf: "center",
  },
  vitalType: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "400",
    alignSelf: "flex-end",
    bottom: 10,
    right: 15,
  },
  beats: {
    height: cardContanier / 4.3,
    width: windowWidth / 2.5,
    alignSelf: "center",
  },
  beatsTemp: {
    height: cardContanier / 6,
    width: windowWidth / 2.5,
    alignSelf: "center",
    opacity: 0.5,
  },
});

export default Cards;
