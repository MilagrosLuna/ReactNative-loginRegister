import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './app/screens/Login';
import List from './app/screens/List';
import Details from './app/screens/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {onAuthStateChanged,User} from 'firebase/auth';
import {Firebase_AUTH} from './FirebaseConfig';
const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Mi app" component={List} />
      <InsideStack.Screen name="Details" component={Details} />
    </InsideStack.Navigator>
  );
}
function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(Firebase_AUTH, user => {
      console.log('user',user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        { user ? (
          <Stack.Screen
          name="Inside"
          component={InsideLayout}
          options={{headerShown: false}}></Stack.Screen>
        ) : (
          <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}></Stack.Screen>
        ) }
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
