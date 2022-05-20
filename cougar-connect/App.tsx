import * as React from 'react';
import { View, Text, Button, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// https://ionic.io/ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Item, HeaderButton, HeaderButtons } from "react-navigation-header-buttons";

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
	  	<Stack.Navigator 
			initialRouteName="Signup" 
			screenOptions={({ route }) => ({
					headerShown: false,
				})
			}>
      	 	<Stack.Screen name="Signup" component={Signup} />
      	 	<Stack.Screen name="Login" component={Login} />
      	</Stack.Navigator>
      </NavigationContainer>
	);
}

function MainTabNavigator({ navigation }: { navigation: any }) {
	return (
    	<NavigationContainer>
		  <Tab.Navigator initialRouteName="Profile"
			  screenOptions={({ route }) => ({
        	  	tabBarIcon: ({ focused, color, size }) => {
        	  	  let iconName;
			  	  color = '#EF233C';

        	  	  if (route.name === 'Home') {
        	  	    iconName = "home";
        	  	  } else if (route.name === 'Profile') {
        	  	    iconName = "person-circle-outline";
        	  	  }
        	  	  else if (route.name === 'Search') {
        	  	    iconName = "search";
        	  	  }

        	  	  return <Ionicons name={iconName} size={size} color={color} />;
        	  	},
        	  	tabBarInactiveTintColor: '#EF233C',
        	  	tabBarActiveTintColor: '#EF233C',
				tabBarShowLabel: false,
        	})}
		  >
    	  	 <Tab.Screen name="Home" component={Home} />
    	  	 <Tab.Screen name="Search" component={Search} />
    	  	 <Tab.Screen 
			 	name="Profile" 
				component={Profile} 
				options={{ 
					headerRight: () => (
						//<Button title="Settings" onPress={() => alert("Hello")} />
						<HeaderButtons>
					        <Item
          					title="Setting"
          					iconName="ios-settings-outline"
          					onPress={() => navigation.navigate('Profile')}
        					/>
						</HeaderButtons>
					)
				}}
			/>
    	  </Tab.Navigator>
    	</NavigationContainer>
	);
}

function App() {
  return (
	//<MainTabNavigator />
	<MainStackNavigator/>
  );
}

export default App;
