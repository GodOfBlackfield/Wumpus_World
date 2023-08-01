import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Game from './screens/Game';
import Stats from './screens/Stats';
import Create from './screens/Create';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Stats"
            component={Stats}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
