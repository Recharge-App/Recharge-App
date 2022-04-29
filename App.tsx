import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom components
import { Login, Signup } from './src/Login';
import HomeScreen from './src/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
        	<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
