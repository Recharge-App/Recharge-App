import React from 'react'
import { View, Text, Button, Image, StyleSheet} from 'react-native';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';

const SignIn = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.logo_text}>Cougar Connect</Text>
        <View style={styles.signin}>
            <Text style={styles.signin_text}>Sign in</Text>
            <Text style={styles.signin_text_small}>Enter your UH email and password</Text>

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
        borderRadius: 100,
        backgroundColor: colors.white,
        bottom: 0,
        padding: 50,
    },
    signin_text: {
        color: colors.red,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    signin_text_small: {
        color: colors.grey,
        fontSize: 14,
    },
});

export default SignIn;