import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export class InfoScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#359fb0',
        }}>
        <View>
          <Text
            style={{
              paddingBottom: 50,
              padding: 10,
              fontFamily: 'Verdana',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Cytatrox 2000
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 50,
            padding: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'Times New Roman',
            }}>
            Super aplikacja dla użytkowników fb, Zmęczony? Dawno nic nie
            postowałeś? Nie masz weny do szukania cytatów? Oto Cytatrox 2000,
            który zrobi wszystko za ciebie! Nie musisz nic myśleć! Tylko klikasz
            i dostajesz SUPER cytat, który na pewno zyska dla Ciebie MILION
            KICKÓW!!! Jeszcze nie kliknąłeś? Na co czekasz! Spróbuj i zobacz
            jakie to proste.
          </Text>
        </View>
        <View style={{ paddingBottom: 50,width: "90%" }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Times New Roman',
            }}>
            Pani Ania matka trójki dzieci:
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontFamily: 'Times New Roman',
              backgroundColor: "#87ceeb",
              borderRadius: 10,
              padding: 10
              
            }}>
            Od dnia, w którym zaczęłam używać Cytatrox 2000 moje życie obróciło
            się o 180 stopni! Ciężko się chodzi na rękach, ALE moi znajomi
            uwielbiają moje cytaty, które teraz postuje. Po prostu świetna
            aplikacja, 5/5.
          </Text>
          
        </View>
      </View>
    );
  }
}
