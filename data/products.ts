// NexaFlow Digital — Products catalogue
// Powers /products (index) and /products/[slug] (detail pages, SSG).

export type ProductBlock =
  | { kind: 'intro'; paragraphs: string[] }
  | { kind: 'features'; title: string; items: { icon: string; title: string; desc: string }[] }
  | { kind: 'steps'; title: string; items: { title: string; desc: string; time?: string }[] }
  | { kind: 'packages'; title: string; note?: string; items: { name: string; price: string; priceNote?: string; features: string[]; featured?: boolean; cta?: { label: string; href: string } }[] }
  | { kind: 'list'; title: string; items: string[] }
  | { kind: 'table'; title: string; headers: string[]; rows: string[][] }
  | { kind: 'callout'; title: string; text: string };

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  price: string;
  priceNote?: string;
  img: string;
  liveUrl?: string;
  liveLabel?: string;
  excerpt: string;
  keywords: string[];
  blocks: ProductBlock[];
}

export const products: Product[] = [
  {
    slug: 'website-development',
    name: 'Website Development',
    tagline: 'Professional, conversion-ready websites for ambitious businesses — view your finished website before you pay, or start fully protected with an escrow contract.',
    badge: 'Core Service',
    price: 'From KSh 18,000',
    priceNote: 'Starter, Business, Premium & Enterprise packages',
    img: '/products/website-development.jpg',
    excerpt: 'High-performance, mobile-first websites built with modern frameworks — and two safe ways to start: see your finished website live before you pay a cent, or begin with a staged escrow-protected contract.',
    keywords: ['website development Kenya', 'web design Nairobi', 'view website before you pay', 'escrow website contract', '24-hour website preview', 'professional web developer Kenya'],
    blocks: [
      {
        kind: 'intro',
        paragraphs: [
          'This is the service NexaFlow Digital was built on: fast, beautiful, conversion-focused websites engineered with modern frameworks like React and Next.js. Every build is mobile-first, SEO-ready, and delivered with free SSL and a free domain for the first year.',
          'What makes us different is how you pay. You can see your complete, finished website live on the internet before paying anything — or begin immediately under a formal escrow-protected contract with staged payments. Either way, you never pay for a promise; you pay for a website you have already seen.',
        ],
      },
      {
        kind: 'packages',
        title: 'Two safe ways to start — pick how you pay',
        note: 'Both options lead to the same professional build. The difference is simply how you prefer to begin and pay.',
        items: [
          {
            name: '24-Hour Preview',
            price: 'View It Before You Pay',
            priceNote: 'See It, Love It, Then Pay',
            featured: true,
            features: [
              'We build your full website first and hand you a live URL within 24 hours',
              'You review everything — design, pages, content — before paying a cent',
              '100% payment within 24 hours of URL delivery, only if you love it',
              'Strict qualification and trust-score verification applies',
            ],
            cta: { label: 'Apply for 24-Hour Preview', href: '/contract/preview/' },
          },
          {
            name: 'Direct Contract',
            price: 'Escrow-Protected',
            priceNote: 'Staged payments via Upwork',
            features: [
              'Formal project commitment agreement signed from day one',
              '75% deposit only after your live URL is delivered',
              '25% balance before domain mapping and final handover',
              'Full contractual protection through Upwork escrow',
            ],
            cta: { label: 'Start a Direct Contract', href: '/contract/direct/' },
          },
        ],
      },
      {
        kind: 'packages',
        title: 'Website packages',
        items: [
          {
            name: 'Starter Package',
            price: 'KSh 18,000',
            priceNote: 'Up to 5 pages — essential web presence',
            features: [
              'Contact form & image gallery',
              'Social media integration',
              'Responsive, mobile-first design',
              'FREE domain (year 1) & SSL certificate',
            ],
          },
          {
            name: 'Business Package',
            price: 'KSh 35,000',
            priceNote: 'Up to 10 pages — growing business',
            featured: true,
            features: [
              'Everything in Starter',
              'Blog setup & professional email',
              'Basic SEO optimization',
              'Google Analytics & social feeds',
            ],
          },
          {
            name: 'Premium Package',
            price: 'KSh 65,000',
            priceNote: 'Up to 20 pages — full-scale solution',
            features: [
              'Everything in Business',
              'E-commerce with M-Pesa payments',
              'Advanced SEO package',
              'Custom animations & admin dashboard',
            ],
          },
          {
            name: 'Enterprise Package',
            price: 'KSh 120,000',
            priceNote: 'Unlimited pages — corporate grade',
            features: [
              'Everything in Premium',
              'Unlimited pages & custom integrations',
              'Performance optimization',
              'Security hardening & priority support',
            ],
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Why businesses choose NexaFlow',
        text: 'Most agencies ask for a deposit before you have seen anything. We reversed the risk: with the 24-Hour Preview you inspect the finished product first, and with the Direct Contract your money sits in escrow until each milestone is delivered. Over 30 businesses — from tour companies to radio stations to charities — are already running on NexaFlow-built websites.',
      },
    ],
  },
  {
    slug: 'wedialai',
    name: 'WeDial AI',
    tagline: 'Launch your own AI agent army. One platform. Seven channels. Infinite possibilities. Your customers never wait again.',
    badge: 'Flagship Platform — Live',
    price: 'Custom pricing',
    priceNote: 'White-label and managed plans tailored to your volume',
    img: '/products/wedialai.jpg',
    liveUrl: 'https://wedialai.com',
    liveLabel: 'Explore the live platform →',
    excerpt: 'Our flagship AI agent platform — voice calls, WhatsApp, Instagram, Facebook, email, SMS and web chat in one intelligent system that learns your business and handles customer interactions autonomously, 24/7.',
    keywords: ['AI agents Kenya', 'AI calling agents', 'WhatsApp automation Kenya', 'white-label AI platform', 'customer service automation', 'WeDial AI'],
    blocks: [
      {
        kind: 'intro',
        paragraphs: [
          'WeDial AI is our flagship AI agent platform — the same technology powering our own operations. It connects voice calls, WhatsApp, Instagram, Facebook, email, SMS, and web chat into one intelligent system that learns your business and handles customer interactions autonomously, 24/7.',
          'It answers in under two seconds, never sleeps, never takes a day off — and it is already live and serving real customers at wedialai.com.',
        ],
      },
      {
        kind: 'features',
        title: 'What the platform does',
        items: [
          { icon: '📞', title: 'AI Voice Calling', desc: 'Intelligent voice agents that handle inbound/outbound calls, book appointments, qualify leads, and serve customers 24/7.' },
          { icon: '💬', title: 'WhatsApp Business API', desc: 'Full WhatsApp Business API integration with automated workflows, support, order updates, and marketing campaigns.' },
          { icon: '🤖', title: 'Multi-Channel Chat', desc: 'Unified inbox across Instagram, Facebook Messenger, web chat, and email — all managed by one AI brain.' },
          { icon: '🛒', title: 'Shopify Integration', desc: 'Connect your Shopify store for abandoned cart recovery, order updates, and customer support automation.' },
          { icon: '📊', title: 'Real-Time Analytics', desc: 'Track every conversation, conversion, and customer interaction with detailed analytics dashboards.' },
          { icon: '🏷️', title: 'White-Label Ready', desc: 'Launch your own branded AI platform with your logo, domain, and custom pricing. Your clients never know we exist.' },
        ],
      },
      {
        kind: 'table',
        title: 'By the numbers',
        headers: ['Metric', 'Value'],
        rows: [
          ['Channels connected', '7 — voice, WhatsApp, Instagram, Facebook, email, SMS, web chat'],
          ['Availability', '24/7 — nights, weekends and holidays included'],
          ['First response time', 'Under 2 seconds, every channel'],
          ['Deployment', 'Cloud — we host, manage and maintain everything'],
        ],
      },
      {
        kind: 'callout',
        title: 'Built and operated by NexaFlow Digital',
        text: 'WeDial AI is not a resold tool — it is our own platform, running in production today. When you work with us, you deal directly with the team that builds and maintains the system.',
      },
    ],
  },
  {
    slug: 'card-payment-integration',
    name: 'Card Payment Integration',
    tagline: 'Accept Visa & Mastercard donations and payments directly on your website through your bank\'s secure Unified Checkout payment gateway — fully built, deployed, and tested for you.',
    badge: 'Payments',
    price: 'KSh 15,000 – 35,000',
    priceNote: 'One-time setup · Test mode to production handover included',
    img: '/products/card-payments.jpg',
    liveUrl: 'https://www.ultimatewings.co.ke/',
    liveLabel: 'See the reference installation →',
    excerpt: 'A complete, ready-to-use online card payment system installed on your existing website — secure bank-branded checkout, money straight to your merchant account. Proven live at ultimatewings.co.ke.',
    keywords: ['card payment integration Kenya', 'Visa Mastercard website payments', 'Unified Checkout Kenya', 'Cybersource Kenya', 'online donations Kenya', 'payment gateway integration'],
    blocks: [
      {
        kind: 'intro',
        paragraphs: [
          'A complete, ready-to-use online card payment system installed on your existing website. Your visitors enter their card details in a secure bank-branded checkout panel without ever leaving your site, the payment is processed securely through your bank on the Cybersource global payment network, and the money lands in your merchant account.',
          'It works for donations, service payments, product sales, bookings — any situation where you want to be paid by card online.',
        ],
      },
      {
        kind: 'callout',
        title: 'Proven, not promised',
        text: 'This is the exact system we designed, built, deployed, and verified end-to-end for Ultimate Wings Kenya (www.ultimatewings.co.ke). The reference installation passed a live end-to-end test: checkout opened on the site, a test card was authorized by the bank network (approval code issued, card and address checks matched), and the donor landed on a branded success page with a real transaction reference — all in under a minute.',
      },
      {
        kind: 'packages',
        title: 'Two packages — which one is yours?',
        note: 'The right package depends on how your website is built. We confirm which applies during a free 10-minute look at your site before any work begins — the price you are quoted is the price you pay.',
        items: [
          {
            name: 'Package A — Plugin-Based Sites',
            price: 'KSh 15,000',
            priceNote: 'One-time',
            features: [
                'For WordPress, WooCommerce, Shopify, Wix or similar platforms',
                'Official payment plugin installed and configured',
                'Merchant account connected, checkout styled to your brand',
                'Standard hosted checkout experience',
                'Typical timeline: 1–2 working days once credentials are issued',
            ],
          },
          {
            name: 'Package B — Custom-Coded Sites',
            price: 'KSh 25,000 – 35,000',
            priceNote: 'One-time · final quote confirmed free before work begins',
            featured: true,
            features: [
                'For hand-coded sites — React, Next.js, plain HTML/PHP, bespoke systems',
                'Bespoke integration directly against the bank\'s API',
                'Custom serverless payment services with cryptographically signed requests',
                'Server-side verification, custom success/failure pages',
                'Fully branded checkout embedded in your exact flow — donations, bookings, multi-step forms',
                'Typical timeline: 3–7 working days once credentials are issued',
            ],
          },
        ],
      },
      {
        kind: 'features',
        title: 'Key capabilities',
        items: [
          { icon: '💳', title: 'Visa & Mastercard out of the box', desc: 'With support for Google Pay and Apple Pay where enabled on your merchant account.' },
          { icon: '🔒', title: 'PCI-safe by design', desc: 'Card numbers are entered into the bank\'s own secure fields and tokenized — your website never sees, stores, or transmits raw card data.' },
          { icon: '🛡️', title: '3-D Secure built in', desc: 'The extra bank security layer (OTP/verification) runs automatically whenever the card issuer requires it.' },
          { icon: '✅', title: 'Server-side verification', desc: 'The success page is only shown after the bank confirms the authorization — eliminating fake "success" screens.' },
          { icon: '🇰🇪', title: 'Kenyan-ready', desc: 'KES currency, en_KE locale, phone and email capture for your records and reconciliation.' },
          { icon: '🧪', title: 'Test mode included', desc: 'You and the bank can run unlimited test transactions — no real money moves — before going live.' },
          { icon: '📱', title: 'Works alongside M-Pesa', desc: 'Keeps your existing Paybill/Till options; card payments are added, nothing is removed.' },
        ],
      },
      {
        kind: 'steps',
        title: 'How it works for your customer',
        items: [
          { title: 'Choose an amount', desc: 'Visitor chooses an amount and clicks "Pay with Card".', time: 'Seconds' },
          { title: 'Secure checkout opens', desc: 'The bank-branded checkout panel opens right on your page; they enter their card details.', time: '~1 min' },
          { title: 'Bank authorizes', desc: 'The bank network authenticates and authorizes the card; our server verifies the result.', time: 'Seconds' },
          { title: 'Branded success page', desc: 'Success page with a real transaction reference; funds settle to your merchant account.', time: 'Instant' },
        ],
      },
      {
        kind: 'list',
        title: 'Included in both packages',
        items: [
          'Merchant account application guidance',
          'Full sandbox test with official test cards',
          'Written verification report with transaction references',
          'Production go-live switch',
          'Handover runbook',
          '30 days of post-launch support',
        ],
      },
      {
        kind: 'table',
        title: 'Pricing summary',
        headers: ['Item', 'Price'],
        rows: [
          ['Package A — Plugin-Based Integration (WordPress / WooCommerce / platform sites)', 'KSh 15,000 one-time'],
          ['Package B — Custom-Coded Integration (hand-coded sites)', 'KSh 25,000 – 35,000 one-time'],
          ['Bank / Cybersource merchant account fees', 'Paid to the bank — we assist with the application at no extra charge'],
          ['Hosting (Vercel or equivalent)', 'Free tier is sufficient for most charity/SME traffic'],
        ],
      },
      {
        kind: 'callout',
        title: 'Payment terms — both packages',
        text: '65% on engagement to begin the build, 35% on demonstrated completion (a live test-mode transaction on your own website). You see it working before the final payment. Market context: comparable custom payment integrations in Kenya are typically quoted at KSh 20,000–50,000+ by established providers — our custom package starts at KSh 25,000 and includes the verification report and handover that others bill separately.',
      },
      {
        kind: 'list',
        title: 'What we need from you to start',
        items: [
          'Access to your website hosting or admin panel (or we set up a new one for you)',
          'Your bank\'s merchant credentials — test-mode first; the bank provides a simple key file and we guide you through it',
          'Your logo and brand colours, if the checkout pages should match your site',
        ],
      },
    ],
  },
  {
    slug: 'autodesk-ai-publishing-agent',
    name: 'AutoDesk — AI Publishing Agent',
    tagline: 'Your tireless digital editor: finds, verifies, writes and publishes fresh content for your website — every single day.',
    badge: 'AI Content Automation',
    price: 'KSh 25,000',
    priceNote: 'One-off setup & deployment — built & managed by NexaFlow Digital',
    img: '/products/autodesk.jpg',
    excerpt: 'A custom-built AI Publishing Agent installed on your website — it scans the internet for stories in your niche, verifies them against multiple sources, rewrites them in your brand\'s voice, illustrates them, and files them straight onto your site, up to three editions a day.',
    keywords: ['AI content publishing Kenya', 'automated news website Kenya', 'AI article writer', 'content automation', 'auto blog posting Kenya', 'AI news agent'],
    blocks: [
      {
        kind: 'intro',
        paragraphs: [
          'AutoDesk is a custom-built AI Publishing Agent installed on your website. It works like a full-time editorial assistant that never sleeps: it scans the internet for stories in your niche, verifies them against multiple independent sources, rewrites them into original articles in your brand\'s voice, illustrates them with licensed images, and files them straight onto your site — up to three editions a day.',
          'You keep full editorial control from a simple dashboard. No writers to manage, no content calendar to chase, no technical skills needed.',
        ],
      },
      {
        kind: 'list',
        title: 'Who AutoDesk is for',
        items: [
          'News platforms & online media houses — national, county and world news desks publishing daily without expanding the newsroom',
          'Niche bloggers — sports, tech, fashion, food, travel, entertainment, politics and lifestyle bloggers who need consistent posting to grow and keep their audience',
          'Content creators & digital publishers — YouTubers and social brands whose websites need articles to back up their channels and capture Google traffic',
          'Churches & ministries — daily devotionals, sermons, faith news and community updates delivered on schedule',
          'Businesses & SMEs — companies that blog for SEO: industry news, market updates and thought-leadership posts that keep them ranking on Google',
          'Schools, colleges & institutions — education news, announcements and sector updates for parents and students',
          'NGOs & community organisations — sector news, field updates and impact stories published consistently for donors and the public',
          'County & community platforms — hyper-local news and community happenings that big media ignores',
          'E-commerce brands — product-category news and trend articles that bring organic shoppers to the store',
        ],
      },
      {
        kind: 'steps',
        title: 'How it works',
        items: [
          { title: 'FINDS', desc: 'Monitors Google News, RSS feeds and professional news APIs for stories in your chosen topics, tuned to your niche and region.' },
          { title: 'VERIFIES', desc: 'Every story must be confirmed by at least two independent sources and be less than 24 hours old; duplicates, stale and unsuitable items are rejected automatically.' },
          { title: 'RANKS', desc: 'Stories are scored for relevance to your audience, with priority to your local or regional focus.' },
          { title: 'WRITES', desc: 'Advanced AI rewrites each verified story into an original 250–450-word article in your publication\'s own voice and byline.' },
          { title: 'ILLUSTRATES', desc: 'Every article is matched automatically with a licensed, royalty-free image from Unsplash or Pexels.' },
          { title: 'PUBLISHES', desc: 'Articles are filed directly into your website, up to three editions daily — morning, midday, evening.' },
        ],
      },
      {
        kind: 'features',
        title: 'You stay in control',
        items: [
          { icon: '✍️', title: 'Review mode', desc: 'Articles arrive as drafts; you approve each one before it goes live.' },
          { icon: '⚡', title: 'Full automation mode', desc: 'Publish instantly, completely hands-free.' },
          { icon: '🎛️', title: 'Master on/off switch', desc: 'Pause or resume anytime from your dashboard.' },
          { icon: '📈', title: 'Adjustable volume', desc: 'Choose your articles per day; the agent scales itself to match.' },
          { icon: '📋', title: 'Run log', desc: 'See exactly what the agent did on every run, inside your admin panel.' },
        ],
      },
      {
        kind: 'list',
        title: 'What you get',
        items: [
          'A fully installed, configured and tested AI Publishing Agent on your website',
          'Custom topics, categories and regional focus matched to your niche',
          'Your brand byline on every article — AutoDesk writes as your team',
          'Automatic licensed images on every article',
          'Dashboard controls: enable, pause, approve, adjust volume',
          'Up to three automated publishing editions daily',
          'Handover documentation and a guided walkthrough for your team',
        ],
      },
      {
        kind: 'callout',
        title: 'Investment: KSh 25,000 one-off',
        text: 'Requires a website with an admin dashboard and database — or ask NexaFlow to build one for you. Running costs for the AI writing service are usage-based, paid directly to the provider, and typically only a few hundred shillings per month depending on your volume. AutoDesk by NexaFlow Digital — your website works while you sleep.',
      },
    ],
  },
  {
    slug: 'nexareach',
    name: 'NexaReach — Client Outreach Engine',
    tagline: 'We find your ideal customers anywhere in the world, get their verified business emails, and put your offer directly in their inbox — while you focus on closing deals.',
    badge: 'Done-For-You Service',
    price: 'From KSh 20,000 / month',
    priceNote: 'One-off onboarding & infrastructure setup: KSh 15,000',
    img: '/products/nexareach.jpg',
    excerpt: 'A fully managed cold outreach service: tell us exactly who your ideal customer is, and our proprietary outreach engine builds the audience, verifies decision-maker emails, lands in their inbox and runs the campaign like a machine.',
    keywords: ['cold email outreach Kenya', 'B2B lead generation Kenya', 'email marketing service', 'client acquisition service', 'verified business emails', 'done-for-you outreach'],
    blocks: [
      {
        kind: 'intro',
        paragraphs: [
          'NexaReach is a fully managed cold outreach service. You tell us exactly who your ideal customer is — their industry, job title, company size, country, even what software they use — and our proprietary outreach engine does the rest.',
          'You never touch a dashboard, buy a subscription, or learn a tool. You simply receive replies from interested prospects.',
        ],
      },
      {
        kind: 'steps',
        title: 'How NexaReach works',
        items: [
          { title: 'We build your audience', desc: 'Using precision targeting across professional databases covering hundreds of millions of business contacts worldwide, we define your Ideal Customer Profile down to the finest detail.' },
          { title: 'We get you the emails', desc: 'Our private sourcing and verification network extracts and verifies the direct business emails of those exact decision-makers — founders, CEOs, marketing heads, procurement managers — delivered clean, with bounce protection of up to 98%.' },
          { title: 'We land in their inbox', desc: 'Campaigns are sent through dedicated, warmed-up sending infrastructure built to protect your company domain and maximise inbox placement. Every message is personalised to the recipient by name, company and role.' },
          { title: 'We run it like a machine', desc: 'Your campaign is managed by our AI operations layer — follow-up sequences, performance monitoring, underperforming campaigns paused, new copy drafted — all handled for you, with plain-English reporting.' },
        ],
      },
      {
        kind: 'list',
        title: 'Who needs NexaReach',
        items: [
          'Real estate agencies & property developers — reach investors, home buyers, diaspora clients and corporate tenants with targeted email marketing for new listings and projects',
          'B2B service providers & consultants — law firms, accountants, HR, IT and business consultants who need a steady pipeline of decision-maker conversations',
          'Importers, exporters & logistics companies — introduce your services to manufacturers, wholesalers and distributors in any country',
          'SaaS & tech startups — put your product in front of founders and department heads in your exact target market, globally',
          'Solar, energy & construction companies — reach property managers, factories and institutions before your competitors do',
          'Events, training & coaching businesses — fill workshops, webinars and programmes with qualified, invited attendees',
          'Tourism & travel operators — market packages directly to corporate travel managers, tour partners and diaspora travellers',
          'Insurance & financial services — open conversations with business owners and HR managers about cover and employee benefits',
          'Recruitment & HR agencies — reach hiring managers at companies that are actively growing',
          'Marketing agencies — white-label NexaReach as your own outreach department and serve your clients under your brand',
        ],
      },
      {
        kind: 'list',
        title: 'What you get',
        items: [
          'A professionally defined Ideal Customer Profile for your business',
          'A fresh list of verified decision-maker emails — sourced and cleaned for you, every month',
          'Personalised email sequences (initial email + follow-ups) written for your offer',
          'Dedicated sending infrastructure — your main company domain is never at risk',
          'AI-managed campaign operations: follow-ups, optimisation and copy refreshes',
          'A simple monthly report: emails sent, inbox placement, replies received',
          'Global reach — target any industry, in any country, in English or localised messaging',
        ],
      },
      {
        kind: 'packages',
        title: 'Packages',
        note: 'One-off onboarding & infrastructure setup: KSh 15,000 (audience definition, sending infrastructure build and warm-up, sequence writing). International clients billed in USD at the prevailing rate. A 21–28 day sending warm-up applies before first launch — quality and deliverability come first.',
        items: [
          {
            name: 'Starter',
            price: 'KSh 20,000 / month',
            features: [
              '1,000 verified targeted emails / month',
              '3-step email sequence',
              'Campaign management',
              'Monthly performance report',
              '1 audience targeting',
            ],
          },
          {
            name: 'Growth',
            price: 'KSh 35,000 / month',
            featured: true,
            features: [
              '3,000 verified targeted emails / month',
              '4-step email sequence',
              'Campaign management',
              'Monthly performance report',
              '2 audiences targeting',
            ],
          },
          {
            name: 'Scale',
            price: 'KSh 75,000 / month',
            features: [
              '10,000 verified targeted emails / month',
              '5-step email sequence + A/B testing',
              'Priority campaign management',
              'Monthly report + strategy call',
              'Unlimited audiences targeting',
            ],
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Why NexaReach works',
        text: 'Most cold email fails because of bad lists, spam-folder delivery and generic copy. NexaReach solves all three: verified contacts of real decision-makers, infrastructure engineered for inbox placement, and AI-personalised messaging managed end-to-end by specialists. A healthy campaign delivers 1.5–4% reply rates — on a 3,000-email Growth campaign, that is 45–120 interested prospects replying to your business every month. For most clients, a single closed deal pays for months of the service.',
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
