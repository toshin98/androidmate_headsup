import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <View style={{ flex: 1, padding: 20,backgroundColor: 'white', }}>
        <ScrollView>
          <View style={styles.container}>
          <Image
        source={require('../Image/aboutreact.png')}
        style={{ width: '90%', resizeMode: 'contain' }}
      />
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('RegisterScreen')}>
              <Image
        source={require('../Image/play.png')}
        style={{ width: '50%', resizeMode: 'contain'}}
      />
            </TouchableOpacity>
          
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLarge: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textSmall: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    
    width: 300,
    
  },
});