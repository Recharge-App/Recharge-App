import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated, TouchableOpacity} from 'react-native';
import OnboardingItem from '../Components/OnboardingItem';
import Paginator from '../Components/Paginator';
import { colors } from '../Components/Colors';
import { ScreenWidth, ScreenHeight } from '../Components/Dimensions';
// This is the data we are going to display in the onboarding screen.
import slides from '../Data/slides';


export default Onboarding = () => {
    // horizontal scroll position
    const scrollX = useRef(new Animated.Value(0)).current;

    // Allows us to keep track of which slide is being shown (index 1...4)
    const [currentIndex, setCurrentIndex] = useState(0)

    // Sets the state of the current index to whatever slide (index) we're on
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    // The next slide needs to be atleast 50% on screen before it will fully move on
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const slidesRef = useRef(null);

const Buttons = () => {
	return(
		<View style={styles.buttonContainer}>
			<TouchableOpacity style={styles.signUp}>
				<Text style={{ color: colors.black, fontSize: ScreenWidth * .06, fontWeight: '700' }}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.logIn}>
				<Text style={{ color: colors.white, fontSize: ScreenWidth * .06, fontWeight: '700' }}>Log in</Text>
			</TouchableOpacity>
		</View>
	);
}

const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
        console.log('last')
    }
};

    return (
        <View style={styles.container}>
            <View style={{ height: ScreenHeight * .78 }}>
                <FlatList 
                data={slides} 
                renderItem={ ({ item }) => <OnboardingItem item={item} /> }
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
                />
            </View>
			<View style={{ alignItems: 'center', justifyContent: 'center' }}>
            	<Paginator data={slides} scrollX={scrollX}/>
            	{/*<NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />A*/}
				<Buttons/>
			</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
		backgroundColor: colors.black,
		height: ScreenHeight,
		width: ScreenWidth,
    },
	buttonContainer: {
		backgroundColor: colors.darkGray,
		height: ScreenHeight * .08,
		width: ScreenWidth * .75,
		borderRadius: ScreenWidth * .05,
		flexDirection: 'row',
	},
	signUp: {
		height: ScreenHeight * .08,
		width: ScreenWidth * .37,
		borderRadius: ScreenWidth * .05,
		backgroundColor: colors.lightYellow,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logIn: {
		height: ScreenHeight * .08,
		width: ScreenWidth * .37,
		borderRadius: ScreenWidth * .05,
		backgroundColor: colors.darkGray,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

