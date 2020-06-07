import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {createPost} from "../store/actions/post";

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const img = 'https://jooinn.com/images/city-1.jpg';
    const saveHandler = () => {
        const post = {
            date: new Date.now().toJSON(),
            text: text,
            img: img,
            booked: false
        };
        dispatch(createPost(post));
        navigation.navigate('Main')
    };
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.content}>
                    <Text style={styles.title}>Создай новый пост</Text>
                    <TextInput style={styles.textarea}
                               value={text}
                               placeholder='Имя поста'
                               onChangeText={setText}
                               multiline
                    />
                    <Image style={styles.image} source={{uri: img}}/>
                    <Button title='Создать пост' color={THEME.MAIN_COLOR} onPress={saveHandler}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
};
CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Создать пост',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='md-menu' onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
});

const styles = StyleSheet.create({
    content: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10
    },
    textarea: {},
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        marginTop: 10,
    }
});
