import * as React from "react";
import { StyleSheet, View } from "react-native";

import CardsVitals from "../shared/cardsVitals";
//vitals checker screen
function VitalsCheck(props) {
  return (
    <View>
      <CardsVitals {...props} />
    </View>
  );
}
const styles = StyleSheet.create({});

export default VitalsCheck;
