import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CutomButton';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const router = useRouter(); 
    const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-white h-full'>
        {/* <View className='mx-2'>
            <Text className='text-2xl font-semibold text-gray-500'>←</Text>
        </View> */}
        <TouchableOpacity className='ml-4' onPress={() => navigation.goBack()}>
            <Text className='text-xl text-gray-500 mt-3'>← Go back</Text>
        </TouchableOpacity>
        <View className='w-10/12 mx-auto mt-10'>
            <View>
                <Text className='text-3xl font-bold'>Enter your phone</Text>
                <Text className='text-gray-500 mt-2 text-md'>You will receive a 4-digit code to verify your account</Text>
            </View>
            <TextInput
                // value={phoneNumber}
                // onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                // style={{ borderWidth: 1, padding: 10, marginBottom: 
                className='bg-gray-100 mt-4 rounded-md px-6 py-3 text-black'
            />
            <Text className='text-gray-500 mt-5 text-md'>
                By clicking continue you agree with our terms. 
            </Text>
            <CustomButton
                title='Continue →'
                containerStyles='bg-[#a738ed] mt-2 py-2'
                handlePress={() => router.push('/otp')}
                textStyles='text-white'
            />
        </View>
    </SafeAreaView>
  )
}

export default SignUp; 