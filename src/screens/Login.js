import React, {useState} from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setArrowsShot,
  setGamesLost,
  setGamesWon,
  setKilledMines,
  setKilledWumpus,
  setPassword,
  setUsername,
  setWumpiKilled,
} from '../redux/actions';

export default function Login({navigation}) {
  const [un, setUn] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();

  const func = () => {
    if (un.length === 0 || pw.length === 0) {
      Alert.alert('Warning!', 'Please enter your credentials!');
    } else {
      try {
        AsyncStorage.multiGet(['Username', 'Password'])
          .then(val => {
            dispatch(setUsername(val[0][1]));
            dispatch(setPassword(val[1][1]));
            dispatch(setArrowsShot(0));
            dispatch(setGamesLost(0));
            dispatch(setGamesWon(0));
            dispatch(setWumpiKilled(0));
            dispatch(setKilledMines(0));
            dispatch(setKilledWumpus(0));
            if (un === val[0][1] && pw === val[1][1]) {
              Alert.alert('Login success!', `Welcome ${un}!`);
              navigation.replace('Dashboard');
            } else {
              Alert.alert('Warning!', 'Invalid credentials!');
            }
          })
          .catch(e => console.log(e));
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/monster-log.jpeg')}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        onChangeText={value => setUn(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        onChangeText={val => setPw(val)}
      />
      <Button title="Submit" onPress={() => func()} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 350,
    margin: 15,
    textAlign: 'left',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
