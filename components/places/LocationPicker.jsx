import { useEffect, useState } from "react";
import { Colors } from "../../util/colors";
import OutlinedButton from "../ui/OutlinedButton";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { getLocationPreview } from "../../util/location";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
} from "expo-location";

function LocationPicker() {
  const [locationPosition, setLocationPosition] = useState({});

  const [locationPermissionInformation, requestPermissions] =
    useForegroundPermissions();

  const navigation = useNavigation();

  const route = useRoute();

  const isFocused = useIsFocused();

  const verifyLocation = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissions = await requestPermissions();

      return permissions.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission",
        "This app needs permission to your location to work properly"
      );

      return false;
    }

    return true;
  };

  const handleCurrentLocation = async () => {
    const hasPermission = await verifyLocation();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setLocationPosition({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  useEffect(() => {
    if (isFocused && route.params.coord) {
      setLocationPosition({
        lat: route.params.coord.latitude,
        lng: route.params.coord.longitude,
      });
    }
  }, [isFocused, route.params]);

  const handlePickLocation = () => {
    navigation.navigate("Map");
  };

  let content = <Text>There is no location yet - start by picking one</Text>;

  if (locationPosition) {
    content = (
      <Image
        style={styles.image}
        source={{
          uri: getLocationPreview(locationPosition.lat, locationPosition.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.container}>{content}</View>

      <View style={styles.buttonContainer}>
        <OutlinedButton icon="location" onPress={handleCurrentLocation}>
          current location
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={handlePickLocation}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    borderRadius: 4,

    marginVertical: 10,
    overflow: "hidden",
  },

  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});
