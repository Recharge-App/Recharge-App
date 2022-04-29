import LoginScreen from "react-native-login-screen";


export function Signup({ navigation }: { navigation: any }) {
	return (
		<LoginScreen
		  logoImageSource={require("")}
		  onHaveAccountPress={() => navigation.navigate('Login')}
		  onLoginPress={() => {}}
		  onEmailChange={(email: string) => {}}
		  onPasswordChange={(password: string) => {}}
		  disableSocialButtons={true}
		/>
	);
}

export function Login() {
	return (
		<LoginScreen
		  logoImageSource={require("")}
		  onLoginPress={() => {}}
		  onHaveAccountPress={() => {}}
		  onEmailChange={(email: string) => {}}
		  onPasswordChange={(password: string) => {}}
		  disableSocialButtons={true}
		  haveAccountText="Login with your @cougarnet.uh.edu email."
		/>
	);
}
