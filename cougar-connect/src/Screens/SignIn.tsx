import React from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useAuth } from '../Components/Authentication';


const reviewSchema = yup.object({
	email: yup.string().email('Must be a valid UH email.').required('Email is required.'),
	password: yup.string().min(5, "Password must have at least 5 characters.").required('Password is required.'),
});

const SignIn = ({ navigation }) => {

    const auth = useAuth();

    return(
        <View style={styles.root}>
            <View style={{width: ScreenWidth, flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <View style={{width: ScreenWidth * .5, flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: colors.lightYellow, fontSize: 20}}>Let's</Text>
                    <Text> </Text>
                    <Text style={styles.logo_text}>get started!</Text>
                </View>
                <View style={{width: ScreenWidth * .6, justifyContent: 'center'}}>
                    <Text style={styles.logo_text}>
                        We're looking forward to having you!
                    </Text>
                </View>
            </View>
				<Formik
					initialValues={{ email: '', password: ''}}
					validationSchema={reviewSchema}
					onSubmit={(values) => {
                        auth.signIn(values);
                    }}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<View style={styles.form_container}>
                            <View style={{flex: .5, justifyContent: 'space-evenly'}}>
						    	<TextInput 
                                  placeholder='Email' 
                                  placeholderTextColor={colors.lightGray} 
                                  style={styles.email_input} 
                                  autoCapitalize='none' 
                                  onChangeText={handleChange('email')} 
                                  value={values.email} onBlur={handleBlur('email')} 
                              />

						    	{errors.email && touched.email && <Text style={{color: colors.red, marginVertical: ScreenHeight * .01}}>{errors.email}</Text>}

						    	<TextInput 
                                  secureTextEntry={true} 
                                  placeholder='Password' 
                                  placeholderTextColor={colors.lightGray} 
                                  style={styles.password_input} 
                                  autoCapitalize='none' 
                                  onChangeText={handleChange('password')} 
                                  value={values.password} 
                                  onBlur={handleBlur('password')} />

						    	{errors.password && touched.password && <Text style={{color: colors.red, marginVertical: ScreenHeight * .01}}>{errors.password}</Text>}

    	        		    	<TouchableOpacity>
    	        		    	    <Text style={styles.forgot_password}>Forgot password?</Text>
    	        		    	</TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', marginBottom: ScreenHeight * .01}}>
                                    <Text style={{color: colors.white}}>
                                        Don't have an account?
                                    </Text>
                                    <Text> </Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("SignUp")}
                                    >
                                        <Text style={{color: colors.lightYellow}}>Sign up!</Text>
                                    </TouchableOpacity>
                                </View>
        	        			<View style={styles.button}>
        	        			    <Button
        	        			        onPress={(values) => handleSubmit(values)}
        	        			        title="Login"
        	        			        color= {colors.black}
        	        			        accessibilityLabel="Learn more about this purple button"
        	        			    />
        	        			</View>
                            </View>
						</View>
							)}
				</Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: colors.black,
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        flex: 2.3,
        justifyContent: 'space-evenly'
    },
    email_input: {
        width: ScreenWidth * .8,
        height: ScreenHeight * .08,
        fontSize: 18,
        color: colors.white,
        borderWidth: ScreenWidth * .009,
        borderColor: colors.lightGray,
        borderRadius: ScreenWidth * .04,
        padding: ScreenWidth * .04
    },
    password_input: {
        width: ScreenWidth * .8,
        height: ScreenHeight * .08,
        fontSize: 18,
        color: colors.white,
        borderWidth: ScreenWidth * .009,
        borderColor: colors.lightGray,
        borderRadius: ScreenWidth * .04,
        padding: ScreenWidth * .04
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
        backgroundColor: colors.lightYellow,
        color: colors.black,
        width: ScreenWidth * .8,
        height: 50,
        borderRadius: ScreenWidth * .05,
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
