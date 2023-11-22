import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { color } from '../constants/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function PharmaceuticalsItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image source={{uri:"https://lh5.googleusercontent.com/p/AF1QipM5rLi3LmR8dBzRfqitu1xmAdLODEAH-_NGTTzV=w426-h240-k-no"}} style={styles.img}/>
        <MaterialCommunityIcons name='heart-outline' size={32} color={color.gray}/>
      </View>

      <Text style={styles.textCategory}>{item?.category}</Text>
      <Text style={styles.textTitle}>{item?.title}</Text>
      <Text style={styles.textPrice}>MZN{" "}{item?.price}</Text>
      <View style={[item?.status === 'Available' ? styles.statusContainer : styles.statusContainerUnavailable]}>
        <Text style={[item?.status === 'Available' ? styles.textStatus : styles.textStatusUnavailable]}>{item?.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:136,
    width:154,
    backgroundColor:color.background,
    padding:12,
    borderRadius:9,
    elevation:5,
  },
  head:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:3
  },
  img:{
    width:64,
    height:47,
    borderRadius:9
  },
  textCategory:{
    fontFamily:'roboto',
    fontSize:10,
    color:color.gray
  },
  textTitle:{
    fontFamily:'roboto-bold',
    fontSize:12,
    color:color.secondary
  }, 
  textPrice:{
    fontFamily:'roboto-mono',
    fontSize:12,
    color:color.secondary
  },
  statusContainer:{
    height:25,
    borderWidth:0.5,
    borderColor:color.primary,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:color.primary_opacity_23,
    borderRadius:6,
  },
  textStatusAvailable:{
    fontFamily:'roboto-bold',
    fontSize:13,
    color:color.primary
  },
  
  statusContainerUnavailable:{
    height:25,
    borderWidth:0.5,
    borderColor:color.danger,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:color.danger_opacity_23,
    borderRadius:6,
  },
  textStatusUnavailable:{
    fontFamily:'roboto-bold',
    fontSize:13,
    color:color.danger
  },
  
})