import React from "react";
import { View } from "react-native";
import Theme from "../utils/theme";

export default () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: Theme.Colors.gray,
          marginHorizontal: Theme.Numbers.padding,
          height: 1,
        }}
      />
    </View>
  );
};
