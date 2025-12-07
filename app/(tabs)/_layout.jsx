// app/(tabs)/_layout.tsx (The Final, Cleaned Version)

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; 

import React from 'react';

const SIGNAL_GREEN_HEX = '#3AB54B'; 
const TAB_BAR_BACKGROUND = '#f7f7f7';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: SIGNAL_GREEN_HEX, 
        tabBarStyle: {
          backgroundColor: TAB_BAR_BACKGROUND,
          borderTopColor: 'rgb(230, 230, 230)',
          borderTopWidth: 1, 
        },
      }}
    >
      <Tabs.Screen 
        name="chats/index" 
        options={{ 
          title: "Chats",
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="contacts/index" 
        options={{ 
          title: "Contacts",
          tabBarLabel: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
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