function initMap() {
    // The location to be displayed on the map
    const location = { lat: -34.397, lng: 150.644 };

    // Create a new map and set its properties
    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
    });

    // Add a marker to the map at the specified location
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
