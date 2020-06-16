import React from 'react'
import {View, FlatList, StyleSheet, Text} from "react-native";
import {Post} from "./Post";

export const PostList = ({data = [], onOpen}) => {
    return (
        <View>
            {!data.length ?
                <View style={styles.content}>
                    <Text style={styles.noItems}>Посты отсутствуют</Text>
                </View> :
                <View style={styles.content}>
                    <FlatList
                        data={data}
                        keyExtractor={post => post.id.toString()}
                        renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
                    />
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        padding: 10,
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
    }
});

