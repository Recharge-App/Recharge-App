import React from 'react'
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import { colors } from './Colors';

// Paginator are the little red dots
export default Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: 'row', height: 64 }}>
        {data.map((_, i) => {
            // previous dot, current dot, next dot
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            // dot width
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp',
            })

            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
            })
            return <Animated.View style={[styles.dot, { width: dotWidth, opacity, }]} key={i.toString()} />;
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.lightYellow,
        marginHorizontal: 8,
    },
    

});
