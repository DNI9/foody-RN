import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="h-16 bg-white flex-row items-center gap-2 px-3 py-2">
      <View className="h-full flex-row flex-1 items-center gap-2 px-3 bg-gray-100 rounded-md">
        <Ionicons name="search" size={16} className="opacity-50" />
        <TextInput placeholder="Search Restaurants, Groceries, Dishes" />
      </View>

      <Link href="/" asChild>
        <TouchableOpacity className="p-3 rounded-md bg-gray-100">
          <Ionicons name="options-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
