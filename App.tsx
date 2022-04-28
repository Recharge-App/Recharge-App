import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Hello from './src/Login';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function ScreenNavigator(screenName: string) {
  	const navigation = useNavigation();
	return (
          <Button
				title="Button"
           	  	onPress={() => navigation.navigate(`name: ${screenName}`)}
           		/>
	);
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
        	<Stack.Screen 
				name="Home" 
				component={HomeScreen} 
				options={{
		        	headerRight: () => (
            			<Button
							title="Button"
            			  	onPress={() => navigation.navigate("Details")}
            			/>
          			),
				}}
			/>
	    	<Stack.Screen name="Details" component={DetailsScreen} />
			<Stack.Screen name="Login" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
