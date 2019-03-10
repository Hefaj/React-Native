import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';

import { Alert, Share } from 'react-native';
import { Facebook } from 'expo';
import { LoginButton, ShareDialog, MessageDialog } from 'expo';

export class CytatScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      img: 0,
      rand: 0,
      zawartosc: 'init',
      isLoging: false,
    };
  }

  _ShareMessage = () => {
    //Here is the Share API
    Share.share({ message: inputValue, title: 'Sharing via react native' })
      //after successful share return result
      .then(result => console.log(result))
      //If any thing goes wrong it comes here
      .catch(errorMsg => console.log(errorMsg));
  };

  _log = () => {
              inputValue = "okej";
  };

  componentDidMount() {
    // pobieranie pliku z servera
    return fetch('http://fizyka.umk.pl/~286324/III/pum/cytaty.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.cytaty,
            rand: Math.floor(Math.random() * Math.floor(95)),
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.progressBar}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      //galery
      <View
        style={{
          backgroundColor: 'skyblue',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        key={this.state.rand}>

        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({ item }) =>{
              if (item.id == this.state.rand)
              inputValue='"'+item.cytat + '" ' + item.author;
            return (
            (item.id == this.state.rand)?
                <View style={{ flex: 1 }}>
                  <Image source={{ uri: item.url }} style={{ height: 300 }} />
                  <Text style={{marginBottom: 10, padding: 10, fontSize: 16, fontFamily: 'Arial', textAlign: 'center'}}>{item.cytat}</Text>
                  <Text style={{textAlign: 'right', padding: 10, fontFamily: 'Arial',}}>{item.author}</Text>
                </View>:null)
            }
          }
        />

        <View style={{ alignContent: 'center', width: '90%', color: 'red' }}>
          <Button
            color="#841584"
            title="Nowy cytat, nowy ja"
            onPress={() =>
              this.setState(dod => ({
                rand: Math.floor(Math.random() * Math.floor(95)),
              }))
            }
          />

          <Button title="Postuj" onPress={this._ShareMessage} />
        </View>
      </View>
    );
  }
}

let inputValue = 'init';


const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    justifyContent: 'center',
  },
});

