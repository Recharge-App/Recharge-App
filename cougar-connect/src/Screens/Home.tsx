import { View, Text } from 'react-native';
import { Header } from '../Components';


function Home({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header title='Home' />
    </View>
  );
}


export default Home;

