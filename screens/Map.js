import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

import MapView from "react-native-maps";
import IconButton from "../components/ui/IconButton";

function Map({ navigation, route }) {
  const initialCoords = route.params && {
    lat: route.params.lat,
    lng: route.params.lng,
  };

  const [selectedLocation, setSelectedLocation] = useState(initialCoords);

  const initialPosition = {
    latitude: initialCoords.lat || 8.4911976,
    longitide: initialCoords.lng || 4.6700633,
    latitudeDelta: 0.00224,
    longitideDelta: 0.0421,
  };

  const handlePress = (event) => {
    if (initialCoords) return;

    const { latitude, longitide } = event.nativeEvent.coordinate;

    setSelectedLocation({ latitude, longitide });
  };

  // 8.4911976,4.6700633

  const handlePickedLocation = useCallback(() => {
    if (!selectedLocation) {
      return Alert.alert(
        "No licked location",
        "You have not picked any location - start by clicking any position on the map"
      );
    }

    navigation.navigate("AddPlaces", { coord: selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialCoords) return;

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          color={tintColor}
          onPress={handlePickedLocation}
          size={24}
          icon="save"
        />
      ),
    });
  }, [handlePickedLocation, navigation, initialCoords]);

  return (
    <MapView
      style={styles.root}
      onPress={handlePress}
      initialRegion={initialPosition}
    >
      {selectedLocation && (
        <Marker title="Picked location" coordinate={{ ...selectedLocation }} />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
