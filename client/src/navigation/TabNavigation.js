import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import InitialNavigation from "./InitialNavigation";
import PersonalNavigation from "./PersonalNavigation";
import ProfileNavigation from "./ProfileNavigation";
import SplitNavigation from "./SplitNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const navigation = useNavigation();
  const [tabShown, setTabShown] = useState(true);

  useEffect(() => {
    console.log(tabShown);
  }, [tabShown]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Personal"
      >
        <Tab.Screen
          name="Initial"
          options={{
            tabBarStyle: { display: "none" },
          }}
        >
          {(props) => (
            <InitialNavigation
              navigation={navigation}
              setTabShown={setTabShown}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="Personal"
          options={{
            tabBarStyle: { display: "none" },
          }}
        >
          {(props) => (
            <PersonalNavigation
              setTabShown={setTabShown}
              navigation={navigation}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name="ProfileNavigation"
          options={{
            tabBarStyle: { display: "none" },
          }}
        >
          {(props) => (
            <ProfileNavigation
              setTabShown={setTabShown}
              navigation={navigation}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Split" options={{ tabBarStyle: { display: "none" } }}>
          {(props) => <SplitNavigation navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>

      {/* Tab navigation */}
      {tabShown && (
        <View className="bg-[#2A2E39] flex flex-row justify-between py-3 px-16 rounded-tl-3xl rounded-r-3xl  absolute bottom-0 w-full">
          <TouchableOpacity
            className="items-center"
            onPress={() => navigation.navigate("Personal")}
          >
            <FontAwesome5 name="user" size={18} color={"#6561D2"} />
            <Text className="text-[#6561D2] text-xs mt-2">Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="items-center "
            onPress={() => navigation.navigate("Split")}
          >
            <Feather name="user" size={24} color={"#6561D2"} />
            <Text className="text-[#6561D2] text-xs mt-1">Split</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default TabNavigation;
