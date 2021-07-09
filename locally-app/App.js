import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./src/Screens/HomeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rehber"
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Rehber</Text>
                <AntDesign name="pluscircle" size={24} color="gray" />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
