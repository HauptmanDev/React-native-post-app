import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const AboutScreen = () => {
    return (
        <View style={styles.content}>
            <Text>AboutScreen</Text>
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
