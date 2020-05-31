import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {Platform} from "react-native-web";
import {BookmarkedScreen} from "../screens/BookmarkedScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator} from "react-navigation-drawer";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const navigatorOptions = {
    // initialRouteName: 'Main', по умолчанию первое свойство
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR
        },
        headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'
    }
};
const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: PostScreen
}, navigatorOptions);
const BookedNavigator = createStackNavigator({
    Booked: BookmarkedScreen,
    Post: PostScreen,
}, navigatorOptions);
const AboutNavigator = createStackNavigator({
    About: AboutScreen,
}, navigatorOptions);
const CreateNavigator = createStackNavigator({
    Create: CreateScreen,
}, navigatorOptions);
const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor}/>,
            tabBarLabel: 'Лента',
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor}/>,
            tabBarLabel: 'Избранное',
        }
    }
};

const BottomNavigator = Platform.OS === 'ios' ?
    createBottomTabNavigator(bottomTabsConfig, {
        tabBarOptions: {
            activeTintColor: THEME.MAIN_COLOR
        }
    })
    :
    createMaterialBottomTabNavigator(bottomTabsConfig, {
        shifting: true,
        barStyle: {
            backgroundColor: THEME.MAIN_COLOR
        },
        activeTintColor: '#fff'
    });

const MainNavigator = createDrawerNavigator({
    PostTabs: {
        screen: BottomNavigator,
        navigationOptions: {
            drawerLabel: 'Главная',
            // drawerIcon: <Ionicons name='ios-star'/>
        }
    },
    Create: {
        screen: CreateNavigator,
        navigationOptions: {
            drawerLabel: 'Новый пост'
        }
    },
    About: {
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'О приложении'
        }
    },
}, {
    contentOptions: {
        activeTintColor: THEME.MAIN_COLOR,
        labelStyle: {
            fontFamily: 'open-bold'
        }
    }
});
export const AppNavigation = createAppContainer(MainNavigator);
