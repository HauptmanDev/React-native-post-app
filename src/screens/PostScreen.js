import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {DATA} from './../data'
import {THEME} from "../theme";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId');
    const post = DATA.find(p => p.id === postId);
    // useEffect(() => {
    //     navigation.setParams({booked: post.booked})
    // });
    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы уверены, что хотите удалить данную запись?",
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                {text: "Удалить", onPress: () => console.log("OK Pressed")}
            ],
            {cancelable: false}
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
    const booked = navigation.getParam('booked');
    const iconName = booked ? 'md-star' : 'md-star-outline';
    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take photo' iconName={iconName} onPress={() => console.log('Camera')}/>
            </HeaderButtons>,
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
