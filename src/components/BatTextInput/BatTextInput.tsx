import React from 'react';
import  {styles} from './BatTextInputStyles';
import { View, TextInput} from 'react-native';

interface BatTextInputProps{
  pass:string
}

export function BatTextInput(props:BatTextInputProps) {
  return (
  
     <TextInput
     style={styles.inputer}
     placeholder='pass'
     value={props.pass}
     />

  );
}