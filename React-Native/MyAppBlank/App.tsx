import { StyleSheet, Text, View, Image, Button, Pressable, TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const languages = [
    "Java",
    "JavaScript",
    "React",
    "React Native",
    "SQL",
    "MongoDB",
  ];
  const skills = [
    { id: "1", name: "Java" },
    { id: "2", name: "React" },
    { id: "3", name: "SQL" },
    { id: "4", name: "MongoDB" },
  ];
  const students = [
    "Subha",
    "Rahul",
    "Priya",
    "Arun",
  ];
  return (
    // <View style={styles.card} >
    //   {/* <Text >😀</Text>
    //   <Text >😎</Text>
    //   <Text>🚀</Text> */}
    //   <Image source={require("./assets/people.png")} style={styles.img} />
    //   <Text>Name : Subha Harini </Text>
    //   <Text>Role : Frontend Developer</Text>
    //   <Text>City : Salem </Text>
    //   <Pressable style={({ pressed }) => ({
    //     backgroundColor: pressed ? "#008000" : "#32cd32",
    //     paddingHorizontal: 8,
    //     paddingVertical: 8,
    //     borderRadius: 10,
    //   })}>
    //     <Text style={styles.editText}>Edit Profile</Text>
    //   </Pressable>
    //   <Pressable style={({ pressed }) => ({
    //     backgroundColor: pressed ? "#ff0000" : "#ff4500",
    //     paddingHorizontal: 20,
    //     paddingVertical: 8,
    //     borderRadius: 10,
    //   })}>
    //     <Text style={styles.editText}>Logout</Text>
    //   </Pressable>
    // </View>

    // <View style={styles.content}>
    //   <Text>Name</Text>
    //   <TextInput
    //     placeholder='Enter your name'
    //     value={name}
    //     onChangeText={setName}
    //     style={styles.input}
    //     keyboardType='default'
    //   />
    //   <Text>"Hello, {name}!"</Text>
    //   <Text>Email</Text>
    //   <TextInput
    //     placeholder='Enter your email'
    //     style={styles.input}
    //     keyboardType='email-address'
    //   />
    //   <Text>Password</Text>
    //   <TextInput
    //     placeholder='Enter your password'
    //     style={styles.input}
    //     secureTextEntry={true}
    //     keyboardType='default'
    //   />
    // </View>

    // <View style={styles.content}>
    //   <TouchableOpacity style={styles.button} onPress={() => alert("Pressed")}>
    //     <Text style={styles.text}>Login</Text>
    //   </TouchableOpacity>
    //   <TouchableHighlight
    //     underlayColor="red"
    //     style={styles.button}
    //     onPress={() => alert("Pressed")}>
    //     <Text style={styles.text}>Login</Text>
    //   </TouchableHighlight>
    //   <TouchableOpacity style={styles.button} onPress={() => alert("Pressed")}>
    //     <Text style={styles.text}>Login</Text>
    //   </TouchableOpacity>
    // </View>
    // <ScrollView
    //   contentContainerStyle=
    //   {{
    //     gap: 60, padding: 10
    //   }}
    //   showsHorizontalScrollIndicator={false}
    //   horizontal={true}
    // >
    //   <Text>My Favorite Movies</Text>
    //   <Text>🎬 Interstellar</Text>
    //   <Text>🎬 Avengers</Text>
    //   <Text>🎬 Your Name</Text>
    //   <Text>🎬 Spirited Away</Text>
    //   <Text>🎬 Demon Slayer</Text>
    //   <Text>🎬 Inception</Text>
    //   <Text>🎬 Naruto</Text>
    //   <Text>🎬 One Piece</Text>
    //   <Text>🎬 Attack on Titan</Text>
    //   <Text>🎬 Jujutsu Kaisen</Text>

    // </ScrollView>
    // <FlatList
    //   data={languages}
    //   renderItem={({ item }) => (
    //     <Text style={styles.text}>{item}</Text>
    //   )}
    // />
    // <FlatList
    // data={skills}
    // numColumns={2}
    // keyExtractor={(item)=>item.id}
    // renderItem={({item})=>(
    //   <Text style={styles.text}>{item.name}</Text>
    // )}
    // />
    <FlatList
      data={students}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <Text style={styles.header}>Student List</Text>
      }
      ListFooterComponent={
        <Text style={styles.footer}>End of Students</Text>
      }
      ItemSeparatorComponent={() => (
        <View
          style={{
            backgroundColor: "green",
                        
          }}
        />
      )}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
    />

  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  input: {
    borderWidth: 2,
    width: 250,
    borderRadius: 5,
    padding: 8
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  text: {
    backgroundColor: "green",
    textAlign: "center",
    color: "white"

  },
  header: {
    padding: 20,
    textAlign: "center"
  },
  footer: {
    padding: 20,
    textAlign: "center"
  }

  // card: {
  //   flex: 1,
  //   borderWidth: 3,
  //   borderColor: "red",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 10
  // },
  // img: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 75,
  // },
  // editText: {
  //   color: "white",
  // },
})
