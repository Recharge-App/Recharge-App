import React, { useState } from "react";
import LoginScreen from "react-native-login-screen";


let EMAIL: string = "";
let PASSWORD: string = "";

function setEmail(email: string) {
	EMAIL = email;
}

function setPassword(password: string) {
	PASSWORD = password;
}

// TODO: Fix this
function LoginHandler({ navigation }: { navigation: any }) {
	if (PASSWORD == "password") {
		navigation.navigate('Home');
	}
}

export function Signup({ navigation }: { navigation: any }) {
	return (
		<LoginScreen
		  logoImageSource={require("../assets/CougarCS.jpeg")}
		  onHaveAccountPress={() => navigation.navigate('Login')}
		  onLoginPress={() => {}}
		  onEmailChange={(email: string) => {}}
		  onPasswordChange={(password: string) => {}}
		  disableSocialButtons={true}
		/>
	);
}

export function Login({ navigation }: { navigation: any }) {
	return (
		<LoginScreen
		  logoImageSource={require("../assets/CougarCS.jpeg")}
		  onLoginPress={() => {LoginHandler(navigation)}}
		  onHaveAccountPress={() => {}}
		  onEmailChange={(email: string) => {setEmail(email)}}
		  onPasswordChange={(password: string) => {setPassword(password)}}
		  disableSocialButtons={true}
		  haveAccountText="Login with your @cougarnet.uh.edu email."
		/>
	);
}
