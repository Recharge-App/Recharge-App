import React from "react";
import {StyleSheet, View, Button} from "react-native";
import {colors} from "./Colors";
import {ScreenHeight, ScreenWidth} from "./Dimensions";
import {FormikHandlers} from "formik";


type Props = {
    title: string;
    handleSubmit?: FormikHandlers;
}

const SubmitButton: React.FC<Props> = ({
    title,
    handleSubmit,
}) => {

    return(
        <View style={styles.button}>
            <Button
                onPress={(values) => handleSubmit(values)}
                title={title}
                color= {colors.black}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default SubmitButton;