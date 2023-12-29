import { useEffect, useState } from "react";
import PlacesList from "../components/places/placesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../util/database";

function AllPlaces() {
  const [enteredData, setEnteredData] = useState([]);

  const isFocus = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const places = await fetchPlaces();

      setEnteredData(places);
    };

    if (isFocus) {
      fetchData();

      // setEnteredData((data) => [...data, route.params.data]);
    }
  }, [isFocus]);

  return <PlacesList places={enteredData} />;
}

export default AllPlaces;
