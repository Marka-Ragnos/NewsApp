import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  const [font, setFont] = useState("mt-light");

  const changeHandler = (text) => {
    text = text.toLowerCase();
    if (text === "light" || text === "bold") {
      setFont(`mt-${text}`);
    } else if ((text.length >= 5) & (text !== "light" || text !== "bold")) {
      Alert.alert("Неправильный ввод", "Надо выбрать между 'light' и 'bold'");
    }
  };

  const [news, setNews] = useState([
    { name: "Google", anons: "Google!!!", full: "Google is cool" },
    { name: "Apple", anons: "Apple!!!", full: "Apple is cool" },
    { name: "FaceBook", anons: "FaceBook!!!", full: "FaceBook is cool" },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, { fontFamily: font }]}>Главная страница</Text>
      <TextInput
        placeholder="Введите название шрифта"
        onChangeText={changeHandler}
        style={gStyle.fontTitle}
      />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
