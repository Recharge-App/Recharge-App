import { View, Text } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';


function OrganizationsTab({ navigation }: { navigation: any }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: ScreenHeight * .1}}>
        <Text>Organizations Tab Screen</Text>
    </View>
  );
}

export default OrganizationsTab;
