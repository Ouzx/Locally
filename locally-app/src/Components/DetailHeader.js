import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Theme from "../utils/theme";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default ({ headerName, colors, onPress }) => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient start={[0, 1]} end={[1, 0]} colors={colors}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={{ height: 150 }}>
          <View
            style={{
              top: 50,
              left: 30,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={24}
                color={Theme.Colors.white}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                marginLeft: Theme.Numbers.padding,
                color: Theme.Colors.white,
                // fontWeight: "500",
              }}
            >
              {headerName}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
