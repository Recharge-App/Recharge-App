import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { SafeAreaView } from 'react-native'


function App() {
  return (
  	// Change this to switch between the login screen and the home screen
	//<Onboarding />
	//<SignIn />
	//<SignUp />
	//*/
	<SafeAreaView style={{ flex: 1 }}>
		<Tabs />
	</SafeAreaView>
	//*/
  );
}

export default App;
