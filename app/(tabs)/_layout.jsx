import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


const SIGNAL_GREEN_HEX = '#DEFF3C'; 
const TAB_BAR_BACKGROUND = '#121212';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: SIGNAL_GREEN_HEX, 
        tabBarStyle: {
          backgroundColor: TAB_BAR_BACKGROUND,
          borderTopColor: TAB_BAR_BACKGROUND,
          borderTopWidth: 1, 
        },
      }}
    >
      <Tabs.Screen 
        name="rentals/index" 
        options={{ 
          title: "Rentals",
          tabBarLabel: "Rentals",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings/index" 
        options={{ 
          title: "Settings",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}