import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";

//screens
import VitalsScreen from "./app/screens/vitalsscreen";
import DoctorsScreen from "./app/screens/doctorsscreen";
import HomeScreen from "./app/screens/homescreen";
import VitalsCheck from "./app/screens/vitalsCheck";

//color configs
import colors from "./app/config/colors";

//stack vars
const Tab = createBottomTabNavigator();
const VitalsStack = createStackNavigator();

//vitals stack navigator
function VitalsStackScreen() {
  return (
    <VitalsStack.Navigator>
      <VitalsStack.Screen
        name="Vitals"
        component={VitalsScreen}
        options={{
          headerShown: false,
        }}
      />
      <VitalsStack.Screen
        name="VitalsCheck"
        component={VitalsCheck}
        options={{
          title: "Vitals Kit",
          headerTintColor: colors.primary,
        }}
      />
    </VitalsStack.Navigator>
  );
}

//tabs navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <MaterialCommunityIcons
                name={focused ? "home-variant" : "home-variant-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Vitals") {
            return (
              <MaterialCommunityIcons
                name={focused ? "signal-cellular-3" : "signal-cellular-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Doctor") {
            return <Fontisto name="doctor" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Vitals" component={VitalsStackScreen} />
      <Tab.Screen name="Doctor" component={DoctorsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
