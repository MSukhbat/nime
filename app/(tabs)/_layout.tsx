import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { HomeIcon } from "@/icons/home-icon";
import { Calendar } from "@/icons/calendar-icon";
import { ListIcon } from "@/icons/mylist-icon";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({}) => <HomeIcon />,
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "calendar",
          tabBarIcon: ({  }) => <Calendar />,
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: "ListIcon",
          tabBarIcon: ({}) => <ListIcon />,
        }}
      />
    </Tabs>
  );
}
