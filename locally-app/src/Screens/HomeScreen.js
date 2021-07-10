import React from "react";
import { View, Text } from "react-native";
import Header from "../Components/Header";
import Colors from "../utils/theme";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerName="Rehber" />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.white,
          flex: 1,
        }}
      >
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
