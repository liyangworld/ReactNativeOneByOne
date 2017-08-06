'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import {StackNavigator} from 'react-navigation';

import Login from '../pages/Login';
import Singup from '../pages/Singup';

const LoginEnterNavigator = StackNavigator(
    {
        Login:{screen:Login},
        Singup:{screen:Singup}
    },
    {
        initialRouteName:'Login',
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

export default LoginEnterNavigator;