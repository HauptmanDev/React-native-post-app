import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.content}>
            <Text>Это приложение разработано по учебной программе</Text>
            <Text style={styles.version}>Владилена Минена.</Text>
            <Text>Версия приложения <Text style={styles.version}>1.0.0</Text> </Text>
        </View>
    )
};
AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'О приложении',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take photo' iconName='md-menu' onPress={() => navigation.toggleDrawer()}/>
        </HeaderButtons>
});
const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'open-bold'
    },
});
