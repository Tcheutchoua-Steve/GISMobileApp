import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import Login from './screens/Login';
import Operation from './screens/Operations';

import {ToastAndroid} from 'react-native';

export default class Navigation extends Component {

    render() {
        return (
            <Router>
                <Stack 
                	key="root" 
                	navigationBarStyle={{ backgroundColor: 'green' }}
                	titleStyle={{ color: 'blue' }}
                    >
                    <Scene key="login" component={Login} initial hideNavBar={true} /> 
                    <Scene key="operation" component={Operation} hideNavBar={true} /> 

                </Stack>
            </Router>
        );
    }
}