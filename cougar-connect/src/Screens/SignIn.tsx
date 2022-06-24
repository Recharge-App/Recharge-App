import React from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import * as yup from 'yup';
import { Formik } from 'formik';


const reviewSchema = yup.object({
	email: yup.string().email('Must be a valid UH email.').required('Email is required.'),
	password: yup.string().min(5, "Password must have at least 5 characters.").required('Password is required.'),
});

const SignIn = () => {
	
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.root}>
        		<Text style={styles.logo_text}>UpCoogs</Text>
            	<View style={styles.signin}>
            	    <Text style={styles.signin_text}>Sign in</Text>
            	    <Text style={styles.signin_text_small}>Enter your UH email and password</Text>

            	        <View style={styles.form_container}>
							<Formik
								initialValues={{ email: '', password: ''}}
								validationSchema={reviewSchema}
								onSubmit={() => {Alert.alert('Logged in')}}
							>
								{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
									<View>
										<TextInput placeholder='Email' placeholderTextColor='#979797' style={styles.email_input} autoCapitalize='none' onChangeText={handleChange('email')} value={values.email} onBlur={handleBlur('email')} />
										{errors.email && touched.email && <Text style={{color: colors.red}}>{errors.email}</Text>}
										<TextInput secureTextEntry={true} placeholder='Password' placeholderTextColor='#979797' style={styles.password_input} autoCapitalize='none' onChangeText={handleChange('password')} value={values.password} onBlur={handleBlur('password')} />
										{errors.password && touched.password && <Text style={{color: colors.red}}>{errors.password}</Text>}

            	            			<TouchableOpacity>
            	            			    <Text style={styles.forgot_password}>Forgot password?</Text>
            	            			</TouchableOpacity>

            	            			<View style={styles.button}>
            	            			    <Button
            	            			        onPress={() => handleSubmit()}
            	            			        title="Login"
            	            			        color= {colors.white}
            	            			        accessibilityLabel="Learn more about this purple button"
            	            			    />
            	            			</View>
									</View>
								)}
							</Formik>

            	            <View style={styles.no_account_container}>
            	                <Text style={styles.no_account_text}>Don't have an account? </Text>

            	                <TouchableOpacity>
            	                    <Text style={styles.signup_input}>Sign Up</Text>
            	                </TouchableOpacity>
            	            </View>

            	        </View>
            	    
            	</View>
        </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: colors.red,
		flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: colors.white,
    },
    logo_text: {
        color: colors.white,
        fontSize: 35,
        fontWeight: 'bold',
        top: ScreenHeight * .2
    },
    signin: {
        position: 'absolute',
        width: ScreenWidth * 1.03,
        height: ScreenHeight * 0.66,
        borderTopLeftRadius: ScreenWidth * .2,
        borderTopRightRadius: ScreenWidth * .2,
        backgroundColor: colors.white,
        bottom: 0,
        padding: ScreenWidth * .15,
    },
    signin_text: {
        color: colors.red,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: ScreenHeight / 100,
    },
    signin_text_small: {
        color: colors.grey,
        fontSize: 14,
    },
    form_container: {
        marginTop: 70,
    },
    email_input: {
        fontSize: 18,
        color: colors.black,
        borderBottomColor: colors.red,
        borderBottomWidth: 1,
    },
    password_input: {
        fontSize: 18,
        color: colors.black,
        borderBottomColor: colors.red,
        borderBottomWidth: 1,
		marginTop: ScreenHeight * .03,
    },
    forgot_password: {
        fontSize: 15,
        color: colors.grey,
        fontStyle: 'italic',
        textAlign: 'right',
        marginTop: 5,
    },
    button: {
        position: 'relative',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colors.red,
        color: colors.white,
        width: ScreenWidth / 2.5,
        height: 50,
        borderRadius: 120,
        marginTop: 30,
    },
    no_account_container: {
        position: 'relative',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    no_account_text: {
        fontSize: 15,
        color: colors.black,
        
    },
    signup_input: {
        fontSize: 15,
        color: colors.red,
    },
});

export default SignIn;
