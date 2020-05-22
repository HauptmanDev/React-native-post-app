import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post')
    };
    return (
        <View style={styles.content}>
            <Text>MainScreen</Text>
            <Button title='Пост' onPress={goToPost}/>
        </View>
    )
};

MainScreen.navigationOptions = {
    headerTitle: 'Мой блок'
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
