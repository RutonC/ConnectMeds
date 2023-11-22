import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import { color } from '../constants/colors'
import Profile from "../screens/Profile";
import ModalCard from "../components/ModalCard";
import Details from "../screens/Details";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {


  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Home" component={TabBottom} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: false }}>
        <Stack.Screen name="Info-Pharmacy" component={ModalCard} options={{
          presentation: 'transparentModal'
        }} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

function TabBottom() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarHideOnKeyboard: true }}>
      <Tab.Screen name="TabHome" component={Home} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="map-search-outline" size={size} color={color} />,
        tabBarActiveTintColor: color.primary
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />,
        tabBarActiveTintColor: color.primary
      }} />
    </Tab.Navigator>
  )
}