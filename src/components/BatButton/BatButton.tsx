import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';


export function BatButton() {

    const [pass, setPass] = useState('')

  function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

  return (
    <>
      
     <BatTextInput pass={pass}/>
      <Pressable
      style={styles.button}
      onPress={()=>{handleGenerateButton()}}
      >
       <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        style={styles.button}
      onPress={()=>{console.log("fui pressionado")}}
      >
       <Text style={styles.text}>⚡️ COPY</Text>
      </Pressable>
     
    </>
  );
}