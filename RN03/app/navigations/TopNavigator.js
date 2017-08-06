'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import TestPage from '../pages/TestPage';

import OUIViewPage from '../pages/ouiPages/OUIViewPage';
import OUIActivityIndicatorPage from '../pages/ouiPages/OUIActivityIndicatorPage';

const TopNavigator = StackNavigator(
    {
        Main:{screen:MainTabNavigator},

        TestPage:{screen:TestPage},

        OUIViewPage:{screen:OUIViewPage},
        OUIActivityIndicatorPage:{screen:OUIActivityIndicatorPage},

    },
    {
        initialRouteName:'Main',
        headerMode:'screen',
        navigationOptions:{
            headerStyle:{
                backgroundColor:'#00f',
                elevation:0
            },
            headerTitleStyle:{
                color:'#fff',
                fontSize:20
            },
            headerTintColor:'#fff',
            headerBackTitleStyle:{
                color:'#fff'
            }
        }
    }
);

export default TopNavigator;

