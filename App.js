import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ReviewScreen from './screens/ReviewScreen';
import './global.css';


const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-cyan-100">

      {/* Header */}
      <View className="bg-cyan-400 px-6 py-8 items-center">
        <Text className="text-3xl font-bold text-black">
          Welcome to Sameer Store
        </Text>

        <Text className="mt-5 text-base text-green-800 text-center">
          Your one-stop shop for everything you need.
        </Text>
      </View>

      {/* Welcome Section */}
      <View className="px-6 py-6 items-center">
        <Text className="text-2xl font-bold text-gray-900">
          Shop Now 🛍️
        </Text>

        <Text className="mt-4 text-gray-600 text-center">
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
            Starting from $199
          </Text>
        </View>

      </View>

      {/* Contact Us Button */}
      <View className="items-center px-6 py-6">

        <Pressable
        className="rounded-xl bg-green-500 px-8 py-4"
        onPress={() => navigation.navigate('Products')}
        >
          <Text className="text-lg font-bold text-black">
            Go to Products
          </Text>
        </Pressable>

        <Pressable
          className="mt-4 rounded-xl bg-green-500 px-8 py-4"
          onPress={() => navigation.navigate('Review')}
        >
          <Text className="text-lg font-bold text-black">
            View Reviews
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
          name="Products"
          component={ProductsScreen}

        />

        <Stack.Screen
          name="Review"
          component={ReviewScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}