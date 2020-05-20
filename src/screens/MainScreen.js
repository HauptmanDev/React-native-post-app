import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const MainScreen = () => {
    return (
        <View style={styles.content}>
            <Text>MainScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
