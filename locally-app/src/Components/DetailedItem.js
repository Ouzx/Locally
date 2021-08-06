import React from "react";
import { View, TouchableOpacity, Text, Share } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import Seperator from "../Components/Seperator";

const Shr = async (link) => {
  try {
    const result = await Share.share({
      message:
        "React Native | A framework for building native apps using React",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const linker = ({ linkerType, link }) => {
  switch (linkerType) {
    case "Phone":
      Linking.openURL("tel:" + link);

      break;
    case "Message":
      Linking.openURL("sms:" + link);

      break;
    case "Whatsapp":
      Linking.openURL("whatsapp://send?text=&phone=+905075417476");

      break;
    case "Share":
      Shr(link);
      break;
  }
};
export default ({ colors, des1, Icon, onPress }) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => linker(onPress)}
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
              <Icon />
            </LinearGradient>
          </View>
          <View style={{ marginLeft: 30 }}>
            <Text style={{ fontSize: 24, marginVertical: 3 }}>{des1}</Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 20 }}>
          <Seperator />
        </View>
      </View>
    </View>
  );
};
