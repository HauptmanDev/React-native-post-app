import React from 'react'
import {StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from "../data";
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    };
    return (
        <PostList data={DATA} onOpen={openPostHandler}/>
    )

};

MainScreen.navigationOptions = {
    headerTitle: 'Мой блок',
    headerRight: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='md-camera' onPress={() => console.log('Camera')}/>
        </HeaderButtons>,
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='md-menu' onPress={() => console.log('Menu')}/>
        </HeaderButtons>
};

