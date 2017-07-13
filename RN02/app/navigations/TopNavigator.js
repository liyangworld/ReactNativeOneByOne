'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React from 'react';
import {StackNavigator} from 'react-navigation' ;

import MainDrawerNavigator from './MainDrawerNavigator';

import TestPage from '../pages/TestPage';

import SettingsPage from '../pages/settingsPages/SettingsPage';

const TopNavigator = StackNavigator(
    {
        Main:{
            screen:MainDrawerNavigator,
            navigationOptions: ({navigation}) => ({
                header:null,
            }),
        },

        TestPage:{screen:TestPage},

        SettingsPage:{screen:SettingsPage},
    },
    {
        initialRouteName:'Main',
        headerMode:'float',
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

export default TopNavigator ;