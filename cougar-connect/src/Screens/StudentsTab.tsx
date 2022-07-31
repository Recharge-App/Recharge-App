import { View, Text } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';


function StudentsTab({ navigation }: { navigation: any }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: ScreenHeight * .1}}>
        <Text>Students Tab Screen</Text>
    </View>
  );
}

export default StudentsTab;