import React, {useEffect} from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";
import {loadPosts} from "../store/actions/post";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    };
    const allPosts = useSelector(state => state.post.allPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch]);
    return (
        <PostList data={allPosts} onOpen={openPostHandler}/>
    )

};

MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Мой блок',
    headerRight: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='md-camera' onPress={() => navigation.push('Create')}/>
        </HeaderButtons>,
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Menu' iconName='md-menu' onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
});

