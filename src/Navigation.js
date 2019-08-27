import React, {Component} from 'react';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';
import Login from './screens/Login';
import Operation from './screens/Operations';
import DetailsInfo from './screens/DetailsInfo';
import TabIcon from './TabIcon';

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
                    <Scene 
                        key="homeTab" 
                        tabs
                        tabBarPosition = "bottom"
                        showLabel={true}
                        activeTintColor = "#000"
                        hideTabBar={false}
                        hideNavBar={true}
                    >
                    <Scene key="operation" component={Operation} hideNavBar={true} />
                    <Scene key="details" component={DetailsInfo} title="Details" />
                    </Scene> 

                </Stack>
            </Router>
        );
    }
}