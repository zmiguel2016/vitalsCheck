import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-toggle-calendar"; //calendar third party
import moment from "moment";

//calendar components
import CalendarDayComponent from "../shared/CalendarDayComponent";
import CalendarHeaderComponent from "../shared/CalendarHeaderComponent";

//header, cards and color components
import Header from "../shared/header";
import Cards from "../shared/cards";
import colors from "../config/colors";

//variables
let calendarDate = moment();
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

class VitalsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarDate: calendarDate.format("YYYY-MM-DD"),
      horizontal: true,
    };
    this.onDayPress = this.onDayPress.bind(this);
  }
  //clickable for calendar
  onDayPress(date) {
    calendarDate = moment(date.dateString);
    this.updateCalendarDate();
  }
  //update current date
  updateCalendarDate() {
    this.setState({
      calendarDate: calendarDate.format("YYYY-MM-DD"),
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: colors.grey, height: windowHeight }}>
        <Header />

        <Cards date={this.state.calendarDate} />

        <Calendar
          current={this.state.calendarDate}
          dayComponent={CalendarDayComponent}
          calendarHeaderComponent={CalendarHeaderComponent}
          headerData={{
            calendarDate: calendarDate.format("DD MMM, YYYY"),
          }}
          style={styles.calendar}
          horizontal={this.state.horizontal}
          onDayPress={this.onDayPress}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("VitalsCheck", {
              date: this.state.calendarDate,
            })
          }
        >
          <Text style={{ textAlign: "center", fontWeight: "600", top: 25 }}>
            Measure Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: colors.white,
    justifyContent: "center",
    top: -40,
    height: 90,
    width: windowWidth - 20,
    borderRadius: 20,
    alignSelf: "center",
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.grey,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "red",
    alignSelf: "flex-end",
    top: (windowHeight * (60 / 100)) / 1.5,
    right: 20,
  },
});
export default VitalsScreen;
