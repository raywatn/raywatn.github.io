FLYSTAY — AUTOMATIC AWIN LINK STARTER

Current state
- The website has an Awin deeplink builder integrated into the flight/hotel search flow.
- Since the owner has no Awin account yet, the live site uses ordinary Google Travel fallback links.
- Those fallback links do NOT earn affiliate commissions.
- Once approved and accepted into advertiser programmes, add real IDs and partner-approved landing URL templates.

Files
- index.html: public travel site
- styles.css / app.js: design and search/link logic
- config.js: public affiliate configuration (IDs are not secrets; never put passwords/API tokens here)
- affiliate-setup.html: guided setup and config snippet generator
- privacy.html / disclosure.html: policy pages

Free publishing
GitHub Pages: https://pages.github.com/
Cloudflare Pages: https://pages.cloudflare.com/
Use their free hosted subdomain. A custom .com/.net domain generally costs money.

Awin application
1. Publish the FlyStay website first so you have a live URL.
2. Apply at https://ui.awin.com/publisher-signup
3. Be accurate about your promotional space and how you plan to promote travel.
4. In Promotional Space URL, use your live FlyStay URL.
5. Describe the site honestly. Suggested description:
   "FlyStay is an independent travel discovery website helping international visitors compare flight and hotel options. Visitors can search destinations and travel dates and continue to travel partner websites. We publish destination inspiration and practical travel-planning content. We promote partner offers through contextual links and clearly disclose affiliate relationships."
6. Choose relevant Travel / Accommodation / Transport sectors where offered.
7. Check the exact signup payment/verification terms shown for your region before paying. Awin's published requirements say applicants need a promotional space; payment/tax details are needed to receive payouts.
8. After network approval, apply separately to travel advertisers. Awin network approval does NOT automatically approve you for every advertiser.
9. Once accepted, get the Publisher ID and each advertiser's MID. Ask the advertiser for its supported flight/hotel search landing URL format and whether deeplinking is permitted.
10. Open affiliate-setup.html on your deployed website, enter the real values, generate the settings, and paste them into config.js. Upload the updated files.

Awin link format
The site creates:
https://www.awin1.com/cread.php?awinmid=ADVERTISER_ID&awinaffid=PUBLISHER_ID&ued=ENCODED_DESTINATION_URL

The destination URL must be a valid URL on the advertiser site, built using the exact query/path format the advertiser supports. Do not guess a partner's search URL. Some advertisers prohibit deeplinking or have restrictions in programme terms.

Supported placeholders
Flights: {origin}, {destination}, {depart}, {return}
Hotels: {destination}, {checkin}, {checkout}, {guests}

Important
- Do not put passwords, API tokens or bank details in config.js.
- Never use another publisher's IDs.
- Do not claim commission tracking is active until you've tested the actual advertiser tracking link.
- Awin approval and advertiser acceptance are separate.
- The current version does not scrape partner websites, auto-join programmes, guarantee bookings or guarantee income.
