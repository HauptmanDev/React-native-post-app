import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from "../data";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const BookmarkedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    };
    return (
        <PostList data={DATA.filter(post => post.booked)} onOpen={openPostHandler}/>
        // data={DATA.filter(post => post.booked)}
    )
};

BookmarkedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Избранное',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
});

