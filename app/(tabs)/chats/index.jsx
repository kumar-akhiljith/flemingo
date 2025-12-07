import { View, Text } from "react-native";

export default function ChatsScreen() {
  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background px-4">
      <Text className="text-light-text dark:text-dark-text text-xl font-semibold">
        Chats
      </Text>
    </View>
  );
}
