import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import { useFonts } from "expo-font";

export default function App() {

  const [fontsLoaded] = useFonts({
    'roboto':require('./src/assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold':require('./src/assets/fonts/Roboto-Bold.ttf'),
    'roboto-mono':require('./src/assets/fonts/RobotoMono-Bold.ttf'),
  })

  if(!fontsLoaded){
    return null;
  }

  return (
   <NavigationContainer>
      <Routes/>
   </NavigationContainer>
  );
}
