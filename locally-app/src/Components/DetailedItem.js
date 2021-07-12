import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import Seperator from "../Components/Seperator";

export default ({ colors }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{ elevation: 20, borderRadius: 9999, paddingVertical: 10 }}
          >
            <LinearGradient
              start={[0.5, 1]}
              end={[0.5, 0]}
              colors={colors}
              style={{ padding: 10, borderRadius: 9999 }}
            >
              <Ionicons name="call" size={24} color="white" />
            </LinearGradient>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 24, marginVertical: 3 }}>Ara</Text>
            <Text style={{ color: "gray", fontSize: 14 }}>5435219525</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Seperator />
        </View>
      </View>
    </View>
  );
};
