import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Badge from "../Components/Badge";
import Theme from "../utils/theme";

import Seperator from "../Components/Seperator";

const imgSize = 70;

export default ({ colors, des1, img }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{ elevation: 20, paddingVertical: 10, borderRadius: 9999 }}
          >
            <Image
              source={img}
              style={{ width: imgSize, height: imgSize, borderRadius: 9999 }}
            />
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 24, marginVertical: 3 }}>{des1}</Text>
            <Badge badgeColor={Theme.Gradients.g1} badgeName="Badge" />
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Seperator />
        </View>
      </View>
    </View>
  );
};
