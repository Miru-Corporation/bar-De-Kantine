export const content = {

  // ── SITE-WIDE ──────────────────────────────────────────────────────────────
  siteName: 'De Kantine',
  tagline: '',
  taglineExtended: 'Votre espace de détente sportif',

  // ── NAVBAR ─────────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'Accueil',   href: '#accueil'  },
      { label: 'À propos',  href: '#apropos'  },
      { label: 'Ambiance',  href: '#ambiance' },
      { label: 'Piscine',   href: '#piscine'  },
      { label: 'Menu',      href: '#menu'     },
      { label: 'Galerie',   href: '#galerie'  },
      { label: 'Infos',     href: '#infos'    },
    ],
    ctaLabel: 'Nous appeler',
  },

  // ── HERO ───────────────────────────────────────────────────────────────────
  hero: {
    badge: 'Ouvert tous les jours',
    headline: 'De Kantine',
    subheadline: '',
    body: 'Un lieu convivial pour savourer un café, grignoter quelque chose de bon et recharger les batteries — juste à côté de votre séance de natation.',
    cta1: { label: 'Nous appeler', type: 'call' },
    cta2: { label: 'Nous trouver', type: 'maps' },
    scrollHint: 'Découvrir',
  },

  // ── À PROPOS ───────────────────────────────────────────────────────────────
  about: {
    sectionLabel: 'À propos',
    headline: 'Un café ancré dans la vie sportive du quartier',
    p1: 'De Kantine est né d\'une idée simple : offrir aux sportifs, aux familles et aux habitants un endroit chaleureux et authentique, directement au cœur du complexe sportif.',
    p2: 'Ici, on se retrouve avant ou après la piscine pour partager un café bien mérité, un snack savoureux ou simplement prendre le temps de souffler. L\'atmosphère est décontractée, le service souriant, et la carte pensée pour les actifs.',
    values: [
      {
        icon: 'heart',
        title: 'Convivial',
        text: 'Un espace ouvert à tous, dans une atmosphère chaleureuse et sans chichi.',
      },
      {
        icon: 'map-pin',
        title: 'Ancré localement',
        text: 'Un café du quartier, pour le quartier — où tout le monde se retrouve.',
      },
      {
        icon: 'zap',
        title: 'Sport & bien-être',
        text: 'Conçu pour accompagner votre pratique sportive, du premier café au dernier verre.',
      },
    ],
  },

  // ── AMBIANCE ───────────────────────────────────────────────────────────────
  ambiance: {
    sectionLabel: "L'ambiance",
    pullQuote: 'Un endroit où le sport se savoure.',
    headline: "Plus qu'un café, une atmosphère",
    body: "De Kantine, c'est l'odeur du café qui flotte dans l'air frais du matin, les rires des enfants qui viennent de finir leur cours, et la satisfaction tranquille d'une séance accomplie. Un lieu simple, honnête, où il fait bon s'attarder.",
    features: [
      {
        icon: 'coffee',
        title: 'Café & Snacks',
        text: 'Des boissons chaudes, des jus frais et des petites faims bien satisfaites. Une carte simple, généreuse, et de qualité.',
      },
      {
        icon: 'activity',
        title: 'Sport & Détente',
        text: 'Idéalement situé pour une pause avant ou après votre séance. Les vestiaires à deux pas, le café dans la main.',
      },
      {
        icon: 'users',
        title: 'Communauté locale',
        text: 'Nageurs, coureurs, familles, retraités — tout le monde se retrouve à De Kantine. C\'est ce qui fait son âme.',
      },
    ],
  },

  // ── PISCINE ────────────────────────────────────────────────────────────────
  pool: {
    sectionLabel: 'La piscine',
    headline: 'Juste à côté de la piscine',
    body: "De Kantine se trouve à moins de cinquante mètres de l'entrée de la piscine municipale. Qu'il pleuve ou qu'il fasse soleil, vous n'avez que quelques pas à faire pour trouver un café chaud, une table confortable et un sourire qui vous attend.",
    subtext: "Nous accueillons volontiers les groupes scolaires, les clubs de natation et les associations sportives. N'hésitez pas à nous contacter pour organiser vos pauses et collations.",
    stats: [
      { value: '50m',  label: 'de la piscine'        },
      { value: '7j/7', label: 'ouvert toute l\'année' },
      { value: '7h',   label: 'ouverture le matin'   },
    ],
  },

  // ── MENU ───────────────────────────────────────────────────────────────────
  menu: {
    sectionLabel: 'La carte',
    headline: 'Boissons & Snacks',
    subheadline: 'Simple, savoureux, fait pour vous.',
    seasonalNote: '* La carte évolue au fil des saisons. Demandez nos suggestions du moment.',
    drinks: [
      { name: 'Café espresso',      description: 'Un expresso serré, de caractère.',                       tag: 'Chaud'  },
      { name: 'Café allongé',       description: 'Tout en douceur, pour prendre le temps.',                tag: 'Chaud'  },
      { name: 'Cappuccino',         description: 'Mousse crémeuse et café équilibré.',                     tag: 'Chaud'  },
      { name: 'Thé & infusions',    description: 'Sélection de thés et tisanes du moment.',                tag: 'Chaud'  },
      { name: 'Chocolat chaud',     description: "Réconfortant après une séance dans l'eau fraîche.",      tag: 'Chaud'  },
      { name: "Jus d'orange frais", description: 'Pressé à la commande, vitaminé.',                       tag: 'Froid'  },
      { name: 'Smoothie du jour',   description: 'Fruits de saison mixés, sans sucre ajouté.',             tag: 'Froid'  },
      { name: 'Eau pétillante',     description: 'Menthe, citron ou nature.',                              tag: 'Froid'  },
      { name: 'Bière pression',     description: "Une pression bien méritée après l'effort.",              tag: 'Alcool' },
      { name: 'Vin au verre',       description: 'Blanc, rouge ou rosé selon la saison.',                  tag: 'Alcool' },
    ],
    snacks: [
      { name: 'Panini du jour',       description: 'Garniture fraîche et pain grillé croustillant.',      tag: 'Chaud'   },
      { name: 'Croque-monsieur',      description: 'Jambon, fromage fondu, le classique indémodable.',    tag: 'Chaud'   },
      { name: 'Salade composée',      description: 'Légumes croquants, protéines, vinaigrette maison.',   tag: 'Frais'   },
      { name: 'Assiette de fruits',   description: 'Fruits de saison découpés, fraîcheur garantie.',      tag: 'Frais'   },
      { name: "Tartine à l'avocat",   description: 'Pain au levain, avocat, citron, graines.',            tag: 'Végé'    },
      { name: 'Yaourt granola',       description: 'Yaourt nature, granola maison, fruits rouges.',       tag: 'Frais'   },
      { name: 'Cake maison du jour',  description: 'Recette qui change chaque semaine.',                  tag: 'Sucré'   },
      { name: 'Barre énergétique',    description: "Pour caler avant ou après l'effort.",                 tag: 'Sportif' },
    ],
  },

  // ── CTA BAND ───────────────────────────────────────────────────────────────
  ctaBand: {
    headline: 'Une séance de terminée ?',
    subtext: 'Venez vous ressourcer à De Kantine. Votre café vous attend.',
    cta: { label: 'Voir comment nous trouver', type: 'maps' },
  },

  // ── GALERIE ────────────────────────────────────────────────────────────────
  gallery: {
    sectionLabel: 'Galerie',
    headline: 'Notre Ambiance',
    subheadline: 'Des instants simples, dans un endroit qui vous ressemble.',
    photos: [
      { src: '/images/gallery-1.jpg', alt: 'La terrasse de De Kantine au soleil'         },
      { src: '/images/gallery-2.jpg', alt: 'Le comptoir café avec ses machines expresso'  },
      { src: '/images/gallery-3.jpg', alt: 'Des nageurs qui arrivent après leur séance'   },
      { src: '/images/gallery-4.jpg', alt: 'Une assiette de snacks colorés'               },
      { src: '/images/gallery-5.jpg', alt: "Un groupe d'amis attablés en terrasse"        },
      { src: '/images/gallery-6.jpg', alt: 'Vue extérieure de la piscine et du café'      },
    ],
  },

  // ── INFOS PRATIQUES ────────────────────────────────────────────────────────
  info: {
    sectionLabel: 'Infos pratiques',
    headline: 'Venez nous rendre visite',
    address: {
      street: 'Sportlaan 13',
      city: '1600 Sint-Pieters-Leeuw, Belgique',
      label: 'Adresse',
    },
    phone: {
      display: '+33 3 XX XX XX XX',
      href: 'tel:+33300000000',
      label: 'Téléphone',
    },
    email: {
      display: 'contact@de-kantine.fr',
      href: 'mailto:contact@de-kantine.fr',
      label: 'Email',
    },
    googleMapsUrl: 'https://www.google.com/maps/place/De+Kantine/@50.799801,4.2860818,15z/data=!4m15!1m8!3m7!1s0x47c3c7a3a42ac631:0xf87504178445fd1!2sDe+Kantine!8m2!3d50.7998372!4d4.2865855!10e5!16s%2Fg%2F11fj_0fdz7!3m5!1s0x47c3c7a3a42ac631:0xf87504178445fd1!8m2!3d50.7998372!4d4.2865855!16s%2Fg%2F11fj_0fdz7?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D',
    hours: {
      label: "Horaires d'ouverture",
      schedule: [
        { days: 'Lundi – Vendredi', hours: '7h00 – 21h00' },
        { days: 'Samedi',           hours: '8h00 – 22h00' },
        { days: 'Dimanche',         hours: '8h00 – 20h00' },
        { days: 'Jours fériés',     hours: '9h00 – 18h00' },
      ],
    },
    ctas: [
      { label: 'Nous appeler',     type: 'call'  },
      { label: 'Itinéraire',       type: 'maps'  },
      { label: 'Envoyer un email', type: 'email' },
    ],
  },

  // ── FOOTER ─────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'Convivial, sportif, local.',
    copyright: '© 2026 De Kantine. Tous droits réservés.',
    quickLinks: [
      { label: 'Accueil',           href: '#accueil'  },
      { label: 'À propos',          href: '#apropos'  },
      { label: 'Ambiance',          href: '#ambiance' },
      { label: 'Boissons & Snacks', href: '#menu'     },
      { label: 'Galerie',           href: '#galerie'  },
      { label: 'Infos pratiques',   href: '#infos'    },
    ],
  },
}
