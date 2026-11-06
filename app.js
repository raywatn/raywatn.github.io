const config = window.FLYSTAY_CONFIG || {};
let mode = "flights";
const $ = id => document.getElementById(id);
const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
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
  $("origin-field").hidden = mode === "hotels";
  $("return-field").hidden = mode === "hotels";
  $("guests-field").hidden = mode !== "hotels";
  $("depart-label").textContent = mode === "flights" ? "DEPART" : "CHECK-IN";
  $("search-hint").textContent = mode === "flights" ? "Find a route and explore available flight options." : "Find a place to stay for your next escape.";
  document.querySelector(".search-button").innerHTML = mode === "flights" ? 'Search flights <span>↗</span>' : 'Search stays <span>↗</span>';
}));
$("depart").addEventListener("change", () => {
  $("return").min = $("depart").value;
  if ($("return").value < $("depart").value) $("return").value = $("depart").value;
});
function fillTemplate(template, values) {
  return String(template || "").replace(/\{(origin|destination|depart|return|checkin|checkout|guests)\}/g,
    (_, key) => encodeURIComponent(values[key] || ""));
}
function partnerUrl(type, values) {
  const partners = (config.partners || [])
    .filter(p => p && p.active && Array.isArray(p.types) && p.types.includes(type) && p.urlTemplate)
    .sort((a,b) => (a.priority || 999) - (b.priority || 999));
  if (partners.length) return fillTemplate(partners[0].urlTemplate, values);
  return (config.fallbacks && config.fallbacks[type]) ||
    (type === "flights" ? "https://www.google.com/travel/flights" : "https://www.google.com/travel/hotels");
}
$("travel-search").addEventListener("submit", event => {
  event.preventDefault();
  const destination = $("destination").value.trim();
  if (!destination) return;
  const values = {
    origin: $("origin").value.trim(), destination,
    depart: $("depart").value, return: $("return").value,
    checkin: $("depart").value, checkout: $("return").value,
    guests: $("guests").value
  };
  const url = partnerUrl(mode, values);
  try {
    const parsed = new URL(url);
    if (!["https:", "http:"].includes(parsed.protocol)) throw new Error("Unsupported URL");
    window.open(parsed.href, "_blank", "noopener,noreferrer");
  } catch {
    alert("This travel partner link is not configured correctly yet. Please try again later.");
  }
});
document.querySelectorAll("[data-destination]").forEach(card => card.addEventListener("click", () => {
  $("destination").value = card.dataset.destination;
  $("search").scrollIntoView({behavior:"smooth"});
}));
const menu = document.querySelector(".menu");
if (menu) menu.addEventListener("click", () => {
  const links = document.querySelector(".navlinks");
  const open = links.style.display === "flex";
  links.style.display = open ? "none" : "flex";
  links.style.position = open ? "" : "absolute";
  links.style.top = "65px"; links.style.right = "18px";
  links.style.padding = "18px"; links.style.borderRadius = "14px";
  links.style.background = "#1b3024"; links.style.flexDirection = "column";
});
