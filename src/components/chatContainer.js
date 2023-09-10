/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import EmojiPicker from 'rn-emoji-keyboard';
import {chatStyle} from '../styles/chatStyle';
import allActions from '../store/actions';

export default ChatContainer = ({messages, markedId}) => {
  const senderId = 'abc';
  const dispatch = useDispatch();
  const [showEmoji, setShowEmoji] = useState(false);

  const handleSelectMessage = id => {
    dispatch(allActions.messages.markMessage(id));
    if (!showEmoji) {
      setShowEmoji(true);
    }
  };

  const handleSelectEmoji = emojiObject => {
    dispatch(allActions.messages.updateMessage(markedId, emojiObject.emoji));
  };

  const keyExtractor = (item, index) => {
    return index;
  };

  const renderMessage = ({item}) => {
    return (
      <View>
        <View
          style={[
            item.sender === senderId
              ? chatStyle.chatBoxRight
              : chatStyle.chatBoxLeft,
          ]}>
          <TouchableOpacity
            onLongPress={() => {
              handleSelectMessage(item.id);
            }}>
            <Text style={chatStyle.chatText}>{item.message}</Text>
            <View style={chatStyle.chatBottomText}>
              <View
                style={[
                  item.emoji ? chatStyle.emojiLayout : chatStyle.blankEmoji,
                  item.sender === senderId
                    ? chatStyle.emojiRight
                    : chatStyle.emojiLeft,
                ]}>
                {item.emoji ? (
                  <Text style={chatStyle.iconEmoji}>{item.emoji}</Text>
                ) : (
                  <></>
                )}
              </View>
              <View>
                <Text style={chatStyle.chatTime}>{item.time} pm</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={[
              item.sender === senderId
                ? chatStyle.rightArrow
                : chatStyle.leftArrow,
            ]}
          />
          <View
            style={[
              item.sender === senderId
                ? chatStyle.rightArrowOverlap
                : chatStyle.leftArrowOverlap,
            ]}
          />
        </View>
        <View style={{height: 40}} />
      </View>
    );
  };

  return (
    <View style={chatStyle.chatContainer}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={keyExtractor}
          // getItemLayout = {(data, index) => ({
          //   length: 70,
          //   offset: 70 * index,
          //   index
          // })}
        />
      </SafeAreaView>
      <EmojiPicker
        onEmojiSelected={handleSelectEmoji}
        open={showEmoji}
        onClose={() => {
          setShowEmoji(false);
        }}
        disabledCategories={['activities', 'flags', 'objects', 'symbols']}
      />
    </View>
  );
};
