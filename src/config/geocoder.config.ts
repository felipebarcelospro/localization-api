import NodeGeocoder from 'node-geocoder'

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyA-vZouYag6onFG12FXp-TEeLIAzLWlk8w', 
};
 
const geocoderConfig = NodeGeocoder(options);

export { geocoderConfig }