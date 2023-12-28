import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./util/colors";
import Map from "./screens/Map";
import { useEffect, useState } from "react";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbinitialize, setDbInitialize] = useState(false);

  useEffect(() => {
    init().then(() => setDbInitialize(true));
  });

  if (!dbinitialize) {
    return;
  }

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: Colors.primary800 },
            headerTintColor: Colors.primary800,
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favourite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  icon={"add"}
                  size={24}
                  onPress={() => navigation.navigate("AddPlaces")}
                />
              ),
            })}
          />

          <Stack.Screen name="AddPlaces" component={AddPlace} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
