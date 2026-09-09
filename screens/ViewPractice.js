import { View,Text, Pressable } from 'react-native';

export default function ViewPractice( { navigation } ) {
  return (
    <View className="flex-1 items-center justify-center bg-cyan-400 px-4 py-4">
        <Pressable className="rounded-xl bg-black px-8 py-4">
            <Text className="text-lg text-white">
                Hello World
            </Text>
        </Pressable>

        <Pressable className="mt-4 rounded-xl bg-black px-8 py-4" onPress={() => navigation.goBack()}>
            <Text className="text-lg text-white">
                Go back
            </Text>
        </Pressable>



      

    </View>
  );
}