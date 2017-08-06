'use strict';
/**
 * Created by liyang on 2017-07-22.
 */

import React,{Component} from 'react';
import {StatusBar,View} from 'react-native';

import {autobind} from 'core-decorators';
import {Provider,observer} from 'mobx-react/native';

import Stores from './stores/Stores';

import LoginEnterNavigator from './navigations/LoginEnterNavigator';
import MainEnterNavigator from './navigations/MainEnterNavigator';

@autobind @observer
class App extends Component {
    render(){
        return (
        <Provider {...Stores}>
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'rgba(255,0,0,1)'}/>
                {
                    Stores.LoginStore.isAuthenticated ? <MainEnterNavigator/> :
                    <LoginEnterNavigator/>
                }
            </View>
        </Provider>
        )
    }
}

export default App;