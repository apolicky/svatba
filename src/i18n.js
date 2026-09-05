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
    'timeline.subheading': 'Předběžný program dne',
    'timeline.arrival': 'Příchod hostů',
    'timeline.ceremony': 'Obřad',
    'timeline.reception': 'Raut, hudba a oslava',
    'timeline.end': 'Konec večera',
    'venue.heading': 'místo konání',
    'venue.subheading': 'Kde nás najdete',
    'venue.maplink': 'Otevřít v Google Maps →',
    'transport.heading': 'doprava',
    'transport.subheading': 'Jak se k nám dostat',
    'transport.metro.title': 'Metro',
    'transport.metro.desc': 'Linka A, stanice Jiřího z Poděbrad – cca 10 minut pěšky. <span class= "italic"> Se zastávkou metra Flora nepočítejte, je zavřená.</span>',
    'transport.tram.title': 'Tramvaj',
    'transport.tram.desc': 'Zastávka Lipanská nebo Olšanské náměstí.',
    'transport.car.title': 'Autem',
    'transport.car.desc': 'Parkování v okolních ulicích -- modré (40kč/h) a fialové (30kč/h) zóny.<br /> Za hotelem Olšanka (cca 10m chůze) bývají volná místa (fialová zóna).<br /> Nebo mrkněte na <a href="https://mapy.com/s/kotozasepo" target="_blank" class= "text-blue-900 underline"> Mapy.com</a>, ty přímo ukazují barvy zón a jejich sazby.',
    'transport.hotel.title': 'Ubytování',
    'transport.hotel.desc': 'Hotel Olšanka v docházkové vzdálenosti nebo si napište o jiné tipy.',
    'dresscode.subheading': 'Oblečení',
    'dresscode.label': 'Formální',
    'dresscode.desc1': 'Budeme rádi, když dorazíte hezky oblečení. U pánů ideálně oblek, klidně v ležérnějším pojetí, případně kalhoty se sakem.',
    'dresscode.desc2': 'Výběr barev necháváme na vás, jen prosíme vynechat výrazné neonové odstíny.',
    'dresscode.desc3': 'Ve foyer je k dispozici šatna, takže si klidně vezměte pohodlnější boty nebo oblečení na převlečení na pozdější část večera.',
    'gifts.heading': 'dary',
    'gifts.subheading': 'Přání',
    'gifts.desc1': 'Vaše přítomnost je pro nás nejvíc 😘.',
    'gifts.desc2': 'Finanční dar ale neodmítneme.',
    'rsvp.desc': 'Prosíme o potvrzení vaší účasti do <strong class="text-red">15. 10. 2026</strong>',
    'rsvp.how': 'Vyplňte nám prosím tenhle:',
    'rsvp.formLink': 'formulář v Google Docs',
  },
  en: {
    'nav.schedule': 'Schedule',
    'nav.venue': 'Venue',
    'nav.transport': 'Getting There',
    'nav.dresscode': 'Dress Code',
    'nav.gifts': 'Gifts',

    'hero.savethedate': 'Save the Date',
    'hero.venue': 'Atrium Žižkov · Prague 3',
    'hero.cta': 'RSVP',

    'timeline.heading': 'schedule',
    'timeline.subheading': 'Tentative schedule for the day',
    'timeline.arrival': 'Guest arrival',
    'timeline.ceremony': 'Ceremony',
    'timeline.reception': 'Food, music & celebration',
    'timeline.end': 'End of the evening',

    'venue.heading': 'venue',
    'venue.subheading': 'Where to find us',
    'venue.maplink': 'Open in Google Maps →',

    'transport.heading': 'getting there',
    'transport.subheading': 'How to get there',

    'transport.metro.title': 'Metro',
    'transport.metro.desc': 'Line A, Jiřího z Poděbrad station – about a 10-minute walk. <span class="italic">Please note that Flora metro station is closed.</span>',

    'transport.tram.title': 'Tram',
    'transport.tram.desc': 'Get off at Lipanská or Olšanské náměstí.',

    'transport.car.title': 'By Car',
    'transport.car.desc': 'Street parking is available nearby -- blue (CZK 40/hour) and purple (CZK 30/hour) parking zones.<br /> There are usually spaces available behind Hotel Olšanka (about a 10-minute walk, purple zone).<br /> You can also check <a href="https://mapy.com/s/kotozasepo" target="_blank" class="text-blue-900 underline">Mapy.com</a>, which shows the parking zones and their rates.',

    'transport.hotel.title': 'Accommodation',
    'transport.hotel.desc': 'Hotel Olšanka is within walking distance, or feel free to ask us for other recommendations.',

    'dresscode.subheading': 'What to Wear',
    'dresscode.label': 'Formal',
    'dresscode.desc1': 'We’d love for everyone to dress up for the occasion. For gentlemen, ideally a suit – a more relaxed style is absolutely fine, or trousers with a blazer.',
    'dresscode.desc2': 'The choice of colours is entirely up to you; we just ask that you avoid bright neon shades.',
    'dresscode.desc3': 'There is a cloakroom in the foyer, so feel free to bring a more comfortable pair of shoes or a change of clothes for later in the evening.',

    'gifts.heading': 'gifts',
    'gifts.subheading': 'A Little Note',
    'gifts.desc1': 'Having you there with us is the best gift we could ask for 😘.',
    'gifts.desc2': 'That said, if you’d like to give us something, a monetary gift would be greatly appreciated.',

    'rsvp.desc': 'Please RSVP by <strong class="text-red">15 October 2026</strong>',
    'rsvp.how': 'Please fill out this:',
    'rsvp.formLink': 'Google Form',
  }
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
