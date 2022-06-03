import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { SafeAreaView } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications';

// Import fonts here
// https://docs.expo.dev/guides/using-custom-fonts/
// https://www.npmjs.com/package/@expo-google-fonts/lato
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';


function App() {

	let [fontsLoaded] = useFonts({
	  Lato_400Regular,
	});

	return (
		// Change this to switch between the login screen and the home screen
	  //<Onboarding />
	  //<SignIn />
	  //<SignUp />
		<ToastProvider>
	  	<Tabs />
	  </ToastProvider>
	);
}

export default App;
