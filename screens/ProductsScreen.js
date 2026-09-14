import {Text, View} from 'react-native';
import React from 'react';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function ProductsScreen({navigation}) {
  return (

     <ScrollView className="flex-1 bg-gray-100">
        {/* Front Screen */}
    <View className="bg-cyan-400 px-6 py-8">
      <Text className="text-3xl font-bold text-gray-900">
        Products Lists
      </Text>
      </View>

      {/* Products List */}
<View className="px-6 py-6">

  {/* Item 1 */}
  <View className="mb-4 rounded-2xl bg-white p-5">
    <Text className="text-xl font-bold text-gray-900">
      📱 Smartphone
    </Text>
    <Text className="mt-3 text-lg font-bold text-cyan-600">
                Starting from $199
              </Text>
  </View>

  {/* Item 2 */}
  <View className="mb-4 rounded-2xl bg-white p-5">
    <Text className="text-xl font-bold text-gray-900">
      💻 Laptop
    </Text>
    <Text className="mt-3 text-lg font-bold text-cyan-600">
                Starting from $699
              </Text>
  </View>

  {/* Item 3 */}
  <View className="mb-4 rounded-2xl bg-white p-5">
    <Text className="text-xl font-bold text-gray-900">
      🎧 Headphones
    </Text>
    <Text className="mt-3 text-lg font-bold text-cyan-600">
                Starting from $234
              </Text>
  </View>

  {/* Item 4 */}
  <View className="mb-4 rounded-2xl bg-white p-5">
    <Text className="text-xl font-bold text-gray-900">
      ⌚ Smart Watch
    </Text>
    <Text className="mt-3 text-lg font-bold text-cyan-600">
                Starting from $149
              </Text> 
  </View>

   {/* Item 5 */}
  <View className="mb-4 rounded-2xl bg-white p-5">
    <Text className="text-xl font-bold text-gray-900">
      🖱️ Mouse
    </Text>
    <Text className="mt-3 text-lg font-bold text-cyan-600">
                Starting from $29
              </Text>
    </View>


</View>

  

     {/* Go Back Button */}
        <View className="items-center pb-8">
        <Pressable
          className="mt-4 rounded-xl bg-green-500 px-8 py-4"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-lg font-bold text-black">
            Go To Home
          </Text>
        </Pressable>
      </View>

     </ScrollView>
    
      
  );
}