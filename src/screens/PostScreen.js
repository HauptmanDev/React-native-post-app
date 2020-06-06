import React, {useEffect, useCallback} from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {DATA} from './../data'
import {THEME} from "../theme";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {useDispatch, useSelector} from "react-redux";
import {toggleBooked} from "../store/actions/post";

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId');
    const post = DATA.find(p => p.id === postId);
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
    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));
    const dispatch = useDispatch();
    useEffect(() => {
        navigation.setParams({booked})
    }, [booked]);
    const toggleHandler = useCallback(() => {
        console.log('booked');
        dispatch(toggleBooked(postId))
    }, [dispatch, postId]);
    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler]);
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
    const toggleHandler = navigation.getParam('toggleHandler');
    const iconName = booked ? 'md-star' : 'md-star-outline';
    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take photo' iconName={iconName} onPress={toggleHandler}/>
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
