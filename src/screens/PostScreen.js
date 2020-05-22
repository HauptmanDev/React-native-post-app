import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const PostScreen = () => {
    return (
        <View style={styles.content}>
            <Text>PostScreen</Text>
        </View>
    )
};
PostScreen.navigationOptions = {
    headerTitle: 'Пост номер 47'
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
