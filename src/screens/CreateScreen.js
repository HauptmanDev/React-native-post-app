import React, {useState, useRef} from 'react'
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
import {PhotoPiker} from "../components/PhotoPiker";

export const CreateScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const imgRef = useRef(null);
    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
            booked: false
        };
        dispatch(createPost(post));
        navigation.navigate('Main')
    };
    const photoPickHandler = uri => {
        imgRef.current = uri
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
                    <PhotoPiker onPick={photoPickHandler}/>
                    <Button title='Создать пост'
                            color={THEME.MAIN_COLOR}
                            onPress={saveHandler}
                            disabled={!text}/>
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
