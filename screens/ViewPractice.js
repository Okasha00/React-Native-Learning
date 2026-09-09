import { View,Text, Pressable } from 'react-native';

export default function ViewPractice({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-gray-900">
        Welcome to the View Practice Screen!
      </Text>
      <Pressable className="mt-4 rounded-xl bg-black px-8 py-4" onPress={() => navigation.goBack()}>
        <Text className="text-lg text-white">
          Go back
        </Text>
      </Pressable>
    </View>
  );
}
