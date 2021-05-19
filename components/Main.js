import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { gStyle } from "../styles/style";

export default function Main() {
  const [font, setFont] = useState("mt-light");

  const changeHandler = (text) => {
    text = text.toLowerCase();
    if (text === "light" || text === "bold") {
      setFont(`mt-${text}`);
    } else if ((text.length >= 5) & (text !== "light" || text !== "bold")) {
      Alert.alert("Неправильный ввод", "Надо выбрать между 'light' и 'bold'");
    }
  };

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, { fontFamily: font }]}>Главная страница</Text>
      <TextInput
        placeholder="Введите название шрифта"
        onChangeText={changeHandler}
        style={gStyle.fontTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
