import { insertPlace } from "../util/database";
import PlacesForm from "../components/places/PlacesForm";

function AddPlace({ navigation }) {
  const handleSaveData = async (data) => {
    await insertPlace(data);

    navigation.navigate("AllPlaces", { data });
  };

  return <PlacesForm onSaveData={handleSaveData} />;
}

export default AddPlace;
