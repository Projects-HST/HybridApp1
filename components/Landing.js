import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native'
import { StackNavigator } from  'react-navigation';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import List from './List'

const image = require('./images/Sidemeu.png');

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      top: 20,
      padding: 10,
      alignSelf:'flex-start',
    },
    caption: {
      fontSize: 20,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    list: 
    {
      flex: 1,
    }
  });

  export default class Landing extends React.Component {

    static navigationOptions = ({ navigation }) => {

        return {
            header: () => null
          }
        };

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
  
      this.state = {
        isOpen: false,
        selectedItem: 'About',
      };
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  
    updateMenuState(isOpen) {
      this.setState({ isOpen });
    }
  
    onMenuItemSelected = item =>
      this.setState({
        isOpen: false,
        selectedItem: item,
      });
  
    render() 
    {
      const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
      return (
          <SideMenu menu={menu} isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles.button}>
            <Image
              source={image}
              style={{ width: 32, height: 32 }}/>
          </TouchableOpacity>
          <List />
        </SideMenu>
      );
    }
  }
  