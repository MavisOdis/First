import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { FreeGames, PaidGames, SliderData } from "../models/data";
import BarnerSlider from "../components/BarnerSlider";
import { windowWith } from "../utils/Diamensions";
import CustomSwitch from "../components/CustomSwitch";
import ListItems from "../components/ListItems";

const HomeScreen = ({ navigation }) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBarner = ({ item, index }) => {
    return <BarnerSlider data={item} />;
  };

  const onSelectSwitched = (value) => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ padding: 15 }} showsVerticalScrollIndicator={false}>
        {/* Profile view */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hello John</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require("../assets/profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>

        {/* Search view */}
        <View
          style={{
            flexDirection: "row",
            borderColor: "#C6C6C6",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{ padding: 3 }}
          />
          <TextInput placeholder="Search" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Corosel view */}
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={SliderData}
          renderItem={renderBarner}
          sliderWidth={windowWith - 40}
          itemWidth={300}
          loop={true}
          autoplay={true}
        />

        {/* switch view */}

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitched}
          />
        </View>

        {gamesTab == 1 &&
          FreeGames.map((item) => (
            <ListItems
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
            />
          ))}
        {gamesTab == 2 &&
          PaidGames.map((item) => (
            <ListItems
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              Price={item.price}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
