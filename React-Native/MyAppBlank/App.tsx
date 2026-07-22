import {
  StyleSheet, Text, View, Image, Button,
  Pressable, TextInput, TouchableOpacity,
  TouchableHighlight, TouchableWithoutFeedback,
  ScrollView, FlatList, SectionList,
  Switch, ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function saveData() {
    const user = {
      name,
      age,
    };
    const jsonUser = JSON.stringify(user);
    await AsyncStorage.setItem("user", jsonUser)
  }
  async function readData() {
    const response = await AsyncStorage.getItem("user");
    if (response !== null) {
      const data = JSON.parse(response);
      console.log(data);
      setName(data.name)
      setAge(data.age)
    }
  }

  async function deleteData() {
    await AsyncStorage.removeItem("user");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder='Enter your name'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder='Enter your age'
        value={age}
        onChangeText={setAge}
        style={styles.input}

      />
      <View style={styles.button}>
        <Button
          title='Save'
          onPress={saveData}
        />
        <Button
          title='Load'
          onPress={readData}
        />
        <Button
          title='Delete'
          onPress={deleteData}
        />

      </View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    padding: 3,
    margin: 3
  },
  button: {
    gap: 2,
    flexDirection: "row",
  }
})
