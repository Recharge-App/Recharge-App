import React from 'react'
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import { ScreenWidth, ScreenHeight } from './Dimensions';
import { colors } from './Colors';


export default OnboardingItem = ({ item }) => {

	const { width } = useWindowDimensions();
	return (
		<View style={[styles.container, { width }]}>
			<Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]}/>
			
			<View style={{ flex: 0.3 }}>
			    <Text style={styles.title}>
					<Text style={{ color: colors.lightYellow }}>{item.title.split(' ')[0] + ' '}</Text> 
					<Text style={{ color: colors.white }}>{item.title.split(' ').slice(1).join(' ')}.</Text> 
				</Text>
			    <Text style={styles.description}>{ item.description }</Text>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
		backgroundColor: colors.black,
    },
    image: {
		height: ScreenHeight *.5,
		marginBottom: ScreenHeight * .05,
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: colors.white,
        textAlign: 'center',
        paddingHorizontal: 64,
    },

});

