import { BorderRadius, Colors } from "@/constants/Theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomHeader() {
  return (
    <SafeAreaView style={$safeArea}>
      <View style={$container}>
        <Image style={$bike} source={require("@/assets/images/bike.png")} />

        <TouchableOpacity style={$titleContainer}>
          <Text style={$title}>Deliver - Now</Text>
          <View style={$locationName}>
            <Text style={$subtitle}>Select location</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={$profileBtn}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const $safeArea = {
  flex: 1,
  backgroundColor: "#fff",
};

const $container: ViewStyle = {
  height: 75,
  backgroundColor: Colors.light,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 20,
  paddingHorizontal: 20,
};

const $bike: ImageStyle = {
  width: 30,
  height: 30,
};

const $titleContainer: ViewStyle = {
  flex: 1,
};

const $title: TextStyle = {
  color: Colors.medium,
  fontSize: 14,
};

const $subtitle: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
};

const $locationName: ViewStyle = {
  flexDirection: "row",
  gap: 2,
  alignItems: "center",
};

const $profileBtn: ViewStyle = {
  backgroundColor: Colors.lightGrey,
  padding: 10,
  borderRadius: BorderRadius.md,
};
