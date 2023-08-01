import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

export default function Splash({navigation}) {
  setTimeout(() => {
    func();
  }, 3000);

  const func = () => {
    try {
      AsyncStorage.multiGet(['Username', 'Password'])
        .then(val => {
          if (val[0][1] && val[1][1]) {
            navigation.navigate('Login');
          } else {
            navigation.navigate('Create');
          }
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/splash.jpeg')}>
      <Text style={styles.text}>Wumpus World</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 350,
    fontSize: 20,
    color: '#ffffff',
  },
});
