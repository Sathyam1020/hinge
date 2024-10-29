import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot, Stack } from 'expo-router';

const _layout = () => {
  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  )
}

export default _layout; 