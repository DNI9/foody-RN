import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BottomSheet = forwardRef<BottomSheetModal>((_props, ref) => {
  const snapPoints = useMemo(() => ["40%"], []);
  const { dismiss } = useBottomSheetModal();

  const renderBackdrop = useCallback<React.FC<BottomSheetBackdropProps>>(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      ref={ref}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ backgroundColor: "lightgray", width: 50 }}
    >
      <BottomSheetView className="mx-5 gap-6">
        <View
          className="flex-row mx-auto gap-1 bg-gray-100 rounded-md"
          id="toggle"
        >
          <TouchableOpacity className="bg-primary px-8 py-3 rounded-md shadow-md shadow-primary">
            <Text>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-8 py-3">
            <Text>Pickup</Text>
          </TouchableOpacity>
        </View>

        <View className="gap-5">
          <Text className="text-2xl font-medium">Your location</Text>
          <TouchableOpacity className="flex-row gap-3 items-center">
            <Ionicons name="location-outline" size={20} color="gray" />
            <Text className="text-xl">Kolkata</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.primary}
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>

        <View className="gap-5">
          <Text className="text-2xl font-medium">Arrival time</Text>
          <TouchableOpacity className="flex-row gap-3 items-center">
            <Ionicons name="time-outline" size={20} color="gray" />
            <Text className="text-xl">In 5 minutes</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.primary}
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => dismiss()}
          className="bg-primary h-14 rounded-md flex-row justify-center items-center shadow-primary shadow-md"
        >
          <Text className="text-lg uppercase tracking-wider">Confirm</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheet;
