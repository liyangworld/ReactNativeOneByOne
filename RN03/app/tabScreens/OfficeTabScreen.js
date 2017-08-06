'use strict';
/**
 * Created by liyang on 2017-07-13.
 */

import React,{Component} from 'react';
import {StyleSheet,View,ScrollView,Text,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ComponentsData = [
    {title:'View',router:'OUIViewPage'},
    {title:'ActivityIndicator',router:'OUIActivityIndicatorPage'},
    {title:'Text',router:'OUIViewPage'},
    {title:'Button',router:'OUIViewPage'},
    {title:'ScrollView',router:'OUIViewPage'}
];

const ApiData = [
    {title:'View',router:'OUIViewPage'},
    {title:'Text',router:'OUIViewPage'},
    {title:'Button',router:'OUIViewPage'},
    {title:'ScrollView',router:'OUIViewPage'}
];

class OfficeTabScreen extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle:'官方',
        tabBarLabel:'官方',
        tabBarIcon:({tintColor})=>(
            <Icon name="facebook-official" color={tintColor} size={25}/>
        )
    });

    render(){
        return(
            <ScrollView>
                <Text style={[styles.sectionTitle]}>UI组件</Text>
                <View style={[styles.sectionContentWrap]}>
                    {
                        ComponentsData.map((item,index)=>{
                            let itemStyles = [styles.itemWrap,styles.itemWrapBorder];
                            index || itemStyles.pop();
                            return (
                                <TouchableHighlight onPress={()=>{this.props.navigation.navigate(item.router)}} underlayColor={'#ddd'} style={{paddingLeft:20}}>
                                    <View style={itemStyles}>
                                        <Text>{item.title}</Text>
                                        <View style={{flexDirection:'row-reverse',alignItems:'center',}}>
                                            <Icon name="angle-right" size={25} color={'#757575'} style={{marginHorizontal:20,}}/>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>

                <Text style={[styles.sectionTitle]}>API</Text>
                <View style={[styles.sectionContentWrap]}>
                    {
                        ApiData.map((item,index)=>{
                            let itemStyles = [styles.itemWrap,styles.itemWrapBorder];
                            index || itemStyles.pop();
                            return (
                                <TouchableHighlight onPress={()=>{this.props.navigation.navigate(item.router)}} underlayColor={'#ddd'} style={{paddingLeft:20}}>
                                    <View style={itemStyles}>
                                        <Text>{item.title}</Text>
                                        <View style={{flexDirection:'row-reverse',alignItems:'center',}}>
                                            <Icon name="angle-right" size={25} color={'#757575'} style={{marginHorizontal:20,}}/>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    sectionTitle:{
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:'#eee',
    },
    sectionContentWrap:{
        borderColor:'#ccc',
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:'#fff',
    },
    itemWrap:{
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemWrapBorder:{
        borderColor:'#ccc',
        borderTopWidth:1,
    }
});

export default OfficeTabScreen;