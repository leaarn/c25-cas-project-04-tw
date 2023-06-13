import {View, Text, Image} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../utils/styles';

export default function MessageComponent({item, user}: any) {
  // const status = item.user !== user;
  let main_user_id = 2;
  const status = item.sender_id == main_user_id;

  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, {alignItems: 'flex-end'}]
        }>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image source={item.profile_pic} style={styles.mprofilepic} />
          </View>
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, {backgroundColor: 'rgb(194, 243, 194)'}]
            }>
            <Text>{item.message}</Text>
          </View>
        </View>
        <Text style={{marginLeft: 40}}>{item.updated_at}</Text>
      </View>
    </View>
  );
}
