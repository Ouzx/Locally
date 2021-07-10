import React from "react";
import { View, Text } from "react-native";
import Theme from "../utils/theme";

import Header from "../Components/Header";
import Seperator from "../Components/Seperator";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerName="Rehber" />
      <Seperator />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Theme.Colors.white,
          flex: 1,
        }}
      >
        <Text>Home Screen</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
