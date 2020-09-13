import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { saveVitals } from "../api/VitalsApi"; //firebase post function
import colors from "../config/colors"; //colors config

//dimensions
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const container = windowHeight - 125;

function CardsVitals(props) {
  /**state variables*/

  //card box opacity states
  const [tempopacity, setTempO] = useState(0.8);
  const [bloodopacity, setBloodO] = useState(0.8);
  const [spopacity, setSpO] = useState(0.8);

  //vital states
  const [temp, setTemp] = useState(0);
  const [blood, setBlood] = useState("0/0");
  const [spO2, setSp] = useState(0);

  //temp state change
  const tempVitals = () => {
    var RandomNumber = (Math.random() * (112 - 95) + 95).toFixed(1);
    setTempO(0);
    setTemp(RandomNumber);
  };
  //blood state change
  const bloodVitals = () => {
    var RandomNumber = Math.floor(Math.random() * (155 - 115) + 115);
    var RandomNumber2 = Math.floor(Math.random() * (125 - 75) + 75);
    setBloodO(0);
    setBlood(RandomNumber.toString() + "/" + RandomNumber2.toString());
  };
  //spO2 state change
  const spVitals = () => {
    var RandomNumber = Math.floor(Math.random() * (110 - 35) + 35);
    setSpO(0);
    setSp(RandomNumber);
  };

  //post vitals to firebase and redirect to vitals screen
  const postVitals = () => {
    const vital = {
      blood: blood,
      temp: temp,
      bpm: spO2,
      date: props.route.params.date,
    };
    saveVitals(vital);
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.text}>Temperature</Text>
        <View>
          <Text style={styles.vitalText}>{temp}</Text>
          <Text style={styles.vitalType}>F</Text>
          <TouchableOpacity onPress={tempVitals} style={{}}>
            <View
              style={{
                height: container / 5.2,
                width: windowWidth / 2,
                backgroundColor: colors.secondary,
                right: 5,
                bottom: 10,
                borderRadius: 20,
                opacity: tempopacity,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Blood</Text>
        <View>
          <Text style={styles.vitalType}>mmHg</Text>
          <Text style={styles.vitalText}>{blood}</Text>

          <TouchableOpacity onPress={bloodVitals}>
            <View
              style={{
                height: container / 5.2,
                width: windowWidth / 2,
                backgroundColor: colors.secondary,
                right: 5,
                bottom: 10,
                borderRadius: 20,
                opacity: bloodopacity,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>SpO2</Text>
        <View>
          <Text style={styles.vitalText}>{spO2}</Text>
          <Text style={styles.vitalType}>bpm</Text>
          <TouchableOpacity onPress={spVitals}>
            <View
              style={{
                height: container / 5.2,
                width: windowWidth / 2,
                backgroundColor: colors.secondary,
                right: 5,
                bottom: 10,
                borderRadius: 20,
                opacity: spopacity,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={postVitals}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: container,
    backgroundColor: colors.white,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
  },
  body: {
    width: windowWidth - 20,
    height: container / 5,
    backgroundColor: colors.grey,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 15,
    width: windowWidth - 20,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 15,
  },
  vital: {
    height: container / 5.2,
    width: windowWidth / 2,
    backgroundColor: colors.secondary,
    right: 5,
    borderRadius: 20,
  },
  vitalText: {
    fontSize: 40,
    fontWeight: "600",
    color: colors.primary,
    position: "absolute",
    alignSelf: "center",
    top: 40,
    paddingRight: 20,
  },
  vitalType: {
    fontSize: 15,
    fontWeight: "400",
    color: colors.primary,
    alignSelf: "flex-end",
    top: 85,
    right: 15,
  },
  text: {
    color: colors.primary,
    fontWeight: "500",
    paddingLeft: 10,
  },
});

export default CardsVitals;
