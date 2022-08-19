import { View, Text } from 'react-native';
import { ScreenHeight, ScreenWidth } from '../Components/Dimensions';
import { colors} from "../Components/Colors";


function OrganizationsTab({ navigation }: { navigation: any }) {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: ScreenHeight * .1, backgroundColor: colors.black}}>
        <Text style={{color: colors.white}}>Organizations Tab Screen</Text>
    </View>
  );
}

export default OrganizationsTab;
