import { View, Text, Button, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Profile({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
	  <Image style={styles.tinyLogo} source={require("../assets/profile_pic.jpeg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
	borderRadius: 100,
  },
});

export default Profile;
