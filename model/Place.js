class Place {
  constructor(title, location, imageUri) {
    this.title = title;
    this.location = { lat: location.lat, lng: location.lng };
    this.address = location.address;
    this.imageUri = imageUri;
    id: Date.now() + Math.random();
  }
}

export default Place;
