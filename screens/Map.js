import { StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

import MapView from "react-native-maps";

function Map() {
  const initialPosition = {
    latitude: 8.4911976,
    longitide: 4.6700633,
    latitudeDelta: 0.00224,
    longitideDelta: 0.0421,
  };

  // 8.4911976,4.6700633

  return (
    <MapView style={styles.root} initialRegion={initialPosition}>
      {" "}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
