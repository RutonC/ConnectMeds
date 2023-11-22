import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator,StyleSheet, Dimensions, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { color } from '../constants/colors'
import { pharmaceuticalsData } from '../constants/data'
import PharmaceuticalsItem from './PharmaceuticalsItem'


const iconCategory = [
  {
    id: 1,
    name: 'sticker-text-outline'
  },
  {
    id: 2,
    name: 'comment-multiple-outline'
  },
  {
    id: 3,
    name: 'account-box-outline'
  },
]

export default function TabBar() {
  const [categoriesIndex, setCategoriesIndex] = useState(0);
  
  
  const handleTabChange = (index) => {
    setCategoriesIndex(index);
  }

  return (
    <View>
    <View style={styles.container}>
      {iconCategory?.map((item, index) => (
        <TouchableOpacity activeOpacity={1} key={index}
          onPress={() => {
            handleTabChange(index);
          }}>
          <View style={styles.categories}>
             <MaterialCommunityIcons name={item?.name} size={35} style={[styles.iconStyle, categoriesIndex === index && styles.iconIndex]} />  
          </View>
        </TouchableOpacity>
      ))}
    </View>
        
        {/*  */}
         {
          categoriesIndex === 0 && (
           <FlatList
            contentContainerStyle={{gap:8, columnGap:8}}
            data={pharmaceuticalsData}
            renderItem={({item})=><PharmaceuticalsItem item={item}/>}
            numColumns={2}
            keyExtractor={(item, index)=>index.toString()}
           />
          )
         }   
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 24,
    marginTop: 33,
    borderStyle: 'solid',
    borderBottomWidth:1,
    borderBottomColor:color.secondary,
  },
  iconStyle:{
    color: color.secondary
  },
  iconIndex:{
    borderBottomColor: color.primary,
    // borderBottomWidth: 3,
    paddingBottom: 19,
    color: color.primary,
    borderBottomEndRadius:6,
    borderBottomStartRadius:6,
  },
})