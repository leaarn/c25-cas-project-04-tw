import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, TextInput, Text, FlatList, Pressable, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageComponent from '../../components/ChatComponents/MessageComponent';
import {styles} from '../../utils/styles';
import {useGetMessages} from '../../hooks/messageAPI';
import {useCreateMessages} from '../../hooks/messageAPI';
import {useMutation, useQueryClient} from '@tanstack/react-query';
// import socket from '../../utils/socket';

const Messaging = ({route, navigation}: any) => {
  const getMessages = useGetMessages();
  const onCreateMessages = useMutation(
    async (data: {message: string}) => useCreateMessages(data.message),
    {
      onSuccess: () => queryClient.invalidateQueries(['message']),
    },
  );

  const queryClient = useQueryClient();
  const [chatMessages, setChatMessages] = useState([
    // {
    //   sender_id: 1,
    //   receiver_id: 2,
    //   updated_at: '2023-06-12T03:40:54.192Z',
    //   message: 'Accusantium quas aliquam culpa similique quis laudantium ad.',
    //   sender_username: 'Mui',
    //   receiver_username: 'Julia',
    // },
    // {
    //   sender_id: 2,
    //   receiver_id: 1,
    //   updated_at: '2023-06-12T03:40:54.192Z',
    //   message: 'Possimus dolorem nemo.',
    //   sender_username: 'Mui',
    //   profile_pic: require('../../assets/img/mui.jpeg'),
    //   receiver_username: 'Doug_Beer50',
    // },
  ]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  // Access the chatroom's name

  const {target_username} = route.params;

  // This function gets the own username saved on AsyncStorage
  const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      console.error('Error while loading username!');
    }
  };

  // Sets the header title to the name chatroom's name
  useLayoutEffect(() => {
    navigation.setOptions({title: target_username});
    getUsername();
  }, []);

  /*
        This function gets the time the user sends a message, then 
        logs the username, message, and the timestamp to the console.
     */
  const handleNewMessage = () => {
    onCreateMessages.mutate({message});
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;

    console.log({
      message,
      user,
      timestamp: {hour, mins},
    });
  };

  return (
    <View style={styles.messagingscreen}>
      <View
        style={[
          styles.messagingscreen,
          {paddingVertical: 15, paddingHorizontal: 10},
        ]}>
        {chatMessages[0] ? (
          <FlatList
            data={chatMessages}
            renderItem={({item}) => (
              <MessageComponent item={item} user={user} />
            )}
            // keyExtractor={item => item}
          />
        ) : (
          ''
        )}
      </View>

      <View style={styles.messaginginputContainer}>
        <TextInput
          style={styles.messaginginput}
          onChangeText={value => setMessage(value)}
        />
        <Pressable
          style={styles.messagingbuttonContainer}
          onPress={handleNewMessage}>
          <View>
            <Text style={{color: '#f2f0f1', fontSize: 20}}>Send</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Messaging;
