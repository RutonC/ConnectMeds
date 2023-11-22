import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../constants/colors'

export default function Button({title, onPress, }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    height:40,
    backgroundColor:color.primary,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 9,
    marginTop:12
  },
  title:{
    fontFamily:'roboto-bold',
    fontSize:18,
    color:color.white
  }
})