const mockEvents = {

    city: {
        id: 1007700,
        city: 'München',
        lat: 48.14,
        lon: 11.58,
        state: '',
        country: 'de',
        zip: 'meetup3',
        member_count: 1257
    },
    events: [
        {
            created: 1578399191000,
            duration: 7200000,
            id: '267715797',
            name: 'Make new friends! Meet like-minded ladies & gents! (21-45)(FREE Drink/Hosted)',
            rsvp_limit: 100,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1580493600000,
            local_date: '2020-01-31',
            local_time: '19:00',
            updated: 1579502405000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 31,
            venue: {
                id: 26087176,
                name: 'The Keg Bar',
                lat: 48.158103942871094,
                lon: 11.585509300231934,
                repinned: false,
                address_1: 'Trautenwolfstraße 1',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1573235863000,
                name: 'Munich New in the city Meetup',
                id: 32991517,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Munich-New-in-the-city-Meetup',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Munich-New-in-the-city-Meetup/events/267715797/',
            description: 'example',
            how_to_find_us: 'Please ask for Meetup/DELPHINE',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            local_time: '19:00',
            local_date: '2020-01-31',
            link: 'https://www.meetup.com/social-drinks-munich/events/wntbnrybccbpc/',
            visibility: 'public_limited',
            group: {
                created: 1557680536000,
                name: 'Social Dinner & Drinks Munich - Make New Friends 😊 🍻🍷🍾🎉',
                id: 31885488,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'social-drinks-munich',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 2,
            duration: 21600000,
            time: 1580493600000,
            utc_offset: 3600000,
            name: 'Social Dinner & Drinks - Make New Friends (INTERNATIONAL FREE EVENT) 😊 🍻🍷🍾🎉',
            id: 'wntbnrybccbpc'
        },
        {
            created: 1578727820000,
            duration: 10800000,
            id: '267828244',
            name: 'Valentine\'s Day Special - Meet single ladies & gents! (FREE Drink/Hosted)',
            rsvp_limit: 100,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1581699600000,
            local_date: '2020-02-14',
            local_time: '18:00',
            updated: 1578727974000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 10,
            venue: {
                id: 26752537,
                name: 'Irish Pub Dubliner',
                lat: 48.13801956176758,
                lon: 11.579821586608887,
                repinned: false,
                address_1: 'Platzl 2',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1474915787000,
                name: 'Munich Singles Club Meetup (4500+ singles)',
                id: 20477037,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'meetup-groupmunichsingles',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/meetup-groupmunichsingles/events/267828244/',
            description: 'example',
            how_to_find_us: 'Area reserved for Meetup / SOPHIA ',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1579083675000,
            duration: 10800000,
            id: '267930271',
            name: 'Valentine\'s Meet Mix & Mingle - Ladies & Gents! (21-45)(FREE Drink/Hosted)',
            rsvp_limit: 100,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1581789600000,
            local_date: '2020-02-15',
            local_time: '19:00',
            updated: 1579175425000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 8,
            venue: {
                id: 26087176,
                name: 'The Keg Bar',
                lat: 48.158103942871094,
                lon: 11.585509300231934,
                repinned: false,
                address_1: 'Trautenwolfstraße 1',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1474915787000,
                name: 'Munich Singles Club Meetup (4500+ singles)',
                id: 20477037,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'meetup-groupmunichsingles',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/meetup-groupmunichsingles/events/267930271/',
            description: 'example',
            how_to_find_us: 'Please ask for Meetup/DELPHINE',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            local_time: '19:00',
            local_date: '2020-02-11',
            link: 'https://www.meetup.com/Munich-Girl-Gone-International/events/267292966/',
            visibility: 'public_limited',
            group: {
                created: 1380914527000,
                name: 'Munich | Girl Gone International',
                id: 10552542,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Munich-Girl-Gone-International',
                who: 'Girls Gone International',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 2,
            duration: 7200000,
            time: 1581444000000,
            utc_offset: 3600000,
            name: 'GGI Book Club - February: 84, Charing Cross Road by Helen Hanff',
            id: '267292966'
        },
        {
            local_time: '19:00',
            local_date: '2020-02-05',
            link: 'https://www.meetup.com/munichmingle/events/267915377/',
            visibility: 'public_limited',
            group: {
                created: 1552581049000,
                name: 'Munich Mingle',
                id: 31389319,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'munichmingle',
                who: 'members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 5,
            duration: 10800000,
            time: 1580925600000,
            utc_offset: 3600000,
            name: '🎲 Game Night | games provided | 1 free drink',
            id: '267915377'
        },
        {
            created: 1563449198000,
            duration: 914400000,
            fee: {
                accepts: 'paypal',
                amount: 550,
                currency: 'EUR',
                description: '',
                label: 'Price',
                required: true
            },
            id: '263254394',
            name: 'Easter Adventure, Caminito del Rey, Ronda, Torcal, Alhambra, Andalucía, España',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1586408400000,
            local_date: '2020-04-09',
            local_time: '07:00',
            updated: 1563473606000,
            utc_offset: 7200000,
            waitlist_count: 0,
            yes_rsvp_count: 1,
            group: {
                created: 1557157870000,
                name: 'EGO to WEGO - An extraordinary Way of experiencing Nature 1',
                id: 31828964,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Inspiration-Adventure-Tours-with-a-Purpose-From-EGO-to-WEGO',
                who: 'Inspiration Adventurers',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Inspiration-Adventure-Tours-with-a-Purpose-From-EGO-to-WEGO/events/263254394/',
            description: 'example',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            local_time: '19:00',
            local_date: '2020-01-24',
            link: 'https://www.meetup.com/social-drinks-munich/events/wntbnrybccbgc/',
            visibility: 'public_limited',
            group: {
                created: 1557680536000,
                name: 'Social Dinner & Drinks Munich - Make New Friends 😊 🍻🍷🍾🎉',
                id: 31885488,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'social-drinks-munich',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 56,
            duration: 21600000,
            time: 1579888800000,
            utc_offset: 3600000,
            name: 'Social Dinner & Drinks - Make New Friends (INTERNATIONAL FREE EVENT) 😊 🍻🍷🍾🎉',
            id: 'wntbnrybccbgc'
        },
        {
            local_time: '19:00',
            local_date: '2020-02-14',
            link: 'https://www.meetup.com/social-drinks-munich/events/wntbnrybcdbsb/',
            visibility: 'public_limited',
            group: {
                created: 1557680536000,
                name: 'Social Dinner & Drinks Munich - Make New Friends 😊 🍻🍷🍾🎉',
                id: 31885488,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'social-drinks-munich',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 3,
            duration: 21600000,
            time: 1581703200000,
            utc_offset: 3600000,
            name: 'Social Dinner & Drinks - Make New Friends (INTERNATIONAL FREE EVENT) 😊 🍻🍷🍾🎉',
            id: 'wntbnrybcdbsb'
        },
        {
            created: 1578405429000,
            duration: 7200000,
            id: '267717349',
            name: 'Wine and Cheese day',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1579802400000,
            local_date: '2020-01-23',
            local_time: '19:00',
            updated: 1578405429000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 19,
            group: {
                created: 1434007980000,
                name: 'München Wine Tasting Club',
                id: 18664929,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Munchen-Wine-Tasting-Club',
                who: 'München Wine Tasters',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Munchen-Wine-Tasting-Club/events/267717349/',
            description: '<p>Wine and Cheese such a wonderful reason to get together.</p> <p>Once a month, we are meeting to drink wine with great pairing cheeses.<br/>With every sort of wine, you will get a chance to try a pairing cheese.</p> ',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1579076432000,
            duration: 5400000,
            id: '267928905',
            name: 'Live-Webinar: Design Your Life & Job mit der Design Thinking Methode',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1580040000000,
            local_date: '2020-01-26',
            local_time: '13:00',
            updated: 1579076432000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 25,
            group: {
                created: 1523352940000,
                name: 'Design Your Life - Nachhaltig das eigene Leben gestalten',
                id: 28110251,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Design-Your-Life-Nachhaltig-das-eigene-Leben-gestalten',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Design-Your-Life-Nachhaltig-das-eigene-Leben-gestalten/events/267928905/',
            description: 'example',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1579570476000,
            duration: 7200000,
            id: '268075784',
            name: 'togather | erstes Co-Dining Restaurant eröffnet',
            rsvp_limit: 17,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1580211000000,
            local_date: '2020-01-28',
            local_time: '12:30',
            updated: 1579570657000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 11,
            venue: {
                id: 26822176,
                name: 'togather',
                lat: 48.137943267822266,
                lon: 11.543676376342773,
                repinned: true,
                address_1: 'Schwanthalerstraße 160',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1538836714000,
                name: 'Co-Dining: inspirierender Austausch u. Netzwerken beim Essen',
                id: 30090989,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Co-Dining',
                who: 'Netzwerkerinnen und Netzwerker',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Co-Dining/events/268075784/',
            description: 'example',
            how_to_find_us: 'Meetup Tisch',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1579523052000,
            duration: 10800000,
            id: '268057257',
            name: 'Meet new friends - like-minded ladies & gents! (21-45)(FREE Drink/Hosted)',
            rsvp_limit: 100,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1582999200000,
            local_date: '2020-02-29',
            local_time: '19:00',
            updated: 1579523249000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 7,
            venue: {
                id: 26087176,
                name: 'The Keg Bar',
                lat: 48.158103942871094,
                lon: 11.585509300231934,
                repinned: false,
                address_1: 'Trautenwolfstraße 1',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1474915787000,
                name: 'Munich Singles Club Meetup (4500+ singles)',
                id: 20477037,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'meetup-groupmunichsingles',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/meetup-groupmunichsingles/events/268057257/',
            description: 'example',
            how_to_find_us: 'Please ask for Meetup/DELPHINE',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1578127407000,
            duration: 7200000,
            id: 'gctnmrybcdbjc',
            name: 'Restaurant hopping',
            rsvp_limit: 7,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1582740000000,
            local_date: '2020-02-26',
            local_time: '19:00',
            updated: 1578127407000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 6,
            group: {
                created: 1578072802000,
                name: 'Foodtour - Foodies are welcome to hop through restaurants',
                id: 33160683,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Foodtour-Foodies-are-welcome-to-hop-through-restaurants',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Foodtour-Foodies-are-welcome-to-hop-through-restaurants/events/gctnmrybcdbjc/',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1578127407000,
            duration: 7200000,
            id: 'gctnmrybcfbhc',
            name: 'Restaurant hopping',
            rsvp_limit: 7,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1585159200000,
            local_date: '2020-03-25',
            local_time: '19:00',
            updated: 1578127407000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 3,
            group: {
                created: 1578072802000,
                name: 'Foodtour - Foodies are welcome to hop through restaurants',
                id: 33160683,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Foodtour-Foodies-are-welcome-to-hop-through-restaurants',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Foodtour-Foodies-are-welcome-to-hop-through-restaurants/events/gctnmrybcfbhc/',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            created: 1576675068000,
            duration: 18000000,
            fee: {
                accepts: 'paypal',
                amount: 5,
                currency: 'EUR',
                description: '',
                label: 'Price',
                required: true
            },
            id: '267270806',
            name: 'City Escape! After-Work Ausflug mit Bergmeditation & Hüttenzauber am Schliersee!',
            rsvp_limit: 12,
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1579878000000,
            local_date: '2020-01-24',
            local_time: '16:00',
            updated: 1578393076000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 3,
            venue: {
                id: 25615703,
                name: 'München Hauptbahnhof in front of Gleis 33',
                lat: 48.1395263671875,
                lon: 11.559215545654297,
                repinned: true,
                address_1: 'Bayerstraße 10a 80335 München',
                city: 'München',
                country: 'de',
                localized_country_name: 'Germany'
            },
            group: {
                created: 1514739324000,
                name: 'Alpen Yoga München. Yoga, Wandern & Entspannen!',
                id: 27011417,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Alpen-Yoga-Muenchen-Wandern-Yoga-und-Entspannen',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/Alpen-Yoga-Muenchen-Wandern-Yoga-und-Entspannen/events/267270806/',
            description: '<p>Hallo liebe Yogis und Bergfreunde!<br/>Lasst uns die Arbeits-Woche mit einem tollen After-Work Ausflug an den Schliersee beenden. Wir lassen die Stadt hinter uns, machen den Kopf frei und sammeln neue Energie!</p> <p>WAS GENAU MACHEN WIR?<br/>Dich erwartet eine entspannte Wanderung in der Abenddämmerung auf die Schliersbergalm (alternativ geht es auch mit der Gondel), eine kleine Meditation mit wunderschönem Blick auf den Schliersee, ein leckeres Abendessen auf der Alm und ein gemütlicher Rückweg unter dem Sternenhimmel. :)</p> <p>DETAILS<br/>-15:50 Uhr: Treffen am Hauptbahnhof vor Gleis 33. Zug (BOB 86909) Abfahrt um 16:04 Uhr<br/>-16:57 Uhr: Ankunft am Schliersee Bhf<br/>Von dort aus ca. 45 Minuten bis zur Alm (abhängig von der Gruppe). Meditations-Übung auf dem Berg.<br/>-Ca. 18 - 19:15 Uhr Abendessen auf der Alm und anschließend Rückweg im Mondschein (zu Fuß ca. 30 Minuten)<br/>-19:55 Uhr BOB Abfahrt zurück nach München<br/>-20:53 Uhr Ankunft in München Hbf mit einem Lächeln auf dem Gesicht. :)</p> <p>Of course, English speakers are welcome!</p> <p>KOSTEN<br/>5 € Teilnehmergebühr<br/>Transport: 15 € Einzelticket oder Gruppenticket 7,50 € - 12 € (das Gruppenticket kostet 37 € und kann zwischen 3 - 5 Personen geteilt werden. Falls du ein Ticket brauchst, bitte vorher hier in die Gruppe schreiben, und selbständig 5er-Gruppen bilden)</p> <p>Essen &amp; Trinken: je nach eigenem Verzehr</p> <p>Ich freue mich auf einen tollen Ausflug mit Euch!<br/>Lena</p> <p>DISCLAIMER<br/>-Jeder Teilnehmer ist auf eigene Gefahr dabei und für sich selbst verantwortlich. Bitte stelle vorher sicher, dass du die Anforderungen für die Tour erfüllst.<br/>-Bei Regen kann die Tour abgesagt werden.<br/>-Bitte melde dich nur an, wenn du sicher dabei bist. Falls du es nicht schaffst, melde dich bitte mindestens 1 Tag vorher wieder ab. Wir warten sonst auf dich.<br/>-Gruppengröße: min. 5 - max. 12 Teilnehmer</p> ',
            how_to_find_us: 'Auf Gleis 33, an dem die Bayerische Oberlandbahn abfährt (BOB), am Fahrkartenautomaten. Ich habe eine hellblaue Jacke an und einen weißen Rucksack auf dem Rücken. ',
            visibility: 'public',
            member_pay_fee: false
        },
        {
            local_time: '19:15',
            local_date: '2020-01-29',
            link: 'https://www.meetup.com/Munich-Girl-Gone-International/events/267589480/',
            visibility: 'public_limited',
            group: {
                created: 1380914527000,
                name: 'Munich | Girl Gone International',
                id: 10552542,
                join_mode: 'approval',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Munich-Girl-Gone-International',
                who: 'Girls Gone International',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            waitlist_count: 0,
            yes_rsvp_count: 16,
            duration: 7200000,
            time: 1580321700000,
            utc_offset: 3600000,
            name: 'GGI Culture: Stand-up Comedy ',
            id: '267589480'
        },
        {
            created: 1576596581000,
            duration: 7200000,
            id: '267249330',
            name: 'Los geht’s  im Januar mit den Gastgeherinnen Claudia Domke und Annika Schoemann',
            date_in_series_pattern: false,
            status: 'upcoming',
            time: 1579793400000,
            local_date: '2020-01-23',
            local_time: '16:30',
            updated: 1579535618000,
            utc_offset: 3600000,
            waitlist_count: 0,
            yes_rsvp_count: 5,
            group: {
                created: 1574952731000,
                name: 'Los geht\'s',
                id: 33056722,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'meetup-group-SQwEZQwy',
                who: 'Mitglieder',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin'
            },
            link: 'https://www.meetup.com/meetup-group-SQwEZQwy/events/267249330/',
            description: '<p>Los geht\'s im Januar</p> <p>Spazieren Sie durch die Ereignislandschaft, um sich mit uns und von ihr bewegen zu lassen: Wir erfrischen unsere Sinne durch die Begegnung mit anderen Menschen, mit der Kunst und der achtsamen Bewegung.</p> <p>Die Gastgeher</p> <p>Claudia Domke geht es um sinnstiftendes Handeln. In ihrer Tätigkeit als Life-Coach, Meditationslehrerin und Trauerpädagogin begleitet sie Menschen in emotional herausfordernden Situationen. 1985 wurde München zu ihrer Wahlheimat, in der sie seit 2000 ununterbrochen lebt.</p> <p>Als Kunstvermittlerin möchte Annika Schoemann die Kunst vom Podest holen und neue Blickwinkel durch die Kunst ermöglichen. Als Art Coach berät sie Privatpersonen und Unternehmen neue (Erfahrungs-)Räume zu gestalten. Seit 2002 ist München mit kurzer Unterbrechung ihre Wahlheimat.</p> <p>Über Los geht\'s</p> <p>Jeden letzten Donnerstag im Monat lädt das Evang. Bildungswerk München e.V. Sie ein: Einfach mal raus und los geht´s! Neuen Schwung gewinnen, Inspiration für den eigenen Weg gewinnen. Zwischen Treffpunkt und Ziel liegen 90 – 100 Minuten frische Luft, entspannte Bewegung und Begegnung – jedes Mal geführt von einem Gastgeher, der Ihnen seine Lieblingsstrecke in München zeigt. Am Ziel wartet eine kleine Erfrischung auf Sie.(nachträglich bearbeitet)</p> ',
            visibility: 'public',
            member_pay_fee: false
        }
    ]
};

export { mockEvents };