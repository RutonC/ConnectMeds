import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { color } from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { locations } from "../constants/data";
import ModalCard from "../components/ModalCard";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: -19.8308661,
          longitude: 34.853367,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        showsMyLocationButton
        zoomControlEnabled
      >
        {locations.map((marker) => (
          <Marker
            key={marker.title}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={()=>navigate('Info-Pharmacy')}
          >
          </Marker>
        ))}
      </MapView>

      <View style={styles.header}>
        <TextInput
          placeholder="Search a pharmacy or antibiotics"
          style={styles.InputStyle}
        />
        <TouchableOpacity style={styles.searchButton}>
          <MaterialCommunityIcons
            name="magnify"
            size={32}
            color={color.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: "100%",
    height: "100%",
  },
  header: {
    position: "absolute",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    gap: 8,
  },
  InputStyle: {
    height: 49,
    width: "85%",
    borderRadius: 9,
    backgroundColor: color.white,
    padding: 8,
    fontFamily: "roboto",
    fontSize: 16,
    elevation: 5,
  },
  searchButton: {
    height: 49,
    width: 49,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    elevation: 5,
  },
});
