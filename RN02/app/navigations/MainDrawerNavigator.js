'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React from 'react';
import {DrawerNavigator} from 'react-navigation' ;

import CustomDrawerContentComponent from '../drawerScreens/CustomDrawerContentComponent';

import HomeTabNavigator from './HomeTabNavigator';
import DeliciousFoodDrawerScreen from '../drawerScreens/DeliciousFoodDrawerScreen';

const MainDrawerNavigator = DrawerNavigator(
    {
        HomeDrawerScreen:{screen:HomeTabNavigator},
        DeliciousFoodDrawerScreen:{screen:DeliciousFoodDrawerScreen},
    },{
        // drawerWidth: 500,
        drawerPosition:'left',
        contentOptions: {
            initialRouteName: 'HomeDrawerScreen', // 默认页面组件
            activeTintColor: '#17C117',  // 选中文字颜色
            activeBackgroundColor: '#ddd', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {
                backgroundColor:'#fff'
            }
        },
        contentComponent:CustomDrawerContentComponent
    }
);

export default MainDrawerNavigator;

