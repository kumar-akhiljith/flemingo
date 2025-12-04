import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen 
        name="chats/index" 
        options={{ 
          title: "Chats",
          tabBarLabel: "Chats",
        }} 
      />
      <Tabs.Screen 
        name="contacts/index" 
        options={{ 
          title: "Contacts",
          tabBarLabel: "Contacts",
        }} 
      />
      <Tabs.Screen 
        name="settings/index" 
        options={{ 
          title: "Settings",
          tabBarLabel: "Settings",
        }} 
      />
    </Tabs>
  );
}