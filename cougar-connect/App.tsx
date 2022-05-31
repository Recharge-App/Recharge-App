import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*
import { colors } from './src/Components/Colors';

// Custom components
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// https://ionic.io/ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Item, HeaderButton, HeaderButtons } from "react-navigation-header-buttons";

// Custom components
//import { SignUp, SignIn, Home, Profile, Search } from './src/Screens/index';
import { Onboarding, SignIn, SignUp, Home, Profile, Search } from './src/Screens/index';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
	return (
      <NavigationContainer>
	  	<Stack.Navigator 
			initialRouteName="SignIn" 
			screenOptions={({ route }) => ({
					headerShown: false,
				})
			}>
      	 	<Stack.Screen name="SignIn" component={SignIn} />
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
        	  	tabBarInactiveTintColor: colors.red,
        	  	tabBarActiveTintColor: colors.red,
				tabBarShowLabel: false,
        	})}
		  >
    	  	 <Tab.Screen name="Home" component={Home} />
    	  	 <Tab.Screen name="Search" component={Search} />
    	  	 <Tab.Screen 
			 	name="Profile" 
				component={Profile} 
				options={{ 
					headerShown: false,
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
*/

function App() {
  return (
  	// Change this to switch between the login screen and the home screen
	//<Onboarding />
	//<MainStackNavigator />
	//<MainTabNavigator />
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>

  );
}

export default App;
