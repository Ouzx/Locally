import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DetailHeader from "../Components/DetailHeader";
export default () => {
  return (
    <View>
      <DetailHeader headerName="Detay" colors={["#FCA780", "#FF5981"]} />
    </View>
  );
};
