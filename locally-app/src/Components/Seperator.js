import React from "react";
import { View } from "react-native";
import Theme from "../utils/theme";

export default () => {
  return (
    <View style={{ backgroundColor: Theme.Colors.white }}>
      <View
        style={{
          backgroundColor: Theme.Colors.gray,
          marginHorizontal: 20,
          height: 2,
        }}
      />
    </View>
  );
};
