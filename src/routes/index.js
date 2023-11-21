import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Onboarding from "../screens/Onboarding";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {


  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="onboarding"  component={Onboarding} options={{
          headerShown:false
        }}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}