/*
 FLYSTAY AFFILIATE SETTINGS
 Fill these ONLY after Awin approves your publisher account and you join each advertiser programme.
 Awin IDs are identifiers, not passwords. Never put passwords or API tokens in this public file.
*/
window.FLYSTAY_CONFIG = {
  awinPublisherId: "",
  flightAdvertiserId: "",
  hotelAdvertiserId: "",

  // Use the advertiser's own supported search/landing URL pattern.
  // Replace placeholders with the exact query format supplied by that advertiser.
  // Flights: {origin} {destination} {depart} {return}
  // Hotels: {destination} {checkin} {checkout} {guests}
  flightLandingUrlTemplate: "",
  hotelLandingUrlTemplate: "",

  // Non-commission fallback links used until affiliate IDs and templates are configured.
  flightFallback: "https://www.google.com/travel/flights",
  hotelFallback: "https://www.google.com/travel/hotels"
};