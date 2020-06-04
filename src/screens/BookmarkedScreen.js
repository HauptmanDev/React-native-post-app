import React, {useEffect} from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../store/actions/post";

export const BookmarkedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    };
    const bookedPosts = useSelector(state => state.post.bookedPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch]);
    return (
        <PostList data={bookedPosts} onOpen={openPostHandler}/>
    )
};

BookmarkedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Избранное',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
});

