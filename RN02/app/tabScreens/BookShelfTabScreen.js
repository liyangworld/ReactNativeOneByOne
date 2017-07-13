'use strict';
/**
 * Created by liyang on 2017-07-12.
 */

import React,{Component} from 'react';
import {Alert,View,Text,Button,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BookShelfTabScreen extends Component {
    static navigationOptions = ({navigation})=>({
        // headerTitle:'书架',
        tabBarLabel:'书架',
        tabBarIcon:({tintColor}) => (
            <Icon name="server" size={25} color={tintColor} style={{margin:0}}/>
        )
    });
    render(){
        return (
            <View style={{flex:1}}>

                <View style={{height:54,backgroundColor:'#00f',flexDirection:'row',alignItems:'center',}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} style={{marginLeft:20}}>
                        <Icon name="user-circle" size={25} color="#fff" />
                    </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={{color:'#fff'}}>书架</Text>
                    </View>
                </View>

                <View style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
                    <Text>书架</Text>
                </View>
            </View>
        )
    }
}

export default BookShelfTabScreen ;