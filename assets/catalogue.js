// Cinematic Overlay Data & Engine

const cinematicData = {
  'raw-oud': {
    title_ar: 'عود خام',
    title_en: 'Raw Oud Wood',
    hero_copy: 'Taken from ancient trees. Aged by nature. Chosen by hand. This is not a purchase — it is an inheritance.',
    icon: '🪵',
    products: [
      { id: 'indian-oud', name_ar: 'عود هندي فاخر', name_en: 'Premium Indian Oud', description: 'Some things cannot be rushed. The Indian oud tree takes decades to form this resin — this liquid history. When you burn it, you are not filling a room with fragrance. You are connecting to something ancient, something that was here long before us.', tags: ['DEEP', 'EARTHY', 'WARM'], price: '1,200 AED / 10g', badge: 'Rare', rating: 5.0, icon: '🪵', wa_message: 'السلام عليكم، أرغب في طلب: عود هندي فاخر 10g' },
      { id: 'cambodian-oud', name_ar: 'عود كمبودي أصيل', name_en: 'Authentic Cambodian Oud', description: 'Smooth, sweet, and endlessly complex. The Cambodian forests hold secrets that no laboratory can replicate. Each chip is a conversation between centuries of growth and a single moment of burning beauty.', tags: ['SWEET', 'COMPLEX', 'SMOOTH'], price: '2,000 AED / 10g', badge: 'Rare', rating: 4.8, icon: '🌿', wa_message: 'السلام عليكم، أرغب في طلب: عود كمبودي أصيل 10g' },
      { id: 'arabian-oud', name_ar: 'عود عربي كلاسيكي', name_en: 'Classic Arabian Oud', description: 'The scent of Eid morning. Of grandmother\'s prayer room. Of everything you love about home. This is the oud that lives in the memory of every Gulf family — passed down without words.', tags: ['HERITAGE', 'WARM', 'FAMILIAR'], price: '600 AED / 10g', badge: null, rating: 4.9, icon: '🔥', wa_message: 'السلام عليكم، أرغب في طلب: عود عربي كلاسيكي 10g' },
      { id: 'royal-oud', name_ar: 'عود ملكي مُعتَّق', name_en: 'Aged Royal Oud', description: 'Aged over decades. A depth that unfolds slowly — like a story told with no rush, by someone who knows that the best things in life never hurry. Reserved for those who understand patience.', tags: ['AGED', 'ROYAL', 'DEEP'], price: '1,800 AED / 10g', badge: 'Limited', rating: 5.0, icon: '👑', wa_message: 'السلام عليكم، أرغب في طلب: عود ملكي معتق 10g' },
      { id: 'gulf-oud', name_ar: 'عود خليجي أصيل', name_en: 'Pure Gulf Oud', description: 'Grounded. Earthy. Honest. The raw soul of the Arabian peninsula in its most unfiltered form. For those who want no artifice — only truth, in smoke and wood and time.', tags: ['EARTHY', 'PURE', 'GROUNDED'], price: '450 AED / 10g', badge: null, rating: 4.7, icon: '🌾', wa_message: 'السلام عليكم، أرغب في طلب: عود خليجي أصيل 10g' },
      { id: 'bengali-oud', name_ar: 'عود بنغالي نادر', name_en: 'Rare Bengali Oud', description: 'Floral. Unexpected. For those who seek the extraordinary in every breath. Bengali oud carries a lightness that surprises — a delicate beauty hidden inside ancient wood.', tags: ['FLORAL', 'RARE', 'DELICATE'], price: '1,500 AED / 10g', badge: 'New', rating: 4.9, icon: '🌸', wa_message: 'السلام عليكم، أرغب في طلب: عود بنغالي نادر 10g' }
    ]
  },
  'oil-perfumes': {
    title_ar: 'عطور دهنية',
    title_en: 'Oud Oil Perfumes',
    hero_copy: 'Alcohol-free. Concentrated. Intimate. Applied to your skin, it becomes yours — evolving with your warmth through the day.',
    icon: '💧',
    products: [
      { id: 'najm-suhail', name_ar: 'نجم سهيل', name_en: 'Najm Suhail', description: 'Named after the brightest star visible from the Arabian peninsula. Warm amber and deep oud that rises from your skin like heat from desert sand at dusk. Your presence, elevated.', tags: ['AMBER', 'DEEP OUD', 'WARM'], price: '380 AED / 12ml', badge: 'Bestseller', rating: 5.0, icon: '⭐', wa_message: 'السلام عليكم، أرغب في طلب: نجم سهيل 12ml' },
      { id: 'gulf-musk', name_ar: 'مسك الخليج', name_en: 'Gulf Musk', description: 'Soft, clean, and quietly addictive. The kind of scent people lean closer to ask about. A skin-close musk that makes your natural warmth its canvas — and never lets go.', tags: ['MUSK', 'CLEAN', 'INTIMATE'], price: '280 AED / 12ml', badge: null, rating: 4.9, icon: '🌙', wa_message: 'السلام عليكم، أرغب في طلب: مسك الخليج 12ml' },
      { id: 'royal-amber', name_ar: 'عنبر ملكي', name_en: 'Royal Amber', description: 'Rich amber resin with a whisper of Taif rose. A fragrance that announces your arrival and lingers long after you leave. Luxury that begins at Fajr and carries you through to midnight.', tags: ['AMBER', 'ROSE', 'LUXURIOUS'], price: '450 AED / 12ml', badge: 'Rare', rating: 5.0, icon: '🟡', wa_message: 'السلام عليكم، أرغب في طلب: عنبر ملكي 12ml' },
      { id: 'taif-rose', name_ar: 'ورد الطائف', name_en: 'Taif Rose', description: 'The most coveted rose in all of Arabia, harvested at dawn when the dew still clings to each petal. Liquid poetry applied to your pulse points — a fragrance that makes the world slow down.', tags: ['FLORAL', 'ROSE', 'POETIC'], price: '520 AED / 12ml', badge: 'Limited', rating: 5.0, icon: '🌹', wa_message: 'السلام عليكم، أرغب في طلب: ورد الطائف 12ml' },
      { id: 'sandalwood', name_ar: 'صندل الهند', name_en: 'Indian Sandalwood', description: 'Creamy. Meditative. Timeless. Sandalwood has been the foundation of Arabian perfumery for centuries — grounding every blend, calming every room, settling every mind that breathes it in.', tags: ['CREAMY', 'CALM', 'WOODY'], price: '320 AED / 12ml', badge: null, rating: 4.8, icon: '🌰', wa_message: 'السلام عليكم، أرغب في طلب: صندل الهند 12ml' },
      { id: 'saffron-oud', name_ar: 'زعفران وعود', name_en: 'Saffron & Oud', description: "Saffron's fire meets oud's depth. The most iconic combination in Arabian luxury perfumery. Bold enough to command a room. Complex enough to be endlessly discovered. This is the combination that defines a culture.", tags: ['SPICED', 'BOLD', 'ICONIC'], price: '680 AED / 12ml', badge: 'Exclusive', rating: 5.0, icon: '✨', wa_message: 'السلام عليكم، أرغب في طلب: زعفران وعود 12ml' }
    ]
  },
  'spray-perfumes': {
    title_ar: 'عطور إسبري',
    title_en: 'Spray Perfumes',
    hero_copy: 'The Arabian soul in modern form. Every spray is a declaration — of where you come from, and where you are going.',
    icon: '✦',
    products: [
      { id: 'desert-gold', name_ar: 'صحراء الذهب', name_en: 'Desert Gold', description: 'Dry woods, warm amber, and a trail that turns heads three rooms away. The confidence of modern Gulf identity — dressed in a kandura, driving a Land Cruiser, leaving a trail no one forgets.', tags: ['WOODY', 'AMBER', 'BOLD'], price: '320 AED / 100ml', badge: 'Bestseller', rating: 5.0, icon: '🏜️', wa_message: 'السلام عليكم، أرغب في طلب: صحراء الذهب 100ml' },
      { id: 'abudhabi-night', name_ar: 'ليل أبوظبي', name_en: 'Abu Dhabi Night', description: 'Dark florals layered over deep oud. The Corniche at midnight. The city at its most glamorous — lights reflecting on still water, the air cool and charged with possibility.', tags: ['DARK FLORAL', 'OUD', 'NIGHT'], price: '380 AED / 100ml', badge: null, rating: 4.9, icon: '🌃', wa_message: 'السلام عليكم، أرغب في طلب: ليل أبوظبي 100ml' },
      { id: 'fajr', name_ar: 'فجر', name_en: 'Fajr', description: 'Fresh citrus and soft musk — the promise of a new day, bottled. Clean without being cold. Light without being insignificant. For those who begin each morning with intention.', tags: ['FRESH', 'CITRUS', 'CLEAN'], price: '220 AED / 100ml', badge: null, rating: 4.7, icon: '🌅', wa_message: 'السلام عليكم، أرغب في طلب: فجر 100ml' },
      { id: 'maleeka', name_ar: 'ملكة', name_en: 'Maleeka', description: 'Powdery rose and white oud — crafted for the woman who needs no introduction. She enters a room and the fragrance does the rest. Named after queens, designed for those who are.', tags: ['POWDERY', 'ROSE', 'FEMININE'], price: '420 AED / 100ml', badge: 'New', rating: 5.0, icon: '👑', wa_message: 'السلام عليكم، أرغب في طلب: ملكة 100ml' },
      { id: 'al-qasr', name_ar: 'القصر', name_en: 'Al Qasr', description: 'Oud, leather, and spice. Presence without a word spoken. Named after the palace — because that is exactly where this fragrance belongs. On the skin of someone who commands respect.', tags: ['LEATHER', 'SPICE', 'POWERFUL'], price: '480 AED / 100ml', badge: 'Limited', rating: 5.0, icon: '🏰', wa_message: 'السلام عليكم، أرغب في طلب: القصر 100ml' },
      { id: 'naseem', name_ar: 'نسيم', name_en: 'Naseem', description: 'Light, fresh, effortless. Like the first Gulf breeze of morning before the heat arrives — that perfect moment between night and day. Wearable every day. Missed every time you do not.', tags: ['LIGHT', 'BREEZY', 'FRESH'], price: '180 AED / 100ml', badge: null, rating: 4.6, icon: '💨', wa_message: 'السلام عليكم، أرغب في طلب: نسيم 100ml' }
    ]
  },
  'bakhoor': {
    title_ar: 'بخور',
    title_en: 'Bakhoor',
    hero_copy: 'Your home has a scent. Make it unforgettable. In our culture, how your home smells is a statement of who you are.',
    icon: '〰️',
    products: [
      { id: 'oud-bakhoor', name_ar: 'بخور دهن العود', name_en: 'Oud Oil Bakhoor', description: 'The purest bakhoor experience available. Oud oil absorbed into natural wood chips — a single piece fills an entire home with smoke that rises like a prayer and settles like peace.', tags: ['OUD', 'PURE', 'RICH'], price: '280 AED / 40g', badge: 'Bestseller', rating: 5.0, icon: '🌫️', wa_message: 'السلام عليكم، أرغب في طلب: بخور دهن العود 40g' },
      { id: 'rose-bakhoor', name_ar: 'بخور الورد', name_en: 'Rose Bakhoor', description: 'Floral, soft, and unmistakably feminine. Burn it in bedrooms, bridal suites, and anywhere that deserves softness. The scent of petals becoming smoke — beautiful in every form it takes.', tags: ['FLORAL', 'SOFT', 'FEMININE'], price: '180 AED / 40g', badge: null, rating: 4.9, icon: '🌸', wa_message: 'السلام عليكم، أرغب في طلب: بخور الورد 40g' },
      { id: 'amber-bakhoor', name_ar: 'بخور العنبر', name_en: 'Amber Bakhoor', description: 'Warm amber resin that clings to curtains, cushions, and memory. Guests arrive and say nothing — but notice everything. The highest compliment is when they ask what you burned.', tags: ['AMBER', 'WARM', 'LASTING'], price: '220 AED / 40g', badge: null, rating: 5.0, icon: '🟡', wa_message: 'السلام عليكم، أرغب في طلب: بخور العنبر 40g' },
      { id: 'musk-bakhoor', name_ar: 'بخور المسك', name_en: 'Musk Bakhoor', description: 'Clean and enveloping — the scent of a home that is truly cared for. Musk bakhoor settles gently into every room, creating the kind of atmosphere where guests never want to leave.', tags: ['MUSK', 'CLEAN', 'WELCOMING'], price: '160 AED / 40g', badge: null, rating: 4.8, icon: '🤍', wa_message: 'السلام عليكم، أرغب في طلب: بخور المسك 40g' },
      { id: 'royal-bakhoor', name_ar: 'بخور ملكي', name_en: 'Royal Bakhoor', description: 'Reserved for special occasions. Eid. Weddings. The arrival of honored guests. Some bakhoor is for every day — this one is for the moments in life that deserve to be remembered forever.', tags: ['ROYAL', 'SPECIAL', 'GRAND'], price: '380 AED / 40g', badge: 'Limited', rating: 5.0, icon: '👑', wa_message: 'السلام عليكم، أرغب في طلب: بخور ملكي 40g' },
      { id: 'riyadh-bakhoor', name_ar: 'بخور الرياض', name_en: 'Riyadh Bakhoor', description: 'Bold, spiced, and deeply traditional. This is the bakhoor of the majlis — thick, commanding, unmistakable. For those who refuse to compromise on heritage, even for a single breath.', tags: ['SPICED', 'BOLD', 'TRADITIONAL'], price: '240 AED / 40g', badge: 'New', rating: 4.9, icon: '🔥', wa_message: 'السلام عليكم، أرغب في طلب: بخور الرياض 40g' }
    ]
  },
  'gift-collections': {
    title_ar: 'مجموعات الهدايا',
    title_en: 'Gift Collections',
    hero_copy: 'In our culture, a gift of perfume is a gift of respect. Curated for Eid, weddings, and every occasion that deserves to be remembered.',
    icon: '🎁',
    products: [
      { id: 'royal-eid', name_ar: 'طقم العيد الملكي', name_en: 'Royal Eid Set', description: 'Three iconic Al Gharayaf fragrances presented in a handcrafted gift box worthy of the occasion. Give something that carries meaning — not just packaging. Give a piece of the Gulf.', tags: ['EID', 'LUXURY', 'CURATED'], price: '850 AED', badge: 'Limited', rating: 5.0, icon: '🌙', wa_message: 'السلام عليكم، أرغب في طلب: طقم العيد الملكي' },
      { id: 'bridal-gift', name_ar: 'هدية العروس', name_en: 'Bridal Gift Set', description: 'Rose, musk, and oud — curated for the most important day of her life. A gift that says: you deserve only the finest. Presented in silk-lined packaging. A memory before the ceremony even begins.', tags: ['BRIDAL', 'FLORAL', 'PRECIOUS'], price: '1,200 AED', badge: 'Exclusive', rating: 5.0, icon: '💍', wa_message: 'السلام عليكم، أرغب في طلب: هدية العروس' },
      { id: 'mens-classic', name_ar: 'طقم الرجل الكلاسيكي', name_en: 'Classic Men\'s Set', description: 'Oud oil, raw wood chips, and bakhoor — the complete Arabian fragrance ritual, assembled for the man who values tradition. A gift that teaches as much as it pleases.', tags: ['MASCULINE', 'COMPLETE', 'RITUAL'], price: '680 AED', badge: 'Bestseller', rating: 5.0, icon: '🎩', wa_message: 'السلام عليكم، أرغب في طلب: طقم الرجل الكلاسيكي' },
      { id: 'welcome-gift', name_ar: 'هدية الترحيب', name_en: 'Welcome Gift Set', description: 'The perfect corporate or hospitality gift. Elegant, culturally meaningful, and unmistakably Emirati. Wrapped, sealed, and signed. Leave an impression that outlasts any business card.', tags: ['CORPORATE', 'ELEGANT', 'MEANINGFUL'], price: '420 AED', badge: null, rating: 4.8, icon: '🤝', wa_message: 'السلام عليكم، أرغب في طلب: هدية الترحيب' },
      { id: 'couples', name_ar: 'طقم الزوجين', name_en: 'Couples Collection', description: 'His and hers — designed to complement each other when worn together. Two distinct fragrances that share a soul. The most romantic gift in our collection, for two people who chose each other.', tags: ['COUPLES', 'ROMANTIC', 'PAIRED'], price: '980 AED', badge: 'New', rating: 4.9, icon: '💑', wa_message: 'السلام عليكم، أرغب في طلب: طقم الزوجين' },
      { id: 'discovery', name_ar: 'طقم الاكتشاف', name_en: 'Discovery Set', description: 'Six miniatures. Six stories. The perfect introduction to the world of Al Gharayaf — for the curious, the gifted, and those who have not yet found their signature scent. Start here.', tags: ['INTRO', 'SIX SCENTS', 'EXPLORE'], price: '320 AED', badge: null, rating: 4.9, icon: '🔍', wa_message: 'السلام عليكم، أرغب في طلب: طقم الاكتشاف' }
    ]
  },
  'bespoke': {
    title_ar: 'تفصيل عطور',
    title_en: 'Bespoke Perfume',
    hero_copy: 'One scent. Yours alone. A private consultation with our master. We listen. We create. You leave with something no one else on earth will ever wear.',
    icon: '⭐',
    products: [
      { id: 'private-consult', name_ar: 'الجلسة الخاصة', name_en: 'Private Consultation', description: 'A one-on-one session with our founder. We do not ask what fragrance you want — we ask who you are. Your memories. Your home. Your journey. Then we translate all of it into scent.', tags: ['EXCLUSIVE', 'PERSONAL', 'ARTISAN'], price: 'From 500 AED', badge: 'Exclusive', rating: 5.0, icon: '🤝', wa_message: 'السلام عليكم، أرغب في حجز جلسة تفصيل عطر خاص' },
      { id: 'identity-fragrance', name_ar: 'عطر الهوية', name_en: 'Identity Fragrance', description: 'Your memory, your personality, your roots — translated into a scent that is entirely yours. No catalogue number. No shared formula. A fragrance that exists in one version on this earth: on your skin.', tags: ['UNIQUE', 'IDENTITY', 'LIFETIME'], price: 'From 1,200 AED', badge: 'Limited Slots', rating: 5.0, icon: '🌟', wa_message: 'السلام عليكم، أرغب في إنشاء عطر هويتي الخاص' },
      { id: 'bespoke-voucher', name_ar: 'هدية التفصيل', name_en: 'Bespoke Gift Voucher', description: 'Give someone the rarest gift imaginable: a scent created only for them. Not a bottle from a shelf — an experience. A consultation. A creation. A memory that fits no one else.', tags: ['GIFT', 'UNIQUE', 'PRECIOUS'], price: 'From 800 AED', badge: 'New', rating: 5.0, icon: '🎁', wa_message: 'السلام عليكم، أرغب في شراء هدية تفصيل عطر' },
      { id: 'corporate-scent', name_ar: 'عطر الشركة', name_en: 'Corporate Signature Scent', description: 'A unique fragrance for your brand, hotel, or workspace. Scent is the most powerful form of brand memory — we help you own it. Guests will smell your lobby and remember it years later.', tags: ['CORPORATE', 'BRAND', 'SIGNATURE'], price: 'From 3,000 AED', badge: 'Exclusive', rating: 5.0, icon: '🏢', wa_message: 'السلام عليكم، أرغب في الاستفسار عن عطر الشركة المخصص' },
      { id: 'renewal', name_ar: 'تجديد العطر', name_en: 'Fragrance Renewal', description: 'Already have a bespoke scent with us? A person evolves. So should their fragrance. Return to us and we will listen again — refine what you have become, and craft what comes next.', tags: ['EVOLUTION', 'RENEWAL', 'PERSONAL'], price: 'From 400 AED', badge: null, rating: 4.9, icon: '🔄', wa_message: 'السلام عليكم، أرغب في تجديد عطري المخصص' },
      { id: 'full-bespoke', name_ar: 'طقم التفصيل الكامل', name_en: 'Full Bespoke Package', description: 'The ultimate expression of what we do. Consultation, creation, hand-crafted luxury packaging, personal calligraphy, and lifetime reformulation rights. Everything. For someone who deserves everything.', tags: ['ULTIMATE', 'COMPLETE', 'FOREVER'], price: 'From 2,500 AED', badge: 'Ultimate', rating: 5.0, icon: '💎', wa_message: 'السلام عليكم، أرغب في الاستفسار عن طقم التفصيل الكامل' }
    ]
  }
};

let currentCategory = null;
let currentIdx = 0;
let isAnimating = false;
let savedScrollY = 0;

window.openCinematicCatalogue = function(categoryId) {
  currentCategory = categoryId;
  currentIdx = 0;

  savedScrollY = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.top = `-${savedScrollY}px`;

  const overlay = document.getElementById('cinematic-overlay');
  overlay.classList.remove('hidden');
  
  // Fade in background smoothly
  void overlay.offsetWidth; // Force reflow
  overlay.style.opacity = '1';

  // Build Dots Navigation
  const products = cinematicData[categoryId].products;
  const dotsContainer = document.getElementById('c-dots');
  dotsContainer.innerHTML = products.map((_, i) => 
      `<div class="nav-dot ${i === 0 ? 'active' : ''}" onclick="goToCinematicSlide(${i})"></div>`
  ).join('');

  // Initial Render
  setTimeout(() => {
     renderCinematicProduct(categoryId, 0, 'none');
     overlay.focus();
  }, 200); // Small delay to let overlay fade in before content starts stagger
};

window.closeCinematicOverlay = function() {
    const overlay = document.getElementById('cinematic-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        window.scrollTo(0, savedScrollY);
        document.getElementById('collections').scrollIntoView({behavior: 'smooth'});
        currentCategory = null;
    }, 400); // matches opacity transition
};

function renderCinematicProduct(catId, idx, direction) {
    if (isAnimating) return;
    
    const cat = cinematicData[catId];
    const p = cat.products[idx];
    const total = cat.products.length;

    const visualBox = document.getElementById('cinematic-visual-box');
    const infoBox = document.getElementById('cinematic-info-box');
    const vignette = document.getElementById('cinematic-vignette');
    const iconBase = document.getElementById('cinematic-icon');

    // Start transition-out
    if (direction !== 'none') {
        isAnimating = true;
        vignette.classList.add('active'); // fade to black vignette mid transition
        
        const outClass = direction === 'next' ? 'slide-out-left' : 'slide-out-right';
        visualBox.classList.remove('slide-active', 'slide-in-right', 'slide-in-left');
        visualBox.classList.add(outClass);
        
        infoBox.classList.remove('slide-active', 'slide-in-right', 'slide-in-left');
        infoBox.classList.add(outClass);
        iconBase.classList.remove('show');
        
        setTimeout(() => {
            // Data swap halfway through
            updateDOMData(cat, p, idx, total);
            
            // Set starting point for incoming content
            visualBox.classList.remove(outClass);
            infoBox.classList.remove(outClass);
            
            const inClass = direction === 'next' ? 'slide-in-right' : 'slide-in-left';
            visualBox.classList.add(inClass);
            infoBox.classList.add(inClass);
            
            void visualBox.offsetWidth; // Force Reflow

            // Bring in new content
            visualBox.classList.remove(inClass);
            visualBox.classList.add('slide-active');
            infoBox.classList.remove(inClass);
            infoBox.classList.add('slide-active');
            
            vignette.classList.remove('active');
            triggerStaggers();
            
            setTimeout(() => {
                isAnimating = false;
            }, 500); // 500ms slide duration

        }, 350); // 350ms fade out

    } else {
        // Initial / Direct Render (no slide physics)
        updateDOMData(cat, p, idx, total);
        visualBox.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
        infoBox.classList.remove('slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
        visualBox.classList.add('slide-active');
        infoBox.classList.add('slide-active');
        triggerStaggers();
    }

    // Update Dots
    const dots = document.querySelectorAll('#c-dots .nav-dot');
    dots.forEach((d, i) => {
        if (i === idx) d.classList.add('active');
        else d.classList.remove('active');
    });
}

function updateDOMData(cat, p, idx, total) {
    document.getElementById('c-breadcrumb').innerHTML = `Collections <span class="text-brand-gold mx-2">◆</span> ${cat.title_en}`;
    document.getElementById('c-index').innerHTML = `0${idx + 1} <span class="text-brand-cream/40">/ 0${total}</span>`;
    document.getElementById('c-arabic').innerText = p.name_ar;
    document.getElementById('c-english').innerText = p.name_en;
    document.getElementById('c-desc').innerText = p.description;
    
    const tagsHtml = p.tags.map(t => `<span class="border border-brand-gold py-1 px-4 rounded-full text-[10px] md:text-xs tracking-[0.1em] text-brand-cream uppercase whitespace-nowrap">${t}</span>`).join('');
    document.getElementById('c-tags').innerHTML = tagsHtml;
    
    document.getElementById('c-price').innerText = p.price;
    document.getElementById('c-icon').innerText = p.icon;
    
    const badgeHtml = p.badge ? `<span class="text-brand-gold">${p.badge}</span> <span class="mx-2 opacity-50">|</span> ` : '';
    document.getElementById('c-badge-container').innerHTML = `${badgeHtml} <span>Rating ${p.rating} / 5.0</span>`;

    const waBtn = document.getElementById('cinematic-wa-btn');
    waBtn.onclick = () => window.open(`https://wa.me/971547411813?text=${encodeURIComponent(p.wa_message)}`, '_blank');
}

function triggerStaggers() {
    const staggers = document.querySelectorAll('.stagger-text');
    const clip = document.getElementById('c-arabic');
    const icon = document.getElementById('cinematic-icon');

    // reset
    staggers.forEach(s => s.classList.remove('show'));
    clip.classList.remove('show');
    icon.classList.remove('show');

    void clip.offsetWidth;

    // Trigger frame
    requestAnimationFrame(() => {
        staggers.forEach(s => s.classList.add('show'));
        clip.classList.add('show');
        icon.classList.add('show');
    });
}


// Nav Actions
window.nextCinematicSlide = function() {
    if(!currentCategory || isAnimating) return;
    const cat = cinematicData[currentCategory];
    if (currentIdx < cat.products.length - 1) {
        currentIdx++;
        renderCinematicProduct(currentCategory, currentIdx, 'next');
    }
}

window.prevCinematicSlide = function() {
    if(!currentCategory || isAnimating) return;
    if (currentIdx > 0) {
        currentIdx--;
        renderCinematicProduct(currentCategory, currentIdx, 'prev');
    }
}

window.goToCinematicSlide = function(i) {
    if(!currentCategory || isAnimating || i === currentIdx) return;
    const dir = i > currentIdx ? 'next' : 'prev';
    currentIdx = i;
    renderCinematicProduct(currentCategory, currentIdx, dir);
}


// --- Events ---

// Keyboard Arrow Navigation & ESC
document.addEventListener('keydown', (e) => {
    if(!currentCategory) return;
    if(e.key === 'ArrowRight' || e.key === 'ArrowDown') nextCinematicSlide();
    if(e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prevCinematicSlide();
    if(e.key === 'Escape') closeCinematicOverlay();
});

// Scroll Event (Debounced to avoid skipping multiple items)
let wheelTimeout;
document.getElementById('cinematic-overlay').addEventListener('wheel', (e) => {
    if(isAnimating) return;
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if(e.deltaY > 50) nextCinematicSlide();
        if(e.deltaY < -50) prevCinematicSlide();
    }, 50); // small debounce
});

// Touch Swipe Event for Mobile
let touchStartX = 0;
let touchEndX = 0;
const overlayDiv = document.getElementById('cinematic-overlay');

overlayDiv.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

overlayDiv.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) nextCinematicSlide(); // Swipe left -> Next
    if (touchEndX > touchStartX + swipeThreshold) prevCinematicSlide(); // Swipe right -> Prev
}

// ----- Secondary Grid View Logic -----
window.showCinematicGrid = function() {
    const gridView = document.getElementById('cinematic-grid-view');
    const cat = cinematicData[currentCategory];
    
    document.getElementById('grid-title-ar').innerText = cat.title_ar;
    document.getElementById('grid-title-en').innerText = cat.title_en;

    const cardsHtml = cat.products.map((p, i) => `
        <div class="group relative bg-[#0D0A05] border border-brand-gold/20 p-6 flex flex-col items-center text-center cursor-pointer transition-all hover:border-brand-gold hover:-translate-y-1 overflow-hidden" onclick="goToCinematicSlide(${i}); hideCinematicGrid();">
            <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style="transition-duration:1s"></div>
            ${p.badge ? `<span class="absolute top-3 left-3 bg-brand-gold text-[#0D0A05] text-[10px] font-bold px-2 uppercase tracking-widest z-10">${p.badge}</span>` : ''}
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500 text-brand-gold/80">${p.icon}</div>
            <h4 class="font-arabic text-2xl text-brand-cream mb-1">${p.name_ar}</h4>
            <h5 class="font-body italic text-brand-gold text-sm mb-4">${p.name_en}</h5>
            <div class="font-mono font-bold text-brand-gold mt-auto">${p.price}</div>
        </div>
    `).join('');

    document.getElementById('c-grid-container').innerHTML = cardsHtml;
    
    // Hide Slider View content immediately without closing whole overlay
    document.getElementById('cinematic-slider-view').style.opacity = '0';
    gridView.classList.remove('hidden');
    gridView.classList.add('flex');
    void gridView.offsetWidth; // reflow
    gridView.style.opacity = '1';
}

window.hideCinematicGrid = function() {
    const gridView = document.getElementById('cinematic-grid-view');
    gridView.style.opacity = '0';
    setTimeout(() => {
        gridView.classList.add('hidden');
        gridView.classList.remove('flex');
        document.getElementById('cinematic-slider-view').style.opacity = '1';
    }, 300);
}
