import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { color } from "../constants/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

export default function ModalCard() {

  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.carStyle}>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <Image source={{uri:'https://lh5.googleusercontent.com/p/AF1QipMoFFzE-eBriSqjC0pTdJN1WON2X7UnmRWpdMo0=w408-h306-k-no'}} style={styles.img}/>
              <View>
                <Text style={styles.title}>Pharmacy Isabel</Text>
                <Text style={styles.subTitle}>Esturro, Beira - Sofala</Text>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                <MaterialCommunityIcons name="star" size={24} color={color.warn} />
                <Text style={styles.rating} >4.5 (203)</Text>
                </View>

              </View>
          </View>
          <View style={styles.timeStyle}>
            <MaterialCommunityIcons name="clock-outline" size={16} color={color.gray} />
            <Text style={styles.time}>Time: 07:30AM{" "}-{" "}04:30PM</Text>
          </View>
        </View>
        <Button onPress={()=>navigate('Details')} title="More Details"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "65%",
    alignItems: "center",
  },
  carStyle: {
    width: 327,
    height: 214,
    backgroundColor: color.background,
    borderRadius: 9,
    padding: 21,
  },
  card:{
    height:130,
    backgroundColor:color.white,
    borderRadius:9,
    padding:12
  }, 
  img:{
    height:79,
    width:99,
    borderRadius:9
  },
  cardHead:{
    flexDirection:'row',
    justifyContent:"space-between"
  },
  title:{
    fontFamily:'roboto-bold',
    fontSize:20,
    color:color.secondary
  },
  subTitle:{
    fontFamily:'roboto',
    fontSize:12,
    color:color.gray
  },
  rating:{
    fontFamily:'roboto-bold',
    fontSize:12,
    color:color.secondary
  },
  time:{
    fontFamily:'roboto',
    fontSize:12,
    color:color.gray,
    fontWeight:'500'
  },
  timeStyle:{
    flexDirection:"row",
    alignItems:"center",
    gap:5,
    marginTop:16
  }
});
