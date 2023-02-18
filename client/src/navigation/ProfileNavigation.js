import { useIsFocused } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import BudgetCycle from "../components/Profile/BudgetCycle";
import Profile from "../components/Profile/Profile";
import Setting from "../components/Profile/Setting";

const Stack = createStackNavigator();

const ProfileNavigation = ({ setTabShown }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    setTabShown(false);
  }, [isFocused]);

  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile">{(props) => <Profile />}</Stack.Screen>
      <Stack.Screen name="Settings">{(props) => <Setting />}</Stack.Screen>
      <Stack.Screen name="BudgetCycle">
        {(props) => <BudgetCycle />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigation;