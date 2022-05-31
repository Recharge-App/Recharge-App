import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import { OnboardingItem, NextButton, Paginator } from '../Components/index';
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

const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
        console.log('last')
    }
};

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
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

            <Paginator data={slides} scrollX={scrollX}/>
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

