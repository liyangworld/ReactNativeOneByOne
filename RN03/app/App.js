'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {StatusBar,View} from 'react-native';
import TopNavigator from './navigations/TopNavigator';

class App extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'rgba(0,0,255,1)'}/>
                <TopNavigator/>
            </View>
        )
    }
}

export default App;