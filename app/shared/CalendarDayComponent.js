import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import colors from "../config/colors";
import { color } from "react-native-reanimated";

const weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class CalendarDayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onDayPress = this.onDayPress.bind(this);
  }

  getContentStyle() {
    const { state, marking = {}, date, current } = this.props;
    const style = {
      content: {},
      text: {
        color: "#181c26",
      },
    };

    if (state === "today") {
      style.text.color = "#fff";
      style.content.backgroundColor = colors.primary;
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = colors.secondary;
    }

    return style;
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }

  render() {
    const contentStyle = this.getContentStyle();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.props.horizontal ? (
            <Text style={styles.weekName} numberOfLines={1}>
              {weekDaysNames[this.props.date.weekDay]}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          style={[styles.content, contentStyle.content]}
          onPress={this.onDayPress}
        >
          <Text style={[styles.contentText, contentStyle.text]}>
            {String(this.props.children)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 7,
    marginRight: 7,
  },
  weekName: {
    width: 32,
    textAlign: "center",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#7c7c7c",
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
  },
});

export default CalendarDayComponent;
