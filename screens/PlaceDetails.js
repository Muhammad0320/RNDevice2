import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../util/colors";
import OutlinedButton from "../components/ui/OutlinedButton";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({ navigation, route }) {
  const [detailsData, setDetailsData] = useState({});

  const { id } = route.params;

  const onViewMap = () => {
    navigation.navigate("Map", {
      lat: detailsData.location,
      lng: detailsData.location,
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const places = await fetchPlaceDetails(id);

      setDetailsData(places);
    };

    loadData();

    navigation.setOptions({ title: detailsData.title });
  });

  if (!detailsData) {
    return (
      <View style={styles.fallBackContainer}>
        {" "}
        <Text> Loading Place Details... </Text>{" "}
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: detailsData.imageUri }} />

      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.text}>{detailsData.address}</Text>
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

  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
