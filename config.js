/*
 FlyStay partner settings.
 Add only approved affiliate tracking/deep links supplied by each partner.
 Never put passwords, API tokens or private credentials in this public file.
 The partner tracking URL itself may be visible in browser developer tools.
*/
window.FLYSTAY_CONFIG = {
  partners: [
    { name: "Airpaz", active: false, types: ["flights"], priority: 1, urlTemplate: "" }
  ],
  fallbacks: {
    flights: "https://www.google.com/travel/flights",
    hotels: "https://www.google.com/travel/hotels"
  }
};
