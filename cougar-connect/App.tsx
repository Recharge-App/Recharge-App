import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/Navigation/Tabs';
import { StatusBar } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications';
import { AuthProvider } from './src/Components/Authentication';
import 'react-native-gesture-handler';
import Calendar from './src/Screens/Calendar';

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
	
		<ToastProvider>
			<StatusBar hidden />
        	<AuthProvider>
				<Stacks />
        	</AuthProvider>
		</ToastProvider>
		//<Calendar navigation={navigator}/>
	);
}

export default App;
