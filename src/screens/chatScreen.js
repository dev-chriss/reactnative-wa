/* eslint-disable no-undef */
import {View} from 'react-native';
import React, {useEffect} from 'react';
import {chatStyle} from '../styles/chatStyle';
import ChatHeader from '../components/chatHeader';
import ChatContainer from '../components/chatContainer';
import ChatMessage from '../components/chatMessage';
import {useDispatch, useSelector} from 'react-redux';
import allActions from '../store/actions';

export default ChatScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const messagesRedux = useSelector(state => state.messages.data);
  const markedIdRedux = useSelector(state => state.messages.markedId);

  useEffect(() => {
    // prevent repeated API call
    if (!(messagesRedux && messagesRedux.length)) {
      fetch(
        'https://private-3f049-chatyoripe.apiary-mock.com/chats/questions',
      ).then(data => {
        // eslint-disable-next-line no-shadow
        return data.json().then(data => {
          dispatch(allActions.messages.setMessages(data));
        });
      });
    }
  }, [dispatch, messagesRedux]);

  return (
    <View style={chatStyle.container}>
      {/* <Image
        source={require("../../assets/wpBackGround.jpg")}
        style={chatStyle.backGrounImage}
      /> */}
      <ChatHeader
        item={route.params.item}
        navigation={navigation}
        markedId={markedIdRedux}
        messages={messagesRedux}
      />
      <ChatContainer messages={messagesRedux} markedId={markedIdRedux} />
      <ChatMessage messages={messagesRedux} markedId={markedIdRedux} />
    </View>
  );
};
