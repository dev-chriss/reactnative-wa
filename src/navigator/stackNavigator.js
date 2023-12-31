import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from '../screens/chatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StoriesDetail from '../components/storiesDetail';
import TabNavigator from './tabNavigator';
const RootStack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="StoriesDetail"
          component={StoriesDetail}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </>
  );
}
