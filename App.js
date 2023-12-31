import Map from "./screens/Map";
import { init } from "./util/database";
import { Colors } from "./util/colors";
import AddPlace from "./screens/AddPlace";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";
import { useEffect, useState } from "react";
import IconButton from "./components/ui/IconButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppLoading from "expo-app-loading";
import PlaceDetails from "./screens/PlaceDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbinitialize, setDbInitialize] = useState(false);

  useEffect(() => {
    init().then(() => setDbInitialize(true));
  });

  if (!dbinitialize) {
    return <AppLoading />;
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
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{ title: "Loading..." }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
