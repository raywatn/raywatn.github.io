const config = window.FLYSTAY_CONFIG || {};
let mode = "flights";
const $ = (id) => document.getElementById(id);
const today = new Date(); today.setMinutes(today.getMinutes()-today.getTimezoneOffset());
$("depart").min = today.toISOString().slice(0,10);
$("depart").value = today.toISOString().slice(0,10);
$("return").min = $("depart").value;
$("return").value = $("depart").value;
$("year").textContent = new Date().getFullYear();

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
  mode = tab.dataset.tab;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  $("place-label").textContent = mode === "flights" ? "FROM" : "DESTINATION";
  $("destination-label").textContent = mode === "flights" ? "TO" : "HOTEL AREA";
  $("origin").parentElement.hidden = mode === "hotels";
  $("return-field").hidden = mode === "hotels";
  $("guests-field").hidden = mode !== "hotels";
  document.querySelector(".search-button").innerHTML = mode === "flights" ? 'Search flights <span>↗</span>' : 'Search hotels <span>↗</span>';
  $("search-hint").textContent = mode === "flights" ? "Compare flight options with our travel partners." : "Explore places to stay with our hotel partners.";
}));

$("depart").addEventListener("change", () => {
  $("return").min = $("depart").value;
  if ($("return").value < $("depart").value) $("return").value = $("depart").value;
});

function fillTemplate(template, values) {
  return template.replace(/\{(origin|destination|depart|return|checkin|checkout|guests)\}/g,
    (_, key) => encodeURIComponent(values[key] || ""));
}
function awinLink(advertiserId, landingUrl) {
  const tracking = new URL("https://www.awin1.com/cread.php");
  tracking.searchParams.set("awinmid", advertiserId);
  tracking.searchParams.set("awinaffid", config.awinPublisherId);
  tracking.searchParams.set("ued", landingUrl);
  return tracking.toString();
}
$("travel-search").addEventListener("submit", (event) => {
  event.preventDefault();
  const destination = $("destination").value.trim();
  if (!destination) return;
  let url, template, advertiserId;
  if (mode === "flights") {
    template = config.flightLandingUrlTemplate || "";
    advertiserId = config.flightAdvertiserId || "";
    const values = {origin:$("origin").value.trim(), destination, depart:$("depart").value, return:$("return").value};
    url = (config.awinPublisherId && advertiserId && template)
      ? awinLink(advertiserId, fillTemplate(template, values))
      : (config.flightFallback || "https://www.google.com/travel/flights");
    if (!(config.awinPublisherId && advertiserId && template)) {
      alert("FlyStay is not connected to an approved flight affiliate programme yet. Opening a standard search page; this visit will not earn FlyStay a commission.");
    }
  } else {
    template = config.hotelLandingUrlTemplate || "";
    advertiserId = config.hotelAdvertiserId || "";
    const values = {destination, checkin:$("depart").value, checkout:$("return").value, guests:$("guests").value};
    url = (config.awinPublisherId && advertiserId && template)
      ? awinLink(advertiserId, fillTemplate(template, values))
      : (config.hotelFallback || "https://www.google.com/travel/hotels");
    if (!(config.awinPublisherId && advertiserId && template)) {
      alert("FlyStay is not connected to an approved hotel affiliate programme yet. Opening a standard search page; this visit will not earn FlyStay a commission.");
    }
  }
  window.open(url, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-destination]").forEach(card => card.addEventListener("click", () => {
  $("destination").value = card.dataset.destination;
  document.querySelector("#search").scrollIntoView({behavior:"smooth"});
}));
