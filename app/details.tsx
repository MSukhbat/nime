import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StatusBar,
  Pressable,
} from "react-native";
import useSWR from "swr";
import Constants from "expo-constants";
import { Search } from "@/icons/search-icon";
import { Notification } from "@/icons/notif-icon";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabOneScreen() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    "https://kitsu.io/api/edge/anime",
    fetcher
  );

  useEffect(() => {
    const stringValue = JSON.stringify(data);
    AsyncStorage.setItem("anime", stringValue);
  }, [data]);
  if (isLoading)
    return (
      <Text style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Image source={require("@/icons/frame")} /> */}
      </Text>
    );
  if (error) return <Text>Error...</Text>;
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/originals/69/e2/f9/69e2f929857dad2286e32a89963d131f.jpg",
          }}
          resizeMethod="resize"
        >
          <View
            style={{
              paddingLeft: 50,
              paddingTop: 50,
              width: 380,
              minHeight: 400,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 90,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: 100,
              }}
            >
              <Link href="/notifications">
                <Notification />
              </Link>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: 380,
              justifyContent: "space-between",
              height: 60,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontFamily: "Urbanist", fontSize: 20, fontWeight: 800 }}
            >
              Title
            </Text>
            <Text>Icons</Text>
          </View>
          <View>
            <Text>details</Text>
          </View>
          <View>
            <Text>Episodes</Text>
            <Text>episodes here</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 324,
    height: 400,
  },
  Title: {
    width: 100,
    height: 100,
    color: "#06C149",
  },
  item: {
    fontSize: 15,
    width: 250,
  },
  prou: {
    padding: 30,
  },
  itng: {
    display: "flex",
    flexDirection: "row",
    width: 390,
    justifyContent: "space-between",
  },
  column: {
    width: 150,
    height: 120,
  },
});
