import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

class ProfileScreen extends Component {

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor: '#F5FCFF'}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>ProfileScreen</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('profile')}><Text>go back to home screen</Text></TouchableOpacity>
            </View>
        )
    }
}

const ProfileScreenDrawerItem = createStackNavigator({
    detail1 : {
        screen : ProfileScreen,
        navigationOptions: ({navigation}) => ({
            title : 'Profile',
            headerLeft: (
                <Icon name="menu" size={30} type="entypo" iconStyle={{ paddingLeft: 10 }} onPress={navigation.toggleDrawer}/>
            ),
        })
    }
});

ProfileScreenDrawerItem.navigationOptions = {
    drawerLabel : 'Profile',
    drawerIcon: ({tintColor}) => (<Icon name="people" size={30} iconStyle={{ width: 30, height: 30 }} type="material" color={tintColor} />)
}

export default ProfileScreenDrawerItem;