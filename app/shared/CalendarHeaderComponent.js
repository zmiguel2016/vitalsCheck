import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const weekDaysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class CalendarHeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.dateText}>
            {this.props.headerData.calendarDate}
          </Text>
        </View>
        {
          // not showing week day in case of horizontal calendar, this will be handled by day component
          this.props.horizontal ? null : (
            <View style={styles.week}>
              {weekDaysNames.map((day, index) => (
                <Text key={index} style={styles.weekName} numberOfLines={1}>
                  {day}
                </Text>
              ))}
            </View>
          )
        }
      </View>
    );
  }
}

CalendarHeaderComponent.propTypes = {
  headerData: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 5,
    borderRadius: 15,
  },
  week: {
    marginTop: 7,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weekName: {
    marginTop: 2,
    marginBottom: 7,
    width: 32,
    textAlign: "center",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#7c7c7c",
  },
  dateText: {
    flex: 6,
    fontSize: 18,
  },
});

export default CalendarHeaderComponent;
