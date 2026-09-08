import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import './global.css';

import ViewPractice from './screens/ViewPractice';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}
      <View className="bg-cyan-400 px-6 py-8">
        <Text className="text-3xl font-bold text-black">
          Welcome to Sameer Store
        </Text>

        <Text className="mt-5 text-base text-green-800">
          Your one-stop shop for everything you need.
        </Text>
      </View>

      {/* Welcome Section */}
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-900">
          Shop Now 🛍️
        </Text>

        <Text className="mt-4 text-gray-600">
          Discover our latest products and amazing deals.
        </Text>
      </View>

      {/* Products */}
      <View className="px-6">

        {/* Smartphone */}
        <View className="mb-4 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            📱 Smartphones
          </Text>

          <Text className="mt-2 text-gray-600">
            Latest smartphones at affordable prices.
          </Text>

          <Text className="mt-3 text-lg font-bold text-cyan-600">
            Starting from $199
          </Text>
        </View>

        {/* Laptop */}
        <View className="mb-4 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            💻 Laptops
          </Text>

          <Text className="mt-2 text-gray-600">
            Powerful laptops for work, study and gaming.
          </Text>

          <Text className="mt-3 text-lg font-bold text-cyan-600">
            Starting from $499
          </Text>
        </View>

        {/* Accessories */}
        <View className="mb-6 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            🎧 Accessories
          </Text>

          <Text className="mt-2 text-gray-600">
            Headphones, chargers, cases and more.
          </Text>

          <Text className="mt-3 text-lg font-bold text-cyan-600">
            Starting from $19
          </Text>
        </View>

      </View>

      {/* Contact Us Button */}
      <View className="items-center pb-8">
        <Pressable
          className="rounded-xl bg-black px-8 py-4"
          onPress={() => navigation.navigate('ViewPractice')}
        >
          <Text className="text-lg font-bold text-white">
            Contact Us
          </Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="ViewPractice"
          component={ViewPractice}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}