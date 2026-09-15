import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {ScrollView} from 'react-native';

export default function ReviewScreen({navigation}) {
    return (
        <ScrollView className="flex-1 bg-cyan-100">
        {/*Header*/}
        <View className="bg-cyan-400 px-6 py-8 items-center">
        <Text className="text-3xl font-bold text-gray-900">
            Review Screen
        </Text>
        </View>

        {/* Welcome Section */}
              <View className="items-center px-6 py-6">
                <Text className="text-2xl font-bold text-red-900">
                  Customer Reviews 
                </Text>
        
                <Text className="mt-4 font-extrabold text-orange-600">
                  Read what our customers are saying about our products.
                </Text>
              </View>

        {/* Products List */}
              <View className="px-6 py-6">
        
          {/* Item 2 */}
          <View className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              💻 Review of Laptops 
            </Text>
            <Text className="mt-3 text-lg font-bold text-cyan-600">
                Rating : 4.5/5
            </Text>

            <Text className="mt-1 text-sm text-green-800">
                Review: Great performance and battery life.
            </Text>
            </View>

            {/* Item 3 */}
          <View className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              🎧 Review of Headphones
            </Text>
            <Text className="mt-3 text-lg font-bold text-cyan-600">
                Rating : 3.5/5
            </Text>

            <Text className="mt-1 text-sm text-green-800">
                Review: Normal performance and battery life.
            </Text>
            
          </View>


          {/* Item 4 */}
          <View className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              🖱️  Review of Mouse
            </Text>
            <Text className="mt-3 text-lg font-bold text-cyan-600">
                Rating : 3.5/5
            </Text>

            <Text className="mt-1 text-sm text-green-800">
                Review: Fine performance and battery life.
            </Text>
            
          </View>

           {/* Item 5 */}
          <View className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              🔌  Review of Data Cable
            </Text>
            <Text className="mt-3 text-lg font-bold text-cyan-600">
                Rating : 3.5/5
            </Text>

            <Text className="mt-1 text-sm text-green-800">
                Review: Fast charging and reliable connection.
            </Text>
            
          </View>


          {/* Item 6 */}
          <View className="mb-4 rounded-2xl bg-white p-5">
            <Text className="text-xl font-bold text-gray-900">
              🔋 Review of Laptop Battery
            </Text>
            <Text className="mt-3 text-lg font-bold text-cyan-600">
                Rating : 4/5
            </Text>

            <Text className="mt-1 text-sm text-green-800">
                Review: Fast charging and reliable connection.
            </Text>
            
          </View>
        
        </View>

        {/* Go Back Button */}
        <View className="items-center pb-8">
            <Pressable
            className="rounded-xl bg-green-500 px-8 py-4"
            onPress={() => navigation.goBack()}
            >
                <Text className="text-lg font-bold text-black">
                    Go To Home Screen
                  </Text>
                </Pressable>
              </View>

        </ScrollView>
    );
}