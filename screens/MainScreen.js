import { View, Text, SafeAreaView , TouchableOpacity, } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import GamePad from '../assets/GamePad.svg'


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff",
      }}
    >
      {/* GAMEON test */}
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#20315f",
            marginTop: 30,
          }}
        >
          GAMEON
        </Text>
      </View>

      {/* Gaming image */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GamePad
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#AD40AF",
          justifyContent: "space-between",
          width: "90%",
          flexDirection: "row",
          padding: 20,
          borderRadius: 8,
          marginBottom: 50,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          Let's Begin
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
