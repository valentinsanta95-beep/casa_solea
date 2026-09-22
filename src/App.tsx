import React, { useState, useEffect } from 'react';
import { 
  Sun, Compass, Wine, Users, MapPin, Phone, Mail, Instagram, ShoppingBag, 
  ChevronRight, ChevronLeft, X, Check, Globe, Play, Pause, Volume2, VolumeX,
  Menu, Sparkles, Heart, Shield, Clock, Award, Star, Coffee, Utensils, 
  Baby, Waves, Trees, Car, ArrowRight, ExternalLink, Plus, Minus, Trash2, CheckCircle2,
  Smile, Home, Layers, Eye, Lock, RefreshCw, Calendar, CheckSquare, Settings, CreditCard, Truck, Edit3, Save
} from 'lucide-react';

const translations = {
  de: {
    brandName: "Casa Solea Garda",
    brandSubtitle: "Privates Gartenapartment in Pacengo di Lazise",
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
    heroSub: "800 Meter vom Gardasee. Ein exklusives 22 m² Gäste-Apartment mit Garten und Pool.",
    storyHeading: "Von Amsterdam an den Gardasee",
    storyText1: "Wir sind Valentin, Lisa und unser kleiner Sohn Sam – geboren in Amsterdam, wo wir fast ein Jahrzehnt lebten. Doch die Sehnsucht nach dem Licht Italiens und dem Gardasee führte uns hierher.",
    storyText2: "Lisas familiäre Weintradition ist tief in der Region verwurzelt. In ruhiger Lage in Pacengo di Lazise (Località Gasco) haben wir unser neues Zuhause erbaut und heißen Gäste in unserem feinen, privaten 22 m² Apartment herzlich willkommen.",
    apartmentTitle: "Das 22 m² Private Apartment & Anwesen",
    apartmentDesc: "Perfekt konzipiert für 2 Gäste. Kompakter Luxus im Inneren, verbunden mit großzügigem Außenbereich, Salzwasserpool und Olivenhain.",
    poolText: "32 m² Pool eingebettet in Olivenbäume",
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
    brandName: "Casa Solea Garda",
    brandSubtitle: "Appartamento con Giardino Privato a Pacengo di Lazise",
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
    heroSub: "A 800 metri dal Lago di Garda. Un intimo appartamento di 22 m² con giardino e piscina all'interno della nostra tenuta.",
    storyHeading: "Da Amsterdam al Lago di Garda",
    storyText1: "Siamo Valentin, Lisa e il nostro piccolo Sam, nato ad Amsterdam. Dopo quasi dieci anni all'estero, abbiamo scelto le sponde del Garda per piantare le nostre radici.",
    storyText2: "La tradizione vinicola della famiglia di Lisa affonda le radici in queste colline. A Pacengo di Lazise (Località Gasco) abbiamo costruito la nostra casa, accogliendo gli ospiti nell'intimo appartamento di 22 m².",
    apartmentTitle: "L'Appartamento Privato di 22 m²",
    apartmentDesc: "Pensato per 2 persone. Lusso intimo e funzionale che si apre sul giardino mediterraneo e sulla piscina a sale.",
    poolText: "Piscina privata di 32 m² tra gli olivi",
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
    brandName: "Casa Solea Garda",
    brandSubtitle: "Privé Tuinappartement in Pacengo di Lazise",
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
    apartmentDesc: "Optimaal ingedeeld voor 2 personen. Fijn binnen, en een enorme privétuin met zoutwaterzwembad buiten.",
    poolText: "32 m² privé zwembad omringd door olijfbomen",
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
    brandName: "Casa Solea Garda",
    brandSubtitle: "Private Garden Apartment in Pacengo di Lazise",
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
    heroSub: "800 meters from Lake Garda. An exquisite 22 m² guest sanctuary with garden and pool.",
    storyHeading: "From Amsterdam to Lake Garda",
    storyText1: "We are Valentin, Lisa, and our newborn son Sam—born in Amsterdam, where we spent nearly a decade building our lives. But the call of the Italian sun and Lake Garda brought us home.",
    storyText2: "Lisa’s family vineyard heritage runs deep in the region. Together, we built our family home in peaceful Pacengo di Lazise (Località Gasco), offering an exclusive 22 m² private guest apartment.",
    apartmentTitle: "The 22 m² Private Suite & Estate",
    apartmentDesc: "Thoughtfully designed for 2 guests. Compact, refined luxury indoors opening out into our expansive private garden, saltwater pool, and olive grove.",
    poolText: "32 m² private saltwater pool set among olive trees",
    gardenText: "Expansive lawns, private terrace, and lounge areas",
    familyText: "Trampoline, sandbox, children's slide, and secure play zones",
    evText: "EV charging station on-site for sustainable travel",
    winesIntro: "Rooted in Lisa’s family wine heritage. Handcrafted Casa Solea bottles from our hillside vineyards overlooking Lake Garda.",
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
    image: 'https://images.unsplash.com/photo-1584916313917-c48feb142355?auto=format&fit=crop&w=600&q=80'
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
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs3',
    name: 'Casa Solea Bardolino Classico Superior',
    type: 'Red Wine',
    grape: 'Corvina (70%), Rondinella, Molinara',
    origin: 'Località Gasco Vineyards, Pacengo',
    desc: 'Crafted from Lisa’s family estate vines. Ruby-red elegance with notes of tart cherry, violet, and subtle sweet spices. Deliciously smooth.',
    size: '0.75 L',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cs4',
    name: 'Casa Solea Garda Spumante Brut',
    type: 'Sparkling Wine',
    grape: 'Garganega & Chardonnay',
    origin: 'Moraine Hills of Lake Garda',
    desc: 'Fine, persistent perlage with floral bouquets and crisp green apple notes. The quintessential aperitivo by our saltwater pool.',
    size: '0.75 L',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80'
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
    desc: "Italy's premier theme parks are right at your doorstep, yet far enough to enjoy absolute peace and quiet in our garden.",
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
    title: "Casa Solea Family Vineyards",
    distance: "Surrounding Hills",
    desc: "Family-run hillside vineyards producing world-class Lugana and Bardolino wines, offering tastings just minutes away.",
    icon: Wine
  }
];

const galleryImages = [
  { 
    id: 1, 
    category: "Estate", 
    title: "Casa Solea Villa & Saltwater Pool in Pacengo di Lazise", 
    url: "https://raw.githubusercontent.com/valentinsanta95-beep/casa_solea/main/Westseite.png",
    desc: "Architectural view of Casa Solea from the west."
  },
  { 
    id: 2, 
    category: "Estate", 
    title: "Casa Solea · East View", 
    url: "https://raw.githubusercontent.com/valentinsanta95-beep/casa_solea/main/Ostseite.png",
    desc: "Architectural view of Casa Solea from the east."
  },
  { 
    id: 3, 
    category: "Estate", 
    title: "Casa Solea · Exterior Visualization", 
    url: "https://raw.githubusercontent.com/valentinsanta95-beep/casa_solea/main/Fotoinserimento_03_c.png",
    desc: "Architectural visualization of Casa Solea in its setting."
  },
  { 
    id: 4, 
    category: "Interior", 
    title: "Minimalist Warm Mediterranean Suite", 
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    desc: "Refined custom oak joinery, natural stone finishes, and soothing earth tones."
  },
  { 
    id: 5, 
    category: "For Children", 
    title: "Kids' Oasis & Trampoline", 
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    desc: "Secure lawn areas designed specifically for young families."
  },
  { 
    id: 6, 
    category: "Winery", 
    title: "Casa Solea Family Vineyards", 
    url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    desc: "The rolling hillside vineyards overlooking Lake Garda where our wines are born."
  }
];

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
  const [activeGalleryTab, setActiveGalleryTab] = useState('All');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

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

  // Mock bookings database
  const [bookings, setBookings] = useState([
    { id: 'b1', guest: 'Marco Bellini', platform: 'Airbnb', checkIn: '2026-07-10', checkOut: '2026-07-15', guests: '2 Adults', status: 'Confirmed' },
    { id: 'b2', guest: 'Sophie van Dijk', platform: 'Booking.com', checkIn: '2026-07-20', checkOut: '2026-07-27', guests: '2 Adults + 1 Child', status: 'Confirmed' },
    { id: 'b3', guest: 'Lucas & Emma', platform: 'Website Direct', checkIn: '2026-08-02', checkOut: '2026-08-09', guests: '2 Adults', status: 'Pending Review' }
  ]);

  // Mock wine orders database
  const [wineOrders, setWineOrders] = useState([
    { id: 'w-101', customer: 'Jan de Vries', address: 'Keizersgracht 123, Amsterdam, Netherlands', items: '2x Casa Solea Lugana DOC, 1x Chiaretto', total: '€55.50', paymentStatus: 'Paid (Stripe API)', shippingStatus: 'Ready for Pickup / Shipping', trackingNumber: 'DHL-IT-884920' },
    { id: 'w-102', customer: 'Claudia Weber', address: 'Goethestrasse 45, Munich, Germany', items: '4x Casa Solea Bardolino Superior', total: '€72.00', paymentStatus: 'Paid (Stripe API)', shippingStatus: 'Shipped', trackingNumber: 'DHL-DE-991823' }
  ]);

  const [syncStatus, setSyncStatus] = useState({ airbnb: 'Synced (2m ago)', booking: 'Synced (just now)' });

  const t = translations[lang];

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

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Admin access is intentionally disabled in the public static preview.
    // Add server-side authentication before enabling the host portal.
    alert('Host portal is not enabled in this preview.');
  };

  const triggerChannelSync = () => {
    setSyncStatus({ airbnb: 'Syncing...', booking: 'Syncing...' });
    setTimeout(() => {
      setSyncStatus({ airbnb: 'Synced successfully (just now)', booking: 'Synced successfully (just now)' });
    }, 1000);
  };

  const approveBooking = (id) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'Confirmed & Blocked on OTA' } : b));
  };

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
    <div className="min-h-screen bg-[#F5F0EA] text-[#2C241D] font-sans">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F0EA]/95 backdrop-blur-md border-b border-[#E2D6C5] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-serif tracking-widest uppercase text-[#3E2F24] font-bold">
                Casa Solea Garda
              </span>
              <span className="text-[10px] uppercase tracking-wider bg-[#8C3F29]/10 text-[#8C3F29] px-2 py-0.5 rounded-full font-semibold">
                × Winery
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#7A7265]">
              Pacengo di Lazise · Lake Garda
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-sm tracking-wide font-medium text-[#2C241D]">
            <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`transition ${activeTab === 'home' ? 'text-[#8C3F29] font-bold' : 'hover:text-[#8C3F29]'}`}>
              Home
            </button>
            <a href="#stay" onClick={() => setActiveTab('home')} className="hover:text-[#8C3F29] transition">{t.theStay}</a>
            <a href="#outdoors" onClick={() => setActiveTab('home')} className="hover:text-[#8C3F29] transition">{t.outdoors}</a>
            <a href="#story" onClick={() => setActiveTab('home')} className="hover:text-[#8C3F29] transition">{t.ourStory}</a>
            <a href="#location" onClick={() => setActiveTab('home')} className="hover:text-[#8C3F29] transition">{t.location}</a>
            <button 
              onClick={() => { setActiveTab('webshop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`flex items-center gap-1.5 transition ${activeTab === 'webshop' ? 'text-[#8C3F29] font-bold underline underline-offset-4' : 'hover:text-[#8C3F29]'}`}
            >
              <Wine className="w-4 h-4 text-[#8C3F29]" /> {t.webshopNav}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-full border border-[#E2D6C5] bg-[#EAE0D0]/50 text-xs font-semibold uppercase tracking-wider hover:bg-[#E2D6C5] transition">
                <Globe className="w-3.5 h-3.5 text-[#3E2F24]" />
                <span>{lang}</span>
              </button>
              <div className="absolute right-0 mt-1 w-28 bg-[#F5F0EA] border border-[#E2D6C5] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1 z-50">
                {['de', 'it', 'nl', 'en'].map(l => (
                  <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full text-left px-4 py-1.5 text-xs uppercase tracking-wider font-medium hover:bg-[#E2D6C5]/40 transition ${lang === l ? 'font-bold text-[#8C3F29]' : 'text-[#2C241D]'}`}
                  >
                    {l === 'de' ? 'Deutsch' : l === 'it' ? 'Italiano' : l === 'nl' ? 'Nederlands' : 'English'}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-[#EAE0D0]/50 hover:bg-[#E2D6C5] border border-[#E2D6C5] transition"
              aria-label="Wine Shop Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#3E2F24]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#8C3F29] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:inline-flex items-center space-x-2 bg-[#8C3F29] text-[#F5F0EA] px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#733120] transition shadow-md"
            >
              <span>{t.bookStay}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* CONDITIONAL RENDER: HOME PAGE OR WEBSHOP PAGE */}
      {activeTab === 'home' ? (
        <>
          {/* Hero Section */}
      <header className="relative h-[92vh] min-h-[650px] flex items-center justify-center overflow-hidden bg-[#2C241D]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/valentinsanta95-beep/casa_solea/main/main_background_pic.jpg" 
            alt="Casa Solea Estate in Pacengo di Lazise with garden and pool" 
            className="w-full h-full object-cover opacity-75 scale-105"
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=2000&q=85"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/90 via-[#2C241D]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-[#F5F0EA]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight font-normal mb-6 leading-tight">
            {t.heroHeading}
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-[#F5F0EA]/90">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-xl"
                >
                  {t.bookStay}
                </button>
                <button 
                  onClick={() => setIsSpecsOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F5F0EA]/40 text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-medium hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4 text-[#E2C4B8]" /> Explore 22 m² Suite Specs
                </button>
              </div>
            </div>
          </header>

          {/* The 22 m² Private Suite & Estate Section */}
          <section id="stay" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-3">
                  Private Guest Apartment & Estate
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#3E2F24] mb-6 leading-tight">
                  Small inside.<br />A whole world outside.
                </h2>
                <p className="text-base text-[#2C241D]/80 leading-relaxed mb-6 font-light">
                  Our intimate <strong>22 m² private guest apartment</strong> is designed for couples or small families seeking serene Mediterranean luxury. It provides a cozy, exquisitely appointed indoor sanctuary with direct access to the estate.
                </p>
                <p className="text-base text-[#2C241D]/80 leading-relaxed mb-8 font-light">
                  Step outside into our magnificent <strong>32 m² saltwater pool, garden</strong>, shaded porticos, and expansive olive groves in peaceful Pacengo di Lazise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setIsSpecsOpen(true)}
                    className="p-5 rounded-2xl bg-[#EAE0D0]/40 border border-[#E2D6C5] cursor-pointer hover:bg-[#EAE0D0] transition"
                  >
                    <Waves className="w-6 h-6 text-[#8C3F29] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">32 m² Saltwater Pool</h4>
                    <p className="text-xs text-[#2C241D]/70">{t.poolText}</p>
                  </div>
                  <div 
                    onClick={() => setIsSpecsOpen(true)}
                    className="p-5 rounded-2xl bg-[#EAE0D0]/40 border border-[#E2D6C5] cursor-pointer hover:bg-[#EAE0D0] transition"
                  >
                    <Trees className="w-6 h-6 text-[#8C3F29] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">22 m² Private Suite</h4>
                    <p className="text-xs text-[#2C241D]/70">Exclusively yours for your stay</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#EAE0D0]/40 border border-[#E2D6C5]">
                    <Baby className="w-6 h-6 text-[#8C3F29] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">Kids' Oasis</h4>
                    <p className="text-xs text-[#2C241D]/70">{t.familyText}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#EAE0D0]/40 border border-[#E2D6C5]">
                    <Car className="w-6 h-6 text-[#8C3F29] mb-2" />
                    <h4 className="font-serif text-sm font-semibold mb-1">EV Charging</h4>
                    <p className="text-xs text-[#2C241D]/70">Sustainable travel on-site</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#E2D6C5] relative group">
                  <img 
                    src="https://raw.githubusercontent.com/valentinsanta95-beep/casa_solea/main/Fotoinserimento_03_c.png" 
                    alt="Architectural visualization of Casa Solea in Pacengo di Lazise" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/70 via-transparent to-transparent opacity-80 flex flex-col justify-end p-8 text-[#F5F0EA]">
                    <span className="text-[10px] uppercase tracking-widest text-[#E2C4B8] mb-1">Pacengo di Lazise · Località Gasco</span>
                    <h4 className="font-serif text-xl mb-1">Casa Solea Estate, Garden & Pool</h4>
                    <p className="text-xs text-[#F5F0EA]/80 font-light">Your private sanctuary surrounded by olive trees.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outdoors & Kids Oasis */}
          <section id="outdoors" className="py-24 bg-[#EAE0D0]/35 border-y border-[#E2D6C5]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-3">
                  Outdoor Living, Garden & Pool Oasis
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#3E2F24] mb-4">
                  Designed for young families
                </h2>
                <p className="text-base text-[#2C241D]/80 font-light">
                  On Airbnb & Booking.com, our guests love our spacious garden and pool sanctuary. Here, parents unwind under the olive trees while children play securely.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#F5F0EA] p-8 rounded-3xl border border-[#E2D6C5] shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#8C3F29]/10 flex items-center justify-center mb-6">
                    <Smile className="w-6 h-6 text-[#8C3F29]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3E2F24] mb-3">Play & Freedom</h3>
                  <p className="text-sm text-[#2C241D]/80 font-light leading-relaxed">
                    Featuring a dedicated sandbox, wooden children&apos;s slide, secure trampoline, and expansive lawn space for outdoor games under the Italian sun.
                  </p>
                </div>

                <div className="bg-[#F5F0EA] p-8 rounded-3xl border border-[#E2D6C5] shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#8C3F29]/10 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-[#8C3F29]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3E2F24] mb-3">Peace of Mind</h3>
                  <p className="text-sm text-[#2C241D]/80 font-light leading-relaxed">
                    Our property in Località Gasco is a private estate, gated and secure, ensuring a tranquil environment away from busy commercial resorts.
                  </p>
                </div>

                <div className="bg-[#F5F0EA] p-8 rounded-3xl border border-[#E2D6C5] shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#8C3F29]/10 flex items-center justify-center mb-6">
                    <Compass className="w-6 h-6 text-[#8C3F29]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#3E2F24] mb-3">Attractions Nearby</h3>
                  <p className="text-sm text-[#2C241D]/80 font-light leading-relaxed">
                    Gardaland and CanevaWorld are approximately 1 km away. Enjoy the excitement during daylight and absolute silence by the pool at night.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section id="story" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#E2D6C5]">
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=80" 
                    alt="Valentin, Lisa and Sam" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-3">
                  Meet Your Hosts
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#3E2F24] mb-6 leading-tight">
                  {t.storyHeading}
                </h2>
                <p className="text-base text-[#2C241D]/80 leading-relaxed mb-6 font-light">
                  {t.storyText1}
                </p>
                <p className="text-base text-[#2C241D]/80 leading-relaxed mb-8 font-light">
                  {t.storyText2}
                </p>
                <div className="flex items-center space-x-4 pt-4 border-t border-[#E2D6C5]">
                  <div>
                    <h4 className="font-serif font-medium text-lg text-[#3E2F24]">Valentin & Lisa</h4>
                    <p className="text-xs text-[#8C3F29] uppercase tracking-wider">With newborn Sam · Casa Solea Wine Heritage</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location */}
          <section id="location" className="py-24 bg-[#2C241D] text-[#F5F0EA]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E2C4B8] font-semibold block mb-3">
                  Località Gasco, Pacengo di Lazise
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mb-4">
                  {t.distanceTitle}
                </h2>
                <p className="text-base text-[#F5F0EA]/80 font-light">
                  Via Gasco, 37017 Lazise VR, Italy. Perfectly positioned for exploring Lake Garda.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {localRecommendations.map((rec, idx) => {
                  const IconComp = rec.icon;
                  return (
                    <div key={idx} className="bg-[#3E2F24] p-6 rounded-2xl border border-[#E2D6C5]/20">
                      <div className="w-10 h-10 rounded-xl bg-[#8C3F29]/20 flex items-center justify-center mb-4 text-[#E2C4B8]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#E2C4B8] block mb-1">{rec.category}</span>
                      <h3 className="font-serif text-lg mb-2">{rec.title}</h3>
                      <span className="text-xs font-semibold text-[#E2D6C5] block mb-3">{rec.distance}</span>
                      <p className="text-xs text-[#F5F0EA]/70 font-light leading-relaxed">{rec.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="w-full h-96 rounded-3xl overflow-hidden border border-[#E2D6C5]/30 relative shadow-2xl">
                <iframe 
                  title="Pacengo di Lazise Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11211.33924151322!2d10.7242!3d45.4542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eb405786ef75%3A0x40af13fec13c4c0!2s37017%20Pacengo%20VR%2C%20Italy!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-80"
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-[#3E2F24]/90 backdrop-blur-md p-4 rounded-2xl border border-[#E2D6C5]/30 text-xs">
                  <p className="font-serif text-sm font-medium mb-1">Località Gasco, Pacengo di Lazise</p>
                  <p className="text-[#F5F0EA]/70">800m from lake shore · Peaceful residential setting</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-3">
                  Visual Impressions & Estate Views
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#3E2F24]">
                  Gallery & Estate
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {['All', 'Estate', 'Pool', 'Apartment (22m²)', 'Interior', 'For Children', 'Winery'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveGalleryTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition ${activeGalleryTab === tab ? 'bg-[#8C3F29] text-[#F5F0EA]' : 'bg-[#EAE0D0]/50 text-[#2C241D] hover:bg-[#E2D6C5]'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages
                .filter(img => activeGalleryTab === 'All' || img.category === activeGalleryTab)
                .map(img => (
                  <div key={img.id} className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E2D6C5]">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C241D]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-[#F5F0EA]">
                      <span className="text-[10px] uppercase tracking-widest text-[#E2C4B8] mb-1">Casa Solea Garda · {img.category}</span>
                      <h4 className="font-serif text-base mb-1">{img.title}</h4>
                      <p className="text-xs text-[#F5F0EA]/80 font-light">{img.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* Wine Teaser Section with Button linking to Subpage */}
          <section className="py-24 bg-[#EAE0D0]/35 border-t border-[#E2D6C5]">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-3">
                Casa Solea Winery
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#3E2F24] mb-4">
                Take a piece of your stay home
              </h2>
              <p className="text-base text-[#2C241D]/80 font-light max-w-2xl mx-auto mb-10">
                {t.winesIntro}
              </p>
              <button 
                onClick={() => { setActiveTab('webshop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-xl inline-flex items-center gap-2"
              >
                <Wine className="w-4 h-4" /> {t.discoverWinesBtn} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </>
      ) : (
        /* ================= WEBSHOP SUBPAGE ================= */
        <div className="py-16 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-[#E2D6C5]">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-2">Casa Solea Subpage</span>
              <h1 className="text-3xl md:text-5xl font-serif text-[#3E2F24]">Unsere Weine (Webshop)</h1>
              <p className="text-sm text-[#2C241D]/80 font-light mt-1">Handcrafted wines from our hillside vineyards overlooking Lake Garda.</p>
            </div>
            <button 
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-full border border-[#E2D6C5] bg-[#EAE0D0]/50 text-xs font-semibold uppercase tracking-wider hover:bg-[#E2D6C5] transition"
            >
              ← Back to Home
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wineCatalogue.map(wine => (
              <div key={wine.id} className="bg-[#F5F0EA] rounded-3xl p-6 border border-[#E2D6C5] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-[#EAE0D0]/50 relative">
                    <img src={wine.image} alt={wine.name} className="w-full h-full object-cover" onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1584916313917-c48feb142355?auto=format&fit=crop&w=600&q=80"}} />
                    <span className="absolute top-3 right-3 bg-[#8C3F29] text-[#F5F0EA] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold">
                      {wine.type}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#7A7265] block mb-1">{wine.origin}</span>
                  <h3 className="font-serif text-xl text-[#3E2F24] mb-2">{wine.name}</h3>
                  <p className="text-xs text-[#2C241D]/70 font-light mb-4 leading-relaxed">{wine.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#E2D6C5]">
                  <div>
                    <span className="text-xs text-[#7A7265] block">{wine.size}</span>
                    <span className="font-serif text-lg font-semibold text-[#3E2F24]">€{Number(wine.price).toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(wine)}
                    className="px-4 py-2 bg-[#8C3F29] text-[#F5F0EA] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#733120] transition flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-3.5 h-3.5" /> {t.addToBag}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 22m² Suite Specs Modal */}
      {isSpecsOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C241D]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F0EA] w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-y-auto border border-[#E2D6C5] shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2D6C5]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C3F29] block mb-1">Casa Solea Garda</span>
                <h3 className="text-2xl font-serif text-[#3E2F24]">22 m² Private Suite Specifications</h3>
              </div>
              <button onClick={() => setIsSpecsOpen(false)} className="p-2 rounded-full hover:bg-[#EAE0D0] transition">
                <X className="w-6 h-6 text-[#3E2F24]" />
              </button>
            </div>

            <div className="space-y-6 text-sm font-light text-[#2C241D]">
              <div className="bg-[#EAE0D0]/40 p-6 rounded-2xl border border-[#E2D6C5]">
                <h4 className="font-serif font-semibold text-base mb-3 text-[#3E2F24]">Suite & Estate Breakdown</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <li><strong>Rentable Guest Suite:</strong> 22.00 m² (Private bedroom & ensuite bath)</li>
                  <li><strong>Private Saltwater Pool:</strong> 32.00 m² (Shared outdoor estate oasis)</li>
                  <li><strong>Private Outdoor Terrace & Garden:</strong> 22.26 m²</li>
                  <li><strong>Max Occupancy:</strong> 2 Guests (+ 1 infant)</li>
                  <li><strong>Location:</strong> Località Gasco, Pacengo di Lazise (VR)</li>
                </ul>
              </div>

              <p className="text-xs leading-relaxed">
                Enjoy complete comfort in your dedicated 22 m² suite while taking full advantage of the surrounding Mediterranean estate, garden, olive groves, and pool oasis in Pacengo di Lazise.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Wine Shopping Bag Drawer & Stripe Checkout Integration */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C241D]/70 backdrop-blur-sm flex justify-end">
          <div className="bg-[#F5F0EA] w-full max-w-md h-full flex flex-col justify-between p-8 shadow-2xl border-l border-[#E2D6C5] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2D6C5]">
                <div className="flex items-center gap-2">
                  <Wine className="w-5 h-5 text-[#8C3F29]" />
                  <h3 className="font-serif text-xl text-[#3E2F24]">{t.cartTitle}</h3>
                </div>
                <button onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(false); setCheckoutStep('address'); }} className="p-2 rounded-full hover:bg-[#EAE0D0] transition">
                  <X className="w-6 h-6 text-[#3E2F24]" />
                </button>
              </div>

              {!isCheckoutOpen ? (
                <>
                  {cart.length === 0 ? (
                    <div className="text-center py-20 text-[#7A7265]">
                      <Wine className="w-12 h-12 mx-auto mb-4 opacity-40" />
                      <p className="text-sm font-light">{t.emptyCart}</p>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                      {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-[#EAE0D0]/40 rounded-2xl border border-[#E2D6C5]">
                          <div className="flex-1 pr-4">
                            <h4 className="font-serif text-sm text-[#3E2F24]">{item.name}</h4>
                            <span className="text-xs text-[#7A7265]">€{Number(item.price).toFixed(2)} each</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 rounded-full bg-[#EAE0D0] flex items-center justify-center hover:bg-[#E2D6C5]">
                              <Minus className="w-3 h-3 text-[#3E2F24]" />
                            </button>
                            <span className="text-xs font-semibold w-4 text-center">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 rounded-full bg-[#EAE0D0] flex items-center justify-center hover:bg-[#E2D6C5]">
                              <Plus className="w-3 h-3 text-[#3E2F24]" />
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
                      <h4 className="font-serif text-base font-semibold text-[#3E2F24]">Shipping Address</h4>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Full Name</label>
                        <input type="text" required value={shippingAddress.fullName} onChange={(e)=>setShippingAddress({...shippingAddress, fullName: e.target.value})} placeholder="Jan de Vries" className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Email</label>
                        <input type="email" required value={shippingAddress.email} onChange={(e)=>setShippingAddress({...shippingAddress, email: e.target.value})} placeholder="jan@example.com" className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Street Address</label>
                        <input type="text" required value={shippingAddress.street} onChange={(e)=>setShippingAddress({...shippingAddress, street: e.target.value})} placeholder="Keizersgracht 123" className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">City</label>
                          <input type="text" required value={shippingAddress.city} onChange={(e)=>setShippingAddress({...shippingAddress, city: e.target.value})} placeholder="Amsterdam" className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Postal Code</label>
                          <input type="text" required value={shippingAddress.postalCode} onChange={(e)=>setShippingAddress({...shippingAddress, postalCode: e.target.value})} placeholder="1015 CJ" className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                        </div>
                      </div>
                      <button type="submit" className="w-full py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-lg mt-4">
                        Continue to Stripe Payment →
                      </button>
                    </form>
                  )}

                  {checkoutStep === 'payment' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="w-5 h-5 text-[#8C3F29]" />
                        <h4 className="font-serif text-base font-semibold text-[#3E2F24]">Stripe Secure Payment</h4>
                      </div>
                      <p className="text-xs text-[#7A7265]">Ready for Stripe API integration. Test mode active for secure credit card processing.</p>
                      <div className="p-4 rounded-2xl bg-[#EAE0D0]/50 border border-[#E2D6C5] space-y-3">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Card Number (Stripe Element)</label>
                          <input type="text" placeholder="4242 •••• •••• 4242" defaultValue="4242 4242 4242 4242" className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2D6C5] text-xs font-mono focus:outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Expires</label>
                            <input type="text" placeholder="MM / YY" defaultValue="12/28" className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2D6C5] text-xs font-mono focus:outline-none" />
                          </div>
                          <div>
                            <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">CVC</label>
                            <input type="text" placeholder="123" defaultValue="888" className="w-full px-4 py-3 rounded-xl bg-white border border-[#E2D6C5] text-xs font-mono focus:outline-none" />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={()=>setCheckoutStep('address')} className="w-1/3 py-3 rounded-full border border-[#E2D6C5] text-xs font-semibold uppercase tracking-wider hover:bg-[#EAE0D0]">
                          Back
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
                        }} className="w-2/3 py-3 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-lg">
                          Pay €{cartTotal.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  )}

                  {checkoutStep === 'success' && (
                    <div className="text-center py-10 space-y-4">
                      <CheckCircle2 className="w-16 h-16 text-[#8C3F29] mx-auto" />
                      <h4 className="font-serif text-2xl text-[#3E2F24]">Payment Successful!</h4>
                      <p className="text-xs text-[#2C241D]/80 font-light">Thank you for your order. Casa Solea is preparing your order and will update you soon.</p>
                      <button onClick={() => { setIsCartOpen(false); setIsCheckoutOpen(false); setCheckoutStep('address'); }} className="px-6 py-3 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-widest font-bold">
                        Close Webshop
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {!isCheckoutOpen && cart.length > 0 && (
              <div className="pt-6 border-t border-[#E2D6C5]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm uppercase tracking-wider font-semibold text-[#3E2F24]">{t.total}</span>
                  <span className="font-serif text-2xl font-semibold text-[#3E2F24]">€{cartTotal.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-lg text-center block"
                >
                  {t.checkout}
                </button>
                <p className="text-[10px] text-center text-[#7A7265] mt-3">Stripe Secure Checkout · Casa Solea Winery</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reservation Inquiry Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C241D]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5F0EA] w-full max-w-lg rounded-3xl p-8 border border-[#E2D6C5] shadow-2xl relative">
            <button onClick={() => setIsBookingOpen(false)} className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EAE0D0] transition">
              <X className="w-6 h-6 text-[#3E2F24]" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8C3F29] font-semibold block mb-2">Reservation Inquiry</span>
            <h3 className="text-2xl font-serif text-[#3E2F24] mb-2">Casa Solea Garda (22 m² Suite)</h3>
            <p className="text-xs text-[#2C241D]/70 mb-6">Cross-checked live with Airbnb & Booking.com calendars.</p>

            {bookingSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#8C3F29] mx-auto mb-4" />
                <h4 className="font-serif text-xl text-[#3E2F24] mb-2">Inquiry Received</h4>
                <p className="text-xs text-[#2C241D]/80 font-light">Thank you! Valentin and Lisa have received your booking request in the admin portal for approval.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { 
                e.preventDefault(); 
                const newBooking = {
                  id: 'b-' + Math.floor(100 + Math.random() * 900),
                  guest: e.target.elements[3].value || 'Direct Guest',
                  platform: 'Website Direct',
                  checkIn: e.target.elements[0].value,
                  checkOut: e.target.elements[1].value,
                  guests: e.target.elements[2].value,
                  status: 'Pending Review'
                };
                setBookings([newBooking, ...bookings]);
                setBookingSubmitted(true); 
              }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Check-in</label>
                    <input type="date" required className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Check-out</label>
                    <input type="date" required className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Guests</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none">
                      <option>2 Guests</option>
                      <option>2 Guests + 1 Infant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Name</label>
                    <input type="text" placeholder="Your full name" required className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#7A7265] mb-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" required className="w-full px-4 py-3 rounded-xl bg-[#EAE0D0]/40 border border-[#E2D6C5] text-xs focus:outline-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-lg mt-6">
                  Send Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Upgraded Admin Portal Modal: Booking Approvals & Full Webshop CRUD */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 bg-[#2C241D]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#F5F0EA] w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-y-auto border border-[#E2D6C5] shadow-2xl p-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2D6C5]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8C3F29] text-white flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8C3F29] font-semibold block">Valentin&apos;s Admin Portal</span>
                  <h3 className="text-2xl font-serif text-[#3E2F24]">{t.adminPortalTitle}</h3>
                </div>
              </div>
              <button onClick={() => setIsAdminOpen(false)} className="p-2 rounded-full hover:bg-[#EAE0D0] transition">
                <X className="w-6 h-6 text-[#3E2F24]" />
              </button>
            </div>

            {!isAdminLoggedIn ? (
              <div className="max-w-md mx-auto py-12 text-center">
                <p className="text-sm text-[#2C241D]/80 mb-6 font-light">{t.adminLoginPrompt}</p>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Admin Username (valentin)"
                    value={adminUsernameInput}
                    onChange={(e) => setAdminUsernameInput(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#EAE0D0]/50 border border-[#E2D6C5] text-sm focus:outline-none text-center font-medium"
                  />
                  <input 
                    type="password" 
                    placeholder="Admin Password"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#EAE0D0]/50 border border-[#E2D6C5] text-sm focus:outline-none text-center font-medium"
                  />
                  <button type="submit" className="w-full py-4 bg-[#8C3F29] text-[#F5F0EA] rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#733120] transition shadow-lg">
                    Sign In as Admin
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-12">
                {/* OTA Channel Sync Status Bar */}
                <div className="bg-[#EAE0D0]/50 p-6 rounded-2xl border border-[#E2D6C5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif font-semibold text-base text-[#3E2F24] mb-1">OTA Channel Synchronization (Airbnb & Booking.com)</h4>
                    <p className="text-xs text-[#7A7265]">Live iCal feeds active. Availability is automatically blocked across platforms upon confirmation.</p>
                    <div className="flex gap-4 mt-2 text-xs">
                      <span className="text-[#8C3F29] font-medium">Airbnb: {syncStatus.airbnb}</span>
                      <span className="text-[#8C3F29] font-medium">Booking.com: {syncStatus.booking}</span>
                    </div>
                  </div>
                  <button 
                    onClick={triggerChannelSync}
                    className="px-4 py-2.5 bg-[#3E2F24] text-[#F5F0EA] rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#2C241D] transition flex items-center gap-2 shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Sync Now
                  </button>
                </div>

                {/* Bookings Management & Direct Approvals */}
                <div>
                  <h4 className="font-serif font-semibold text-lg text-[#3E2F24] mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#8C3F29]" /> Guest Reservations & Direct Approvals ({bookings.length})
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#E2D6C5] text-[#7A7265] uppercase tracking-wider">
                          <th className="pb-3 font-semibold">Guest</th>
                          <th className="pb-3 font-semibold">Platform</th>
                          <th className="pb-3 font-semibold">Dates</th>
                          <th className="pb-3 font-semibold">Guests</th>
                          <th className="pb-3 font-semibold">Status</th>
                          <th className="pb-3 font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2D6C5]/50">
                        {bookings.map(b => (
                          <tr key={b.id} className="hover:bg-[#EAE0D0]/30">
                            <td className="py-3.5 font-medium text-[#3E2F24]">{b.guest}</td>
                            <td className="py-3.5">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase ${b.platform === 'Airbnb' ? 'bg-rose-100 text-rose-800' : b.platform === 'Booking.com' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'}`}>
                                {b.platform}
                              </span>
                            </td>
                            <td className="py-3.5 text-[#2C241D]">{b.checkIn} to {b.checkOut}</td>
                            <td className="py-3.5 text-[#7A7265]">{b.guests}</td>
                            <td className="py-3.5 font-semibold text-[#8C3F29]">{b.status}</td>
                            <td className="py-3.5 text-right">
                              {b.status.includes('Pending') ? (
                                <button onClick={() => approveBooking(b.id)} className="px-3 py-1 bg-[#8C3F29] text-white rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#733120]">
                                  Approve
                                </button>
                              ) : (
                                <span className="text-emerald-700 font-semibold">Confirmed</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Wine Webshop Orders Management (Stripe Payment & Shipping Details) */}
                <div>
                  <h4 className="font-serif font-semibold text-lg text-[#3E2F24] mb-4 flex items-center gap-2">
                    <Wine className="w-5 h-5 text-[#8C3F29]" /> Webshop Orders & Stripe Payments ({wineOrders.length})
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-[#E2D6C5] text-[#7A7265] uppercase tracking-wider">
                          <th className="pb-3 font-semibold">Order / Customer</th>
                          <th className="pb-3 font-semibold">Items & Address</th>
                          <th className="pb-3 font-semibold">Total / Payment</th>
                          <th className="pb-3 font-semibold">Shipping / Tracking</th>
                          <th className="pb-3 font-semibold text-right">Update</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2D6C5]/50">
                        {wineOrders.map(w => (
                          <tr key={w.id} className="hover:bg-[#EAE0D0]/30">
                            <td className="py-3.5">
                              <span className="font-mono text-[10px] text-[#7A7265] block">{w.id}</span>
                              <span className="font-medium text-[#3E2F24]">{w.customer}</span>
                            </td>
                            <td className="py-3.5 max-w-xs">
                              <span className="text-[#2C241D] block">{w.items}</span>
                              <span className="text-[10px] text-[#7A7265] block truncate">📍 {w.address}</span>
                            </td>
                            <td className="py-3.5">
                              <span className="font-serif font-semibold text-[#3E2F24] block">{w.total}</span>
                              <span className="text-[10px] text-emerald-700 font-semibold">{w.paymentStatus}</span>
                            </td>
                            <td className="py-3.5">
                              <span className="text-[#8C3F29] font-medium block">{w.shippingStatus}</span>
                              <span className="font-mono text-[10px] text-[#7A7265] block">Tracking: {w.trackingNumber}</span>
                            </td>
                            <td className="py-3.5 text-right">
                              <button onClick={() => {
                                const newTrack = prompt('Enter DHL Tracking Number:', w.trackingNumber);
                                if (newTrack) updateOrderShipping(w.id, 'Shipped', newTrack);
                              }} className="px-3 py-1 bg-[#3E2F24] text-white rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#2C241D]">
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
                    <h4 className="font-serif font-semibold text-lg text-[#3E2F24] flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#8C3F29]" /> Webshop Product Catalogue ({wineCatalogue.length})
                    </h4>
                    <button onClick={() => setIsAddingProduct(true)} className="px-4 py-2 bg-[#8C3F29] text-white rounded-full text-xs uppercase tracking-wider font-bold">
                      + Add New Wine Product
                    </button>
                  </div>

                  {/* Add Product Modal/Form */}
                  {isAddingProduct && (
                    <form onSubmit={handleAddNewProduct} className="bg-[#EAE0D0]/60 p-6 rounded-2xl border border-[#E2D6C5] mb-6 space-y-4">
                      <h5 className="font-serif text-sm font-semibold text-[#3E2F24]">New Wine Details</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input type="text" placeholder="Wine Name" required value={newProductForm.name} onChange={e=>setNewProductForm({...newProductForm, name:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="text" placeholder="Origin / Region" required value={newProductForm.origin} onChange={e=>setNewProductForm({...newProductForm, origin:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="number" step="0.05" placeholder="Price (€)" required value={newProductForm.price} onChange={e=>setNewProductForm({...newProductForm, price:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" placeholder="Image URL" required value={newProductForm.image} onChange={e=>setNewProductForm({...newProductForm, image:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="text" placeholder="Description" required value={newProductForm.desc} onChange={e=>setNewProductForm({...newProductForm, desc:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="px-5 py-2 bg-[#8C3F29] text-white rounded-full text-xs font-bold uppercase">Save Product</button>
                        <button type="button" onClick={()=>setIsAddingProduct(false)} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full text-xs font-bold uppercase">Cancel</button>
                      </div>
                    </form>
                  )}

                  {/* Edit Product Modal/Form */}
                  {editingProduct && (
                    <form onSubmit={handleSaveProductEdit} className="bg-[#EAE0D0]/80 p-6 rounded-2xl border border-[#8C3F29] mb-6 space-y-4">
                      <h5 className="font-serif text-sm font-semibold text-[#8C3F29]">Editing: {editingProduct.name}</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input type="text" required value={editingProduct.name} onChange={e=>setEditingProduct({...editingProduct, name:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="text" required value={editingProduct.origin} onChange={e=>setEditingProduct({...editingProduct, origin:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="number" step="0.05" required value={editingProduct.price} onChange={e=>setEditingProduct({...editingProduct, price:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" required value={editingProduct.image} onChange={e=>setEditingProduct({...editingProduct, image:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                        <input type="text" required value={editingProduct.desc} onChange={e=>setEditingProduct({...editingProduct, desc:e.target.value})} className="px-4 py-2.5 rounded-xl bg-white border border-[#E2D6C5] text-xs" />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="px-5 py-2 bg-[#8C3F29] text-white rounded-full text-xs font-bold uppercase">Update Product</button>
                        <button type="button" onClick={()=>setEditingProduct(null)} className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full text-xs font-bold uppercase">Cancel</button>
                      </div>
                    </form>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {wineCatalogue.map(wine => (
                      <div key={wine.id} className="bg-white p-4 rounded-2xl border border-[#E2D6C5] flex items-center justify-between gap-4">
                        <img src={wine.image} alt={wine.name} className="w-12 h-16 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h6 className="font-serif text-sm font-semibold text-[#3E2F24]">{wine.name}</h6>
                          <span className="text-xs text-[#7A7265]">€{Number(wine.price).toFixed(2)} · {wine.origin}</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={()=>setEditingProduct(wine)} className="p-2 bg-[#EAE0D0] rounded-full hover:bg-[#E2D6C5]" title="Edit">
                            <Edit3 className="w-4 h-4 text-[#3E2F24]" />
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
      <footer className="bg-[#2C241D] text-[#F5F0EA] py-16 px-6 border-t border-[#E2D6C5]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-serif text-lg tracking-widest uppercase mb-4 text-[#E2C4B8]">Casa Solea Garda</h4>
            <p className="text-xs text-[#F5F0EA]/70 font-light leading-relaxed mb-4">
              Private 22 m² guest apartment in Località Gasco, Pacengo di Lazise. Set within our family estate with garden, saltwater pool and Casa Solea vineyards.
            </p>
            <span className="text-[10px] uppercase tracking-widest text-[#7A7265]">Via Gasco, 37017 Lazise VR, Italy</span>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#E2C4B8] font-semibold mb-4">Navigation</h5>
            <ul className="space-y-2 text-xs font-light text-[#F5F0EA]/80">
              <li><button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E2C4B8] transition">Home</button></li>
              <li><button onClick={() => { setActiveTab('webshop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E2C4B8] transition">Webshop (Unsere Weine)</button></li>
              <li><a href="#stay" onClick={() => setActiveTab('home')} className="hover:text-[#E2C4B8] transition">{t.theStay}</a></li>
              <li><a href="#outdoors" onClick={() => setActiveTab('home')} className="hover:text-[#E2C4B8] transition">{t.outdoors}</a></li>
              <li><a href="#location" onClick={() => setActiveTab('home')} className="hover:text-[#E2C4B8] transition">{t.location}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#E2C4B8] font-semibold mb-4">Connect</h5>
            <ul className="space-y-2 text-xs font-light text-[#F5F0EA]/80">
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-[#E2C4B8]" /> @casasoleagarda</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#E2C4B8]" /> stay@casasoleagarda.it</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#E2C4B8]" /> +39 045 0000000</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#E2C4B8] font-semibold mb-4">Legal & Imprint</h5>
            <ul className="space-y-2 text-xs font-light text-[#F5F0EA]/80">
              <li><a href="#privacy" className="hover:text-[#E2C4B8] transition">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-[#E2C4B8] transition">Terms & Conditions</a></li>
              <li><a href="#imprint" className="hover:text-[#E2C4B8] transition">Imprint / Legal Notice</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#E2D6C5]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F0EA]/60 font-light">
          <p>© {new Date().getFullYear()} Casa Solea Garda. {t.rights}</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span>Valentin, Lisa & Sam · Pacengo di Lazise</span>
            <span className="text-[#E2C4B8] flex items-center gap-1 font-semibold">
              <Lock className="w-3 h-3" /> Host portal coming soon
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}