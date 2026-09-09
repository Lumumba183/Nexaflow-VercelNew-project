export const ACCENT = '#3b82f6' ; export const ACCENT_GLOW = '#60a5fa' ; export const GOLD = '#c9a227' ; export const GOLD_BRIGHT = '#e8c547' ; export const GOLD_PALE = '#f5e6a3' ; export const TEXT_MUTED = '#94a3b8' ; export const TEXT_DARK = '#64748b' ; export const CARD = '#1e293b' ; export const BORDER = '#334155' ; export const services = [ { num: '01', title: 'Website Development', desc: 'High-performance, conversion-optimized websites built with React, Next.js, and modern frameworks. Mobile-first, SEO-ready, blazing fast.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '02', title: 'AI Calling Agents', desc: 'Intelligent voice agents that handle inbound and outbound calls around the clock. Book appointments, qualify leads, serve customers.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '03', title: 'WhatsApp Automation', desc: 'WhatsApp Business API workflows for support, order updates, marketing campaigns, and lead nurturing at scale.', img: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '04', title: 'Web Chat Automation', desc: 'Smart chatbots that engage visitors, answer questions, capture leads, and drive conversions in real-time on your website.', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '05', title: 'Social Chat Automation', desc: 'Automated Messenger and Instagram DM workflows to engage social audiences and turn followers into paying customers.', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '06', title: 'Shopify Cart Recovery', desc: 'Recover lost revenue with automated abandoned cart sequences and intelligent chat flows integrated with your Shopify store.', img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=240&fit=crop&auto=format&q=80' }, { num: '07', title: 'E-Shop Design', desc: 'Complete online shop design with product catalogs, payment integration (M-Pesa included), inventory management, and mobile-optimized checkout.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=240&fit=crop&auto=format&q=80', price: 'KSH 65,000' }, { num: '08', title: 'Web App + Android App', desc: 'Full-featured web application paired with a native Android app. Real-time data sync, push notifications, offline support, and scalable backend.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=240&fit=crop&auto=format&q=80', price: 'From KSH 250,000' }, { num: '09', title: 'WeDialAI White-Label', desc: 'Launch your own branded AI agent platform. Full white-label solution with your logo, domain, and custom pricing. Powered by our proven technology.', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=240&fit=crop&auto=format&q=80', price: 'KSH 250,000 + KSH 35,000/mo', link: 'https://wedialai.com' }, ] ; export const pricing = [ { name: 'Starter Package', subtitle: 'Up to 5 Pages — Essential web presence', price: 'KSH 18,000', usdPrice: 140, features: ['Contact form', 'Image gallery', 'Social media integration', 'Responsive design', 'FREE domain (year 1)', 'FREE SSL Certificate'], notIncluded: ['Blog setup', 'Professional email setup'], popular: false, }, { name: 'Business Package', subtitle: 'Up to 10 Pages — Growing business', price: 'KSH 35,000', usdPrice: 270, features: ['Everything in Starter', 'Blog setup', 'Professional email setup', 'Basic SEO optimization', 'Google Analytics integration', 'Social media feeds'], notIncluded: ['E-commerce functionality', 'Custom animations'], popular: true, }, { name: 'Premium Package', subtitle: 'Up to 20 Pages — Full-scale solution', price: 'KSH 65,000', usdPrice: 500, features: ['Everything in Business', 'E-commerce functionality', 'Payment integration (M-Pesa)', 'Advanced SEO package', 'Custom animations', 'Admin dashboard'], notIncluded: ['Mobile app'], popular: false, }, { name: 'Enterprise Package', subtitle: 'Unlimited Pages — Corporate grade', price: 'KSH 120,000', usdPrice: 920, features: ['Everything in Premium', 'Unlimited pages', 'Priority support', 'Custom integrations', 'Performance optimization', 'Security hardening'], notIncluded: [], popular: false, }, ] ; export const additionalProducts = [ { name: 'Professional Email Setup', price: 'KSH 5,000', desc: 'Google Workspace or Microsoft 365 setup with your domain' }, { name: 'SEO Starter Package', price: 'KSH 15,000', desc: 'Keyword research, on-page SEO, Google Search Console setup' }, { name: 'Social Media Integration', price: 'KSH 8,000', desc: 'Live feeds, sharing buttons, Open Graph meta tags' }, { name: 'Blog Setup', price: 'KSH 12,000', desc: 'CMS integration, categories, tags, comments' }, { name: 'E-Commerce Add-on', price: 'KSH 25,000', desc: 'Product catalog, cart, checkout, M-Pesa integration' }, { name: 'Custom Animations', price: 'KSH 10,000', desc: 'GSAP animations, scroll effects, micro-interactions' }, ] ;  export const testimonials = [ { name: 'James Mwangi', role: 'CEO, Josi Holdings', text: 'NexaFlow delivered our website in 24 hours as promised. The quality exceeded our expectations and our customers love the fast loading speed.', rating: 5 }, { name: 'Sarah Ochieng', role: 'Founder, Safari Adventures', text: 'Professional, fast, and reliable. The team understood our tourism business needs and built a booking system that increased our reservations by 40%.', rating: 5 }, { name: 'David Kimani', role: 'Director, Nairobi Tech Hub', text: 'The AI automation solutions from NexaFlow transformed our customer support. We now handle 3x more inquiries with the same team size.', rating: 5 }, ] ;
export const projectCategories = [
  {
    id: 'ai-saas-platforms',
    label: 'AI & SaaS Platforms',
    tagline: 'Intelligent platforms we build and operate.',
    projects: [
      {
        badge: 'Live Platform',
        title: 'WeDialAI',
        desc: 'Full-featured AI agent platform we built and operate. 7-channel communication — voice calls, WhatsApp, Instagram, Facebook, Shopify, web chat. Live at wedialai.com.',
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://wedialai.com',
        featured: true,
      },
    ],
  },
  {
    id: 'radio-media',
    label: 'Radio & Media',
    tagline: 'Broadcasters and newsrooms with live streaming and daily news cycles.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Pepea Radio',
        desc: 'Kenya\'s premier online radio station — "Sauti Ya Afrika". Live streaming, news, sports and politics coverage with a full presenter lineup and show schedule.',
        img: '/portfolio/pepearadio.jpg',
        link: 'https://www.pepearadioke.com/',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'The Coast Media Group',
        desc: 'Coastal Kenya\'s news, radio & TV house — breaking county news, sports, politics and opinion pieces with a full newsroom publishing workflow.',
        img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://coastmediavercelnexaflowdigital.vercel.app/',
      },
    ],
  },
  {
    id: 'dating-lifestyle',
    label: 'Dating & Lifestyle',
    tagline: 'Premium connection and lifestyle platforms.',
    projects: [
      {
        badge: 'Live Website',
        title: 'EliteHub',
        desc: 'Premium connections platform — an exclusive dating & lifestyle community with member onboarding, curated experiences and a sleek dark-gold design.',
        img: '/portfolio/elitehub.jpg',
        link: 'https://elitehub2.netlify.app/',
      },
    ],
  },
  {
    id: 'tours-safaris',
    label: 'Tours, Travel & Safaris',
    tagline: 'Booking-ready safari and travel experiences across East Africa.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Labuima Masai Mara Safaris',
        desc: 'Wildlife safari booking platform with immersive photo galleries, itinerary builder, and direct booking integration. Built for a premier Masai Mara tour operator.',
        img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://labuimaasaimarasafaris.com/',
      },
      {
        badge: 'Live Website',
        title: 'Gemonet Tours & Safaris',
        desc: 'Wildlife safari and tour booking platform featuring stunning destination galleries, interactive itineraries, and seamless booking integration for international travelers.',
        img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://www.gemonettoursandsafaris.com',
      },
      {
        badge: 'Live Website',
        title: 'Utue Executive Safaris',
        desc: 'Premium safari and travel experience platform offering curated executive-level tours across Kenya and East Africa. Elegant booking flow and rich destination content.',
        img: '/portfolio/utue.jpg',
        link: 'https://utuexecutivesafaris.com',
      },
      {
        badge: 'Live Website',
        title: 'Maasai Warrior Safaris',
        desc: 'Arusha-based Tanzania safari operator — wildlife safaris, Kilimanjaro treks and Zanzibar extensions with immersive destination storytelling and enquiry flows.',
        img: '/portfolio/maasaiwarrior.jpg',
        link: 'http://www.maasaiwarriorsafaris.com/',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'Laikinoi Tours and Travel',
        desc: 'Kenyan safari experiences, cultural tours and adventure travel — warm, story-driven design with package showcases and direct booking enquiries.',
        img: '/portfolio/laikinoi.jpg',
        link: 'https://laikoninexaflow.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'Ti Devo Portare in Kenya',
        desc: 'Tailor-made safaris, tours and ocean adventures across Kenya with Giuseppe — Masai Mara, Tsavo, Amboseli and the coast, presented for Italian-speaking travelers.',
        img: '/portfolio/tidevo.jpg',
        link: 'https://tidevoportare-nexaflowdigital2.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'Sorola Africa Safaris',
        desc: 'Kenya & Tanzania safari tours crafted from Nairobi — migration safaris, beach extensions and custom itineraries with a rich destination library.',
        img: '/portfolio/sorola.jpg',
        link: 'https://nexaflowdigital-srolafrica.netlify.app',
      },
    ],
  },
  {
    id: 'real-estate',
    label: 'Real Estate & Property',
    tagline: 'Property, travel and lifestyle agencies.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Korir Agency',
        desc: 'Trusted coastal property & travel partner in Diani, Mombasa — real estate listings, holiday stays and lifestyle services on Kenya\'s South Coast.',
        img: '/portfolio/korir.jpg',
        link: 'https://koriragencynexaflow-ditital2.netlify.app',
      },
    ],
  },
  {
    id: 'schools-education',
    label: 'Schools & Education',
    tagline: 'Institutions shaping the next generation.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Redland Junior School',
        desc: '"Raising the Leaders" — a Kisumu school website nurturing excellence, faith and compassion, with admissions info, galleries and parent communication.',
        img: '/portfolio/redland.jpg',
        link: 'http://www.redlandjuniorcentreschool.com/',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'Kingdom Sons Academy',
        desc: '"Created to Create" — a Christ-centered academy serving Pre-Primary through Junior Secondary, with programs, admissions and school life showcased.',
        img: '/portfolio/kingdomsons.jpg',
        link: 'https://nexakingdomsons.netlify.app',
      },
    ],
  },
  {
    id: 'charity-community',
    label: 'Charity, Faith & Community',
    tagline: 'Nonprofits and ministries restoring hope and dignity.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Grace & Hope Children\'s Home',
        desc: 'Compassionate nonprofit website for a children\'s home — donation integration, success stories and community engagement tools to support vulnerable children.',
        img: '/portfolio/gracehope.jpg',
        link: 'http://gracenhopehome.org',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'Family Rebuild',
        desc: 'Faith-based organization strengthening marriages and families through biblical counsel, teachings, books and community programs.',
        img: '/portfolio/familyrebuild.jpg',
        link: 'https://familyrebuild-nexaflowdigital.netlify.app/',
      },
      {
        badge: 'Live Website',
        title: 'Ultimate Wings Kenya',
        desc: 'Community empowerment charity restoring hope among vulnerable children and widows — education, economic empowerment, health clinics and food security programs.',
        img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://ultimatewings-kcb-payment-final-nex.vercel.app/#/',
      },
      {
        badge: 'Live Website',
        title: 'Self Life CBO',
        desc: '"Educate • Empower • Transform" — a Kenyan community-based organization running education, skills development and sustainable livelihood programs.',
        img: '/portfolio/selflife.jpg',
        link: 'https://nexaflowselflife.netlify.app',
      },
    ],
  },
  {
    id: 'business-corporate',
    label: 'Business, Construction & Corporate',
    tagline: 'Companies building brands, produce and skylines.',
    projects: [
      {
        badge: 'Live Website',
        title: 'BIA Limited',
        desc: 'Transaction-focused infrastructure advisory firm in Nairobi — project structuring, credit enhancement, EPC-F and capital mobilization across emerging markets. Corporate site with services, sectors and project showcases.',
        img: '/portfolio/bia.jpg',
        link: 'https://bia.co.ke/',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'Rijal Enterprises Kenya',
        desc: 'Kwale-based enterprise delivering fresh farm produce, quality home products and household assets — from farm to doorstep with WhatsApp ordering.',
        img: '/portfolio/rijal.jpg',
        link: 'http://rijalenterprises.co.ke',
      },
      {
        badge: 'Live Website',
        title: 'Intona Construction',
        desc: '"Building Africa\'s Future" — premium construction company site with project showcases, engineering services and corporate profile.',
        img: '/portfolio/intona.jpg',
        link: 'https://nexaflowintona.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'SGLS Innovation Limited',
        desc: '"Building Sustainable Communities" — innovation company site presenting sustainable development projects, services and thought leadership.',
        img: '/portfolio/sgls.jpg',
        link: 'https://nexafloinovation.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'EcoShield Mabati Factory',
        desc: 'Premium stone-coated roofing tiles, standard mabati, PVC gutters and steel trusses — product catalogue with 50-year warranty positioning.',
        img: '/portfolio/ecoshield.jpg',
        link: 'https://nexaflowdigitalsamplework.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'EFC Empire',
        desc: 'Juba-based creative agency — professional graphic design, printing, branding, digital marketing and general supplies across South Sudan.',
        img: '/portfolio/efcempire.jpg',
        link: 'https://efcempirenexaflow-digital3.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'Kenya Rural Food Centres',
        desc: 'Integrated rural agribusiness ecosystems — transforming smallholder farmers into agribusiness entrepreneurs through cluster units and value chains.',
        img: '/portfolio/ruralfood.jpg',
        link: 'https://nexaflowdigitalruralfood.netlify.app',
      },
    ],
  },
  {
    id: 'logistics-freight',
    label: 'Logistics & Freight',
    tagline: 'Moving cargo across borders, on time.',
    projects: [
      {
        badge: 'Live Website',
        title: 'MumoFreight Logistics',
        desc: 'Global freight & logistics consultancy — sea freight, air freight, land transport and customs clearance with instant quote generation across East Africa.',
        img: '/portfolio/mumofreight.jpg',
        link: 'https://mumofreightcargo.com',
      },
    ],
  },
  {
    id: 'ecommerce-marketplaces',
    label: 'E-Commerce & Marketplaces',
    tagline: 'Online stores and service marketplaces that sell and connect.',
    projects: [
      {
        badge: 'Live Website',
        title: 'Sparekei',
        desc: 'Africa\'s automotive intelligence ecosystem — a complete platform for auto parts, diagnostics and vehicle services with a bold dark UI.',
        img: '/portfolio/spareki.jpg',
        link: 'https://spareki.netlify.app/',
        featured: true,
      },
      {
        badge: 'Live Website',
        title: 'Kazimart',
        desc: 'Kenya\'s fundi marketplace — find trusted plumbers, electricians, carpenters and mechanics near you in minutes, with ratings and direct contact.',
        img: '/portfolio/kazimart.jpg',
        link: 'https://kazimartnexaflowdigital2.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'Ajang Chol Manyor Bookstore',
        desc: 'Official online bookstore of author Ajang Chol Manyor — books on South Sudanese politics and governance with ratings and direct purchase.',
        img: '/portfolio/ajangchol.jpg',
        link: 'https://nexaflowajanchol.netlify.app',
      },
      {
        badge: 'Live Website',
        title: 'Up-hire',
        desc: 'Licensed Amsterdam recruitment agency — ethical seasonal employment, apprenticeships and workforce mobility connecting workers to employers across Europe.',
        img: '/portfolio/uphire.jpg',
        link: 'https://nexaflow-digital-uphire.netlify.app',
      },
    ],
  },
  {
    id: 'finance-professional',
    label: 'Finance & Professional Services',
    tagline: 'Advisory firms with boardroom-grade presence.',
    projects: [
      {
        badge: 'Live Website',
        title: 'House of Finance Kenya',
        desc: 'Premium financial advisory boutique website with elegant dark-themed design, immersive scroll animations, and automated contact forms for corporate clients across East Africa.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=625&fit=crop&auto=format&q=80',
        link: 'https://www.houseoffinancekenya.com',
      },
    ],
  },
]

// Flattened, numbered project list (kept for the Home page showcase)

export const projects = projectCategories.flatMap(cat =>
  cat.projects.map(p => ({ ...p, category: cat.id, categoryLabel: cat.label }))
).map((p, i) => ({ ...p, num: `No. ${String(i + 1).padStart(2, '0')}` })) ;

export const featuredProjects = projects.filter(p => p.featured).map(p => ({ name: p.title, category: p.categoryLabel, image: p.img, link: p.link })) ;

export const portfolioStats = {
  totalProjects: projects.length,
  totalCategories: projectCategories.length,
} ;
