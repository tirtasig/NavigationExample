import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

class LogoutScreen extends Component {

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor: '#F5FCFF'}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}> Logout Screen</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('logout')}><Text>go back to home screen</Text></TouchableOpacity>
            </View>
        );
    }
}

const LogoutScreenDrawerItem = createStackNavigator({
    detail1 : {
        screen : LogoutScreen,
        navigationOptions: ({navigation}) => ({
            title : 'Logout',
            headerLeft: (
                <Icon name="menu" size={30} type="entypo" iconStyle={{ paddingLeft: 10 }} onPress={navigation.toggleDrawer}/>
            ),
        })
    }
});

LogoutScreenDrawerItem.navigationOptions = {
    drawerLabel : 'Logout',
    drawerIcon: ({tintColor}) => (<Icon name="style" size={30} iconStyle={{ width: 30, height: 30 }} type="material" color={tintColor} />)
}

export default LogoutScreenDrawerItem;