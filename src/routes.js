import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Dashboard from './pages/dashboard/dashboad';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function DashbordBottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(255,216,0,0.7)',
          },
        }}>
        <Stack.Screen
          name="Profile"
          options={{
            headerStyle: {
              backgroundColor: 'rgba(150,0,0,0.9)',
            },
            headerLayoutPreset: 'center',
            headerTintColor: 'white',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  alert('Left Header');
                }}>
                <Text>Alerta</Text>
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          }}
          component={Profile}
        />
        <Stack.Screen
          name="Home"
          component={DashbordBottom}
          options={({route}) => ({title: route.params?.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
