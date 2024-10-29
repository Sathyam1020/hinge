import { View, Text } from 'react-native'
import { Redirect, Stack } from "expo-router";

const Layout = () => {
    const isLogged = false; 
    const loading = false; 
    if (!loading && isLogged) return <Redirect href="/home" />;
  return (
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otp"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
  )
}

export default Layout; 