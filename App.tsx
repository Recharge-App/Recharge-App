import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Custom components
import { Login, Signup } from './src/Login';
import Home from './src/Home';
import Profile from './src/Profile'
import Search from './src/Search'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
	return (
      <NavigationContainer>
	  	<Stack.Navigator>
      	 	<Stack.Screen name="Signup" component={Signup} />
      	 	<Stack.Screen name="Login" component={Login} />
      	</Stack.Navigator>
      </NavigationContainer>
	);
}

function MainTabNavigator() {
	return (
    	<NavigationContainer>
		  <Tab.Navigator initialRouteName="Profile">
    	    <Tab.Screen name="Home" component={Home} />
    	    <Tab.Screen name="Profile" component={Profile} />
    	    <Tab.Screen name="Search" component={Search} />
    	  </Tab.Navigator>
    	</NavigationContainer>
	);
}

function App() {
  return (
	<MainTabNavigator/>
  );
}

export default App;
