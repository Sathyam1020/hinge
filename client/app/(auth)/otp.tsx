import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const OTPPage = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleOTPSubmit = () => {
    const correctOTP = '1234';

    if (otp === correctOTP) {
      router.replace('/home');
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white ">
      <Text className="text-3xl font-bold text-center mb-6">Enter OTP</Text>
      <TextInput
        className="bg-gray-100 mt-4 rounded-md px-6 py-3 text-black text-center w-full"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={4}
        placeholder="4-digit OTP"
        placeholderTextColor="#aaa"
      />
      <View className="w-48">
        <Button title="Verify OTP" onPress={handleOTPSubmit} color="#4c669f" />
      </View>
    </View>
  );
};

export default OTPPage;
