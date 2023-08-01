import React from 'react';
import {Alert, ImageBackground, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setPassword, setUsername} from '../redux/actions';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const func = () => {
    Alert.alert('Success!', 'You have successfully logged out!');
    dispatch(setUsername(''));
    dispatch(setPassword(''));
    navigation.replace('Login');
  };
  const func2 = () => {
    Alert.alert('Success!', 'You have successfully deleted your account!');
    AsyncStorage.clear()
      .then(() => navigation.replace('Create'))
      .catch(e => console.log(e));
  };

  const func3 = () => {
    navigation.replace('Game');
  };

  const func4 = () => {
    navigation.replace('Stats');
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/monster-dash.jpeg')}>
      <CustomButton
        title="Play"
        color="#1eb900"
        style={styles.button}
        onPressFunction={() => func3()}
      />
      <CustomButton
        title="Stats"
        color="#0000ff"
        style={styles.button}
        onPressFunction={() => func4()}
      />
      <CustomButton
        title="Logout"
        color="#ff0000"
        style={styles.button}
        onPressFunction={() => func()}
      />
      <CustomButton
        title="Delete"
        color="#ff0000"
        style={styles.button}
        onPressFunction={() => func2()}
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
  button: {
    margin: 20,
  },
});
