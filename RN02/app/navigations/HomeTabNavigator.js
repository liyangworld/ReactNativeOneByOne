'use strict';
/**
 * Created by liyang on 2017-07-13.
 */


import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabNavigator} from 'react-navigation' ;

import BookShelfTabScreen from '../tabScreens/BookShelfTabScreen';
import BookStoreTabScreen from '../tabScreens/BookStoreTabScreen';
import BookRankTabScreen from '../tabScreens/BookRankTabScreen';

const HomeTabNavigator = TabNavigator(
    {
        BookShelfTab:{screen:BookShelfTabScreen},
        BookStoreTab:{screen:BookStoreTabScreen},
        BookRankTab:{screen:BookRankTabScreen}
    },
    {
        tabBarPosition:'bottom',
        swipeEnabled:true,
        lazy:true,
        initialRouteName:'BookShelfTab',
        backBehavior:'none',
        tabBarOptions:{
            showLabel:true,
            showIcon:true,
            indicatorStyle:{
                opacity:0
            },
            style:{
                backgroundColor:'#fff',
                borderColor:'#999999',
                borderTopWidth:1
            },
            activeTintColor:'#00f',
            inactiveTintColor:'#999999',
            labelStyle:{
                fontSize:12,
                marginTop:3,
            },
            tabStyle:{
                padding:0,
                height:50,
            }
        }
    }
);

HomeTabNavigator.navigationOptions =({navigation})=>({
    drawerLabel:'首页',
    drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
    )
});

export default HomeTabNavigator;