import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'



export default function Input({placeholder,onChangeText, value,password,label}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.inputStyle} secureTextEntry={password} value={value} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical:5
  },
  inputStyle:{
    height:49,
    borderWidth:0.5,
    borderRadius:7,
    fontSize:16,
    paddingLeft:8
  },
  label:{
    fontSize:18,
    marginBottom:5,
    fontWeight:'600'
  }
})