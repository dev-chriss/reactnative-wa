import {View} from 'react-native';
import React from 'react';
import {routeStyles} from '../styles/routeStyle';
import StoriesComponent from '../components/storiesComponent';

export default function Stories({sNavigator}) {
  return (
    <View style={routeStyles.container}>
      <StoriesComponent navigation={sNavigator} />
    </View>
  );
}
