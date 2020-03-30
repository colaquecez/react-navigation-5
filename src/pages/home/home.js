import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// import { Container } from './styles';

export default function Home() {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Home</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={name => setName(name)}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile', {
            name: name,
          });
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
