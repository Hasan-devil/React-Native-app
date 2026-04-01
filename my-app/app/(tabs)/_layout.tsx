import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/theme";
const _layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarStyle:{
          backgroundColor:Colors.dark.bgSecondary,
        },
        tabBarActiveTintColor: Colors.dark.accentSecondary,
        tabBarInactiveTintColor: Colors.dark.text,
      }}>
      <Tabs.Screen
        name="landingpage"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
