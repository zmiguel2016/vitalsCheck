import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

//dimensions
const windowHeight = Dimensions.get("window").height;

//header component for vitals screen
export default function Header() {
  return (
    <View style={styles.header}>
      <SafeAreaView>
        <View style={styles.headerRow1}>
          <MaterialIcons name="menu" size={40} style={styles.burger} />
          <Text style={styles.headerText}>Vitals</Text>
          <Entypo name="plus" size={40} style={styles.plus} />
        </View>
        <View>
          <Text style={styles.caption}>How are you feeling today?</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: windowHeight / 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colors.primary,
  },
  headerRow1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    top: Platform.OS === "android" ? 15 : 0,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.white,
  },
  caption: {
    fontWeight: "600",
    fontSize: 17,
    color: colors.white,
    margin: 5,
    right: -10,
    top: Platform.OS === "android" ? 15 : 0,
  },
  burger: {
    color: colors.white,
    left: -30,
  },
  plus: {
    color: colors.white,
    left: 30,
  },
});
