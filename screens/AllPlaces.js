import { useEffect, useState } from "react";
import PlacesList from "../components/places/placesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({ route }) {
  const [enteredData, setEnteredData] = useState([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    if ((isFocus, route.params.data)) {
      setEnteredData((data) => [...data, route.params.data]);
    }
  }, [isFocus, route.params]);

  return <PlacesList places={enteredData} />;
}

export default AllPlaces;
