import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { SafeAreaView, StatusBar } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import Onboarding from './src/Screens/Onboarding';
import Tinder from './src/Screens/Tinder';
import Follow from './src/Screens/Follow';

// Import fonts here
// https://docs.expo.dev/guides/using-custom-fonts/
// https://www.npmjs.com/package/@expo-google-fonts/lato
import { 
	useFonts, 
	Lato_100Thin,
	Lato_100Thin_Italic,
	Lato_300Light,
	Lato_300Light_Italic,
	Lato_400Regular,
	Lato_400Regular_Italic,
	Lato_700Bold_Italic,
	Lato_900Black,
	Lato_900Black_Italic,
} from '@expo-google-fonts/lato';


function App() {

	let [fontsLoaded] = useFonts({
		Lato_100Thin,
		Lato_100Thin_Italic,
		Lato_300Light,
		Lato_300Light_Italic,
		Lato_400Regular,
		Lato_400Regular_Italic,
		Lato_700Bold_Italic,
		Lato_900Black,
		Lato_900Black_Italic,
	});

	return (
		// Change this to switch between the login screen and the home screen
	
		//<Onboarding />
		//<SignIn />
	  	//<SignUp />
		//<Tinder/>
		//<Follow/>
		<ToastProvider>
			<StatusBar hidden />
			<Tabs />
		</ToastProvider>
	);
}

export default App;
