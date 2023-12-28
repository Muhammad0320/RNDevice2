import PlacesForm from "../components/places/PlacesForm";

function AddPlace({ navigation }) {
  const handleSaveData = (data) => {
    navigation.navigate("AllPlaces", { data });
  };

  return <PlacesForm onSaveData={handleSaveData} />;
}

export default AddPlace;
