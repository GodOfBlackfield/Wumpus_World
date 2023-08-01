import React, {useEffect, useRef} from 'react';
import {Alert, Image, ImageBackground, StyleSheet, View} from 'react-native';
import {game} from '../utils/Board';
import CustomButton from '../utils/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setArrowsShot,
  setGamesLost,
  setGamesWon,
  setKilledMines,
  setKilledWumpus,
  setWumpiKilled,
} from '../redux/actions';

export default function Game({navigation}) {
  const imgs = new Map();
  const newGame = new game();
  newGame.init();
  const a1 = useRef();
  const a2 = useRef();
  const a3 = useRef();
  const a4 = useRef();
  const a5 = useRef();
  const a6 = useRef();
  const a7 = useRef();
  const a8 = useRef();
  const a9 = useRef();
  const a10 = useRef();
  const a11 = useRef();
  const a12 = useRef();
  const a13 = useRef();
  const a14 = useRef();
  const a15 = useRef();
  const a16 = useRef();
  const a17 = useRef();
  const a18 = useRef();
  const a19 = useRef();
  const a20 = useRef();
  const a21 = useRef();
  const a22 = useRef();
  const a23 = useRef();
  const a24 = useRef();
  const a25 = useRef();
  imgs.set('0-4', a1);
  imgs.set('1-4', a2);
  imgs.set('2-4', a3);
  imgs.set('3-4', a4);
  imgs.set('4-4', a5);
  imgs.set('0-3', a6);
  imgs.set('1-3', a7);
  imgs.set('2-3', a8);
  imgs.set('3-3', a9);
  imgs.set('4-3', a10);
  imgs.set('0-2', a11);
  imgs.set('1-2', a12);
  imgs.set('2-2', a13);
  imgs.set('3-2', a14);
  imgs.set('4-2', a15);
  imgs.set('0-1', a16);
  imgs.set('1-1', a17);
  imgs.set('2-1', a18);
  imgs.set('3-1', a19);
  imgs.set('4-1', a20);
  imgs.set('0-0', a21);
  imgs.set('1-0', a22);
  imgs.set('2-0', a23);
  imgs.set('3-0', a24);
  imgs.set('4-0', a25);
  const obj = useSelector(state => state.credReducer);
  const dispatch = useDispatch();

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
              dispatch(setGamesWon(parseInt(data[0][1], 10)));
            }
            if (data[1][1]) {
              dispatch(setGamesLost(parseInt(data[1][1], 10)));
            }
            if (data[2][1]) {
              dispatch(setWumpiKilled(parseInt(data[2][1], 10)));
            }
            if (data[3][1]) {
              dispatch(setKilledMines(parseInt(data[3][1], 10)));
            }
            if (data[4][1]) {
              dispatch(setKilledWumpus(parseInt(data[4][1], 10)));
            }
            if (data[5][1]) {
              dispatch(setArrowsShot(parseInt(data[5][1], 10)));
            }
          }
        })
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  const setData = () => {
    try {
      AsyncStorage.multiSet([
        ['GamesWon', obj.GamesWon.toString()],
        ['GamesLost', obj.GamesLost.toString()],
        ['WumpiKilled', obj.WumpiKilled.toString()],
        ['DeathMines', obj.DeathMines.toString()],
        ['DeathWumpus', obj.DeathWumpus.toString()],
        ['ArrowsShot', obj.ArrowsShot.toString()],
      ])
        .then(() => navigation.navigate('Dashboard'))
        .catch(e => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  const img = (pos, gb) => {
    const path = '../../assets/';
    if (pos[0] === gb.playerPos[0] && pos[1] === gb.playerPos[1]) {
      if (gb.dir === 'L') {
        return require(path + 'knight-l.png');
      } else if (gb.dir === 'R') {
        return require(path + 'knight-r.png');
      } else if (gb.dir === 'D') {
        return require(path + 'knight-d.png');
      } else if (gb.dir === 'U') {
        return require(path + 'knight-u.png');
      }
    } else if (!gb.vis.get(`${pos[0]}-${pos[1]}`)) {
      return require(path + 'black.jpeg');
    } else if (pos[0] === gb.wPos[0] && pos[1] === gb.wPos[1]) {
      if (newGame.wKilled) {
        return require(path + 'blood.png');
      } else {
        return require(path + 'monster.png');
      }
    } else if (gb.mines.has(`${pos[0]}-${pos[1]}`)) {
      return require(path + 'mines.png');
    } else if (pos[0] === gb.goldPos[0] && pos[1] === gb.goldPos[1]) {
      return require(path + 'gold.png');
    } else {
      return require(path + 'blue.png');
    }
  };

  const refresh = () => {
    a1.current.setNativeProps({
      src: [Image.resolveAssetSource(img([0, 4], newGame))],
    });
    a2.current.setNativeProps({
      src: [Image.resolveAssetSource(img([1, 4], newGame))],
    });
    a3.current.setNativeProps({
      src: [Image.resolveAssetSource(img([2, 4], newGame))],
    });
    a4.current.setNativeProps({
      src: [Image.resolveAssetSource(img([3, 4], newGame))],
    });
    a5.current.setNativeProps({
      src: [Image.resolveAssetSource(img([4, 4], newGame))],
    });
    a6.current.setNativeProps({
      src: [Image.resolveAssetSource(img([0, 3], newGame))],
    });
    a7.current.setNativeProps({
      src: [Image.resolveAssetSource(img([1, 3], newGame))],
    });
    a8.current.setNativeProps({
      src: [Image.resolveAssetSource(img([2, 3], newGame))],
    });
    a9.current.setNativeProps({
      src: [Image.resolveAssetSource(img([3, 3], newGame))],
    });
    a10.current.setNativeProps({
      src: [Image.resolveAssetSource(img([4, 3], newGame))],
    });
    a11.current.setNativeProps({
      src: [Image.resolveAssetSource(img([0, 2], newGame))],
    });
    a12.current.setNativeProps({
      src: [Image.resolveAssetSource(img([1, 2], newGame))],
    });
    a13.current.setNativeProps({
      src: [Image.resolveAssetSource(img([2, 2], newGame))],
    });
    a14.current.setNativeProps({
      src: [Image.resolveAssetSource(img([3, 2], newGame))],
    });
    a15.current.setNativeProps({
      src: [Image.resolveAssetSource(img([4, 2], newGame))],
    });
    a16.current.setNativeProps({
      src: [Image.resolveAssetSource(img([0, 1], newGame))],
    });
    a17.current.setNativeProps({
      src: [Image.resolveAssetSource(img([1, 1], newGame))],
    });
    a18.current.setNativeProps({
      src: [Image.resolveAssetSource(img([2, 1], newGame))],
    });
    a19.current.setNativeProps({
      src: [Image.resolveAssetSource(img([3, 1], newGame))],
    });
    a20.current.setNativeProps({
      src: [Image.resolveAssetSource(img([4, 1], newGame))],
    });
    a21.current.setNativeProps({
      src: [Image.resolveAssetSource(img([0, 0], newGame))],
    });
    a22.current.setNativeProps({
      src: [Image.resolveAssetSource(img([1, 0], newGame))],
    });
    a23.current.setNativeProps({
      src: [Image.resolveAssetSource(img([2, 0], newGame))],
    });
    a24.current.setNativeProps({
      src: [Image.resolveAssetSource(img([3, 0], newGame))],
    });
    a25.current.setNativeProps({
      src: [Image.resolveAssetSource(img([4, 0], newGame))],
    });
  };

  const checkWon = () => {
    const result = newGame.check();
    if (result === 'W') {
      dispatch(setGamesWon(obj.GamesWon + 1));
      Alert.alert('Congratulations!', 'You have won the game!', [
        {
          text: 'OK',
          onPress: () => setData(),
        },
      ]);
    } else if (result === 'LW') {
      dispatch(setGamesLost(obj.GamesLost + 1));
      dispatch(setKilledWumpus(obj.DeathWumpus + 1));
      Alert.alert('Oh no!', 'You have been killed by the Wumpus!', [
        {
          text: 'OK',
          onPress: () => setData(),
        },
      ]);
    } else if (result === 'LM') {
      dispatch(setGamesLost(obj.GamesLost + 1));
      dispatch(setKilledMines(obj.DeathMines + 1));
      Alert.alert('Oh no!', 'You have been killed by the Mine!', [
        {
          text: 'OK',
          onPress: () => setData(),
        },
      ]);
    } else if (result === 'N') {
      console.log('Game going on');
    }
  };

  const mu = () => {
    newGame.moveUp();
    refresh();
    checkWon();
  };

  const ml = () => {
    newGame.moveLeft();
    refresh();
    checkWon();
  };

  const md = () => {
    newGame.moveDown();
    refresh();
    checkWon();
  };

  const mr = () => {
    newGame.moveRight();
    refresh();
    checkWon();
  };

  const attack = () => {
    if (newGame.checkAttack()) {
      dispatch(setWumpiKilled(obj.WumpiKilled + 1));
      newGame.wKilled = true;
      newGame.vis.set(`${newGame.wPos[0]}-${newGame.wPos[1]}`, true);
    }
    dispatch(setArrowsShot(obj.ArrowsShot + 1));
    refresh();
  };

  const func = () => {
    dispatch(setGamesLost(obj.GamesLost + 1));
    setData();
  };

  const quit = () => {
    Alert.alert('Quit', 'Are you sure you want to quit?', [
      {
        text: 'Yes',
        onPress: () => func(),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };

  return (
    <ImageBackground
      style={styles.body}
      source={require('../../assets/monster-game.jpeg')}>
      <View style={styles.board}>
        <View style={styles.row}>
          <Image ref={a1} style={styles.cell} source={img([0, 4], newGame)} />
          <Image ref={a2} style={styles.cell} source={img([1, 4], newGame)} />
          <Image ref={a3} style={styles.cell} source={img([2, 4], newGame)} />
          <Image ref={a4} style={styles.cell} source={img([3, 4], newGame)} />
          <Image ref={a5} style={styles.cell} source={img([4, 4], newGame)} />
        </View>
        <View style={styles.row}>
          <Image ref={a6} style={styles.cell} source={img([0, 3], newGame)} />
          <Image ref={a7} style={styles.cell} source={img([1, 3], newGame)} />
          <Image ref={a8} style={styles.cell} source={img([2, 3], newGame)} />
          <Image ref={a9} style={styles.cell} source={img([3, 3], newGame)} />
          <Image ref={a10} style={styles.cell} source={img([4, 3], newGame)} />
        </View>
        <View style={styles.row}>
          <Image ref={a11} style={styles.cell} source={img([0, 2], newGame)} />
          <Image ref={a12} style={styles.cell} source={img([1, 2], newGame)} />
          <Image ref={a13} style={styles.cell} source={img([2, 2], newGame)} />
          <Image ref={a14} style={styles.cell} source={img([3, 2], newGame)} />
          <Image ref={a15} style={styles.cell} source={img([4, 2], newGame)} />
        </View>
        <View style={styles.row}>
          <Image ref={a16} style={styles.cell} source={img([0, 1], newGame)} />
          <Image ref={a17} style={styles.cell} source={img([1, 1], newGame)} />
          <Image ref={a18} style={styles.cell} source={img([2, 1], newGame)} />
          <Image ref={a19} style={styles.cell} source={img([3, 1], newGame)} />
          <Image ref={a20} style={styles.cell} source={img([4, 1], newGame)} />
        </View>
        <View style={styles.row}>
          <Image ref={a21} style={styles.cell} source={img([0, 0], newGame)} />
          <Image ref={a22} style={styles.cell} source={img([1, 0], newGame)} />
          <Image ref={a23} style={styles.cell} source={img([2, 0], newGame)} />
          <Image ref={a24} style={styles.cell} source={img([3, 0], newGame)} />
          <Image ref={a25} style={styles.cell} source={img([4, 0], newGame)} />
        </View>
      </View>
      <View>
        <CustomButton
          style={styles.up}
          title="Up"
          color="#1eb900"
          onPressFunction={() => mu()}
        />
        <CustomButton
          style={styles.left}
          title="Left"
          color="#1eb900"
          onPressFunction={() => ml()}
        />
        <CustomButton
          style={styles.right}
          title="Right"
          color="#1eb900"
          onPressFunction={() => mr()}
        />
        <CustomButton
          style={styles.down}
          title="Down"
          color="#1eb900"
          onPressFunction={() => md()}
        />
        <CustomButton
          style={styles.attack}
          title="Attack"
          color="#1eb900"
          onPressFunction={() => attack()}
        />
        <CustomButton
          style={styles.quit}
          title="Quit"
          color="#1eb900"
          onPressFunction={() => quit()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  board: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: 360,
    height: 450,
    backgroundColor: '#00000099',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 88,
  },
  up: {
    right: 80,
    bottom: 10,
  },
  down: {
    right: 80,
    bottom: 40,
  },
  left: {
    right: 80,
    bottom: 20,
  },
  right: {
    right: 80,
    bottom: 30,
  },
  attack: {
    left: 80,
    bottom: 260,
  },
  quit: {
    left: 80,
    bottom: 215,
  },
});
