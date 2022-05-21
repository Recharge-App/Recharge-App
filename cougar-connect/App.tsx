import * as React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { colors } from './src/Components/Colors';

/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
*/
// Custom components
import SignIn from './src/Screens/SignIn';



function App() {
  return (
	  <SafeAreaView style={{backgroundColor:colors.red}}>
		  <SignIn />
	  </SafeAreaView>
  );
}

export default App;