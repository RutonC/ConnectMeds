import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import {color} from '../constants/colors'
import Profile from "../screens/Profile";
import ModalCard from "../components/ModalCard";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {


  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="onboarding"  component={Onboarding} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Home" component={TabBottom} options={{
          headerShown:false
        }} />
        <Stack.Screen name="Details" component={Details} options={{
          headerShown:false
        }}/>
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal', headerShown:false}}>
        <Stack.Screen name="Info-Pharmacy" component={ModalCard} options={{
          presentation: 'transparentModal'
        }}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}

function TabBottom(){
  return(
    <Tab.Navigator screenOptions={{tabBarShowLabel:false,headerShown:false,tabBarHideOnKeyboard:true}}>
      <Tab.Screen name="TabHome" component={Home} options={{
          tabBarIcon:({size,color})=> <MaterialCommunityIcons name="map-search-outline" size={size} color={color}/>,
          tabBarActiveTintColor:color.primary
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon:({size,color})=> <MaterialCommunityIcons name="account" size={size} color={color}/>,
          tabBarActiveTintColor:color.primary
        }}/>
    </Tab.Navigator>
  )
}