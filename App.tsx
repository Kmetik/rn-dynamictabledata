import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AboutScreen} from './src/screens/about';
import {TickersScreen} from './src/screens/tickers';

type TMainBottomTabNavigator = {
  About: undefined;
  Tickers: undefined;
};

const BottomTabNavigator = createBottomTabNavigator<TMainBottomTabNavigator>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <StatusBar />
        <BottomTabNavigator.Navigator initialRouteName="About">
          <BottomTabNavigator.Screen name="About" component={AboutScreen} />
          <BottomTabNavigator.Screen name="Tickers" component={TickersScreen} />
        </BottomTabNavigator.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
