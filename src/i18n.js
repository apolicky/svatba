const translations = {
  cs: {
    'nav.schedule': 'Harmonogram',
    'nav.venue': 'Místo',
    'nav.transport': 'Doprava',
    'nav.dresscode': 'Dress code',
    'nav.gifts': 'Dary',
    'hero.savethedate': 'Save the Date',
    'hero.venue': 'Atrium Žižkov · Praha 3',
    'hero.cta': 'Potvrďte účast',
    'timeline.heading': 'harmonogram',
    'timeline.subheading': 'Program dne',
    'timeline.arrival': 'Příchod hostů',
    'timeline.ceremony': 'Obřad',
    'timeline.reception': 'Recepce & večeře',
    'timeline.reception.sub': 'Raut, hudba a oslava',
    'timeline.end': 'Konec večera',
    'venue.heading': 'místo konání',
    'venue.subheading': 'Kde nás najdete',
    'venue.maplink': 'Otevřít v Google Maps →',
    'transport.heading': 'doprava',
    'transport.subheading': 'Jak se k nám dostat',
    'transport.metro.title': 'Metro',
    'transport.metro.desc': 'Linka A, stanice Jiřího z Poděbrad – cca 10 minut pěšky.',
    'transport.tram.title': 'Tramvaj',
    'transport.tram.desc': 'Zastávka Čajkovského – linky v okolí Žižkova.',
    'transport.car.title': 'Autem',
    'transport.car.desc':
      'Parkování v okolních ulicích (modré zóny). Doporučujeme využít veřejnou dopravu.',
    'transport.hotel.title': 'Ubytování',
    'transport.hotel.desc': 'Hotel Olšanka se nachází v docházkové vzdálenosti od místa konání.',
    'dresscode.subheading': 'Oblečení',
    'dresscode.label': 'Formální',
    'dresscode.desc':
      'Prosíme o formální večerní oblečení. Pánové smoking nebo tmavý oblek, dámy večerní šaty nebo kostým. Bílá je vyhrazena pro nevěstu.',
    'gifts.heading': 'dary',
    'gifts.subheading': 'Přání',
    'gifts.desc':
      'Největší radost nám uděláte finanční hotovostí, která nám pomůže začít náš společný život. Vaše přítomnost je pro nás tím největším darem.',
    'rsvp.subheading': 'Potvrzení účasti',
    'rsvp.desc': 'Prosíme o potvrzení vaší účasti do <strong>31. 10. 2026</strong>.',
    'rsvp.how': 'Dejte nám vědět na e-mail níže.',
  },
  en: {
    'nav.schedule': 'Schedule',
    'nav.venue': 'Venue',
    'nav.transport': 'Getting there',
    'nav.dresscode': 'Dress code',
    'nav.gifts': 'Gifts',
    'hero.savethedate': 'Save the Date',
    'hero.venue': 'Atrium Žižkov · Prague 3',
    'hero.cta': 'RSVP',
    'timeline.heading': 'schedule',
    'timeline.subheading': 'Day programme',
    'timeline.arrival': 'Guest arrival',
    'timeline.ceremony': 'Ceremony',
    'timeline.reception': 'Reception & dinner',
    'timeline.reception.sub': 'Buffet, music and celebration',
    'timeline.end': 'End of evening',
    'venue.heading': 'venue',
    'venue.subheading': 'Where to find us',
    'venue.maplink': 'Open in Google Maps →',
    'transport.heading': 'getting there',
    'transport.subheading': 'How to reach us',
    'transport.metro.title': 'Metro',
    'transport.metro.desc': 'Line A, Jiřího z Poděbrad station – approx. 10 minutes on foot.',
    'transport.tram.title': 'Tram',
    'transport.tram.desc': 'Stop Čajkovského – tram lines around Žižkov.',
    'transport.car.title': 'By car',
    'transport.car.desc':
      'Street parking available nearby (blue zones). We recommend using public transport.',
    'transport.hotel.title': 'Accommodation',
    'transport.hotel.desc': 'Hotel Olšanka is within walking distance of the venue.',
    'dresscode.subheading': 'Attire',
    'dresscode.label': 'Formal',
    'dresscode.desc':
      'Please wear formal evening attire. Gentlemen: tuxedo or dark suit. Ladies: evening gown or formal suit. White is reserved for the bride.',
    'gifts.heading': 'gifts',
    'gifts.subheading': 'Wishes',
    'gifts.desc':
      'The greatest gift you can give us is a cash contribution to help us start our life together. Your presence is already the biggest gift of all.',
    'rsvp.subheading': 'Confirm attendance',
    'rsvp.desc': 'Please confirm your attendance by <strong>31 October 2026</strong>.',
    'rsvp.how': 'Let us know at the email below.',
  },
}

let currentLang = 'cs'

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    const value = translations[lang][key]
    if (value !== undefined) el.innerHTML = value
  })
  document.documentElement.lang = lang
  document.getElementById('lang-toggle').textContent = lang === 'cs' ? 'EN' : 'CS'
  currentLang = lang
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyTranslations(currentLang === 'cs' ? 'en' : 'cs')
})
