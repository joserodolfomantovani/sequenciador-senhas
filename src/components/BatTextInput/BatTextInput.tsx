import React from 'react';
import  {styles} from './BatTextInputStyles';
import { View, TextInput} from 'react-native';


export function BatTextInput() {
  return (
  
     <TextInput
     style={styles.inputer}
     placeholder='pass'
   
     />

  );
}