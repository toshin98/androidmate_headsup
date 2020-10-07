
import React, { useState,useEffect } from 'react';

import {
  StyleSheet,
  Alert,
  View,
  Text,
  
} from 'react-native';
import { gyroscope,accelerometer,setUpdateIntervalForType, SensorTypes } from "react-native-sensors";
import CountDown from 'react-native-countdown-component';

const RegisterScreen = props => {
  let [pass, setpass] = useState(0);
  let [dub, setasd]=useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p']);
  const [next, setnext] = useState(0);
  const [total, settotal] = useState(0);
  const [ptotal, setptotal] = useState(0);
  const [start, setstart] = useState(0);
  
  passs = () => {
    setnext(next+1);
    setptotal(ptotal+1);
    console.log(ptotal+'total'+total);
  }
  corrs = () => {
    settotal(total+1);
    setnext(next+1);
    console.log(ptotal+'total'+total);
  }
  abc = () => {
    setstart(0);
    setUpdateIntervalForType(SensorTypes.accelerometer, 200);
  const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  {
    console.log(x,y,z);
    if(x<-8.5){
      setstart(1);
      cde();
      subscription.unsubscribe();   
    }
  }
);
  }
  
  cde = () => {
    console.log('accel closed');
    setUpdateIntervalForType(SensorTypes.gyroscope, 20);
  const subscription1 = gyroscope.subscribe(({ x, y, z, timestamp }) =>
  {
    
    if(pass==0){
      
    if(y<-4 ){
      setpass(1);
      
      console.log('pass');
      passs()
      setUpdateIntervalForType(SensorTypes.gyroscope, 2000);
      setTimeout(() => {
      
        setpass(0);
        setUpdateIntervalForType(SensorTypes.gyroscope, 20);
        console.log('pass finish');
     

      }, 1500);
    }
    if(y>4){
      setpass(-1);
      
      
      console.log('corr');
      corrs();
      setUpdateIntervalForType(SensorTypes.gyroscope, 2000);
      setTimeout(() => {
      
        setpass(0);
        setUpdateIntervalForType(SensorTypes.gyroscope, 20);
        console.log('corr finish');
      }, 1500);
    }
    
  }
  }
);
    setTimeout(() => {
      
      subscription1.unsubscribe();
    }, 60000);
  }

useEffect(() => {
  const unsubscribe123 = props.navigation.addListener('didFocus', () => {
    abc();
  });
  
});
if(start==0){
  
  return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      
      <View style={styles.container}>
        <Text style={styles.textSmall}>
          Please Hold the vertically in landscape mode to start the game
        </Text>
      </View>
    </View>
  );
}
  
  else{
    return (
    <View style={{ flex: 1, marginTop: 30, padding: 20 }}>
      <CountDown
        until={60}
        size={20}
        onFinish={() => {
          
          Alert.alert(
            "Result",
            "Passed : "+ptotal+", Score : "+total,
            [
              
              { text: "OK", onPress: () => {
                setptotal(0);settotal(0);setnext(0);setpass(0);setstart(0);
                props.navigation.navigate('LoginScreen');
                
                } }
            ],
            { cancelable: false }
          );
        }}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['S']}
        timeLabels={{s: 'Seconds left'}}
      />
      <View style={styles.container}>
        
        {pass == 1 ? (
            <Text style={styles.textLargep}>
            Pass
          </Text>
          ) : null}
          {pass == -1 ? (
            <Text style={styles.textLargec}>
            Correct
          </Text>
          ) : null}
          {pass == 0 ? (
            <Text style={styles.textLarge}>
            {dub[next]}
          </Text>
          ) : null}
           
      </View>
    </View>
  );
  }
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLarge: {
    fontSize: 30,
    textAlign: 'center',
  },
  textLargec: {
    fontSize: 30,
    textAlign: 'center',
    color:'green'
  },
  textLargep: {
    fontSize: 30,
    textAlign: 'center',
    color:'red'
  },
  textSmall: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});