import { Stack, Redirect } from "expo-router"; 
import { useColorScheme, View } from 'react-native';
// import { AuthProvider, useAuth } from '../providers/AuthProvider';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}