import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export class AboutScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#882f2f',
        }}>
        <Image
          style={{ width: '100%', height: 300 }}
          source={require('../img/fire.gif')}
        />
        <Text style={{ fontSize: 20 }}>Made by</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Rafał Wójcik</Text>
      </View>
    );
  }
}
