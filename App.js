import React from 'react';
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import HomeScreen from './src/HomeScreen';
import MailScreen from './src/MailScreen';
import ProfileScreen from './src/ProfileScreen';
import LogoutScreen from './src/LogoutScreen';

const WINDOW_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
	<View style={{ flex: 1, backgroundColor: '#43484d' }}>
	  <View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
	  <Image
        source={require('./img/logo.png')}
        style={{ width: Math.min(WINDOW_WIDTH * 0.57, 200), height:100 }}
        resizeMode="contain"
      />
		<Text style={{fontSize:20, color: 'white'}}>React Native</Text>
	  </View>
	  <View style={{ marginLeft: 10 }}>
		<DrawerItems {...props} />
	  </View>
	</View>
);

const appstack = createDrawerNavigator({
	home : { screen : HomeScreen },
	mail : { screen : MailScreen },
	profile : {  screen: ProfileScreen },
	logout: { screen : LogoutScreen }
},{
	initialRouteName : 'home',
	contentOptions : {
		activeTintColor:'#548ff7',
		activeBackgroundColor: 'tranparent',
		inactiveTintColor : '#ffffff',
		inactiveBackgroundColor : 'transparent',
		labelStyle : {
			fontSize : 15,
			marginLeft : 0,
		},
	},
	drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
	contentComponent: CustomDrawerContentComponent,
});

const App = createAppContainer(appstack);

export default App;