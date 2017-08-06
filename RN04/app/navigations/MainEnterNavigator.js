'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import {StackNavigator} from 'react-navigation';

import A from '../pages/A';
import B from '../pages/B';

const MainEnterNavigator = StackNavigator(
    {
        A:{screen:A},
        B:{screen:B}
    },
    {
        initialRouteName:'A',
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

export default MainEnterNavigator;