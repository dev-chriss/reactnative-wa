/* eslint-disable no-undef */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {chatStyle} from '../styles/chatStyle';
import allActions from '../store/actions';
import {useDispatch} from 'react-redux';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default ChatHeader = ({item, navigation}) => {
  const dispatch = useDispatch();

  const handleBookmark = () => {
    //todo
  };

  const handleViewProfile = () => {
    navigation.navigate('Profile', {item: item});
  };

  return (
    <View style={chatStyle.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={chatStyle.backButton}
        onPress={() => {
          dispatch(allActions.messages.markReset());
          navigation.navigate('TabNavigator');
        }}>
        <View style={chatStyle.backButtonContent}>
          <MaterialIcons name="arrow-back" style={chatStyle.backButtonIcon} />
          <Image source={{uri: item.image}} style={chatStyle.backButtonImage} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={chatStyle.nameButton}
        onPress={() => {
          handleViewProfile();
        }}>
        <View style={chatStyle.nameContent}>
          <Text style={chatStyle.nameText}>{item.name}</Text>
          <Text style={chatStyle.lastSeen}>Last seen today at 4:13 pm</Text>
        </View>
      </TouchableOpacity>
      <View style={chatStyle.headerIcons}>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="videocam" style={chatStyle.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="call" style={chatStyle.headerIcon} />
        </TouchableOpacity>

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
            <MenuOption
              text="View Profile"
              onSelect={() => handleViewProfile()}
            />
            <MenuOption text="Bookmark" onSelect={() => handleBookmark()} />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};
