import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Stats({navigation}) {
  const [gw, setGw] = useState('');
  const [wk, setWk] = useState('');
  const [dw, setDw] = useState('');
  const [dm, setDm] = useState('');
  const [as, setAs] = useState('');
  const [gl, setGl] = useState('');

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    try {
      AsyncStorage.multiGet([
        'GamesWon',
        'GamesLost',
        'WumpiKilled',
        'DeathMines',
        'DeathWumpus',
        'ArrowsShot',
      ])
        .then(data => {
          if (data) {
            if (data[0][1]) {
              setGw(data[0][1]);
            }
            if (data[1][1]) {
              setGl(data[1][1]);
            }
            if (data[2][1]) {
              setWk(data[2][1]);
            }
            if (data[3][1]) {
              setDm(data[3][1]);
            }
            if (data[4][1]) {
              setDw(data[4][1]);
            }
            if (data[5][1]) {
              setAs(data[5][1]);
            }
          }
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  const func = () => {
    navigation.replace('Dashboard');
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/monster-stats.jpeg')}>
      <View style={styles.box}>
        <Text style={styles.t1}>Number of games won: {gw}</Text>
        <Text style={styles.t1}>Number of games lost: {gl}</Text>
        <Text style={styles.t1}>Number of wumpi killed: {wk}</Text>
        <Text style={styles.t1}>Number of deaths by mines: {dm}</Text>
        <Text style={styles.t1}>Number of deaths by wumpus: {dw}</Text>
        <Text style={styles.t1}>Number of arrows shot: {as}</Text>
      </View>
      <CustomButton
        title="Back"
        color="#1eb900"
        onPressFunction={() => func()}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    paddingRight: 50,
    marginBottom: 40,
    backgroundColor: '#00000099',
  },
  t1: {
    fontSize: 20,
    color: '#00ff00',
  },
});
