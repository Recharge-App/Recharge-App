import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '../Components';
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from "@rneui/themed";
import Input from "../Components/Input";
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';


function Search({ navigation }: { navigation: any }) {

	type SearchBarComponentProps = {};
	const [search, setSearch] = useState("");
	const updateSearch = (search: string) => {
		setSearch(search);
	}

	/*
  	<SearchBar
  		placeholder="Type Here..."
  		onChangeText={updateSearch}
  		value={search}
		containerStyle={{ backgroundColor: colors.white }}
		inputContainerStyle={{ backgroundColor: colors.white, borderWidth: 1, borderRadius: ScreenWidth * .01, borderColor: colors.red }}
  	/>
	 */

	return (
  		<SafeAreaView>
			<Input
				height={ScreenHeight * .08}
				width={ScreenWidth}
				placeholder='Search'
				onChangeText={updateSearch}
				value={search}
			/>
  	  	</SafeAreaView>
  	);
}

export default Search;
