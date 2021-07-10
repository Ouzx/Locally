import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Theme from "../utils/theme";
import DetailHeader from "../Components/DetailHeader";

import * as pps from "../../assets/pps";
export default () => {
  return (
    <View>
      <DetailHeader headerName="Detay" colors={["#FCA780", "#FF5981"]} />
      <View style={{ padding: Theme.Numbers.paddingM }}>
        <View style={{ position: "relative" }}>
          <View
            style={[{ position: "absolute", top: -50 }, Theme.Shadow.shadow]}
          >
            <Image
              source={pps.x1}
              style={{ width: 100, height: 100, borderRadius: 12 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
