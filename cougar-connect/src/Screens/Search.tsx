import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header, SearchBar } from '../Components';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Search({ navigation }: { navigation: any }) {

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView>
      <SearchBar 
           searchPhrase={searchPhrase}
           setSearchPhrase={setSearchPhrase}
           clicked={clicked}
           setClicked={setClicked}
      />
    </SafeAreaView>
  );
}




export default Search;
