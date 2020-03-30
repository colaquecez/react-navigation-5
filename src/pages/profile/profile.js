import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// import { Container } from './styles';

export default function Profile({route}) {
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (route.params?.name) {
  //   }
  // }, [route.params?.name]);

  return (
    <View>
      <Text>Profile</Text>

      <Text>{route.params?.name}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            name: 'Name params here',
          });
        }}>
        <Text>Create a new Post</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.setOptions({title: 'Updated!'});
        }}>
        <Text>Update Title</Text>
      </TouchableOpacity>
    </View>
  );
}
