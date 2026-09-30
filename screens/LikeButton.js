import { View,Text, Pressable } from "react-native";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';



export default function LikeButton({navigation}) {
    const [isLiked, setisLiked] = useState(false);
    
    const handlePress = () => {
        setisLiked(!isLiked);
    };


    return (
        <View className="flex-1 px-6 py-6 bg-gray-500">
            <Pressable onPress={handlePress}>
                 <Text className = "text-4xl font-bold text-gray-900">
                {isLiked ? "Unlike 💔" : "Like ❤️"}
            </Text>
            </Pressable>

            <Pressable
                      className="mt-9 rounded-xl bg-cyan-400 px-8 py-4"
                      onPress={() => navigation.goBack()}
                    >
                      <Text className="text-lg font-bold text-black">
                        Go To Home Screen
                      </Text>
                    </Pressable>
           
        </View>
    );

}