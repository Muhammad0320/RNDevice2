import { FlatList, StyleSheet, Text, View } from "react-native";
import PlacesItem from "./PlacesItem";
import { Colors } from "../../util/colors";

function PlacesList({ places = [] }) {
  if (!PlacesItem.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.text}>
          {" "}
          You have no place yet - Start by adding some{" "}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlacesItem {...item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    color: Colors.primary200,
  },

  text: {
    fontSize: 18,
  },
});
