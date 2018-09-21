import React, { Component } from 'react';
import { YellowBox, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation/src/views/StackView/StackViewStyleInterpolator";
import TabNavigator from './src/components/common/TabNavigator'
import ProfileScreen from './ProfileScreen'

export default App = StackNavigator({
    Main: {
        screen: TabNavigator,
        navigationOptions: {
            title: 'main',
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
              alignSelf: 'center'
            },
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            title: 'profile',
            headerTitleStyle: {
              flex: 1,
              textAlign: 'center',
              alignSelf: 'center'
            },
            headerRight: <View />
        }
    },
}, {
    mode: 'modal',
    navigationOptions: {
        
    },
    transitionConfig: () => ({
        screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
});



YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 
    'Module RCTImageLoader', 
    'The StackNavigator function', 
    'Method `jumpToIndex` is deprecated'
]);