import React from 'react'
import { StatusBar, Text, View } from 'react-native';
import styles from './Style';
import { BatLogo } from '../../components/BatLogo/BatLogo';


export default function Home() {
 return (
  <View style={styles.appContainer}>
  <StatusBar barStyle='default'/>
 <View style={styles.logoContainer}>
    
     <BatLogo/>
    </View> 

    <Text>Opens up App.tsx to start working on your app!</Text>
 

  </View>
 )
}