import React from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import * as yup from 'yup';
import { Formik } from 'formik';


const reviewSchema = yup.object({
	username: yup.string().required("Username is required."),
	email: yup.string().email("Must be a valid UH email.").required("Email is required."),
	password: yup.string().min(5, "Password must have at least 5 characters.").required("Password is required."),
});

const SignUp = ({ navigation }) => {

    return (
        <View style={styles.root}>
        <Text style={styles.logo_text}>UpCoogs</Text>
            <View style={styles.signup}>
                <Text style={styles.signup_text}>Sign up</Text>
                <Text style={styles.signup_text_small}>Create your account</Text>

                    <View style={styles.form_container}>

						<Formik
							initialValues={{ username: '', email: '', password: ''}}
							validationSchema={reviewSchema}
							onSubmit={() => {Alert.alert('Created an account')}}
						>
							{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
								<View>
                        			<TextInput placeholder='Full Name' placeholderTextColor='#979797' style={styles.name_email_input} autoCapitalize='none' onChangeText={handleChange('username')} value={values.username} onBlur={handleBlur('username')} />
									{errors.username && touched.username && <Text style={{color: colors.red}}>{errors.username}</Text>}
                        			<TextInput placeholder='Email' placeholderTextColor='#979797' style={styles.name_email_input} autoCapitalize='none' onChangeText={handleChange('email')} value={values.email} onBlur={handleBlur('email')} />
									{errors.email && touched.email && <Text style={{color: colors.red}}>{errors.email}</Text>}
                        			<TextInput placeholder='Password' placeholderTextColor='#979797' style={styles.password_input} autoCapitalize='none' onChangeText={handleChange('password')} value={values.password} onBlur={handleBlur('password')} />
									{errors.password && touched.password && <Text style={{color: colors.red}}>{errors.password}</Text>}

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
                            <Text style={styles.no_account_text}>Already have an account? </Text>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignIn")}
                            >
                                <Text style={styles.login_input}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: colors.red,
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
        top: ScreenHeight / 5
    },
    signup: {
        position: 'absolute',
        width: ScreenWidth * 1.03,
        height: ScreenHeight * 0.66,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: colors.white,
        bottom: 0,
        padding: 50,
    },
    signup_text: {
        color: colors.red,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: ScreenHeight / 100,
    },
    signup_text_small: {
        color: colors.grey,
        fontSize: 14,
    },
    form_container: {
        marginTop: ScreenHeight * .025,
    },
    name_email_input: {
        fontSize: 18,
        color: colors.black,
        borderBottomColor: colors.red,
        borderBottomWidth: 1,
		marginTop: ScreenHeight * .03,
    },
    password_input: {
        fontSize: 18,
        color: colors.black,
        borderBottomColor: colors.red,
        borderBottomWidth: 1,
		marginTop: ScreenHeight * .03,
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
    login_input: {
        fontSize: 15,
        color: colors.red,
    },
});

export default SignUp;
