import { View,Text, Pressable } from "react-native";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native';



export default function LikeButton({navigation}) {
    const [isLiked, setisLiked] = useState(false);
    
    const handlePress = () => {
        setisLiked(!isLiked);
    };


    return (
        <View className="flex-1 px-6 py-6">
            <Pressable onPress={handlePress}>
                 <Text className = "font-bold text-rose-700">
                {isLiked ? "Unlike 💔" : "Like ❤️"}
            </Text>
            </Pressable>
           
        </View>
    );

}