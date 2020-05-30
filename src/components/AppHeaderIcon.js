import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Platform} from "react-native-web";
import {THEME} from "../theme";
import {Ionicons} from "@expo/vector-icons";

export const AppHeaderIcon = props => (
    <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={24}
        color={Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'}
        title=''
    />
);
