import React, { Component } from 'react';
// import { Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

class MailScreen extends Component {

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center',backgroundColor: '#F5FCFF'}}>
                <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>Mail Screen</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('home')}><Text>go back to home screen</Text></TouchableOpacity>
            
            </View>
        );
    }
}

const MailScreenDrawerItem = createStackNavigator({
    Mail1 : {
        screen : MailScreen,
        navigationOptions: ({navigation}) => ({
            title : 'Mail',
            headerLeft: (
                <Icon name="menu" size={30} type="entypo" iconStyle={{ paddingLeft: 10 }} onPress={navigation.toggleDrawer}/>
            ),
        })
    }
});

MailScreenDrawerItem.navigationOptions = {
    drawerLabel : 'Mail',
    drawerIcon: ({tintColor}) => (<Icon name="mail" size={30} iconStyle={{ width: 30, height: 30 }} type="material" color={tintColor} />)
}

export default MailScreenDrawerItem;