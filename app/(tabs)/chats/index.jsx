import { SafeAreaView, Text, View } from 'react-native';

export default function ChatsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chats Screen</Text>
      </View>
    </SafeAreaView>
  );
}