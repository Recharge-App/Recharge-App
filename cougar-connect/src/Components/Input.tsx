import {StyleSheet, TextInput, TextInputProps} from "react-native";
import {colors} from "./Colors";
import {ScreenHeight, ScreenWidth} from "./Dimensions";
import React from "react";


type Props = {
    height: number;
    width: number;
    inputProps: TextInputProps;
}

const Input: React.FC<Props> = ({
    height,
    width,
    ...inputProps
}) => {

// Example props
    /*
    placeholder='Email'
    placeholderTextColor={colors.lightGray}
    style={styles.input_style}
    autoCapitalize='none'
    onChangeText={handleChange('email')}
    value={value.email}
    */

    const styles = StyleSheet.create({
        input_style: {
            width: width == undefined ? ScreenWidth * .8 : width,
            height: height == undefined ? ScreenHeight * .08 : height,
            fontSize: 18,
            color: colors.white,
            borderWidth: ScreenWidth * .009,
            borderColor: colors.lightGray,
            borderRadius: ScreenWidth * .04,
            padding: ScreenWidth * .04
        },
    });

    return(
        <TextInput
            {...inputProps}
            placeholderTextColor={colors.lightGray}
            style={styles.input_style}
            autoCapitalize='none'
        />
    );
}

export default Input;