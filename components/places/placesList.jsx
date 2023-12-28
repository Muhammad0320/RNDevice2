import { FlatList, StyleSheet, Text, View } from "react-native";
import PlacesItem from "./PlacesItem";
import { Colors } from "../../util/colors";

function PlacesList({ places = [] }) {
  if (!places.length) {
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
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlacesItem {...item} />}
      />
    </View>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.primary200,
  },

  container: {
    marginVertical: 10,
    marginHorizontal: 6,
  },
});
