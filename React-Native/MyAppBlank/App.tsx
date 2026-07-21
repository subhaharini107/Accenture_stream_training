import {
  StyleSheet, Text, View, Image, Button,
  Pressable, TextInput, TouchableOpacity,
  TouchableHighlight, TouchableWithoutFeedback,
  ScrollView, FlatList, SectionList,
  Switch, ActivityIndicator
} from 'react-native';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title='Go to Profile'
        onPress={() => navigation.navigate("Profile", {
          userName: "Subha",
          age: 22,
        })}
      />
    </View>
  );
}

function ProfileScreen({ navigation, route }) {
  const { userName, age } = route.params;
  navigation.setOptions({
    title:userName,
  });
  return (
    <View style={{ gap: 5 }}>
      <Text>Profile Screen</Text>
      <Text>Welcome {userName}</Text>
      <Text>Age: {age}</Text>
      <Button
        title='Go to Setting'
        onPress={() => navigation.navigate("Setting")}
      />
      <Button
        title='Go Back to Home Screen'
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View>
      <Text>Setting Screen</Text>
      <Button
        title='Go Back to Profile'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title:"Dashboard"
            // headerShown: false,
            headerTintColor: "#fff",
            headerTitleAlign: "center",

            headerStyle: {
              backgroundColor: "#2563EB",

            }
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name='Setting'
          component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

})
