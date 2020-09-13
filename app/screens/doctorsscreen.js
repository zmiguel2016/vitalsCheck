import * as React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";

import colors from "../config/colors";

//template doctors screen
function DoctorsScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome.png")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View>
        <Text style={styles.text}>Doctors Screen</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 70,
  },
});
export default DoctorsScreen;
