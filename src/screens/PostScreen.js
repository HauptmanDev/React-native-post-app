import React from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {DATA} from './../data'
import {THEME} from "../theme";

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId');
    const post = DATA.find(p => p.id === postId);
    const removeHandler = ()=> {
        Alert.alert(
            "Удаление поста",
            "Вы уверены, что хотите удалить данную запись?",
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                { text: "Удалить", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    };
    return (
        <ScrollView style={styles.content}>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text}</Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
};
PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam('date');
    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString()
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular'
    }
});
