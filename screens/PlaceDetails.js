import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../util/colors";
import OutlinedButton from "../components/ui/OutlinedButton";

function PlaceDetails() {
  const onViewMap = () => {};

  return (
    <ScrollView>
      <Image style={styles.image} />

      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.text}>Adress</Text>
        </View>

        <OutlinedButton icon="map" onPress={onViewMap}>
          {" "}
          View on Map{" "}
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "35%",
    minHeight: 300,
  },

  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  addressContainer: {
    textAlign: "center",
  },

  text: {
    color: Colors.primary500,
    fontWeight: "bold",
    fontSize: 16,
  },
});
