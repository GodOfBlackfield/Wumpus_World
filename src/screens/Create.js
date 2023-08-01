import React, {useState} from 'react';
import {Alert, ImageBackground, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {setPassword, setUsername} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../utils/CustomButton';

export default function Create({navigation}) {
  const [un, setUn] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const dispatch = useDispatch();

  const createAcc = () => {
    if (un.length === 0 || pw1.length === 0 || pw2.length === 0) {
      Alert.alert('Warning!', 'Please enter valid credentials!');
    } else if (pw1 !== pw2) {
      Alert.alert('Warning!', 'Passwords not matching!');
    } else {
      try {
        Alert.alert('Success!', 'You have created a new account!');
        dispatch(setUsername(un));
        dispatch(setPassword(pw1));
        AsyncStorage.multiSet([
          ['Username', un],
          ['Password', pw1],
          ['GamesWon', '0'],
          ['GamesLost', '0'],
          ['WumpiKilled', '0'],
          ['DeathMines', '0'],
          ['DeathWumpus', '0'],
          ['ArrowsShot', '0'],
        ])
          .then(() => navigation.replace('Dashboard'))
          .catch(e => console.log(e));
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/monster-create.jpeg')}>
      <TextInput
        style={styles.input}
        placeholder="New Username"
        onChangeText={v1 => setUn(v1)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        onChangeText={v2 => setPw1(v2)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={v3 => setPw2(v3)}
        secureTextEntry
      />
      <CustomButton
        title="Create"
        color="#1eb900"
        onPressFunction={() => createAcc()}
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
