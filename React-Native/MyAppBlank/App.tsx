import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>
      <Text style={styles.profile}>My Profile</Text>
      <Text>Name: Subha</Text>
      <Text>Role : Frontend Developer</Text>
      <Text>City : Salem</Text>
      <Text>Learning React Native 🚀</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  card:{
    backgroundColor:"red",
    justifyContent:"center",
    lineHeight:40,
  },
  profile:{
    fontWeight:"bold",
    fontSize:30,
  }
})
