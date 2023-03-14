import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { deleteGrpTxs, grpDelete } from "../api/group";

const GeneralNavbar = (props) => {
  const navigation = useNavigation();

  const handleDelete = async () => {
    if (props?.deleteHandle === "grpDelete") {
      const data = await grpDelete(props.grpId);
      if (data?.success) {
        Alert.alert("Group Deleted Successfully!");
        navigation.navigate("MainSplit");
      } else {
        Alert.alert(data?.msg);
      }
    } else if (props?.deleteHandle === "grpExpeseDetails") {
      const data = await deleteGrpTxs(props.grpId, props.item._id);
      if (data?.success) {
        Alert.alert("Transaction Deleted Successfully!");
        navigation.goBack(null);
      } else {
        Alert.alert(data?.msg);
      }
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-between items-center mt-2 mx-4 pb-2">
        <View className="flex flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate(props.navigationPath)}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white ml-10 text-lg">{props.title}</Text>
        </View>
        <View className="flex flex-row items-center space-x-4">
          {props?.showDeleteIcon && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("GrpAddExpense", {
                  item: props.item,
                  grpId: props.grpId,
                  tag: "edit",
                });
              }}
            >
              <FontAwesome name="edit" size={19} color="#6D67C2" />
            </TouchableOpacity>
          )}
          {props?.showDeleteIcon && (
            <TouchableOpacity
              onPress={() => {
                handleDelete();
              }}
            >
              <MaterialIcons
                name="delete"
                size={22}
                color="#6D67C2"
                className=" absolute"
              />
            </TouchableOpacity>
          )}
          {props?.expense && (
            <TouchableOpacity
              onPress={() => {
                props.setShowDate(true);
              }}
            >
              <MaterialIcons name="date-range" size={22} color="#5F68D1" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default GeneralNavbar;
