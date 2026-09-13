// NAV MOBILE
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// FAQ ACCORDION
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// I18N
const dict = {
  bs: {
    nav_home:"Početna", nav_about:"O nama", nav_gallery:"Galerija", nav_contact:"Kontakt", nav_book:"Rezerviši termin",
    hero_kicker:"Bosna i Hercegovina",
    hero_text:"Portret, pokret i najljepše lokacije u BiH spojeni u jedno fotografsko iskustvo. Bez obzira imate li iskustva pred kamerom ili ne — mi vodimo, vi uživate u trenutku.",
    hero_cta1:"Rezerviši fotografisanje", hero_cta2:"Pogledaj pakete",
    welcome_title:"Nismo samo fotografisanje. Ovo je iskustvo za sebe.",
    welcome_p1:"Flying Dress Bosna i Hercegovina je originalni tim posvećen ovom konceptu u našoj zemlji — spoju haljine u pokretu, prirodnog pejzaža i pažljivo vođenog fotografisanja.",
    welcome_p2:"Ne treba vam iskustvo pred kamerom. Naš tim vodi svaki korak — od odabira haljine i boje, do pokreta i kadra.",
    welcome_pull:"Svaka fotografija treba nositi jedan trenutak u kojem ste bili glavna zvijezda.",
    media_label:"Mediji o nama",
    gallery_title:"Svaki kadar priča drugu priču", gallery_cta:"Rezerviši svoj termin",
    c_bordo:"Bordo", c_zlatna:"Zlatna", c_lavanda:"Lavanda", c_ruza:"Ružičasta", c_maslina:"Maslinasto zelena", c_bijela:"Bijela",
    c_crna:"Crna", c_coral:"Coral", c_tirkizna:"Tirkizna", c_burgundy:"Burgundy", c_nude:"Nude", c_sampanj:"Šampanj",
    pkg_title:"Odaberi svoje iskustvo",
    pkg_desc:"Tri načina da doživite Flying Dress fotografisanje. Cijene i sadržaj paketa lako prilagođavamo dogovoru s klijentom.",
    pkg_standard:"Standard", pkg_premium:"Premium", pkg_gold:"Gold", pkg_choose:"Odaberi paket",
    pkg_s1:"1 flying dress haljina", pkg_s2:"1 sat fotografisanja", pkg_s3:"1 lokacija", pkg_s4:"10 obrađenih fotografija", pkg_s5:"1 video reel",
    pkg_p1:"2 flying dress haljine", pkg_p2:"2 sata fotografisanja", pkg_p3:"1 lokacija, 2 asistenta", pkg_p4:"20 obrađenih fotografija", pkg_p5:"2 video reela",
    pkg_g1:"3 ili više haljina", pkg_g2:"Produženo fotografisanje", pkg_g3:"Više lokacija", pkg_g4:"Puna video i foto obrada", pkg_g5:"Dodatni asistenti",
    loc_title:"Četiri grada, četiri različita raspoloženja",
    loc_sa:"Vidikovci i stara čaršija", loc_mo:"Neretva i kameni mostovi", loc_bl:"Vrbas i gradski parkovi", loc_tz:"Panonska jezera",
    rev_title:"Riječi onih koji su doživjeli let",
    faq_title:"Prije nego što rezervišete",
    faq_map_label:"Gdje nas možete pronaći",
    faq_q1:"Kako rezervišem termin?", faq_a1:"Putem dugmeta \"Rezerviši termin\" na sajtu, telefonom ili WhatsAppom.",
    faq_q2:"Da li mi treba iskustvo pred kamerom?", faq_a2:"Ne. Naš tim vodi kroz svaki korak fotografisanja.",
    faq_q3:"Da li je haljina uključena u cijenu?", faq_a3:"Da, u svim veličinama i bojama, od XS do XXL.",
    faq_q4:"Koliko traje fotografisanje?", faq_a4:"Uobičajeno 45 minuta do sat vremena, zavisno od paketa.",
    final_title:"Spremni da postanete glavna zvijezda svoje fotografije?", final_cta:"Rezerviši fotografisanje",
    foot_copy:"© 2026 Flying Dress Bosnia and Herzegovina"
  },
  en: {
    nav_home:"Home", nav_about:"About us", nav_gallery:"Gallery", nav_contact:"Contact", nav_book:"Book now",
    hero_kicker:"Bosnia and Herzegovina",
    hero_text:"Portrait, movement and the most beautiful locations in Bosnia, combined into one photography experience. No posing experience needed — we guide, you enjoy the moment.",
    hero_cta1:"Book your photoshoot", hero_cta2:"View packages",
    welcome_title:"This isn't just a photoshoot. It's an experience of your own.",
    welcome_p1:"Flying Dress Bosnia and Herzegovina is the original team dedicated to this concept in our country — blending a dress in motion, natural landscapes and carefully guided photography.",
    welcome_p2:"You don't need any posing experience. Our team guides every step — from choosing the dress and colour to movement and framing.",
    welcome_pull:"Every photo should hold one moment where you were the main star.",
    media_label:"Media about us",
    gallery_title:"Every frame tells a different story", gallery_cta:"Book your session",
    c_bordo:"Wine", c_zlatna:"Gold", c_lavanda:"Lavender", c_ruza:"Blush pink", c_maslina:"Olive green", c_bijela:"White",
    c_crna:"Black", c_coral:"Coral", c_tirkizna:"Turquoise", c_burgundy:"Burgundy", c_nude:"Nude", c_sampanj:"Champagne",
    pkg_title:"Choose your experience",
    pkg_desc:"Three ways to experience a Flying Dress photoshoot. Pricing and package content are easily adjusted together with the client.",
    pkg_standard:"Standard", pkg_premium:"Premium", pkg_gold:"Gold", pkg_choose:"Choose package",
    pkg_s1:"1 flying dress", pkg_s2:"1 hour photoshoot", pkg_s3:"1 location", pkg_s4:"10 edited photos", pkg_s5:"1 video reel",
    pkg_p1:"2 flying dresses", pkg_p2:"2 hour photoshoot", pkg_p3:"1 location, 2 assistants", pkg_p4:"20 edited photos", pkg_p5:"2 video reels",
    pkg_g1:"3 or more dresses", pkg_g2:"Extended photoshoot", pkg_g3:"Multiple locations", pkg_g4:"Full photo and video edit", pkg_g5:"Additional assistants",
    loc_title:"Four cities, four different moods",
    loc_sa:"Viewpoints and the old town", loc_mo:"The Neretva and stone bridges", loc_bl:"The Vrbas and city parks", loc_tz:"The Pannonian lakes",
    rev_title:"Words from those who took flight",
    faq_title:"Before you book",
    faq_map_label:"Where to find us",
    faq_q1:"How do I book a session?", faq_a1:"Via the \"Book now\" button, by phone or on WhatsApp.",
    faq_q2:"Do I need posing experience?", faq_a2:"No. Our team guides you through every step of the shoot.",
    faq_q3:"Is the dress included in the price?", faq_a3:"Yes, in every size and colour, from XS to XXL.",
    faq_q4:"How long does the photoshoot take?", faq_a4:"Usually 45 minutes to an hour, depending on the package.",
    final_title:"Ready to become the star of your own photograph?", final_cta:"Book your photoshoot",
    foot_copy:"© 2026 Flying Dress Bosnia and Herzegovina"
  },
  de: {
    nav_home:"Startseite", nav_about:"Über uns", nav_gallery:"Galerie", nav_contact:"Kontakt", nav_book:"Termin buchen",
    hero_kicker:"Bosnien und Herzegowina",
    hero_text:"Porträt, Bewegung und die schönsten Orte Bosniens vereint in einem Fotoerlebnis. Keine Erfahrung vor der Kamera nötig — wir führen Sie, Sie genießen den Moment.",
    hero_cta1:"Fotoshooting buchen", hero_cta2:"Pakete ansehen",
    welcome_title:"Kein gewöhnliches Fotoshooting. Ein Erlebnis für Sie selbst.",
    welcome_p1:"Flying Dress Bosnien und Herzegowina ist das Originalteam für dieses Konzept in unserem Land — eine Verbindung aus Kleid in Bewegung, Naturlandschaft und behutsam geführter Fotografie.",
    welcome_p2:"Sie brauchen keine Erfahrung vor der Kamera. Unser Team begleitet jeden Schritt — von der Wahl des Kleides und der Farbe bis zu Bewegung und Bildausschnitt.",
    welcome_pull:"Jedes Foto soll einen Moment festhalten, in dem Sie der Hauptstern waren.",
    media_label:"Medien über uns",
    gallery_title:"Jedes Bild erzählt eine andere Geschichte", gallery_cta:"Termin buchen",
    c_bordo:"Weinrot", c_zlatna:"Gold", c_lavanda:"Lavendel", c_ruza:"Rosa", c_maslina:"Olivgrün", c_bijela:"Weiß",
    c_crna:"Schwarz", c_coral:"Koralle", c_tirkizna:"Türkis", c_burgundy:"Burgunder", c_nude:"Nude", c_sampanj:"Champagner",
    pkg_title:"Wählen Sie Ihr Erlebnis",
    pkg_desc:"Drei Wege, das Flying-Dress-Fotoshooting zu erleben. Preise und Paketinhalte passen wir gerne gemeinsam mit Ihnen an.",
    pkg_standard:"Standard", pkg_premium:"Premium", pkg_gold:"Gold", pkg_choose:"Paket wählen",
    pkg_s1:"1 Flying Dress", pkg_s2:"1 Stunde Shooting", pkg_s3:"1 Ort", pkg_s4:"10 bearbeitete Fotos", pkg_s5:"1 Video-Reel",
    pkg_p1:"2 Flying Dresses", pkg_p2:"2 Stunden Shooting", pkg_p3:"1 Ort, 2 Assistenten", pkg_p4:"20 bearbeitete Fotos", pkg_p5:"2 Video-Reels",
    pkg_g1:"3 oder mehr Kleider", pkg_g2:"Verlängertes Shooting", pkg_g3:"Mehrere Orte", pkg_g4:"Volle Foto- und Videobearbeitung", pkg_g5:"Zusätzliche Assistenten",
    loc_title:"Vier Städte, vier verschiedene Stimmungen",
    loc_sa:"Aussichtspunkte und Altstadt", loc_mo:"Die Neretva und Steinbrücken", loc_bl:"Der Vrbas und Stadtparks", loc_tz:"Die pannonischen Seen",
    rev_title:"Stimmen derer, die geflogen sind",
    faq_title:"Bevor Sie buchen",
    faq_map_label:"Wo Sie uns finden",
    faq_q1:"Wie buche ich einen Termin?", faq_a1:"Über den Button \"Termin buchen\", per Telefon oder WhatsApp.",
    faq_q2:"Brauche ich Erfahrung vor der Kamera?", faq_a2:"Nein. Unser Team begleitet Sie durch jeden Schritt des Shootings.",
    faq_q3:"Ist das Kleid im Preis enthalten?", faq_a3:"Ja, in allen Größen und Farben, von XS bis XXL.",
    faq_q4:"Wie lange dauert das Shooting?", faq_a4:"Meist 45 Minuten bis eine Stunde, je nach Paket.",
    final_title:"Bereit, der Star Ihres eigenen Fotos zu werden?", final_cta:"Fotoshooting buchen",
    foot_copy:"© 2026 Flying Dress Bosnia and Herzegovina"
  }
};

function setLang(lang){
  document.getElementById('htmlRoot').lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = dict[lang][key];
    if (val === undefined) return;
    el.textContent = val;
  });
  document.querySelectorAll('#langSwitch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}
document.querySelectorAll('#langSwitch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));