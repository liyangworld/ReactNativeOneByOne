'use strict';
/**
 * Created by liyang on 2017-07-13.
 */


import React from 'react';
import {TabNavigator} from 'react-navigation';

import OfficeTabScreen from '../tabScreens/OfficeTabScreen';
import CustomTabScreen from '../tabScreens/CustomTabScreen';
import ThirdPartyTabScreen from '../tabScreens/ThirdPartyTabScreen';

const MainTabNavigator = TabNavigator(
    {
        OfficeTabScreen:{screen:OfficeTabScreen},
        CustomTabScreen:{screen:CustomTabScreen},
        ThirdPartyTabScreen:{screen:ThirdPartyTabScreen}
    },
    {
        initialRouteName:'OfficeTabScreen',
        tabBarPosition:'bottom',
        swipeEnabled:true,
        lazy:true,
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
export default MainTabNavigator;