import React, { Component } from 'react';
import { Image } from 'react-native'
import { TabNavigator } from 'react-navigation';

import ListScreen from '../../components/index/ListScreen'
import ReportScreen from '../../components/report/index'
import MessageScreen from '../../components/message/index'
import UserScreen from '../../components/user/index'

export default TabNavigator({
    Home: {
        screen: ListScreen,
        navigationOptions: {
            title:'首页',
            tabBarLabel:'首页',
            tabBarIcon:({ focused }) => (
                focused ?
                <Image source={require('../../assets/image/home_active.png')} style={[{height: 24, width: 24}]} /> :
                <Image source={require('../../assets/image/home.png')} style={[{height: 24, width: 24}]} />
            ),
        }
    },
    Report: {
        screen: ReportScreen,
        navigationOptions:{
            title: '发表',
            tabBarLabel:'发表',
            tabBarIcon:({ focused }) => (
                focused ?
                <Image source={require('../../assets/image/edit_active.png')} style={[{height: 24, width: 24}]} /> :
                <Image source={require('../../assets/image/edit.png')} style={[{height: 24, width: 24}]} />
            ),
        }
    },
    Message: {
        screen: MessageScreen,
        navigationOptions:{
            title: '消息',
            tabBarLabel:'消息',
            tabBarIcon:({ focused }) => (
                focused ? 
                <Image source={require('../../assets/image/message_active.png')} style={[{height: 28, width: 28}]} /> :
                <Image source={require('../../assets/image/message.png')} style={[{height: 28, width: 28}]} />
            ),
        }
    },
    User: {
        screen: UserScreen,
        navigationOptions:{
            title: '我的',
            tabBarLabel:'我的',
            tabBarIcon:({ focused }) => (
                focused ?
                <Image source={require('../../assets/image/user_active.png')} style={[{height: 24, width: 24}]} /> :
                <Image source={require('../../assets/image/user.png')} style={[{height: 24, width: 24}]} />
            ),
        }
    }
}, {
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    tabBarOptions: {
        activeTintColor: '#00acb0', // 文字和图片选中颜色
        inactiveTintColor: '#333', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 64
        }
    }
})