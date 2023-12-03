import { FlatList } from "react-native";
import PlacesItem from "./PlacesItem";

function PlacesList({ places }) {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlacesItem {...item} />}
    />
  );
}

export default PlacesList;
