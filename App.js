import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_page from './src/Login_page';
import Profile_page from './src/Profile_page';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name='Login'
        component={Login_page}/>

        <Stack.Screen
        name='Profile'
        component={Profile_page}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App