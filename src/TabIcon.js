import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';

TabIcon = (props) => {
  
    const title = props.title;

    let IconName = "";

    if ( title == "Settings" ) {
      IconName = "settings"
    }

    if ( title == "Account" ) {
      IconName = "account-circle"
    } 

    if (title == 'Home') {
      IconName = "home";
    }

    return (
      <Icon
        size={20}
        name={IconName}
        style={{ color: props.focused ? '#5352ed' : '#ccc' }}
       />
    )
}

export default TabIcon;