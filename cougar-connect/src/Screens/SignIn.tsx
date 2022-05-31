import React from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';

const SignIn = () => {

    return (
        <View style={styles.root}>
        <Text style={styles.logo_text}>UpCoogs</Text>
            <View style={styles.signin}>
                <Text style={styles.signin_text}>Sign in</Text>
                <Text style={styles.signin_text_small}>Enter your UH email and password</Text>

                    <View style={styles.form_container}>
                        <TextInput placeholder='Email' style={styles.email_input} autoCapitalize='none' />
                        <TextInput placeholder='Password' style={styles.password_input} autoCapitalize='none' />

                        <TouchableOpacity>
                            <Text style={styles.forgot_password}>Forgot password?</Text>
                        </TouchableOpacity>

                        <View style={styles.button}>
                            <Button
                                onPress={() => Alert.alert('Logged in')}
                                title="Login"
                                color= {colors.white}
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                        <View style={styles.no_account_container}>
                            <Text style={styles.no_account_text}>Don't have an account? </Text>

                            <TouchableOpacity>
                                <Text style={styles.signup_input}>Sign Up</Text>
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
    signin: {
        position: 'absolute',
        width: ScreenWidth * 1.03,
        height: ScreenHeight * 0.66,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: colors.white,
        bottom: 0,
        padding: 50,
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
        marginBottom: 50,
    },
    password_input: {
        fontSize: 18,
        color: colors.black,
        borderBottomColor: colors.red,
        borderBottomWidth: 1,

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