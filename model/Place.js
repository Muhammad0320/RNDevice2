class Place {
  constructor(title, location, address, imageUri) {
    this.title = title;
    this.location = location;
    this.address = address;
    this.imageUri = imageUri;
    id: Date.now() + Math.random();
  }
}

export default Place;
