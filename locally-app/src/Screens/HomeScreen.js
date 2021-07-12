import React from "react";
import { View, Text } from "react-native";
import Theme from "../utils/theme";

import Header from "../Components/Header";
import Seperator from "../Components/Seperator";
import ContactItem from "../Components/ContactItem";

import * as pps from "../../assets/pps";

function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header headerName="Rehber" />
      <Seperator />
      <View
        style={{
          alignItems: "center",
          backgroundColor: Theme.Colors.white,
          flex: 1,
          padding: Theme.Numbers.paddingM,
        }}
      >
        <ContactItem des1="asd" img={pps.x1} />
      </View>
    </View>
  );
}

export default HomeScreen;
