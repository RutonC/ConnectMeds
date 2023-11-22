import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { color } from "../constants/colors";
import Medicines from "../assets/svg/Onboarding_1.svg";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

export default function Onboarding() {

  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Medicines height={231.63} width={327} />
      <View style={styles.card}>
        <Text style={styles.cartTitle}>Discover Pharmacies in Your Region and Find Your Medicines!</Text>
        <Text style={styles.cardDesc}>Explore nearby pharmacies using our interactive map. Quickly find the most convenient options for your needs.</Text>

        <View style={styles.cardFooter}>
          <TouchableOpacity>
            <Text style={styles.buttonTextSkip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>navigate('Login')}>
            <MaterialCommunityIcons name="arrow-right" size={27} color={color.white}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    height: 302,
    width: "100%",
    backgroundColor: color.white,
    padding: 21,
    borderRadius: 9,
    marginTop: 102,
  },
  cartTitle:{
    fontFamily:'roboto-bold',
    fontSize:26,
    color:color.secondary
  },
  cardDesc:{
    fontFamily:'roboto',
    fontSize:16,
    color:color.gray,
    // textAlign:"center",
    marginTop:6
  },
  cardFooter:{
    marginTop:41,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  button:{
    height:58,
    width:58,
    backgroundColor:color.primary,
    borderRadius:58,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonTextSkip:{
    fontFamily:'roboto',
    fontSize:16,
    fontWeight:'600'
  }

});
