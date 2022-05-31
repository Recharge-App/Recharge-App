import React from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { colors } from './Colors';

type HeaderComponentProps = {
title: string;
view?: string;
};

type ParamList = {
Detail: {
  openDrawer: void;
};
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {


return (
  <SafeAreaProvider>
    <HeaderRNE
      rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
            >
                <Ionicons name="settings-sharp" size={28} 
                    style={{
                        color: colors.red 
                    }}
                >
                </Ionicons>
            </TouchableOpacity>
          </View>
      }
      centerComponent={{ text: 'Header', style: styles.heading }}
    />
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.red,
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default Header;