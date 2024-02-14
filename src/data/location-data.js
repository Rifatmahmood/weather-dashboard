const data = [
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "New Delhi",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    location: "Jakarta",
    latitude: -6.2088,
    longitude: 106.8456,
  },
  {
    location: "Islamabad",
    latitude: 33.6844,
    longitude: 73.0479,
  },
  {
    location: "Ankara",
    latitude: 39.9334,
    longitude: 32.8597,
  },
  {
    location: "Tehran",
    latitude: 35.6892,
    longitude: 51.389,
  },
  {
    location: "Riyadh",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  {
    location: "Baku",
    latitude: 40.4093,
    longitude: 49.8671,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Madrid",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Kiev",
    latitude: 50.4501,
    longitude: 30.5234,
  },
  {
    location: "Vienna",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    location: "Bucharest",
    latitude: 44.4268,
    longitude: 26.1025,
  },
  {
    location: "Budapest",
    latitude: 47.4979,
    longitude: 19.0402,
  },
  {
    location: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125
  }
]

function getLocations() {
  return data; 
}

function getLocationByName(location) {
  if (!location) return null; 
  const filtered = data.filter((item) => item.location === location); 

  if (filtered.length > 0) {
    return filtered[0]; 
  } else {
    const defaultLocation = {
      location: "", 
      latitude: 0, 
      longitude: 0
    }
    return defaultLocation; 
  }
}

export { getLocations, getLocationByName }; 