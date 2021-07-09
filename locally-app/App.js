import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Test} from './src/test';
const asd = () => (console.log('asdas'))

export default function App() {
  return (
    <TouchableOpacity onPress={asd}>
      <Test />
    </TouchableOpacity>
  );
}
