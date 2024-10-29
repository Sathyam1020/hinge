import { View, Text } from 'react-native'
import { Redirect, router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CutomButton';


const index = () => {

    const loggedIn = false; 
    const loading = false;
    if (!loading && loggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className='bg-[#a738ed] h-full flex items-center justify-center'>
        <View className='w-full'>
            <View>
                <Text className='text-center text-8xl font-bold text-white'>
                    Hinge
                </Text>
                <Text className='text-center text-white font-semibold mt-5 text-xl'>
                    Find your date
                </Text>
            </View>
        </View>
        <View className='w-8/12'>
            <CustomButton
                title="Login"
                handlePress={() => router.push("/sign-in")}
                containerStyles="mt-7 bg-white px-8 rounded-full w-full shadow-xl py-3"
            />
            <CustomButton
                title="Sign Up"
                handlePress={() => router.push("/sign-up")}
                containerStyles="mt-7 bg-white px-8 rounded-full w-full shadow-xl py-3"
            />
        </View>
    </SafeAreaView>
  )
}

export default index; 