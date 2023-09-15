import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const chatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121b22',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    // height: height * 8 / 100,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#1f2c34',
  },
  backButton: {
    width: '20%',
    height: '80%',
  },
  backButtonIcon: {
    fontSize: 25,
    color: 'white',
  },
  backButtonImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: 5,
  },
  backButtonContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameButton: {
    width: '50%',
    height: '100%',
    marginLeft: 15,
  },
  nameContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 4,
  },
  nameText: {
    fontSize: 15,
    color: '#ecf4f6',
    fontWeight: '700',
  },
  lastSeen: {
    color: '#cfd7dc',
    fontSize: 12,
    fontWeight: '500',
  },
  headerStories: {
    width: '25%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerIcons: {
    width: '25%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButton: {
    height: '80%',
    width: '33%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 25,
    color: 'white',
    marginRight: 10,
  },
  messageContent: {
    width: '100%',
    height: (height * 7) / 100,
    position: 'absolute',
    bottom: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  messageBox: {
    width: '80%',
    height: '100%',
    backgroundColor: '#1f2c34',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 5,
    marginRight: 10,
  },
  messageButton: {
    width: 35,
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInput: {
    height: '80%',
    width: '60%',
    alignItems: 'center',
    color: 'white',
  },
  messageIcon: {
    fontSize: 25,
    color: '#8b99a4',
  },
  voiceMessageButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#00a884',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 5,
  },
  voiceMessageIcon: {
    fontSize: 30,
    color: 'white',
  },
  chatContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    // paddingHorizontal:10,
    paddingBottom: 65,
    justifyContent: 'flex-end',
    zIndex: -1,
    paddingTop: 62,
  },
  chatBoxRight: {
    backgroundColor: '#E0F6CA',
    padding: 15,
    marginLeft: '10%',
    marginRight: '5%',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  chatBoxLeft: {
    backgroundColor: '#fff',
    padding: 15,
    marginLeft: '5%',
    maxWidth: '80%',
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  chatText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  chatBottomText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0,
  },
  emojiLayout: {
    position: 'relative',
    top: 46,
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#FFF',
    padding: 6,
  },
  blankEmoji: {
    width: 30,
    height: 30,
  },
  iconEmoji: {
    borderRadius: 50,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  emojiLeft: {
    left: 60,
  },
  emojiRight: {},
  chatTime: {
    right: 0,
    textAlign: 'right',
    fontSize: 12,
  },
  backGrounImage: {
    position: 'absolute',
    zIndex: -1,
    width: width,
    height: '100%',
    objectFit: 'scale-down',
  },
  leftArrow: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: 30,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -15,
  },
  rightArrow: {
    position: 'absolute',
    backgroundColor: '#E0F6CA',
    width: 30,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -15,
  },
  leftArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#121b22',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 40,
    left: -20,
  },
  rightArrowOverlap: {
    position: 'absolute',
    backgroundColor: '#121b22',
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 40,
    right: -20,
  },
});
