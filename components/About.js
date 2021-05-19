import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gStyle } from '../styles/style';

export default function About() {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Про компанию</Text>
      </View>
    );
}

const styles = StyleSheet.create({

});
