import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import { Container } from './styles';

export default function Dashboard() {
  const navigation = useNavigation();
  // const {name, carNumber} = useRoute().params;

  return (
    <View>
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
