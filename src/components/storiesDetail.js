/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {chatStyle} from '../styles/chatStyle';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default StoriesDetail = ({navigation, route}) => {
  const item = route.params.item;

  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={chatStyle.backButton}
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}>
          <View style={chatStyle.backButtonContent}>
            <MaterialIcons name="arrow-back" style={chatStyle.backButtonIcon} />
            <Image
              source={{uri: item?.image}}
              style={chatStyle.backButtonImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.nameButton}>
          <View style={chatStyle.nameContent}>
            <Text style={chatStyle.nameText}>{item?.name}</Text>
            <Text style={chatStyle.lastSeen}>Last seen today at 4:13 pm</Text>
          </View>
        </TouchableOpacity>
        <View style={chatStyle.headerStories}>
          <Menu>
            <MenuTrigger>
              <MaterialCommunityIcons
                name="dots-vertical"
                style={[chatStyle.headerIcon]}
              />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: {
                  borderRadius: 15,
                  padding: 15,
                  fontSize: 14,
                },
              }}>
              <MenuOption text="View Profile" />
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <Image source={{uri: item?.image}} style={chatStyle.backGrounImage} />
    </View>
  );
};
