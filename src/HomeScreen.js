import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, StyleSheet, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          FlatListItems: [
            { id: '1', value: 'A' },{ id: '2', value: 'B' },{ id: '3', value: 'C' },
            { id: '4', value: 'D' },{ id: '5', value: 'E' },{ id: '6', value: 'F' },
            { id: '7', value: 'G' },{ id: '8', value: 'H' },{ id: '9', value: 'I' },
            { id: '10', value: 'J' },{ id: '11', value: 'K' },{ id: '12', value: 'L' },
            { id: '13', value: 'M' },{ id: '14', value: 'N' },{ id: '15', value: 'O' },
            { id: '16', value: 'P' },{ id: '17', value: 'Q' },{ id: '18', value: 'R' },
            { id: '19', value: 'S' },{ id: '20', value: 'T' },{ id: '21', value: 'U' },
            { id: '22', value: 'V' },{ id: '23', value: 'W' },{ id: '24', value: 'X' },
            { id: '25', value: 'Y' },{ id: '26', value: 'Z' }],
       };
    }

    FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
          );
    }

    GetItem(item) {
        //Function for click on an item
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>Home</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Mail')}><Text style={{fontSize:15}}>Go to Mail screen</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('profile')}><Text>go to profile</Text></TouchableOpacity>
                <FlatList
                    data={this.state.FlatListItems}
                    
                    //data defined in constructor
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    
                    //Item Separator View
                    renderItem={({ item }) => (
                    // Single Comes here which will be repeatative for the FlatListItems
                    <View>
                      <Text
                        style={styles.item}
                        onPress={this.GetItem.bind(this, 'Id : '+item.id+' Value : '+item.value)}>
                            {item.value}
                      </Text>
                    </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item : {
        padding : 10,
        fontSize : 18,
        height : 44,
    },
    MainContainer : {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
        backgroundColor:'#F5FCFF',
    },
    button : {
        backgroundColor : 'grey',
        padding : 10,
        borderRadius:5,
        paddingTop : 10,
        paddingBottom:10,
        margin:4,
        alignItems:'center',
        alignContent:'center'
    }
});


const HomeDrawerItem = createStackNavigator({
    home1: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: (
                <Icon name="menu" size={30} type="entypo" iconStyle={{ paddingLeft: 10 }} onPress={navigation.toggleDrawer} />
            ),
        }),
    }
});

HomeDrawerItem.navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (<Icon name="home" size={30} iconStyle={{ width: 30, height: 30 }} type="material" color={tintColor} />)
}

export default HomeDrawerItem;