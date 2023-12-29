class Place {
  constructor(title, location, imageUri, id) {
    this.title = title;
    this.location = { lat: location.lat, lng: location.lng };
    this.address = location.address;
    this.imageUri = imageUri;
    this.id = id;
  }
}

export default Place;
