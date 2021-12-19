import { geocoderConfig } from "../config/geocoder.config";

export const geocoderService = {
  reverse: async (latitude: number, longitude: number) => {
    const response = await geocoderConfig.reverse({ lat: latitude, lon: longitude });

    return {
      city: response[0].administrativeLevels.level2long,
      state: response[0].administrativeLevels.level1long, 
      stateCode: response[0].administrativeLevels.level1short, 
      streetNumber: response[0].streetNumber,
      streetName: response[0].streetName,
      country: response[0].country,
      countryCode: response[0].countryCode,
      zipcode: response[0].zipcode
    }
  }
}