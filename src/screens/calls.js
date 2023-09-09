import {View} from 'react-native';
import React from 'react';
import {routeStyles} from '../styles/routeStyle';
import CallsComponent from '../components/callsComponent';

export default function Calls() {
  return (
    <View style={routeStyles.container}>
      <CallsComponent />
    </View>
  );
}
