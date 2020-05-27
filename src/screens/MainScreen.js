import React from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import {DATA} from "../data";
import {Post} from "../components/Post";

export const MainScreen = ({navigation}) => {
    // const goToPost = () => {
    //     navigation.navigate('Post')
    // };
    const openPostHandler = (post) => {
        navigation.navigate('Post', {postId: post.id, date: post.date})
    };
    return (
        <View style={styles.content}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
            />
        </View>
    )
};

MainScreen.navigationOptions = {
    headerTitle: 'Мой блок'
};

const styles = StyleSheet.create({
    content: {
        padding: 10,
    }
});
