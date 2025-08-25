// Company data and constants
const COMPANY_DATA = {
    name: "Mediverse Tradelink",
    shortName: "MVTL",
    tagline: "Pvt Ltd",
    logo: "https://i.ibb.co/27jQZqPD/mv.png",
    contact: {
        phone: "+977-9851163848",
        email: "mvtl@mediversetradelink.com",
        address: "Jalbinayak-06, Chovar, Kirtipur, Nepal",
        hours: "Sunday - Friday: 9:00 AM - 5:00 PM"
    },
    social: {
        whatsapp: "https://wa.me/9851163848",
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com"
    }
};

const NAVIGATION_ITEMS = [
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Products', href: '#products' },
    { name: 'CSR', href: '#csr' },
    { name: 'Contact', href: '#contact' }
];

const LEADERS_DATA = [
    {
        name: 'Naresh Budhathoki',
        position: 'Director: Sales/Operations/Market Research',
        image: 'https://i.ibb.co/TD6QMvKs/naresh1.jpg',
        bio: '"Our logistics network ensures critical supplies reach even remote areas within 72 hours - because healthcare can\'t wait. MVTL don\'t just sell products—we deliver solutions that heal. From Surgical feat to the frontiers of Nutra and Pharma based products in upcoming days, our success is driven by relentless market insight, seamless operations, and a sales force that understands Nepal\'s pulse."',
        tagline: 'Precision in planning. Excellence in execution.',
        gradient: 'from-blue-500 to-blue-600'
    },
    {
        name: 'Saroj Shah Thakuri',
        position: 'Director: HR/Strategy/Legal',
        image: 'https://i.ibb.co/JWdy6hL0/saro-11.jpg',
        bio: '"We believe that people drive progress, strategy shapes success, and integrity ensures impact. With MVTL, as we expand from Surgical excellence into imminent Medical Nutrition and Medicine centric endeavours, our commitment remains firm: to cultivate talent, navigate challenges with foresight, and uphold the highest legal and ethical standards—because sustainable growth begins with trust."',
        tagline: 'Sharp mind with Specializes in healthcare logistics.',
        gradient: 'from-emerald-500 to-emerald-600'
    },
    {
        name: 'Pranav Acharya',
        position: 'Director: Finance/Supply Chain/PR',
        image: 'https://i.ibb.co/352zxV20/pranav1.jpg',
        bio: '"Sustainable growth isn\'t an option - it\'s our responsibility to Nepal\'s healthcare ecosystem. We don\'t just manage numbers and logistics—we fuel Nepal\'s healthcare evolution. From precision in surgical supply chains to the promise of Medicine sectors and Pharma Food catagories in near timeline, our strength lies in financial agility, seamless operations, and trusted relationships."',
        tagline: 'Straightening Financial Structure, bridging gaps, and building trust',
        gradient: 'from-purple-500 to-purple-600'
    },
    {
        name: 'Pramod Maharjan',
        position: 'Director: Marketing/Business & Product Development',
        image: 'https://i.ibb.co/HLmhc3hN/Pramod.jpg',
        bio: '"At MVTL, we don\'t just distribute surgical products—we heal possibilities. As we expand into Nutraceuticals and Pharmaceuticals in forthcoming days ahead from present Surgical preeminence, our mission remains clear: to bridge global innovations with Nepal\'s healthcare needs, ensuring quality, accessibility, and trust. Together, we\'re not just building a business; we\'re shaping the future of wellness."',
        tagline: 'Dependable Surgical/medical products facilitation.',
        gradient: 'from-teal-500 to-teal-600'
    }
];

const SURGICAL_PRODUCTS = [
    {
        category: 'Hernioplasty',
        products: ['Quality Surgical Mesh', 'Tracker'],
        color: 'bg-blue-500'
    },
    {
        category: 'Wound Management',
        products: ['Skin Stapler', 'Skin Glue'],
        color: 'bg-emerald-500'
    },
    {
        category: 'Critical Care',
        products: ['CVC', 'ET Tube', 'Tracheostomy Tube'],
        color: 'bg-red-500'
    },
    {
        category: 'Specialized Equipment',
        products: ['Biopsy Gun', 'PICC', 'Chemo Port', 'DJ Stent', 'Catheter Stabilization Devices'],
        color: 'bg-purple-500'
    }
];

const NUTRACEUTICAL_PRODUCTS = [
    {
        name: 'Immunity Boosters',
        description: 'Core Critical Care focused Quality Nutrition Supply',
        status: 'Coming 2026'
    },
    {
        name: 'Diabetes Care Formula',
        description: 'Blood sugar management solutions',
        status: 'Coming 2026'
    },
    {
        name: 'Prenatal Nutrition Pack',
        description: 'Maternal health support',
        status: 'Coming 2026'
    },
    {
        name: 'Joint Mobility Blend',
        description: 'Arthritis support formulations',
        status: 'Coming 2026'
    }
];

const PHARMACEUTICAL_PRODUCTS = [
    {
        title: 'Essential Medicines',
        description: 'WHO priority list medications for basic healthcare needs',
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'Chronic Care',
        description: 'Diabetes and Hypertension management solutions',
        color: 'from-red-500 to-red-600'
    },
    {
        title: 'Critical Care',
        description: 'ICU, CCU, HDU specialized medications',
        color: 'from-emerald-500 to-emerald-600'
    },
    {
        title: 'Specialty Drug Distribution',
        description: 'Advanced cold-chain distribution for specialized medications',
        color: 'from-purple-500 to-purple-600'
    }
];

const STATS_DATA = [
    { value: '250+', label: 'Healthcare Partners' },
    { value: '55+', label: 'Districts Covered' },
    { value: '2026', label: 'Nutra Launch' }
];

const ABOUT_STATS = [
    { label: 'Healthcare Partners', value: '250+', color: 'text-blue-600' },
    { label: 'Districts Covered', value: '55+', color: 'text-emerald-600' },
    { label: 'Delivery Accuracy Aim', value: '100%', color: 'text-purple-600' },
    { label: 'Nutraceutical Launch', value: '2026', color: 'text-pink-600' },
    { label: 'Pharmaceutical Launch', value: 'Future', color: 'text-indigo-600' }
];

const ABOUT_HIGHLIGHTS = [
    'Quality-certified surgical and medical supplies',
    'Robust distribution network spanning 55+ districts',
    'Planned nutraceutical division launching in 2026',
    'Future pharmaceutical sector expansion',
    'Commitment to Nepal\'s healthcare ecosystem'
];

const CSR_INITIATIVES = [
    {
        title: 'Rural Healthcare Access',
        description: 'Ensuring critical medical supplies reach remote areas of Nepal through emergency support during disasters and free sample distribution programs.',
        activities: [
            'Emergency supply support during disasters',
            'Free Sample Distribution'
        ],
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'Healthcare Education',
        description: 'Building capacity in Nepal\'s healthcare sector through comprehensive training and community awareness programs.',
        activities: [
            'Hospital staff training programs',
            'Community health awareness campaigns'
        ],
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'Sustainable Operations',
        description: 'Committed to environmental responsibility and sustainable business practices that benefit Nepal\'s future generations.',
        activities: [
            'Carbon-neutral logistics by 2026',
            'Eco-friendly packaging initiatives',
            'Ethical sourcing policies'
        ],
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
];

const IMPACT_METRICS = [
    { value: '55+', title: 'Geographic Reach', description: 'Districts covered across Nepal' },
    { value: '250+', title: 'Healthcare Partners', description: 'Medical institutions served' },
    { value: '72hrs', title: 'Emergency Response', description: 'Supply delivery timeframe' },
    { value: '2026', title: 'Sustainability Goal', description: 'Carbon-neutral operations target' }
];

const CONTACT_INFO = [
    {
        title: 'Head Office',
        details: ['Jalbinayak-06, Chovar', 'Kirtipur, Nepal'],
        color: 'text-blue-600'
    },
    {
        title: 'Phone',
        details: ['+977-9851163848'],
        color: 'text-emerald-600'
    },
    {
        title: 'Business Hours',
        details: ['Sunday - Friday: 9:00 AM - 5:00 PM'],
        color: 'text-orange-600'
    }
];

const FOOTER_SECTIONS = [
    {
        title: 'Company',
        links: [
            { name: 'About MVTL', href: '#about' },
            { name: 'Leadership Team', href: '#leadership' },
            { name: 'Our Products', href: '#products' },
            { name: 'Corporate Responsibility', href: '#csr' }
        ]
    },
    {
        title: 'Products & Services',
        links: [
            { name: 'Surgical Supplies', href: '#products' },
            { name: 'Future Nutraceuticals', href: '#products' },
            { name: 'Pharmaceutical Plans', href: '#products' },
            { name: 'Emergency Support', href: '#contact' }
        ]
    },
    {
        title: 'Support',
        links: [
            { name: 'Contact Us', href: '#contact' },
            { name: 'Partnership Inquiries', href: '#contact' },
            { name: 'Distribution Network', href: '#contact' },
            { name: 'Technical Support', href: '#contact' }
        ]
    }
];