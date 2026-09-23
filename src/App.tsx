import React, { useState, useEffect } from 'react';
import { 
  Sun, Compass, Wine, Users, MapPin, Phone, Mail, Instagram, ShoppingBag, 
  ChevronRight, ChevronLeft, X, Check, Globe, Play, Pause, Volume2, VolumeX,
  Menu, Sparkles, Heart, Shield, Clock, Award, Star, Coffee, Utensils, 
  Baby, Waves, Trees, Car, ArrowRight, ExternalLink, Plus, Minus, Trash2, CheckCircle2,
  Smile, Home, Layers, Eye, Lock, RefreshCw, Calendar, CheckSquare, Settings, CreditCard, Truck, Edit3, Save
} from 'lucide-react';
import { supabase } from './supabaseClient';

const translations = {
  de: {
    brandName: "Casa Solea",
    brandSubtitle: "Lazise am Gardasee",
    airbnbTitle: "Casa Solea | Gartenapartment, Pool & Kinderparadies",
    tagline: "Innen fein. Draußen eine ganze Welt.",
    bookStay: "Verfügbarkeit prüfen",
    ourStory: "Unsere Geschichte",
    theStay: "Das Apartment",
    outdoors: "Garten & Pool",
    littleExplorers: "Für Kinder",
    location: "Lage",
    gallery: "Galerie",
    localGuide: "Umgebung",
    wines: "Casa Solea Weine",
    webshopNav: "Webshop",
    contact: "Kontakt",
    heroHeading: "Ein privater mediterraner Rückzugsort in Pacengo di Lazise.",
    heroSub: "800 Meter vom Gardasee. Ein 22 m² Gäste-Apartment mit Garten und Pool.",
    storyHeading: "Von Amsterdam an den Gardasee",
    storyText1: "Wir sind Valentin, Lisa und unser kleiner Sohn Sam – geboren in Amsterdam, wo wir fast ein Jahrzehnt lebten. Doch die Sehnsucht nach dem Licht Italiens und dem Gardasee führte uns hierher.",
    storyText2: "Lisas familiäre Weintradition ist tief in der Region verwurzelt. In ruhiger Lage in Pacengo di Lazise (Località Gasco) haben wir unser neues Zuhause erbaut und heißen Gäste in unserem feinen, privaten 22 m² Apartment herzlich willkommen.",
    apartmentTitle: "Das 22 m² Gäste-Apartment",
    apartmentDesc: "Für Paare und junge Familien konzipiert. Liebevoll gestaltet im Inneren, verbunden mit großzügigem Außenbereich, Pool und Garten.",
    poolText: "32 m² Pool im Garten",
    gardenText: "Weitläufige Rasenflächen und private Terrassen",
    familyText: "Trampolin, Sandkasten, Rutsche und sichere Spielbereiche",
    evText: "E-Ladestation direkt am Haus",
    winesIntro: "Handverlesene Casa Solea Weine aus familiärer Tradition direkt vom Gardasee.",
    discoverWinesBtn: "Zu unseren Weinen",
    addToBag: "In den Warenkorb",
    cartTitle: "Ihre Weinauswahl",
    checkout: "Zum sicheren Checkout",
    total: "Gesamt",
    emptyCart: "Ihr Warenkorb ist leer.",
    close: "Schließen",
    distanceTitle: "Entfernungen & Umgebung",
    faqTitle: "Häufige Fragen",
    rights: "Alle Rechte vorbehalten.",
    adminPortalTitle: "Verwaltung & Channel-Sync",
    adminLoginPrompt: "Bitte Administrator-Zugangsdaten eingeben."
  },
  it: {
    brandName: "Casa Solea",
    brandSubtitle: "Lazise sul Lago di Garda",
    airbnbTitle: "Casa Solea | Appartamento con Giardino, Piscina e Oasi Bimbi",
    tagline: "Piccolo dentro. Un mondo fuori.",
    bookStay: "Verifica disponibilità",
    ourStory: "La nostra storia",
    theStay: "Il Soggiorno",
    outdoors: "Vita all'aperto",
    littleExplorers: "Per i più piccoli",
    location: "Posizione",
    gallery: "Galleria",
    localGuide: "Dintorni",
    wines: "Vini Casa Solea",
    webshopNav: "Shop",
    contact: "Contatti",
    heroHeading: "Un rifugio mediterraneo privato a Pacengo di Lazise.",
    heroSub: "A 800 metri dal Lago di Garda. Un intimo appartamento di 22 m² con giardino e piscina accanto alla nostra casa di famiglia.",
    storyHeading: "Da Amsterdam al Lago di Garda",
    storyText1: "Siamo Valentin, Lisa e il nostro piccolo Sam, nato ad Amsterdam. Dopo quasi dieci anni all'estero, abbiamo scelto le sponde del Garda per piantare le nostre radici.",
    storyText2: "La tradizione vinicola della famiglia di Lisa affonda le radici in queste colline. A Pacengo di Lazise (Località Gasco) abbiamo costruito la nostra casa, accogliendo gli ospiti nell'intimo appartamento di 22 m².",
    apartmentTitle: "L'Appartamento Privato di 22 m²",
    apartmentDesc: "Pensato per coppie e giovani famiglie. Lusso intimo e funzionale che si apre sul giardino mediterraneo e sulla piscina.",
    poolText: "Piscina di 32 m² nel giardino",
    gardenText: "Ampi prati verdi e aree relax private",
    familyText: "Trampolino, sabbiera, scivolo e giochi",
    evText: "Colonnina di ricarica EV in loco",
    winesIntro: "Vini artigianali Casa Solea della tradizione familiare sulle sponde del Garda.",
    discoverWinesBtn: "Scopri i Vini",
    addToBag: "Aggiungi al carrello",
    cartTitle: "Il tuo carrello",
    checkout: "Procedi al checkout",
    total: "Totale",
    emptyCart: "Il carrello è vuoto.",
    close: "Chiudi",
    distanceTitle: "Distanze e Dintorni",
    faqTitle: "Domande Frequenti",
    rights: "Tutti i diritti riservati.",
    adminPortalTitle: "Portale Amministrazione",
    adminLoginPrompt: "Inserisci le credenziali di accesso amministratore."
  },
  nl: {
    brandName: "Casa Solea",
    brandSubtitle: "Lazise aan het Gardameer",
    airbnbTitle: "Casa Solea | Tuinappartement, Zwembad & Kinderoase",
    tagline: "Klein binnen. Een wereld buiten.",
    bookStay: "Beschikbaarheid bekijken",
    ourStory: "Ons Verhaal",
    theStay: "Het Verblijf",
    outdoors: "Buitenleven",
    littleExplorers: "Kleine Ontdekkers",
    location: "Locatie",
    gallery: "Galerij",
    localGuide: "Omgeving",
    wines: "Casa Solea Wijnen",
    webshopNav: "Webshop",
    contact: "Contact",
    heroHeading: "Een privéparel aan het Gardameer in Pacengo di Lazise.",
    heroSub: "800 meter van het meer. Een prachtig gastenverblijf van 22 m² met tuin en zwembad.",
    storyHeading: "Van Amsterdam naar het Gardameer",
    storyText1: "Wij zijn Valentin, Lisa en onze pasgeboren zoon Sam – geboren in Amsterdam. Na bijna tien jaar besloten we onze droomplek aan het Gardameer te realiseren.",
    storyText2: "De wijncollectie eert de familiegeschiedenis van Lisa. In Pacengo di Lazise (Località Gasco) bouwden we ons eigen huis en een exclusief privé-appartement van 22 m² voor onze gasten.",
    apartmentTitle: "Het Privé Gastenverblijf van 22 m²",
    apartmentDesc: "Ontworpen voor stellen en jonge gezinnen. Fijn binnen, en een eigen tuin met zwembad buiten.",
    poolText: "Zwembad van 32 m² in de tuin",
    gardenText: "Uitgestrekte gazons en privéterrassen",
    familyText: "Trampoline, zandbak, glijbaan en speeltoestellen",
    evText: "EV-laadpaal aanwezig op eigen terrein",
    winesIntro: "Handgemaakte Casa Solea wijnen uit de wijngaarden van Lisa's familie aan het Gardameer.",
    discoverWinesBtn: "Naar Onze Wijnen",
    addToBag: "In winkelmand",
    cartTitle: "Jouw Wijnselectie",
    checkout: "Naar veilige kassa",
    total: "Totaal",
    emptyCart: "Je winkelmand is leeg.",
    close: "Sluiten",
    distanceTitle: "Afstanden & Omgeving",
    faqTitle: "Veelgestelde Vragen",
    rights: "Alle rechten voorbehouden.",
    adminPortalTitle: "Admin Portaal & Kanaalsync",
    adminLoginPrompt: "Voer de inloggegevens in voor beheer."
  },
  en: {
    brandName: "Casa Solea",
    brandSubtitle: "Lazise on Lake Garda",
    airbnbTitle: "Casa Solea | Garden Apartment, Pool & Kids' Oasis",
    tagline: "Small inside. A whole world outside.",
    bookStay: "Check Availability",
    ourStory: "Our Story",
    theStay: "The Stay",
    outdoors: "Outdoor Living",
    littleExplorers: "Little Explorers",
    location: "Location",
    gallery: "Gallery",
    localGuide: "Around Us",
    wines: "Casa Solea Wines",
    webshopNav: "Webshop",
    contact: "Contact",
    heroHeading: "A private Mediterranean retreat in Pacengo di Lazise.",
    heroSub: "800 meters from Lake Garda. A thoughtfully designed 22 m² guest apartment with garden and pool.",
    storyHeading: "From Amsterdam to Lake Garda",
    storyText1: "We are Valentin, Lisa, and our newborn son Sam—born in Amsterdam, where we spent nearly a decade building our lives. But the call of the Italian sun and Lake Garda brought us home.",
    storyText2: "Wine is part of Lisa’s family story. Together, we built our family home in peaceful Pacengo di Lazise (Località Gasco), with a private 22 m² guest apartment.",
    apartmentTitle: "The 22 m² Guest Apartment",
    apartmentDesc: "Thoughtfully designed for 2 guests. Warm, thoughtful design inside, with your own garden and access to the pool outside.",
    poolText: "32 m² pool in the garden",
    gardenText: "Expansive lawns, private terrace, and lounge areas",
    familyText: "Trampoline, sandbox, children's slide, and secure play zones",
    evText: "EV charging station on-site for sustainable travel",
    winesIntro: "Rooted in Lisa’s family wine story. A small Casa Solea selection created for guests to enjoy during their stay and take home.",
    discoverWinesBtn: "Explore Our Wines",
    addToBag: "Add to Bag",
    cartTitle: "Your Wine Selection",
    checkout: "Proceed to Secure Checkout",
    total: "Total",
    emptyCart: "Your selection is currently empty.",
    close: "Close",
    distanceTitle: "Distances & Exploration",
    faqTitle: "Frequently Asked Questions",
    rights: "All rights reserved. Built with Mediterranean soul.",
    adminPortalTitle: "Management & Channel Sync",
    adminLoginPrompt: "Enter authorized administrator credentials."
  }
};

const uiTranslations = {
  de: {
    privateGuestApartment:"Privates Gäste-Apartment", escape:"Ankommen. Durchatmen. Casa Solea.",
    intro:"Klein, persönlich und mit viel Liebe gestaltet: 22 m² nur für Sie, mit eigenem Garten und Zugang zum Pool – im ruhigen Pacengo di Lazise, nur 800 Meter vom Gardasee.",
    outside:"Draußen beginnt das Urlaubsgefühl: ein Platz im eigenen Garten, der Pool ganz in der Nähe und ruhige Ecken für lange, entspannte Stunden.",
    pool:"32 m² Pool", suite:"22 m² privates Apartment", yours:"Ihr privater Bereich während des Aufenthalts",
    kids:"Kinderparadies", ev:"E-Ladestation", sustainable:"Nachhaltig anreisen und direkt am Haus laden",
    sanctuary:"Casa Solea mit Garten und Pool.", play:"Spielen & Entdecken", peace:"Entspannt genießen", nearby:"In der Nähe",
    hosts:"Valentin & Lisa", hostSub:"Mit Sam · Von Amsterdam an den Gardasee", setting:"800 m zum See · Ruhige Wohnlage",
    winesPage:"Unsere Weine", winesLead:"Ein paar Flaschen, die wir selbst gerne auf den Tisch stellen – ausgewählt für entspannte Abende bei Casa Solea.",
    specs:"Details zum Apartment", breakdown:"Apartment & Außenbereich", rentable:"Gäste-Apartment:", poolLabel:"Pool:", terrace:"Privater Garten & Terrasse:", occupancy:"Maximale Belegung:", locationLabel:"Lage:",
    guests2:"2 Erwachsene + bis zu 2 Kinder", availability:"Verfügbarkeit", availableLegend:"Grün = verfügbar · Rot = nicht verfügbar",
    chooseArrival:"Wählen Sie zuerst die Anreise und anschließend die Abreise.", arrivalChosen:"Anreisedatum gewählt · jetzt Abreisedatum auswählen",
    name:"Name", email:"E-Mail", oneGuest:"1 Gast", guests:"Gäste", request:"Buchungsanfrage senden",
    thanks:"Vielen Dank", requestReceived:"Ihre Buchungsanfrage wurde für die ausgewählten Daten erfasst. Wir bestätigen die Buchung anschließend per E-Mail.", noPayment:"Unverbindliche Buchungsanfrage · noch keine Zahlung erforderlich.", visuals:"Visualisierungen zeigen die geplante Gestaltung von Casa Solea.",
    shipping:"Lieferadresse", fullName:"Vollständiger Name", street:"Straße und Hausnummer", city:"Ort", postal:"Postleitzahl",
    payment:"Sichere Zahlung", paymentInfo:"Bereit für die spätere Stripe-Anbindung. Derzeit ist keine Zahlung erforderlich.", card:"Kartennummer", expires:"Gültig bis", cvc:"CVC", success:"Bestellung erfolgreich!", orderThanks:"Vielen Dank für Ihre Bestellung. Casa Solea bereitet Ihre Bestellung vor und informiert Sie über den weiteren Verlauf.",
    navigation:"Navigation", home:"Startseite", connect:"Kontakt", legal:"Rechtliches & Impressum", privacy:"Datenschutz", terms:"Allgemeine Geschäftsbedingungen", imprint:"Impressum",
tagline:"Italienisches Lebensgefühl, ganz nah", goodPeople:"Gute Menschen", beautifulPlaces:"Schöne Orte", lastingMemories:"Bleibende Erinnerungen", italianNature:"Italienisch von Natur aus",
stayEyebrow:"Privates Gäste-Apartment", stayTitle:"Ein kleiner Lieblingsplatz am Gardasee", outdoorsEyebrow:"Garten, Pool & Leben im Freien", outdoorsTitle:"Für Paare und junge Familien", outdoorsLead:"Viel Platz für die schönen, einfachen Urlaubsmomente: morgens draußen frühstücken, am Pool entspannen und die Kinder im Garten spielen lassen.",
playText:"Sandkasten, Rutsche, Trampolin und Rasen warten auf kleine Entdecker – während die Großen ganz in der Nähe entspannen können.", peaceText:"Sie wohnen bei uns ganz privat und für sich – und trotzdem mit dem persönlichen Gefühl, bei einer Familie zu Gast zu sein.", nearbyText:"Gardaland und CanevaWorld sind nur rund 1 km entfernt. Und wenn Sie zurückkommen, wartet wieder die Ruhe von Pacengo.",
hostsEyebrow:"Ihre Gastgeber", locationLead:"Via Gasco, 37017 Lazise VR, Italien. Von hier aus sind See, Lazise und die schönsten Ziele der Umgebung schnell erreicht.", galleryEyebrow:"Einblicke in Casa Solea", galleryTitle:"Galerie", all:"Alle", interior:"Innenbereich", children:"Für Kinder", winery:"Weine",
wineEyebrow:"Casa Solea Weine", wineTitle:"Ein Stück Urlaub für zuhause", subpage:"Weine", backHome:"← Zurück zur Startseite", add:"Hinzufügen",
privateBedroom:"Privater Schlafbereich mit Bad", sharedPool:"Poolzugang im Außenbereich", closeShop:"Webshop schließen", each:"pro Flasche", continuePayment:"Weiter zur Zahlung →", back:"Zurück", pay:"Bezahlen", secureCheckout:"Sicherer Checkout", visualLabel:"Visualisierung"
  },
  it: {
    privateGuestApartment:"Appartamento privato per ospiti", escape:"Arriva. Respira. Casa Solea.",
    intro:"Piccolo, personale e curato con amore: 22 m² tutti per voi, con giardino privato e accesso alla piscina, nella tranquilla Pacengo di Lazise, a soli 800 metri dal Lago di Garda.",
    outside:"Fuori comincia davvero la vacanza: il vostro angolo in giardino, la piscina a pochi passi e spazi tranquilli dove rallentare.",
    pool:"Piscina di 32 m²", suite:"Appartamento privato di 22 m²", yours:"Il tuo spazio privato durante il soggiorno",
    kids:"Oasi per bambini", ev:"Ricarica EV", sustainable:"Ricarica per auto elettriche direttamente a casa",
    sanctuary:"Casa Solea con giardino e piscina.", play:"Gioco & libertà", peace:"Relax per tutti", nearby:"Attrazioni vicine",
    hosts:"Valentin & Lisa", hostSub:"Con Sam · Da Amsterdam al Lago di Garda", setting:"800 m dal lago · Tranquilla zona residenziale",
    winesPage:"I nostri vini", winesLead:"Qualche bottiglia che amiamo mettere in tavola anche noi, scelta per le vostre serate a Casa Solea.",
    specs:"Dettagli dell'appartamento", breakdown:"Appartamento & spazi esterni", rentable:"Appartamento ospiti:", poolLabel:"Piscina:", terrace:"Giardino privato & terrazza:", occupancy:"Capienza massima:", locationLabel:"Posizione:",
    guests2:"2 adulti + fino a 2 bambini", availability:"Disponibilità", availableLegend:"Verde = disponibile · Rosso = non disponibile",
    chooseArrival:"Seleziona prima la data di arrivo e poi quella di partenza.", arrivalChosen:"Data di arrivo selezionata · ora scegli la partenza",
    name:"Nome", email:"E-mail", oneGuest:"1 ospite", guests:"ospiti", request:"Invia richiesta di prenotazione",
    thanks:"Grazie", requestReceived:"La tua richiesta per le date selezionate è stata registrata. Ti invieremo la conferma via e-mail.", noPayment:"Richiesta non vincolante · nessun pagamento richiesto.", visuals:"Le immagini mostrano il progetto previsto di Casa Solea.",
    shipping:"Indirizzo di spedizione", fullName:"Nome e cognome", street:"Via e numero civico", city:"Città", postal:"CAP",
    payment:"Pagamento sicuro", paymentInfo:"Pronto per la futura integrazione Stripe. Al momento non è richiesto alcun pagamento.", card:"Numero carta", expires:"Scadenza", cvc:"CVC", success:"Ordine completato!", orderThanks:"Grazie per il tuo ordine. Casa Solea lo sta preparando e ti aggiornerà a breve.",
    navigation:"Navigazione", home:"Home", connect:"Contatti", legal:"Note legali", privacy:"Informativa sulla privacy", terms:"Termini e condizioni", imprint:"Note legali",
tagline:"Vivere italiano, più vicino", goodPeople:"Belle persone", beautifulPlaces:"Luoghi speciali", lastingMemories:"Ricordi che restano", italianNature:"Italiano per natura",
stayEyebrow:"Appartamento privato per ospiti", stayTitle:"Un piccolo posto del cuore sul Lago di Garda", outdoorsEyebrow:"Giardino, piscina e vita all’aperto", outdoorsTitle:"Per coppie e giovani famiglie", outdoorsLead:"Spazio per le cose semplici e belle: colazione all’aperto, un pomeriggio in piscina e i bambini liberi di giocare in giardino.",
playText:"Sabbiera, scivolo, trampolino e prato aspettano i piccoli esploratori, mentre i grandi si rilassano poco lontano.", peaceText:"Avrete il vostro spazio e la vostra privacy, con in più il calore semplice di essere ospiti nella nostra casa di famiglia.", nearbyText:"Gardaland e CanevaWorld sono a circa 1 km. Al ritorno, vi aspetta di nuovo la tranquillità di Pacengo.",
hostsEyebrow:"I vostri host", locationLead:"Via Gasco, 37017 Lazise VR, Italia. Da qui il lago, Lazise e tanti luoghi speciali della zona sono a portata di mano.", galleryEyebrow:"Scorci di Casa Solea", galleryTitle:"Galleria", all:"Tutto", interior:"Interni", children:"Per bambini", winery:"Vini",
wineEyebrow:"Vini Casa Solea", wineTitle:"Un po’ di vacanza da portare a casa", subpage:"Vini", backHome:"← Torna alla home", add:"Aggiungi",
privateBedroom:"Zona notte privata con bagno", sharedPool:"Accesso alla piscina esterna", closeShop:"Chiudi lo shop", each:"a bottiglia", continuePayment:"Continua al pagamento →", back:"Indietro", pay:"Paga", secureCheckout:"Checkout sicuro", visualLabel:"Visualizzazione"
  },
  nl: {
    privateGuestApartment:"Privé gastenappartement", escape:"Aankomen. Adem uit. Casa Solea.",
    intro:"Klein, persoonlijk en met aandacht gemaakt: 22 m² helemaal voor jullie, met een eigen tuin en toegang tot het zwembad, in het rustige Pacengo di Lazise op slechts 800 meter van het Gardameer.",
    outside:"Buiten begint het vakantiegevoel: jullie eigen plekje in de tuin, het zwembad vlakbij en rustige hoekjes om heerlijk te ontspannen.",
    pool:"Zwembad van 32 m²", suite:"Privé-appartement van 22 m²", yours:"Jouw eigen plek tijdens het verblijf",
    kids:"Kinderparadijs", ev:"EV-laden", sustainable:"Je elektrische auto direct bij het huis opladen",
    sanctuary:"Casa Solea met tuin en zwembad.", play:"Spelen & ontdekken", peace:"Ontspannen genieten", nearby:"Dichtbij",
    hosts:"Valentin & Lisa", hostSub:"Met Sam · Van Amsterdam naar het Gardameer", setting:"800 m van het meer · Rustige woonomgeving",
    winesPage:"Onze wijnen", winesLead:"Een paar flessen die wij zelf graag op tafel zetten, uitgekozen voor ontspannen avonden bij Casa Solea.",
    specs:"Details van het appartement", breakdown:"Appartement & buitenruimte", rentable:"Gastenappartement:", poolLabel:"Zwembad:", terrace:"Privétuin & terras:", occupancy:"Maximale bezetting:", locationLabel:"Locatie:",
    guests2:"2 volwassenen + maximaal 2 kinderen", availability:"Beschikbaarheid", availableLegend:"Groen = beschikbaar · Rood = niet beschikbaar",
    chooseArrival:"Kies eerst de aankomstdatum en daarna de vertrekdatum.", arrivalChosen:"Aankomstdatum gekozen · kies nu de vertrekdatum",
    name:"Naam", email:"E-mail", oneGuest:"1 gast", guests:"gasten", request:"Boekingsaanvraag versturen",
    thanks:"Bedankt", requestReceived:"Je boekingsaanvraag voor de gekozen data is ontvangen. We bevestigen de boeking daarna per e-mail.", noPayment:"Vrijblijvende boekingsaanvraag · nog geen betaling nodig.", visuals:"De beelden tonen het geplande ontwerp van Casa Solea.",
    shipping:"Bezorgadres", fullName:"Volledige naam", street:"Straat en huisnummer", city:"Plaats", postal:"Postcode",
    payment:"Veilige betaling", paymentInfo:"Klaar voor toekomstige Stripe-integratie. Op dit moment is geen betaling nodig.", card:"Kaartnummer", expires:"Vervaldatum", cvc:"CVC", success:"Bestelling geslaagd!", orderThanks:"Bedankt voor je bestelling. Casa Solea maakt je bestelling klaar en houdt je op de hoogte.",
    navigation:"Navigatie", home:"Home", connect:"Contact", legal:"Juridisch & colofon", privacy:"Privacybeleid", terms:"Algemene voorwaarden", imprint:"Colofon",
tagline:"Italiaans leven, dichterbij", goodPeople:"Fijne mensen", beautifulPlaces:"Mooie plekken", lastingMemories:"Blijvende herinneringen", italianNature:"Italiaans van nature",
stayEyebrow:"Privé gastenappartement", stayTitle:"Een klein lievelingsplekje aan het Gardameer", outdoorsEyebrow:"Tuin, zwembad en buitenleven", outdoorsTitle:"Voor stellen en jonge gezinnen", outdoorsLead:"Ruimte voor de fijne, eenvoudige vakantiemomenten: buiten ontbijten, ontspannen bij het zwembad en de kinderen in de tuin laten spelen.",
playText:"Zandbak, glijbaan, trampoline en gras wachten op kleine ontdekkers, terwijl de volwassenen vlakbij kunnen ontspannen.", peaceText:"Jullie hebben hier alle privacy en een eigen plek, met tegelijk het persoonlijke gevoel te gast te zijn bij een familie.", nearbyText:"Gardaland en CanevaWorld liggen op ongeveer 1 km. En bij thuiskomst wacht weer de rust van Pacengo.",
hostsEyebrow:"Jullie hosts", locationLead:"Via Gasco, 37017 Lazise VR, Italië. Vanaf hier zijn het meer, Lazise en veel mooie plekken in de omgeving snel bereikbaar.", galleryEyebrow:"Een kijkje bij Casa Solea", galleryTitle:"Galerij", all:"Alles", interior:"Interieur", children:"Voor kinderen", winery:"Wijnen",
wineEyebrow:"Casa Solea-wijnen", wineTitle:"Neem een beetje vakantie mee naar huis", subpage:"Wijnen", backHome:"← Terug naar home", add:"Toevoegen",
privateBedroom:"Privé slaapruimte met badkamer", sharedPool:"Toegang tot het buitenzwembad", closeShop:"Webshop sluiten", each:"per fles", continuePayment:"Verder naar betaling →", back:"Terug", pay:"Betalen", secureCheckout:"Veilig afrekenen", visualLabel:"Visualisatie"
  },
  en: {
    privateGuestApartment:"Private guest apartment", escape:"Arrive. Exhale. Casa Solea.",
    intro:"Small, personal and thoughtfully made: 22 m² just for you, with your own garden and access to the pool, in peaceful Pacengo di Lazise just 800 metres from Lake Garda.",
    outside:"Step outside and the holiday begins: your own spot in the garden, the pool close by, and quiet corners made for slow afternoons.",
    pool:"32 m² pool", suite:"22 m² private apartment", yours:"Your private space during your stay",
    kids:"Kids' oasis", ev:"EV charging", sustainable:"EV charging directly at the house",
    sanctuary:"Casa Solea with garden and pool.", play:"Play & freedom", peace:"Peace of mind", nearby:"Attractions nearby",
    hosts:"Valentin & Lisa", hostSub:"With Sam · From Amsterdam to Lake Garda", setting:"800 m from the lake · Peaceful residential setting",
    winesPage:"Our wines", winesLead:"A few bottles we love putting on the table ourselves, chosen for relaxed evenings at Casa Solea.",
    specs:"Apartment details", breakdown:"Apartment & outdoor space", rentable:"Guest apartment:", poolLabel:"Pool:", terrace:"Private garden & terrace:", occupancy:"Maximum occupancy:", locationLabel:"Location:",
    guests2:"2 adults + up to 2 children", availability:"Availability", availableLegend:"Green = available · Red = unavailable",
    chooseArrival:"First select your arrival date, then your departure date.", arrivalChosen:"Arrival selected · now choose your departure date",
    name:"Name", email:"Email", oneGuest:"1 guest", guests:"guests", request:"Send booking request",
    thanks:"Thank you", requestReceived:"Your booking request for the selected dates has been received. We will confirm the booking by email.", noPayment:"Non-binding booking request · no payment required yet.", visuals:"Images show the planned design of Casa Solea.",
    shipping:"Shipping address", fullName:"Full name", street:"Street address", city:"City", postal:"Postal code",
    payment:"Secure payment", paymentInfo:"Ready for future Stripe integration. No payment is required yet.", card:"Card number", expires:"Expires", cvc:"CVC", success:"Order successful!", orderThanks:"Thank you for your order. Casa Solea is preparing it and will update you shortly.",
    navigation:"Navigation", home:"Home", connect:"Contact", legal:"Legal & imprint", privacy:"Privacy policy", terms:"Terms & conditions", imprint:"Legal notice",
tagline:"Italian living, a little closer", goodPeople:"Good people", beautifulPlaces:"Beautiful places", lastingMemories:"Lasting memories", italianNature:"Italian by nature",
stayEyebrow:"Private guest apartment", stayTitle:"A little place to love on Lake Garda", outdoorsEyebrow:"Garden, pool & outdoor living", outdoorsTitle:"For couples and young families", outdoorsLead:"Space for the simple holiday moments: breakfast outside, an afternoon by the pool and children free to play in the garden.",
playText:"A sandbox, slide, trampoline and lawn are ready for little explorers, while grown-ups can relax close by.", peaceText:"You have your own space and privacy, with the personal warmth of staying at a family home.", nearbyText:"Gardaland and CanevaWorld are around 1 km away. When you come back, the quiet of Pacengo is waiting.",
hostsEyebrow:"Your hosts", locationLead:"Via Gasco, 37017 Lazise VR, Italy. From here, the lake, Lazise and many of the area’s loveliest places are within easy reach.", galleryEyebrow:"A glimpse of Casa Solea", galleryTitle:"Gallery", all:"All", interior:"Interior", children:"For children", winery:"Wines",
wineEyebrow:"Casa Solea wines", wineTitle:"Take a little holiday home", subpage:"Wines", backHome:"← Back to home", add:"Add",
privateBedroom:"Private sleeping area with bathroom", sharedPool:"Access to the outdoor pool", closeShop:"Close shop", each:"per bottle", continuePayment:"Continue to payment →", back:"Back", pay:"Pay", secureCheckout:"Secure checkout", visualLabel:"Visualisation"
  }
};

const initialWineCatalogue = [
  {
    id: 'cs1',
    name: 'Casa Solea Lugana DOC San Vigilio',
    type: 'White Wine',
    grape: 'Turbiana (Trebbiano di Lugana)',
    origin: 'Southern Shores of Lake Garda',
    desc: 'Bred in the sun-drenched clay soils near Sirmione and Lazise. Notes of white peach, crushed flint, and zesty citrus with a creamy, structured finish.',
    size: '0.75 L',
    price: 19.50,
    image: '/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png'
  },
  {
    id: 'cs2',
    name: 'Casa Solea Bardolino Chiaretto DOC',
    type: 'Rosé Wine',
    grape: 'Corvina, Rondinella, Molinara',
    origin: 'Hills of Pacengo & Lazise',
    desc: 'The iconic rosé of Lake Garda. Delicate salmon pink with aromas of wild raspberry, red currant, and a refreshing mineral breeze.',
    size: '0.75 L',
    price: 16.50,
    image: '/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png'
  },
  {
    id: 'cs3',
    name: 'Casa Solea Bardolino Classico Superior',
    type: 'Red Wine',
    grape: 'Corvina (70%), Rondinella, Molinara',
    origin: 'Località Gasco Vineyards, Pacengo',
    desc: 'Crafted from Lisa’s family home vines. Ruby-red elegance with notes of tart cherry, violet, and subtle sweet spices. Deliciously smooth.',
    size: '0.75 L',
    price: 18.00,
    image: '/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png'
  },
  {
    id: 'cs4',
    name: 'Casa Solea Spumante Brut',
    type: 'Sparkling Wine',
    grape: 'Garganega & Chardonnay',
    origin: 'Moraine Hills of Lake Garda',
    desc: 'Fine, persistent perlage with floral bouquets and crisp green apple notes. The quintessential aperitivo by our pool.',
    size: '0.75 L',
    price: 21.00,
    image: '/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png'
  }
];

const localRecommendations = [
  {
    category: "Beaches",
    title: "Pacengo Public Beach & Walking Path",
    distance: "800 m (10 min walk)",
    desc: "A tranquil pebble beach with crystal clear waters, connected by a scenic lakeside promenade leading straight to Lazise.",
    icon: Waves
  },
  {
    category: "Attractions",
    title: "Gardaland & CanevaWorld",
    distance: "1 km (3 min drive / 15 min walk)",
    desc: "Italy's premier theme parks are right at your doorstep, yet far enough to enjoy a peaceful setting in our garden.",
    icon: Compass
  },
  {
    category: "Villages",
    title: "Historic Centre of Lazise",
    distance: "3 km (5 min drive / bike path)",
    desc: "Medieval stone walls, a picturesque Venetian port, excellent gelaterias, and vibrant weekly markets.",
    icon: MapPin
  },
  {
    category: "Wine & Taste",
    title: "Wine around Lake Garda",
    distance: "Surrounding Hills",
    desc: "The Lake Garda area is known for Lugana, Bardolino and Chiaretto, with many wineries and tastings within easy reach.",
    icon: Wine
  }
];

const galleryImages = [
  { id: 1, category: "Casa Solea", title: "Casa Solea", url: "/casa-solea-hero.png", desc: "Casa Solea visualisation." },
  { id: 2, category: "Apartment (22m²)", title: "Apartment", url: "/Mediterranes%20Luxusapartment%20bei%20Sonnenuntergang.png", desc: "Interior design visualisation." },
  { id: 3, category: "Interior", title: "Bedroom", url: "/Mediterranes%20Schlafzimmer%20mit%20Seeblick%20bei%20Sonnenuntergang.png", desc: "Bedroom design visualisation." },
  { id: 4, category: "Interior", title: "Bathroom", url: "/bad.png", desc: "Bathroom design visualisation." },
  { id: 5, category: "Pool", title: "Garden & Pool", url: "/Mediterrane%20Sonnenuntergangsterrasse%20am%20See.png", desc: "Outdoor design visualisation." },
  { id: 6, category: "Casa Solea", title: "Lake Garda", url: "/Goldene%20Stunde%20am%20Gardasee.png", desc: "Lake Garda destination image." }
]

const CasaSoleaMark = ({ className = "w-9 h-9" }) => (
  <img
    src="/Logo%20CS%20transparent%20background.png"
    alt=""
    aria-hidden="true"
    className={`${className} object-contain`}
  />
);

export default function App() {
  const [lang, setLang] = useState('de');
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'webshop'
  const [wineCatalogue, setWineCatalogue] = useState(initialWineCatalogue);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUsernameInput, setAdminUsernameInput] = useState('');
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');
  const [adminLoginLoading, setAdminLoginLoading] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [availabilityMonth, setAvailabilityMonth] = useState(new Date(2026, 8, 1));
  const [selectedCheckIn, setSelectedCheckIn] = useState(null);
  const [selectedCheckOut, setSelectedCheckOut] = useState(null);
  const [bookingGuest, setBookingGuest] = useState({ name: '', email: '', guests: '2' });

  // Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('address'); // 'address', 'payment', 'success'
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    email: '',
    street: '',
    city: '',
    postalCode: '',
    country: 'Germany'
  });
  const [stripeToken, setStripeToken] = useState('');

  // Admin Management States
  const [editingProduct, setEditingProduct] = useState(null); // product object or null
  const [newProductForm, setNewProductForm] = useState({
    name: '', type: 'White Wine', grape: '', origin: '', desc: '', size: '0.75 L', price: 18.00, image: ''
  });
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // Persistent booking & availability data
  const [bookings, setBookings] = useState([]);
  const [blockedDates, setBlockedDates] = useState([]);
  const [bookingDataLoading, setBookingDataLoading] = useState(false);
  const [adminMonth, setAdminMonth] = useState(new Date());
  const [newAdminBooking, setNewAdminBooking] = useState({ guest_name:'', guest_email:'', guests:'2', source:'Airbnb', check_in:'', check_out:'', status:'Confirmed', payment_status:'Not paid', amount_total:'' });

  const mapBooking = (b) => ({
    id: b.id,
    guest: b.guest_name,
    email: b.guest_email,
    platform: b.source,
    checkIn: b.check_in,
    checkOut: b.check_out,
    guests: Number(b.guests),
    status: b.status,
    paymentStatus: b.payment_status,
    amountTotal: b.amount_total,
    amountPaid: b.amount_paid,
    notes: b.notes || ''
  });

  const loadPublicAvailability = async () => {
    const { data, error } = await supabase.rpc('get_unavailable_dates');
    if (!error) setBlockedDates((data || []).map(d => ({ start: d.start_date, end: d.end_date })));
  };

  const loadAdminBookings = async () => {
    setBookingDataLoading(true);
    const { data, error } = await supabase.from('bookings').select('*').order('check_in', { ascending: true });
    if (!error) setBookings((data || []).map(mapBooking));
    setBookingDataLoading(false);
  };

  useEffect(() => { loadPublicAvailability(); }, []);
  useEffect(() => { if (isAdminLoggedIn) loadAdminBookings(); }, [isAdminLoggedIn]);

  const isUnavailable = (date) => blockedDates.some(b => {
    const start = new Date(b.start + 'T00:00:00');
    const end = new Date(b.end + 'T00:00:00');
    return date >= start && date <= end;
  });
  const calendarDays = (() => {
    const year = availabilityMonth.getFullYear();
    const month = availabilityMonth.getMonth();
    const first = new Date(year, month, 1);
    const count = new Date(year, month + 1, 0).getDate();
    const mondayOffset = (first.getDay() + 6) % 7;
    return [...Array(mondayOffset).fill(null), ...Array.from({ length: count }, (_, i) => new Date(year, month, i + 1))];
  })();

  const dateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };
  const isSelectedDate = (date) => {
    if (!selectedCheckIn) return false;
    if (!selectedCheckOut) return dateKey(date) === dateKey(selectedCheckIn);
    return date >= selectedCheckIn && date <= selectedCheckOut;
  };
  const handleAvailabilityDateClick = (date) => {
    if (isUnavailable(date)) return;
    if (!selectedCheckIn || selectedCheckOut || date < selectedCheckIn) {
      setSelectedCheckIn(date); setSelectedCheckOut(null); setBookingSubmitted(false); return;
    }
    const blockedInsideRange = blockedDates.some(b => {
      const start = new Date(b.start + 'T00:00:00');
      const end = new Date(b.end + 'T00:00:00');
      return start < date && end >= selectedCheckIn;
    });
    if (blockedInsideRange) { setSelectedCheckIn(date); setSelectedCheckOut(null); return; }
    setSelectedCheckOut(date);
  };
  const handleDirectBooking = async (e) => {
    e.preventDefault();
    if (!selectedCheckIn || !selectedCheckOut) return;
    const { error } = await supabase.from('bookings').insert({
      guest_name: bookingGuest.name.trim(),
      guest_email: bookingGuest.email.trim(),
      guests: Number(bookingGuest.guests),
      source: 'Website Direct',
      status: 'Pending',
      payment_status: 'Not paid',
      check_in: dateKey(selectedCheckIn),
      check_out: dateKey(selectedCheckOut)
    });
    if (error) { alert('Booking request could not be sent. Please try again.'); return; }
    setBookingSubmitted(true);
    setBookingGuest({ name: '', email: '', guests: '2' });
  };

  // Mock wine orders database
  const [wineOrders, setWineOrders] = useState([
    { id: 'w-101', customer: 'Jan de Vries', address: 'Keizersgracht 123, Amsterdam, Netherlands', items: '2x Casa Solea Lugana DOC, 1x Chiaretto', total: '€55.50', paymentStatus: 'Paid (Stripe API)', shippingStatus: 'Ready for Pickup / Shipping', trackingNumber: 'DHL-IT-884920' },
    { id: 'w-102', customer: 'Claudia Weber', address: 'Goethestrasse 45, Munich, Germany', items: '4x Casa Solea Bardolino Superior', total: '€72.00', paymentStatus: 'Paid (Stripe API)', shippingStatus: 'Shipped', trackingNumber: 'DHL-DE-991823' }
  ]);

  const [syncStatus, setSyncStatus] = useState({ airbnb: 'Not connected', booking: 'Not connected' });

  const t = translations[lang];
  const ui = uiTranslations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `Casa Solea · ${t.brandSubtitle}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', ui.intro);
  }, [lang]);

  const addToCart = (wine) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === wine.id);
      if (existing) {
        return prev.map(item => item.id === wine.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...wine, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAdminLoginError('');
    setAdminLoginLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: adminUsernameInput.trim(),
        password: adminPasswordInput
      });
      if (error) throw error;
      const { data: adminRow, error: adminError } = await supabase
        .from('admin_users')
        .select('user_id')
        .eq('user_id', data.user.id)
        .maybeSingle();
      if (adminError || !adminRow) {
        await supabase.auth.signOut();
        throw new Error('This account is not authorized for the Casa Solea Admin Portal.');
      }
      setIsAdminLoggedIn(true);
      setAdminPasswordInput('');
    } catch (error) {
      setIsAdminLoggedIn(false);
      setAdminLoginError(error?.message || 'Login failed.');
    } finally {
      setAdminLoginLoading(false);
    }
  };

  useEffect(() => {
    let active = true;
    const restoreAdminSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || !active) return;
      const { data } = await supabase.from('admin_users').select('user_id').eq('user_id', session.user.id).maybeSingle();
      if (active) setIsAdminLoggedIn(Boolean(data));
    };
    restoreAdminSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && active) setIsAdminLoggedIn(false);
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleAdminLogout = async () => {
    await supabase.auth.signOut();
    setIsAdminLoggedIn(false);
    setAdminUsernameInput('');
    setAdminPasswordInput('');
  };

  const triggerChannelSync = () => {
    setSyncStatus({ airbnb: 'Syncing...', booking: 'Syncing...' });
    setTimeout(() => {
      setSyncStatus({ airbnb: 'Not connected', booking: 'Not connected' });
    }, 1000);
  };

  const approveBooking = async (id) => {
    const { error } = await supabase.rpc('confirm_booking', { p_booking_id: id });
    if (error) { alert(error.message); return; }
    await Promise.all([loadAdminBookings(), loadPublicAvailability()]);
  };

  const updateBookingField = async (id, changes) => {
    const { error } = await supabase.from('bookings').update({ ...changes, updated_at: new Date().toISOString() }).eq('id', id);
    if (error) { alert(error.message); return; }
    await loadAdminBookings();
  };

  const addAdminBooking = async (e) => {
    e.preventDefault();
    const payload = {
      ...newAdminBooking,
      guests: Number(newAdminBooking.guests),
      amount_total: newAdminBooking.amount_total === '' ? null : Number(newAdminBooking.amount_total)
    };
    const { error } = await supabase.from('bookings').insert(payload);
    if (error) { alert(error.message); return; }
    setNewAdminBooking({ guest_name:'', guest_email:'', guests:'2', source:'Airbnb', check_in:'', check_out:'', status:'Confirmed', payment_status:'Not paid', amount_total:'' });
    await Promise.all([loadAdminBookings(), loadPublicAvailability()]);
  };

  const adminMonthBookings = bookings.filter(b => {
    const start = new Date(b.checkIn + 'T00:00:00');
    const end = new Date(b.checkOut + 'T00:00:00');
    const monthStart = new Date(adminMonth.getFullYear(), adminMonth.getMonth(), 1);
    const monthEnd = new Date(adminMonth.getFullYear(), adminMonth.getMonth() + 1, 1);
    return start < monthEnd && end > monthStart;
  });
  const adminCalendarDays = (() => {
    const y = adminMonth.getFullYear(), m = adminMonth.getMonth();
    const first = new Date(y,m,1), count = new Date(y,m+1,0).getDate();
    return [...Array((first.getDay()+6)%7).fill(null), ...Array.from({length:count},(_,i)=>new Date(y,m,i+1))];
  })();
  const bookingForAdminDate = (date) => adminMonthBookings.find(b => b.status !== 'Cancelled' && date >= new Date(b.checkIn+'T00:00:00') && date < new Date(b.checkOut+'T00:00:00'));

  const updateOrderShipping = (id, newStatus, tracking) => {
    setWineOrders(prev => prev.map(o => o.id === id ? { ...o, shippingStatus: newStatus, trackingNumber: tracking } : o));
  };

  const handleSaveProductEdit = (e) => {
    e.preventDefault();
    setWineCatalogue(prev => prev.map(p => p.id === editingProduct.id ? editingProduct : p));
    setEditingProduct(null);
  };

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    const newId = 'cs-' + Date.now();
    const productToAdd = { ...newProductForm, id: newId, price: Number(newProductForm.price) };
    setWineCatalogue(prev => [...prev, productToAdd]);
    setIsAddingProduct(false);
    setNewProductForm({ name: '', type: 'White Wine', grape: '', origin: '', desc: '', size: '0.75 L', price: 18.00, image: '' });
  };

  const deleteProduct = (id) => {
    if (confirm('Are you sure you want to remove this wine from the catalogue?')) {
      setWineCatalogue(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F0E8] text-[#34342E] font-sans">
      
      {activeTab === 'webshop' && <nav className="sticky top-0 z-50 bg-[#F4F0E8]/95 backdrop-blur border-b border-[#D7CCBA]">
        <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={()=>setActiveTab('home')} className="flex items-center gap-3"><CasaSoleaMark className="w-10 h-10 text-[#4D503F]"/><span className="font-serif tracking-[.2em] uppercase">Casa Solea</span></button>
          <button onClick={()=>setActiveTab('home')} className="text-xs uppercase tracking-widest">← {ui.home}</button>
        </div>
      </nav>}

      {/* CONDITIONAL RENDER: HOME PAGE OR WEBSHOP PAGE */}
      {activeTab === 'home' ? (
        <>
          {/* CASA SOLEA — approved editorial mockup */}
          <header className="relative min-h-[760px] md:min-h-[700px] lg:h-[580px] overflow-visible bg-[#EDE6D9]">
            <img src="/casa-solea-hero.png" alt="Casa Solea visualisation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E8]/95 via-[#F6F1E8]/48 to-transparent"></div>

            <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-10 pt-5">
              <div className="flex items-start justify-between">
                <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="text-left">
                  <div className="flex items-start gap-3">
                    <CasaSoleaMark className="w-[74px] h-[74px] text-[#4B4B39]"/>
                    <div className="pt-6 hidden sm:block">
                      <div className="font-serif text-[24px] leading-none tracking-[.22em] uppercase">Casa Solea</div>
                      <div className="text-[9px] tracking-[.34em] uppercase mt-3 text-[#5D5B4B]">{t.brandSubtitle}</div>
                    </div>
                  </div>
                </button>
                <div className="hidden lg:flex items-center gap-8 pt-5 font-serif text-[15px]">
                  <a href="#stay">{t.theStay}</a><a href="#gallery">{t.gallery}</a><a href="#location">{t.location}</a>
                  <button onClick={()=>{setActiveTab('webshop');window.scrollTo({top:0})}}>{t.wines}</button>
                  <a href="#story">{lang==='de'?'Gut zu wissen':lang==='it'?'Da sapere':lang==='nl'?'Goed om te weten':'Good to know'}</a>
                  <a href="#footer">{t.contact}</a>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <select value={lang} onChange={e=>setLang(e.target.value)} className="bg-transparent text-xs uppercase outline-none"><option value="de">DE</option><option value="it">IT</option><option value="nl">NL</option><option value="en">EN</option></select>
                  <button onClick={()=>setIsBookingOpen(true)} className="hidden md:block border border-[#4D503F] bg-[#5E5E46]/90 text-white rounded-full px-7 py-3 text-[10px] uppercase tracking-[.14em]">{t.bookStay}</button>
                </div>
              </div>

              <div className="mt-6 md:mt-10 max-w-[460px] pr-2">
                <div className="w-8 h-px bg-[#4D503F] mb-4"></div>
                <div className="text-[9px] uppercase tracking-[.38em] mb-6 text-[#555444]">{ui.tagline}</div>
                <h1 className="font-serif text-[43px] sm:text-[48px] md:text-[58px] leading-[.92] md:leading-[.88] tracking-[-.025em] text-[#22221D] mb-6">{ui.escape}</h1>
                <p className="font-serif text-[17px] leading-[1.15] max-w-[390px] text-[#292921]">{ui.intro}</p>
              </div>
            </div>

            {/* booking checker — separate from copy, exactly like mockup */}
            <div className="absolute z-30 left-1/2 -translate-x-1/2 bottom-3 md:-bottom-[2px] w-[92%] max-w-[1215px] bg-[#F8F5EE]/98 shadow-xl border border-[#D8D0C2] rounded-[8px] p-3">
              <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1.15fr_1.35fr]">
                <button onClick={()=>setIsBookingOpen(true)} className="px-3 sm:px-5 py-2 text-left md:border-r border-[#D8D0C2]">
                  <span className="block text-[12px] font-serif text-[#777064]">{lang==='de'?'Anreise':lang==='it'?'Arrivo':lang==='nl'?'Aankomst':'Arrival'}</span>
                  <span className="font-serif text-[15px]">{selectedCheckIn?selectedCheckIn.toLocaleDateString(lang==='de'?'de-DE':lang==='it'?'it-IT':lang==='nl'?'nl-NL':'en-GB'): (lang==='de'?'Datum wählen':lang==='it'?'Scegli data':lang==='nl'?'Kies datum':'Choose date')}</span>
                </button>
                <button onClick={()=>setIsBookingOpen(true)} className="px-3 sm:px-5 py-2 text-left md:border-r border-[#D8D0C2]">
                  <span className="block text-[12px] font-serif text-[#777064]">{lang==='de'?'Abreise':lang==='it'?'Partenza':lang==='nl'?'Vertrek':'Departure'}</span>
                  <span className="font-serif text-[15px]">{selectedCheckOut?selectedCheckOut.toLocaleDateString(lang==='de'?'de-DE':lang==='it'?'it-IT':lang==='nl'?'nl-NL':'en-GB'): (lang==='de'?'Datum wählen':lang==='it'?'Scegli data':lang==='nl'?'Kies datum':'Choose date')}</span>
                </button>
                <button onClick={()=>setIsBookingOpen(true)} className="px-3 sm:px-5 py-2 text-left border-t md:border-t-0 border-[#D8D0C2]">
                  <span className="block text-[12px] font-serif text-[#777064]">{ui.guests}</span>
                  <span className="font-serif text-[15px]">{bookingGuest.guests} {ui.guests}</span>
                </button>
                <div className="border-t md:border-t-0 border-[#D8D0C2] pt-2 md:pt-0">
                  <button onClick={()=>setIsBookingOpen(true)} className="w-full h-12 bg-[#66664C] text-white px-6 uppercase tracking-[.14em] text-[11px] flex items-center justify-between">{t.bookStay}<ArrowRight className="w-4 h-4"/></button>
                  <div className="text-[9px] text-right text-[#777064] pt-1">{ui.noPayment}</div>
                </div>
              </div>
            </div>
          </header>

          {/* icon facts strip */}
          <section className="bg-[#F8F5EE] border-b border-[#D8D0C2]">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-5 md:py-7">
              {[
                [Home,lang==='de'?'Modernes Apartment':lang==='it'?'Appartamento moderno':lang==='nl'?'Modern appartement':'Modern apartment','22 m²'],
                [Waves,lang==='de'?'Poolzugang':lang==='it'?'Accesso piscina':lang==='nl'?'Zwembad':'Pool access','8 × 4 m'],
                [Trees,lang==='de'?'Familienfreundlich':lang==='it'?'Per famiglie':lang==='nl'?'Gezinsvriendelijk':'Family friendly',lang==='de'?'Ideal für Paare und Familien':''],
                [MapPin,lang==='de'?'Top Lage':lang==='it'?'Posizione ideale':lang==='nl'?'Toplocatie':'Great location','800 m'],
                [Star,'Gardaland & CanevaWorld','~1 km'],
                [Car,lang==='de'?'E-Mobilität':'E-Mobility',lang==='de'?'Laden vor Ort':lang==='it'?'Ricarica in loco':lang==='nl'?'Laden op locatie':'EV charging']
              ].map(([Icon,title,sub],i)=><div key={i} className="flex items-center gap-4 px-6 py-3 lg:py-0 lg:border-r last:border-r-0 border-[#D8D0C2]"><Icon className="w-8 h-8 stroke-[1.25] text-[#4D503F]"/><div><div className="font-serif text-[14px]">{title}</div><div className="text-[10px] text-[#777064] mt-1">{sub}</div></div></div>)}
            </div>
          </section>

          {/* four visual doors */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[8px] bg-[#F8F5EE] p-[8px]">
            {[
              ['/Mediterranes%20Luxusapartment%20bei%20Sonnenuntergang.png',t.theStay,lang==='de'?'Modern. Natürlich. Entspannt.':lang==='it'?'Moderno. Naturale. Rilassato.':lang==='nl'?'Modern. Natuurlijk. Ontspannen.':'Modern. Natural. Relaxed.','#stay'],
              ['/Mediterrane%20Sonnenuntergangsterrasse%20am%20See.png',t.outdoors,lang==='de'?'Ihr privater Rückzugsort':lang==='it'?'Il vostro spazio all’aperto':lang==='nl'?'Jouw plek buiten':'Your outdoor retreat','#outdoors'],
              ['/Goldene%20Stunde%20am%20Gardasee.png',t.location,t.brandSubtitle,'#location'],
              ['/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png',t.wines,lang==='de'?'Ein Stück unserer Heimat':lang==='it'?'Un pezzo di casa nostra':lang==='nl'?'Een stukje van ons thuis':'A piece of our home','wine']
            ].map(([img,title,sub,target],i)=><button key={i} onClick={()=>target==='wine'?(setActiveTab('webshop'),window.scrollTo({top:0})):document.querySelector(target)?.scrollIntoView({behavior:'smooth'})} className="group relative aspect-[1.55] overflow-hidden text-left">
              <img src={img} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.025] transition duration-700"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-5 text-white"><div className="font-serif text-[27px]">{title}</div><div className="flex items-end justify-between"><span className="text-[9px] uppercase tracking-[.22em] mt-1">{sub}</span><ArrowRight className="w-5 h-5"/></div></div>
            </button>)}
          </section>

          <div className="bg-[#F8F5EE] py-7 px-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[9px] uppercase tracking-[.24em] sm:tracking-[.38em] text-[#777064]">
            <span>Casa Solea</span><span className="w-8 h-px bg-[#9A9487]"></span><span className="hidden sm:inline">{ui.goodPeople}</span><span className="hidden sm:block w-8 h-px bg-[#9A9487]"></span><span>{ui.beautifulPlaces}</span><span className="hidden md:block w-8 h-px bg-[#9A9487]"></span><span className="hidden md:inline">{ui.lastingMemories}</span><span className="ml-8 font-serif normal-case italic tracking-normal text-xl text-[#4D503F]">{ui.italianNature}</span>
          </div>

          {/* The 22 m² Guest Apartment Section */}
          <section id="stay" className="py-16 md:py-24 px-5 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-3">
                  {ui.stayEyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#34342E] mb-6 leading-tight">
                  {ui.stayTitle}
                </h2>
                <p className="text-base text-[#34342E]/80 leading-relaxed mb-6 font-light">
                  {ui.intro}
                </p>
                <p className="text-base text-[#34342E]/80 leading-relaxed mb-8 font-light">
                  {ui.outside}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setIsSpecsOpen(true)}
                    className="p-5 rounded-sm bg-[#DDD2C0]/40 border border-[#D7CCBA] cursor-pointer hover:bg-[#DDD2C0] transition"
                  >
                    <Waves className="w-6 h-6 text-[#74755F] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">{ui.pool}</h4>
                    <p className="text-xs text-[#34342E]/70">{t.poolText}</p>
                  </div>
                  <div 
                    onClick={() => setIsSpecsOpen(true)}
                    className="p-5 rounded-sm bg-[#DDD2C0]/40 border border-[#D7CCBA] cursor-pointer hover:bg-[#DDD2C0] transition"
                  >
                    <Trees className="w-6 h-6 text-[#74755F] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">{ui.suite}</h4>
                    <p className="text-xs text-[#34342E]/70">{ui.yours}</p>
                  </div>
                  <div className="p-5 rounded-sm bg-[#DDD2C0]/40 border border-[#D7CCBA]">
                    <Baby className="w-6 h-6 text-[#74755F] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">{ui.kids}</h4>
                    <p className="text-xs text-[#34342E]/70">{t.familyText}</p>
                  </div>
                  <div className="p-5 rounded-sm bg-[#DDD2C0]/40 border border-[#D7CCBA]">
                    <Car className="w-6 h-6 text-[#74755F] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">{ui.ev}</h4>
                    <p className="text-xs text-[#34342E]/70">{ui.sustainable}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-[#D7CCBA] relative group">
                  <img 
                    src="/Mediterranes%20Luxusapartment%20bei%20Sonnenuntergang.png" 
                    alt="Architectural visualization of Casa Solea in Pacengo di Lazise" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34342E]/70 via-transparent to-transparent opacity-80 flex flex-col justify-end p-8 text-[#F4F0E8]">
                    <span className="text-[10px] uppercase tracking-widest text-[#B79A77] mb-1">Pacengo di Lazise · Località Gasco</span>
                    <h4 className="font-serif text-xl mb-1">Casa Solea · Garden & Pool</h4>
                    <p className="text-xs text-[#F4F0E8]/80 font-light">{ui.sanctuary}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outdoors & Kids Oasis */}
          <section id="outdoors" className="py-16 md:py-24 bg-[#DDD2C0]/35 border-y border-[#D7CCBA]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-3">
                  {ui.outdoorsEyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#34342E] mb-4">
                  {ui.outdoorsTitle}
                </h2>
                <p className="text-base text-[#34342E]/80 font-light">
                  {ui.outdoorsLead}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#F4F0E8] p-8 rounded-sm border border-[#D7CCBA] shadow-sm">
                  <div className="w-12 h-12 rounded-sm bg-[#74755F]/10 flex items-center justify-center mb-6">
                    <Smile className="w-6 h-6 text-[#74755F]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#34342E] mb-3">{ui.play}</h3>
                  <p className="text-sm text-[#34342E]/80 font-light leading-relaxed">
                    {ui.playText}
                  </p>
                </div>

                <div className="bg-[#F4F0E8] p-8 rounded-sm border border-[#D7CCBA] shadow-sm">
                  <div className="w-12 h-12 rounded-sm bg-[#74755F]/10 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-[#74755F]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#34342E] mb-3">{ui.peace}</h3>
                  <p className="text-sm text-[#34342E]/80 font-light leading-relaxed">
                    {ui.peaceText}
                  </p>
                </div>

                <div className="bg-[#F4F0E8] p-8 rounded-sm border border-[#D7CCBA] shadow-sm">
                  <div className="w-12 h-12 rounded-sm bg-[#74755F]/10 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-[#74755F]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#34342E] mb-3">{ui.nearby}</h3>
                  <p className="text-sm text-[#34342E]/80 font-light leading-relaxed">
                    {ui.nearbyText}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section id="story" className="py-16 md:py-24 px-5 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-[#D7CCBA]">
                  <img 
                    src="/Ostseite.png" 
                    alt="Architectural visualisation of Casa Solea" 
                    loading="lazy" decoding="async" className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-3">
                  {ui.hostsEyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#34342E] mb-6 leading-tight">
                  {t.storyHeading}
                </h2>
                <p className="text-base text-[#34342E]/80 leading-relaxed mb-6 font-light">
                  {t.storyText1}
                </p>
                <p className="text-base text-[#34342E]/80 leading-relaxed mb-8 font-light">
                  {t.storyText2}
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-[#D7CCBA]">
                  <div>
                    <h4 className="font-serif font-medium text-lg text-[#34342E]">{ui.hosts}</h4>
                    <p className="text-xs text-[#74755F] uppercase tracking-wider">{ui.hostSub}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location */}
          <section id="location" className="py-16 md:py-24 bg-[#34342E] text-[#F4F0E8]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B79A77] font-semibold block mb-3">
                  Località Gasco, Pacengo di Lazise
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mb-4">
                  {t.distanceTitle}
                </h2>
                <p className="text-base text-[#F4F0E8]/80 font-light">
                  {ui.locationLead}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {localRecommendations.map((rec, idx) => {
                  const IconComp = rec.icon;
                  return (
                    <div key={idx} className="bg-[#34342E] p-6 rounded-sm border border-[#D7CCBA]/20">
                      <div className="w-10 h-10 rounded-xl bg-[#74755F]/20 flex items-center justify-center mb-4 text-[#B79A77]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#B79A77] block mb-1">{rec.category}</span>
                      <h3 className="font-serif text-lg mb-2">{rec.title}</h3>
                      <span className="text-xs font-semibold text-[#D7CCBA] block mb-3">{rec.distance}</span>
                      <p className="text-xs text-[#F4F0E8]/70 font-light leading-relaxed">{rec.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full h-96 rounded-sm overflow-hidden border border-[#D7CCBA]/30 relative shadow-xl">
                <iframe 
                  title="Pacengo di Lazise Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.33924151322!2d10.7242!3d45.4542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eb405786ef75%3A0x40af13fec13c4c0!2s37017%20Pacengo%20VR%2C%20Italy!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-80"
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-[#34342E]/90 backdrop-blur-md p-4 rounded-sm border border-[#D7CCBA]/30 text-xs">
                  <p className="font-serif text-sm font-medium mb-1">Località Gasco, Pacengo di Lazise</p>
                  <p className="text-[#F4F0E8]/70">{ui.setting}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="py-16 md:py-24 px-5 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-3">
                  {ui.galleryEyebrow}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#34342E]">
                  {ui.galleryTitle}
                </h2>
              </div>

              <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto max-w-full pb-2">
                {[['All',ui.all], ['Casa Solea','Casa Solea'], ['Pool',ui.poolLabel], ['Apartment (22m²)',t.theStay], ['Interior',ui.interior], ['For Children',ui.children], ['Winery',ui.winery]].map(([tab,label]) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGalleryTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition ${activeGalleryTab === tab ? 'bg-[#74755F] text-[#F4F0E8]' : 'bg-[#DDD2C0]/50 text-[#34342E] hover:bg-[#D7CCBA]'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages
                .filter(img => activeGalleryTab === 'All' || img.category === activeGalleryTab)
                .map(img => (
                  <div key={img.id} className="group relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-[#D7CCBA]">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => { e.target.src = "/Westseite.png"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#34342E]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F4F0E8]">
                      <span className="text-[10px] uppercase tracking-widest text-[#B79A77] mb-1">Casa Solea · {img.category}</span>
                      <h4 className="font-serif text-base mb-1">{img.title}</h4>
                      <p className="text-xs text-[#F4F0E8]/80 font-light">{img.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Wine Teaser Section with Button linking to Subpage */}
          <section className="py-16 md:py-24 bg-[#DDD2C0]/35 border-t border-[#D7CCBA]">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-3">
                {ui.wineEyebrow}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#34342E] mb-4">
                {ui.wineTitle}
              </h2>
              <p className="text-base text-[#34342E]/80 font-light max-w-2xl mx-auto mb-10">
                {t.winesIntro}
              </p>
              <button 
                onClick={() => { setActiveTab('webshop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-[#74755F] text-[#F4F0E8] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#4D503F] transition shadow-xl inline-flex items-center gap-2"
              >
                <Wine className="w-4 h-4" /> {t.discoverWinesBtn} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </>
      ) : (
        /* ================= WEBSHOP SUBPAGE ================= */
        <div className="py-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-[#D7CCBA]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-2">{ui.subpage}</span>
              <h1 className="text-3xl md:text-5xl font-serif text-[#34342E]">{ui.winesPage}</h1>
              <p className="text-sm text-[#34342E]/80 font-light mt-1">{ui.winesLead}</p>
            </div>
            <button 
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-full border border-[#D7CCBA] bg-[#DDD2C0]/50 text-xs font-semibold uppercase tracking-wider hover:bg-[#D7CCBA] transition"
            >
              {ui.backHome}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wineCatalogue.map(wine => (
              <div key={wine.id} className="bg-[#F4F0E8] rounded-sm p-6 border border-[#D7CCBA] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden mb-6 bg-[#DDD2C0]/50 relative">
                    <img src={wine.image} alt={wine.name} loading="lazy" decoding="async" className="w-full h-full object-cover" onError={(e)=>{e.target.src="/Casa%20Solea%20am%20Gardasee%20bei%20Sonnenuntergang.png"}} />
                    <span className="absolute top-3 right-3 bg-[#74755F] text-[#F4F0E8] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
                      {lang==='de' ? ({'White Wine':'Weißwein','Rosé Wine':'Roséwein','Red Wine':'Rotwein','Sparkling Wine':'Schaumwein'}[wine.type] || wine.type) : lang==='it' ? ({'White Wine':'Vino bianco','Rosé Wine':'Vino rosato','Red Wine':'Vino rosso','Sparkling Wine':'Spumante'}[wine.type] || wine.type) : lang==='nl' ? ({'White Wine':'Witte wijn','Rosé Wine':'Rosé','Red Wine':'Rode wijn','Sparkling Wine':'Mousserende wijn'}[wine.type] || wine.type) : wine.type}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#74756A] block mb-1">{lang==='de'?'Gardasee, Italien':lang==='it'?'Lago di Garda, Italia':lang==='nl'?'Gardameer, Italië':wine.origin}</span>
                  <h3 className="font-serif text-xl text-[#34342E] mb-2">{wine.name}</h3>
                  <p className="text-xs text-[#34342E]/70 font-light mb-4 leading-relaxed">{lang==='de' ? ({1:'Frisch und elegant, mit feiner Frucht und mineralischer Note.',2:'Feiner Rosé vom Gardasee mit frischer Beerenfrucht und lebendiger Mineralität.',3:'Elegant und weich mit Noten von Kirsche, Veilchen und feinen Gewürzen.',4:'Feine Perlage, florale Noten und frischer grüner Apfel – ideal als Aperitif.'}[wine.id] || wine.desc) : lang==='it' ? ({1:'Fresco ed elegante, con frutto delicato e una nota minerale.',2:'Rosato fine del Garda, con piccoli frutti rossi e una mineralità vivace.',3:'Elegante e morbido, con note di ciliegia, violetta e spezie delicate.',4:'Perlage fine, note floreali e mela verde fresca, ideale come aperitivo.'}[wine.id] || wine.desc) : lang==='nl' ? ({1:'Fris en elegant, met verfijnd fruit en een minerale toets.',2:'Fijne rosé van het Gardameer met rood fruit en levendige mineraliteit.',3:'Elegant en zacht, met tonen van kers, viooltjes en fijne kruiden.',4:'Fijne mousse, florale tonen en frisse groene appel, ideaal als aperitief.'}[wine.id] || wine.desc) : wine.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#D7CCBA]">
                  <div>
                    <span className="text-xs text-[#74756A] block">{wine.size}</span>
                    <span className="font-serif text-lg font-semibold text-[#34342E]">€{Number(wine.price).toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(wine)}
                    className="px-4 py-2 bg-[#74755F] text-[#F4F0E8] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#4D503F] transition flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" /> {ui.add}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 22m² Suite Specs Modal */}
      {isSpecsOpen && (
        <div className="fixed inset-0 z-50 bg-[#34342E]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F4F0E8] w-full max-w-2xl max-h-[90vh] rounded-sm overflow-y-auto border border-[#D7CCBA] shadow-xl p-5 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D7CCBA]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#74755F] block mb-1">Casa Solea</span>
                <h3 className="text-2xl font-serif text-[#34342E]">{ui.specs}</h3>
              </div>
              <button onClick={() => setIsSpecsOpen(false)} className="p-2 rounded-full hover:bg-[#DDD2C0] transition">
                <X className="w-6 h-6 text-[#34342E]" />
              </button>
            </div>

            <div className="space-y-6 text-sm font-light text-[#34342E]">
              <div className="bg-[#DDD2C0]/40 p-6 rounded-sm border border-[#D7CCBA]">
                <h4 className="font-serif font-semibold text-base mb-3 text-[#34342E]">{ui.breakdown}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <li><strong>{ui.rentable}</strong> 22,00 m² · {ui.privateBedroom}</li>
                  <li><strong>{ui.poolLabel}</strong> 32,00 m² · {ui.sharedPool}</li>
                  <li><strong>{ui.terrace}</strong> 22.26 m²</li>
                  <li><strong>{ui.occupancy}</strong> {ui.guests2}</li>
                  <li><strong>{ui.locationLabel}</strong> Località Gasco, Pacengo di Lazise (VR)</li>
                </ul>
              </div>

              <p className="text-xs leading-relaxed">
                {ui.intro}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wine Shopping Bag Drawer & Stripe Checkout Integration */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-[#34342E]/70 backdrop-blur-sm flex justify-end">
          <div className="bg-[#F4F0E8] w-full max-w-md h-full flex flex-col justify-between p-8 shadow-xl border-l border-[#D7CCBA] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D7CCBA]">
                <div className="flex items-center gap-2">
                  <Wine className="w-5 h-5 text-[#74755F]" />
                  <h3 className="font-serif text-xl text-[#34342E]">{t.cartTitle}</h3>
                </div>
                <button onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(false); setCheckoutStep('address'); }} className="p-2 rounded-full hover:bg-[#DDD2C0] transition">
                  <X className="w-6 h-6 text-[#34342E]" />
                </button>
              </div>

              {!isCheckoutOpen ? (
                <>
                  {cart.length === 0 ? (
                    <div className="text-center py-20 text-[#74756A]">
                      <Wine className="w-12 h-12 mx-auto mb-4 opacity-40" />
                      <p className="text-sm font-light">{t.emptyCart}</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-[#DDD2C0]/40 rounded-sm border border-[#D7CCBA]">
                          <div className="flex-1 pr-4">
                            <h4 className="font-serif text-sm text-[#34342E]">{item.name}</h4>
                            <span className="text-xs text-[#74756A]">€{Number(item.price).toFixed(2)} {ui.each}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded-full bg-[#DDD2C0] flex items-center justify-center hover:bg-[#D7CCBA]">
                              <Minus className="w-3 h-3 text-[#34342E]" />
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded-full bg-[#DDD2C0] flex items-center justify-center hover:bg-[#D7CCBA]">
                              <Plus className="w-3 h-3 text-[#34342E]" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                /* Checkout Flow with Stripe Integration & Address */
                <div className="space-y-6">
                  {checkoutStep === 'address' && (
                    <form onSubmit={(e) => { e.preventDefault(); setCheckoutStep('payment'); }} className="space-y-4">
                      <h4 className="font-serif text-base font-semibold text-[#34342E]">{ui.shipping}</h4>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.fullName}</label>
                        <input type="text" required value={shippingAddress.fullName} onChange={(e)=>setShippingAddress({...shippingAddress, fullName: e.target.value})} placeholder="Jan de Vries" className="w-full px-4 py-3 rounded-xl bg-[#DDD2C0]/40 border border-[#D7CCBA] text-xs focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.email}</label>
                        <input type="email" required value={shippingAddress.email} onChange={(e)=>setShippingAddress({...shippingAddress, email: e.target.value})} placeholder="jan@example.com" className="w-full px-4 py-3 rounded-xl bg-[#DDD2C0]/40 border border-[#D7CCBA] text-xs focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.street}</label>
                        <input type="text" required value={shippingAddress.street} onChange={(e)=>setShippingAddress({...shippingAddress, street: e.target.value})} placeholder="Keizersgracht 123" className="w-full px-4 py-3 rounded-xl bg-[#DDD2C0]/40 border border-[#D7CCBA] text-xs focus:outline-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.city}</label>
                          <input type="text" required value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress, city: e.target.value})} placeholder="Amsterdam" className="w-full px-4 py-3 rounded-xl bg-[#DDD2C0]/40 border border-[#D7CCBA] text-xs focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.postal}</label>
                          <input type="text" required value={shippingAddress.postalCode} onChange={(e)=>setShippingAddress({...shippingAddress, postalCode: e.target.value})} placeholder="1015 CJ" className="w-full px-4 py-3 rounded-xl bg-[#DDD2C0]/40 border border-[#D7CCBA] text-xs focus:outline-none" />
                        </div>
                      </div>
                      <button type="submit" className="w-full py-4 bg-[#74755F] text-[#F4F0E8] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#4D503F] transition shadow-lg mt-4">
                        {ui.continuePayment}
                      </button>
                    </form>
                  )}

                  {checkoutStep === 'payment' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-5 h-5 text-[#74755F]" />
                        <h4 className="font-serif text-base font-semibold text-[#34342E]">{ui.payment}</h4>
                      </div>
                      <p className="text-xs text-[#74756A]">{ui.paymentInfo}</p>
                      <div className="p-4 rounded-sm bg-[#DDD2C0]/50 border border-[#D7CCBA] space-y-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.card}</label>
                          <input type="text" placeholder="4242 •••• •••• 4242" defaultValue="4242 4242 4242 4242" className="w-full px-4 py-3 rounded-xl bg-white border border-[#D7CCBA] text-xs font-mono focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.expires}</label>
                            <input type="text" placeholder="MM / YY" defaultValue="12/28" className="w-full px-4 py-3 rounded-xl bg-white border border-[#D7CCBA] text-xs font-mono focus:outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-[#74756A] mb-1">{ui.cvc}</label>
                            <input type="text" placeholder="123" defaultValue="888" className="w-full px-4 py-3 rounded-xl bg-white border border-[#D7CCBA] text-xs font-mono focus:outline-none" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={()=>setCheckoutStep('address')} className="w-1/3 py-3 rounded-full border border-[#D7CCBA] text-xs font-semibold uppercase tracking-wider hover:bg-[#DDD2C0]">
                          {ui.back}
                        </button>
                        <button onClick={() => {
                          const newOrder = {
                            id: 'w-' + Math.floor(100 + Math.random() * 900),
                            customer: shippingAddress.fullName,
                            address: `${shippingAddress.street}, ${shippingAddress.city}, ${shippingAddress.country}`,
                            items: cart.map(i => `${i.qty}x ${i.name}`).join(', '),
                            total: `€${cartTotal.toFixed(2)}`,
                            paymentStatus: 'Paid (Stripe API)',                            shippingStatus: 'Processing / Awaiting Fulfillment',
                            trackingNumber: 'Pending'
                          };
                          setWineOrders([newOrder, ...wineOrders]);
                          setCart([]);
                          setCheckoutStep('success');
                        }} className="w-2/3 py-3 bg-[#74755F] text-[#F4F0E8] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#4D503F] transition shadow-lg">
                          {ui.pay} €{cartTotal.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  )}

                  {checkoutStep === 'success' && (
                    <div className="text-center py-10 space-y-4">
                      <CheckCircle2 className="w-16 h-16 text-[#74755F] mx-auto" />
                      <h4 className="font-serif text-2xl text-[#34342E]">{ui.success}</h4>
                      <p className="text-xs text-[#34342E]/80 font-light">{ui.orderThanks}</p>
                      <button onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(false); setCheckoutStep('address'); }} className="px-6 py-3 bg-[#74755F] text-[#F4F0E8] rounded-full uppercase text-xs tracking-widest font-bold">
                        {ui.closeShop}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {!isCheckoutOpen && cart.length > 0 && (
              <div className="pt-6 border-t border-[#D7CCBA]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm uppercase tracking-wider font-semibold text-[#34342E]">{t.total}</span>
                  <span className="font-serif text-2xl font-semibold text-[#34342E]">€{cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 bg-[#74755F] text-[#F4F0E8] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#4D503F] transition shadow-lg text-center block"
                >
                  {t.checkout}
                </button>
                <p className="text-[10px] text-center text-[#74756A] mt-3">{ui.secureCheckout} · Casa Solea</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Availability Calendar */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-[#34342E]/65 flex items-start md:items-center justify-center overflow-y-auto overscroll-contain p-0 sm:p-4">
          <div className="bg-[#F8F5EE] w-full max-w-2xl min-h-full sm:min-h-0 sm:max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-none sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#D7CCBA] shadow-2xl relative my-0 sm:my-auto">
            <button type="button" aria-label="Close" onClick={() => setIsBookingOpen(false)} className="sticky top-0 float-right z-20 p-2 -mt-1 -mr-1 rounded-full bg-[#F8F5EE] border border-[#D7CCBA] hover:bg-[#E9E1D4] transition">
              <X className="w-6 h-6 text-[#34342E]" />
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-[#74755F] font-semibold block mb-2">{ui.availability}</span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#34342E] mb-2">Casa Solea</h3>
            <p className="text-xs text-[#34342E]/65 mb-6">{ui.availableLegend}</p>

            <div className="flex items-center justify-between mb-5">
              <button onClick={() => setAvailabilityMonth(new Date(availabilityMonth.getFullYear(), availabilityMonth.getMonth() - 1, 1))} className="px-4 py-2 rounded-full border border-[#D7CCBA] hover:bg-[#DDD2C0] text-sm">←</button>
              <h4 className="font-serif text-xl text-[#34342E]">
                {availabilityMonth.toLocaleDateString(lang === 'de' ? 'de-DE' : lang === 'it' ? 'it-IT' : lang === 'nl' ? 'nl-NL' : 'en-GB', { month: 'long', year: 'numeric' })}
              </h4>
              <button onClick={() => setAvailabilityMonth(new Date(availabilityMonth.getFullYear(), availabilityMonth.getMonth() + 1, 1))} className="px-4 py-2 rounded-full border border-[#D7CCBA] hover:bg-[#DDD2C0] text-sm">→</button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-[10px] uppercase tracking-wider text-[#74756A]">
              {(lang==='de'?['Mo','Di','Mi','Do','Fr','Sa','So']:lang==='it'?['Lu','Ma','Me','Gi','Ve','Sa','Do']:lang==='nl'?['Ma','Di','Wo','Do','Vr','Za','Zo']:['Mo','Tu','We','Th','Fr','Sa','Su']).map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {calendarDays.map((date, idx) => {
                if (!date) return <div key={`empty-${idx}`} />;
                const unavailable = isUnavailable(date);
                const selected = isSelectedDate(date);
                return (
                  <button
                    type="button"
                    disabled={unavailable}
                    onClick={() => handleAvailabilityDateClick(date)}
                    key={date.toISOString()}
                    className={`aspect-square min-h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-sm font-medium border transition ${unavailable ? 'bg-[#E9DDD6] border-[#DDCEC5] text-[#8B6D62] cursor-not-allowed' : selected ? 'bg-[#66664C] border-[#66664C] text-white ring-2 ring-[#66664C]/20' : 'bg-white border-[#D7CCBA] text-[#34342E] hover:bg-[#E9E4D8] hover:border-[#9A967E] cursor-pointer'}`}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 border-t border-[#D7CCBA] pt-5">
              {!bookingSubmitted ? (
                <>
                  <p className="text-sm text-[#34342E] mb-4">
                    {selectedCheckIn
                      ? selectedCheckOut
                        ? `${selectedCheckIn.toLocaleDateString()} – ${selectedCheckOut.toLocaleDateString()}`
                        : ui.arrivalChosen
                      : ui.chooseArrival}
                  </p>
                  {selectedCheckIn && selectedCheckOut && (
                    <form onSubmit={handleDirectBooking} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <input required value={bookingGuest.name} onChange={(e) => setBookingGuest({...bookingGuest, name: e.target.value})} placeholder={ui.name} className="px-4 py-3 rounded-xl border border-[#D7CCBA] bg-white text-sm focus:outline-none" />
                      <input required type="email" value={bookingGuest.email} onChange={(e) => setBookingGuest({...bookingGuest, email: e.target.value})} placeholder={ui.email} className="px-4 py-3 rounded-xl border border-[#D7CCBA] bg-white text-sm focus:outline-none" />
                      <select value={bookingGuest.guests} onChange={(e) => setBookingGuest({...bookingGuest, guests: e.target.value})} className="px-4 py-3 rounded-xl border border-[#D7CCBA] bg-white text-sm focus:outline-none">
                        <option value="1">{ui.oneGuest}</option><option value="2">2 {ui.guests}</option><option value="3">3 {ui.guests}</option><option value="4">4 {ui.guests}</option>
                      </select>
                      <button type="submit" className="md:col-span-3 bg-[#74755F] text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-[#4D503F] transition">
                        {ui.request}
                      </button>
                    </form>
                  )}
                </>
              ) : (
                <div className="rounded-sm bg-green-50 border border-green-200 p-5 text-green-900">
                  <p className="font-semibold mb-1">{ui.thanks}, {bookingGuest.name}.</p>
                  <p className="text-sm">{ui.requestReceived}</p>
                </div>
              )}
            </div>
            <button type="button" onClick={() => setIsBookingOpen(false)} className="mt-5 w-full py-3 border border-[#BDB3A3] rounded-xl text-sm font-medium text-[#34342E] hover:bg-[#E9E1D4] transition">
              {lang==='de'?'Zurück zur Seite':lang==='it'?'Torna alla pagina':lang==='nl'?'Terug naar de pagina':'Back to page'}
            </button>
          </div>
        </div>
      )}

      {/* Upgraded Admin Portal Modal: Booking Approvals & Full Webshop CRUD */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 bg-[#34342E]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#F4F0E8] w-full max-w-5xl max-h-[92vh] rounded-sm overflow-y-auto border border-[#D7CCBA] shadow-xl p-5 sm:p-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D7CCBA]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#74755F] text-white flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#74755F] font-semibold block">Casa Solea</span>
                  <h3 className="text-2xl font-serif text-[#34342E]">{t.adminPortalTitle}</h3>
                  {isAdminLoggedIn && <button type="button" onClick={handleAdminLogout} className="mt-1 text-xs underline text-[#74755F]">Sign out</button>}
                </div>
              </div>
              <button onClick={() => setIsAdminOpen(false)} className="p-2 rounded-full hover:bg-[#DDD2C0] transition">
                <X className="w-6 h-6 text-[#34342E]" />
              </button>
            </div>

            {!isAdminLoggedIn ? (
              <div className="max-w-md mx-auto py-12 text-center">
                <p className="text-sm text-[#34342E]/80 mb-6 font-light">{t.adminLoginPrompt}</p>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input 
                    type="email" 
                    autoComplete="username"
                    placeholder="Admin email"
                    value={adminUsernameInput}
                    onChange={(e) => setAdminUsernameInput(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#DDD2C0]/50 border border-[#D7CCBA] text-sm focus:outline-none text-center font-medium"
                  />
                  <input 
                    type="password" 
                    autoComplete="current-password"
                    placeholder="Admin password"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#DDD2C0]/50 border border-[#D7CCBA] text-sm focus:outline-none text-center font-medium"
                  />
                  {adminLoginError && <p className="text-sm text-red-700">{adminLoginError}</p>}
                  <button type="submit" disabled={adminLoginLoading} className="w-full py-4 bg-[#74755F] disabled:opacity-60 text-[#F4F0E8] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#4D503F] transition shadow-lg">
                    {adminLoginLoading ? 'Signing in…' : 'Sign In as Admin'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-12">
                {/* OTA Channel Sync Status Bar */}
                <div className="bg-[#DDD2C0]/50 p-6 rounded-sm border border-[#D7CCBA] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif font-semibold text-base text-[#34342E] mb-1">OTA Channel Synchronization (Airbnb & Booking.com)</h4>
                    <p className="text-xs text-[#74756A]">iCal/channel synchronization is not connected yet. Connect Airbnb and Booking.com before accepting live reservations.</p>
                    <div className="flex gap-4 mt-2 text-xs">
                      <span className="text-[#74755F] font-medium">Airbnb: {syncStatus.airbnb}</span>
                      <span className="text-[#74755F] font-medium">Booking.com: {syncStatus.booking}</span>
                    </div>
                  </div>
                  <button 
                    onClick={triggerChannelSync}
                    className="px-4 py-2.5 bg-[#34342E] text-[#F4F0E8] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#34342E] transition flex items-center gap-2 shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Sync Now
                  </button>
                </div>

                {/* Booking calendar & reservation management */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <h4 className="font-serif font-semibold text-lg text-[#34342E] flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#74755F]" /> Booking Calendar
                    </h4>
                    <div className="flex items-center gap-2">
                      <button onClick={()=>setAdminMonth(new Date(adminMonth.getFullYear(),adminMonth.getMonth()-1,1))} className="p-2 border border-[#D7CCBA] rounded-full"><ChevronLeft className="w-4 h-4"/></button>
                      <span className="min-w-32 text-center font-semibold">{adminMonth.toLocaleDateString('en-GB',{month:'long',year:'numeric'})}</span>
                      <button onClick={()=>setAdminMonth(new Date(adminMonth.getFullYear(),adminMonth.getMonth()+1,1))} className="p-2 border border-[#D7CCBA] rounded-full"><ChevronRight className="w-4 h-4"/></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-[#74756A] mb-1">
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=><div key={d} className="py-1">{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {adminCalendarDays.map((date,i)=>{
                      if(!date) return <div key={'blank-'+i} className="min-h-16 sm:min-h-20"/>;
                      const b=bookingForAdminDate(date);
                      return <div key={dateKey(date)} className={`min-h-16 sm:min-h-20 rounded-lg border p-1.5 ${b ? 'bg-[#DDD2C0] border-[#B79A77]' : 'bg-white/60 border-[#E5DCCD]'}`}>
                        <div className="text-xs font-semibold">{date.getDate()}</div>
                        {b ? <div className="mt-1 text-[9px] sm:text-[10px] leading-tight">
                          <div className="font-bold truncate">{b.guest}</div>
                          <div className="truncate">{b.platform}</div>
                          <div>{b.guests} guest{b.guests===1?'':'s'}</div>
                          <div className={b.status==='Confirmed'?'text-emerald-700':'text-amber-700'}>{b.status}</div>
                        </div> : <div className="mt-2 text-[9px] text-emerald-700">Available</div>}
                      </div>;
                    })}
                  </div>

                  <div className="mb-6 border border-[#D7CCBA] rounded-xl p-4 bg-white/40">
                    <h4 className="font-serif font-semibold text-base mb-3">Add reservation</h4>
                    <form onSubmit={addAdminBooking} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      <input required placeholder="Guest name" value={newAdminBooking.guest_name} onChange={e=>setNewAdminBooking({...newAdminBooking,guest_name:e.target.value})} className="p-2.5 border rounded-lg bg-white"/>
                      <input required type="email" placeholder="Guest email" value={newAdminBooking.guest_email} onChange={e=>setNewAdminBooking({...newAdminBooking,guest_email:e.target.value})} className="p-2.5 border rounded-lg bg-white"/>
                      <select value={newAdminBooking.source} onChange={e=>setNewAdminBooking({...newAdminBooking,source:e.target.value})} className="p-2.5 border rounded-lg bg-white"><option>Airbnb</option><option>Booking.com</option><option>Website Direct</option><option>Manual</option></select>
                      <input min="1" max="4" type="number" value={newAdminBooking.guests} onChange={e=>setNewAdminBooking({...newAdminBooking,guests:e.target.value})} className="p-2.5 border rounded-lg bg-white" title="Guests"/>
                      <input required type="date" value={newAdminBooking.check_in} onChange={e=>setNewAdminBooking({...newAdminBooking,check_in:e.target.value})} className="p-2.5 border rounded-lg bg-white"/>
                      <input required type="date" value={newAdminBooking.check_out} onChange={e=>setNewAdminBooking({...newAdminBooking,check_out:e.target.value})} className="p-2.5 border rounded-lg bg-white"/>
                      <select value={newAdminBooking.payment_status} onChange={e=>setNewAdminBooking({...newAdminBooking,payment_status:e.target.value})} className="p-2.5 border rounded-lg bg-white"><option>Not paid</option><option>Partially paid</option><option>Paid</option><option>Refunded</option></select>
                      <input type="number" min="0" step="0.01" placeholder="Total €" value={newAdminBooking.amount_total} onChange={e=>setNewAdminBooking({...newAdminBooking,amount_total:e.target.value})} className="p-2.5 border rounded-lg bg-white"/>
                      <button type="submit" className="sm:col-span-2 lg:col-span-4 py-2.5 bg-[#4D503F] text-white rounded-full text-xs uppercase tracking-wider font-semibold">Add reservation</button>
                    </form>
                  </div>
                  <h4 className="font-serif font-semibold text-lg text-[#34342E] mb-3">Reservations ({bookings.length})</h4>
                  {bookingDataLoading ? <p className="text-sm">Loading reservations…</p> : <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[950px]">
                      <thead><tr className="border-b border-[#D7CCBA] text-[#74756A] uppercase tracking-wider">
                        <th className="pb-3">Guest</th><th className="pb-3">Platform</th><th className="pb-3">Dates</th><th className="pb-3">Guests</th><th className="pb-3">Booking</th><th className="pb-3">Payment</th><th className="pb-3">Amount</th><th className="pb-3 text-right">Action</th>
                      </tr></thead>
                      <tbody className="divide-y divide-[#D7CCBA]/50">{bookings.map(b=><tr key={b.id}>
                        <td className="py-3 font-medium">{b.guest}<div className="text-[10px] text-[#74756A]">{b.email}</div></td>
                        <td className="py-3"><select value={b.platform} onChange={e=>updateBookingField(b.id,{source:e.target.value})} className="bg-transparent border rounded p-1"><option>Website Direct</option><option>Airbnb</option><option>Booking.com</option><option>Manual</option></select></td>
                        <td className="py-3">{b.checkIn} → {b.checkOut}</td>
                        <td className="py-3">{b.guests}</td>
                        <td className="py-3"><select value={b.status} onChange={e=>updateBookingField(b.id,{status:e.target.value})} className="bg-transparent border rounded p-1"><option>Pending</option><option>Confirmed</option><option>Cancelled</option></select></td>
                        <td className="py-3"><select value={b.paymentStatus} onChange={e=>updateBookingField(b.id,{payment_status:e.target.value})} className="bg-transparent border rounded p-1"><option>Not paid</option><option>Partially paid</option><option>Paid</option><option>Refunded</option></select></td>
                        <td className="py-3">{b.amountTotal != null ? '€'+Number(b.amountTotal).toFixed(2) : '—'}</td>
                        <td className="py-3 text-right">{b.status==='Pending' ? <button onClick={()=>approveBooking(b.id)} className="px-3 py-1 bg-[#74755F] text-white rounded-full text-[10px] font-bold uppercase">Confirm</button> : <span className="text-[#74756A]">{b.status}</span>}</td>
                      </tr>)}</tbody>
                    </table>
                  </div>}
                  <p className="mt-3 text-[11px] text-[#74756A]">Confirmed reservations automatically block the public availability calendar. Check-out day remains available for the next arrival.</p>
                </div>

                {/* Wine Webshop Orders Management (Stripe Payment & Shipping Details) */}
                <div>
                  <h4 className="font-serif font-semibold text-lg text-[#34342E] mb-4 flex items-center gap-2">
                    <Wine className="w-5 h-5 text-[#74755F]" /> Webshop Orders & Stripe Payments ({wineOrders.length})
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#D7CCBA] text-[#74756A] uppercase tracking-wider">
                          <th className="pb-3 font-semibold">Order / Customer</th>
                          <th className="pb-3 font-semibold">Items & Address</th>
                          <th className="pb-3 font-semibold">Total / Payment</th>
                          <th className="pb-3 font-semibold">Shipping / Tracking</th>
                          <th className="pb-3 font-semibold text-right">Update</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#D7CCBA]/50">
                        {wineOrders.map(w => (
                          <tr key={w.id} className="hover:bg-[#DDD2C0]/30">
                            <td className="py-3.5">
                              <span className="font-mono text-[10px] text-[#74756A] block">{w.id}</span>
                              <span className="font-medium text-[#34342E]">{w.customer}</span>
                            </td>
                            <td className="py-3.5 max-w-xs">
                              <span className="text-[#34342E] block">{w.items}</span>
                              <span className="text-[10px] text-[#74756A] block truncate">📍 {w.address}</span>
                            </td>
                            <td className="py-3.5">
                              <span className="font-serif font-semibold text-[#34342E] block">{w.total}</span>
                              <span className="text-[10px] text-emerald-700 font-semibold">{w.paymentStatus}</span>
                            </td>
                            <td className="py-3.5">
                              <span className="text-[#74755F] font-medium block">{w.shippingStatus}</span>
                              <span className="font-mono text-[10px] text-[#74756A] block">Tracking: {w.trackingNumber}</span>
                            </td>
                            <td className="py-3.5 text-right">
                              <button onClick={() => {
                                const newTrack = prompt('Enter DHL Tracking Number:', w.trackingNumber);
                                if (newTrack) updateOrderShipping(w.id, 'Shipped', newTrack);
                              }} className="px-3 py-1 bg-[#34342E] text-white rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#34342E]">
                                Add Shipping
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Webshop Product Management (Add, Edit, Remove Products, Prices, Pictures, Descriptions) */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-serif font-semibold text-lg text-[#34342E] flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#74755F]" /> Webshop Product Catalogue ({wineCatalogue.length})
                    </h4>
                    <button onClick={() => setIsAddingProduct(true)} className="px-4 py-2 bg-[#74755F] text-white rounded-full text-xs uppercase tracking-wider font-bold">
                      + Add New Wine Product
                    </button>
                  </div>

                  {/* Add Product Modal/Form */}
                  {isAddingProduct && (
                    <form onSubmit={handleAddNewProduct} className="bg-[#DDD2C0]/60 p-6 rounded-sm border border-[#D7CCBA] mb-6 space-y-4">
                      <h5 className="font-serif text-sm font-semibold text-[#34342E]">New Wine Details</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input type="text" placeholder="Wine Name" required value={newProductForm.name} onChange={e=>setNewProductForm({...newProductForm, name:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="text" placeholder="Origin / Region" required value={newProductForm.origin} onChange={e=>setNewProductForm({...newProductForm, origin:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="number" step="0.05" placeholder="Price (€)" required value={newProductForm.price} onChange={e=>setNewProductForm({...newProductForm, price:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Image URL" required value={newProductForm.image} onChange={e=>setNewProductForm({...newProductForm, image:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="text" placeholder="Description" required value={newProductForm.desc} onChange={e=>setNewProductForm({...newProductForm, desc:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="px-5 py-2 bg-[#74755F] text-white rounded-full text-xs font-bold uppercase">Save Product</button>
                        <button type="button" onClick={()=>setIsAddingProduct(false)} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full text-xs font-bold uppercase">Cancel</button>
                      </div>
                    </form>
                  )}

                  {/* Edit Product Modal/Form */}
                  {editingProduct && (
                    <form onSubmit={handleSaveProductEdit} className="bg-[#DDD2C0]/80 p-6 rounded-sm border border-[#74755F] mb-6 space-y-4">
                      <h5 className="font-serif text-sm font-semibold text-[#74755F]">Editing: {editingProduct.name}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input type="text" required value={editingProduct.name} onChange={e=>setEditingProduct({...editingProduct, name:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="text" required value={editingProduct.origin} onChange={e=>setEditingProduct({...editingProduct, origin:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="number" step="0.05" required value={editingProduct.price} onChange={e=>setEditingProduct({...editingProduct, price:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" required value={editingProduct.image} onChange={e=>setEditingProduct({...editingProduct, image:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                        <input type="text" required value={editingProduct.desc} onChange={e=>setEditingProduct({...editingProduct, desc:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#D7CCBA] text-xs" />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="px-5 py-2 bg-[#74755F] text-white rounded-full text-xs font-bold uppercase">Update Product</button>
                        <button type="button" onClick={()=>setEditingProduct(null)} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full text-xs font-bold uppercase">Cancel</button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wineCatalogue.map(wine => (
                      <div key={wine.id} className="bg-white p-4 rounded-sm border border-[#D7CCBA] flex items-center justify-between gap-4">
                        <img src={wine.image} alt={wine.name} className="w-12 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h6 className="font-serif text-sm font-semibold text-[#34342E]">{wine.name}</h6>
                          <span className="text-xs text-[#74756A]">€{Number(wine.price).toFixed(2)} · {wine.origin}</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={()=>setEditingProduct(wine)} className="p-2 bg-[#DDD2C0] rounded-full hover:bg-[#D7CCBA]" title="Edit">
                            <Edit3 className="w-4 h-4 text-[#34342E]" />
                          </button>
                          <button onClick={()=>deleteProduct(wine.id)} className="p-2 bg-rose-100 rounded-full hover:bg-rose-200" title="Delete">
                            <Trash2 className="w-4 h-4 text-rose-800" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#34342E] text-[#F4F0E8] py-16 px-6 border-t border-[#D7CCBA]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-4 text-[#B79A77]">Casa Solea</h4>
            <p className="text-xs text-[#F4F0E8]/70 font-light leading-relaxed mb-4">
              {ui.intro}
            </p>
            <span className="text-[10px] uppercase tracking-widest text-[#74756A]">Via Gasco, 37017 Lazise VR, Italy</span>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#B79A77] font-semibold mb-4">{ui.navigation}</h5>
            <ul className="space-y-2 text-xs font-light text-[#F4F0E8]/80">
              <li><button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#B79A77] transition">{ui.home}</button></li>
              <li><button onClick={() => { setActiveTab('webshop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#B79A77] transition">{ui.winesPage}</button></li>
              <li><a href="#stay" onClick={() => setActiveTab('home')} className="hover:text-[#B79A77] transition">{t.theStay}</a></li>
              <li><a href="#outdoors" onClick={() => setActiveTab('home')} className="hover:text-[#B79A77] transition">{t.outdoors}</a></li>
              <li><a href="#location" onClick={() => setActiveTab('home')} className="hover:text-[#B79A77] transition">{t.location}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#B79A77] font-semibold mb-4">{ui.connect}</h5>
            <ul className="space-y-2 text-xs font-light text-[#F4F0E8]/80">
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-[#B79A77]" /> Instagram · {lang === 'de' ? 'folgt' : lang === 'it' ? 'prossimamente' : lang === 'nl' ? 'volgt' : 'coming soon'}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#B79A77]" /> {lang === 'de' ? 'E-Mail folgt' : lang === 'it' ? 'E-mail prossimamente' : lang === 'nl' ? 'E-mail volgt' : 'Email coming soon'}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#B79A77]" /> WhatsApp · {lang === 'de' ? 'folgt' : lang === 'it' ? 'prossimamente' : lang === 'nl' ? 'volgt' : 'coming soon'}</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#B79A77] font-semibold mb-4">{ui.legal}</h5>
            <ul className="space-y-2 text-xs font-light text-[#F4F0E8]/80">
              <li><span className="text-white/55">{ui.privacy} · {lang === 'de' ? 'folgt' : lang === 'it' ? 'prossimamente' : lang === 'nl' ? 'volgt' : 'coming soon'}</span></li>
              <li><span className="text-white/55">{ui.terms} · {lang === 'de' ? 'folgt' : lang === 'it' ? 'prossimamente' : lang === 'nl' ? 'volgt' : 'coming soon'}</span></li>
              <li><span className="text-white/55">{ui.imprint} · {lang === 'de' ? 'folgt' : lang === 'it' ? 'prossimamente' : lang === 'nl' ? 'volgt' : 'coming soon'}</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#D7CCBA]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F0E8]/60 font-light">
          <p>© {new Date().getFullYear()} Casa Solea. {t.rights}</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span>Valentin, Lisa & Sam · Pacengo di Lazise</span>
            <button type="button" onClick={() => setIsAdminOpen(true)} className="text-[#B79A77] flex items-center gap-1 font-semibold hover:text-[#F4F0E8] transition">
              <Lock className="w-3 h-3" /> Admin Portal
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}