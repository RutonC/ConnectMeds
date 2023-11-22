import { View, Text, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import React from "react";
import { color } from "../constants/colors";
import TabBar from "../components/TabBar";


export default function Details() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://lh5.googleusercontent.com/p/AF1QipM5rLi3LmR8dBzRfqitu1xmAdLODEAH-_NGTTzV=w426-h240-k-no",
        }}
        style={styles.img}
      />
      
      <ScrollView style={styles.content}>
      <Text style={styles.title}>Pharmacy Isabel</Text>
      <Text style={styles.subTitle}>Esturro, Beira - Sofala</Text>
      <Text style={styles.review}>Pharmacy Review</Text>

      <View>
        <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis sagittis ante, in ultrices lorem. Cras tristique dignissim ligula vitae tincidunt. Maecenas aliquet leo sit amet orci hendrerit dictum. Maecenas consequat turpis a metus lobortis viverra. Integer vulputate velit eu urna fringilla rhoncus. Aliquam aliquet urna ac erat cursus, sed gravida mi viverra. In hac habitasse platea dictumst. Fusce pharetra mi ut augue cursus rhoncus.
        </Text>
      </View>

      <TabBar/>
      </ScrollView>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  img: {
    height: 300,
    width: "100%",
  },
  content:{
    paddingHorizontal:24,
    paddingVertical:21
  },
  title:{
    fontFamily:'roboto-bold',
    fontSize:24,
    color:color.secondary
  },
  subTitle:{
    fontFamily:'roboto',
    fontSize:14,
    color:color.gray
  },
  review:{
    fontFamily:'roboto',
    fontSize:12,
    color:color.gray
  },
  desc:{
    fontFamily:'roboto',
    fontSize:13,
    color:color.gray,
    marginTop:12
  }
});
