import { View, Text, ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
const signUp = () => {
    const [showPassWord, setShowPassWord] = React.useState(true)
    const [showConfirmPassWord, setShowConfirmPassWord] = React.useState(true)
    const handleSubmit=()=>{
        router.replace('/(tabs)')
    }
  return (
    <ScrollView >
        <View className='h-screen items-center justify-center'>
            <Text className='text-4xl font-bold'>Create Account</Text>
            <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='User name'/>
            <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Email'/>
            <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Password' secureTextEntry={showPassWord}/>
            <TouchableOpacity onPress={()=>setShowPassWord(!showPassWord)} className='absolute translate-y-[36px] translate-x-32'>
                <MaterialIcons name={showPassWord ? 'visibility' : 'visibility-off'} size={24} color="black" />
            </TouchableOpacity>
            <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Confirm Password' secureTextEntry={showConfirmPassWord}/>
            <TouchableOpacity onPress={()=>setShowConfirmPassWord(!showConfirmPassWord)} className='absolute translate-y-[102px] translate-x-32'>
                <MaterialIcons name={showConfirmPassWord ? 'visibility' : 'visibility-off'} size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className='bg-blue-500 w-80 rounded-lg p-2 mt-5 items-center justify-center' onPress={()=>{handleSubmit()}}>
                <Text className='text-white'>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default signUp