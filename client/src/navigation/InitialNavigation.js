import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GettingStarted from "../components/Initial/GettingStarted";
import MobileNumber from "../components/Initial/MobileNumber";
import EnterOTP from "../components/Initial/EnterOTP";

const Stack = createStackNavigator();

const InitialNavigation = ({ navigation, setTabShown }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    setTabShown(false);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="MobileNumber"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="GetStarted">
        {(props) => <GettingStarted navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="MobileNumber">
        {(props) => (
          <MobileNumber
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="EnterOTP">
        {(props) => (
          <EnterOTP navigation={navigation} phoneNumber={phoneNumber} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default InitialNavigation;
