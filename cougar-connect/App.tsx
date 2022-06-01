import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/Tabs';
import { SafeAreaView } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications';


function App() {
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
