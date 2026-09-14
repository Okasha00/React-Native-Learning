import { View, Text, Pressable, ScrollView } from 'react-native';
import ProductsScreen from './ProductsScreen';

export default function ViewPractice({ navigation }) {
  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}
      <View className="bg-cyan-400 px-6 py-8">
        <Text className="text-3xl font-bold text-black">
          Practice Screen
        </Text>

        <Text className="mt-5 text-base text-green-800">
          This is where I practice React Native components.
        </Text>
      </View>

      {/* Info Section */}
      <View className="px-6 py-6">
        <Text className="text-2xl font-bold text-gray-900">
          Learning Progress 📚
        </Text>

        <Text className="mt-4 text-gray-600">
          Here's what I've learned so far in this project.
        </Text>
      </View>

      {/* Cards */}
      <View className="px-6">

        {/* Card 1 */}
        <View className="mb-4 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            🧱 Layout Basics
          </Text>

          <Text className="mt-2 text-gray-600">
            View, Text, StyleSheet and Flexbox.
          </Text>
        </View>

        {/* Card 2 */}
        <View className="mb-4 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            🎨 Styling
          </Text>

          <Text className="mt-2 text-gray-600">
            Tailwind CSS with NativeWind.
          </Text>
        </View>

        {/* Card 3 */}
        <View className="mb-6 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            🧭 Navigation
          </Text>

          <Text className="mt-2 text-gray-600">
            Moving between screens with React Navigation.
          </Text>
        </View>


        {/* Card 4 */}
        <View className="mb-6 rounded-2xl bg-white p-5">
          <Text className="text-xl font-bold text-gray-900">
            ⚡ Performance
          </Text>

          <Text className="mt-2 text-gray-600">
            Optimizing React Native apps for speed and efficiency.
          </Text>
        </View>



      </View>

      {/* Go Back Button */}
      <View className="items-center pb-8">
        <Pressable
          className="rounded-xl bg-black px-8 py-4"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-lg font-bold text-white">
            Go Back
          </Text>
        </Pressable>
      </View>
      <View className="items-center pb-3">
        <Pressable
          className="mt-1 rounded-xl bg-green-500 px-8 py-4"
          onPress={() => navigation.navigate('Products')}
        >
          <Text className="font-bold text-white">
            Go to Products
          </Text>
        </Pressable>
      </View>
    
    </ScrollView>
  );
}