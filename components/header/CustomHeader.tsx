import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "../BottomSheet";
import SearchBar from "./SearchBar";

export default function CustomHeader() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <BottomSheet ref={bottomSheetModalRef} />

      <View className="h-20 bg-white flex-row items-center justify-between gap-5 px-5">
        <Image
          className="h-8 w-8"
          source={require("@/assets/images/bike.png")}
        />

        <TouchableOpacity className="flex-1" onPress={openModal}>
          <Text className="text-gray-400 text-base">Deliver - Now</Text>
          <View className="flex-row items-center gap-2">
            <Text className="text-lg font-extrabold">Select location</Text>
            <Ionicons
              name="chevron-down"
              size={20}
              className="text-primary"
              color={colors.primary}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-3 rounded-lg">
          <Ionicons name="person-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <SearchBar />
    </SafeAreaView>
  );
}
