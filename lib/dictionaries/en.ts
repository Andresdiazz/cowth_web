import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Cowth — The ecosystem where businesses don’t grow alone.",
    description:
      "Cowth is a growth ecosystem for founders: technology, training and community so your business grows with a partner beside it.",
    keywords: [
      "Cowth",
      "business growth",
      "nearshore development",
      "custom software",
      "web development",
      "e-commerce",
      "Shopify",
      "Flutter app development",
    ],
    ogEyebrow: "BUSINESS GROWTH ECOSYSTEM",
    ogTitle: "Nobody grows alone",
    ogDescriptor: "The ecosystem where businesses don’t grow alone.",
  },

  brand: {
    tagline: "We’re not your agency. We’re your partner.",
    mission: "Nobody grows alone.",
    descriptor: "The ecosystem where businesses don’t grow alone.",
  },

  nav: {
    items: [
      { label: "Lab", href: "#lab" },
      { label: "Growth", href: "#growth" },
      { label: "Academy", href: "#academy" },
      { label: "Community", href: "#community" },
      { label: "Contact", href: "#contacto" },
    ],
    cta: "Let’s talk",
    home: "Cowth, back to top",
    primaryNav: "Main",
    mobileNav: "Main mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    languageLabel: "Change language",
  },

  hero: {
    eyebrow: "Business growth ecosystem",
    titleLine1: "We’re not your agency.",
    titleLine2Prefix: "We’re your ",
    titleAccent: "partner",
    bodyStrong: "Technology that solves real problems",
    bodyRest:
      ", training you can apply on Monday, and a network that holds when things get hard. We grow with you.",
    ctaPrimary: "Book a call",
    ctaSecondary: "Free download",
    capabilities: [
      { label: "Web & E-commerce", detail: "From express landing page to custom platform" },
      { label: "Flutter apps", detail: "One codebase for iOS, Android and web" },
      { label: "Ongoing support", detail: "We stay long after launch day" },
    ],
  },

  about: {
    label: "What Cowth is",
    titleStrong: "8 out of 10 businesses shut down.",
    titleMuted: " Almost never for lack of drive.",
    paragraphs: [
      "They close because they did it all alone: no structure, no tools that actually work, and nobody around who had already been there. That statistic doesn’t break with motivation. It breaks with company and execution.",
      "That’s why Cowth doesn’t sell get-rich formulas. We build what your business needs today, give you the judgment to sustain it, and the network so the next hard decision isn’t one you make on your own.",
    ],
    closing: "Co + growth. Growing together. That’s the whole thesis.",
    pillars: [
      {
        name: "Cowth Lab",
        href: "#lab",
        text: "Technology and digital product. Your site, your store or your app, built to sell.",
      },
      {
        name: "Growth Partner",
        href: "#growth",
        text: "E-commerce that grows with you. We build your store and scale it: we win when you win (fee + % of sales).",
      },
      {
        name: "Cowth Academy",
        href: "#academy",
        text: "Applied training. What you need to know to decide better, with no fluff.",
      },
      {
        name: "Cowth Community",
        href: "#community",
        text: "The network that holds. Ongoing support with people in the same fight.",
      },
    ],
  },

  lab: {
    label: "Cowth Lab · Technology studio",
    title: "We grow with you: from your first website to your custom software.",
    body: "Cowth’s digital product arm. We design and build the technology your business needs at each stage, and we stay so it keeps working. We hand over a product in operation, not a folder of files.",
    lines: [
      {
        id: "web",
        index: "01",
        name: "Web Line",
        promise:
          "Your business, explained well and open 24/7. A site that turns visits into conversations.",
        tiers: [
          {
            name: "Express Website",
            detail: "Landing or one-page site, live in days. Ideal to validate and start selling.",
          },
          {
            name: "Custom Website",
            detail: "Full site with the sections, integrations and content your operation demands.",
          },
        ],
        bullets: ["Custom design, never a template", "Built for search", "Analytics and forms wired in"],
      },
      {
        id: "ecommerce",
        index: "02",
        name: "E-commerce Line",
        promise: "Selling online without friction: catalog, payments and shipping actually working.",
        tiers: [
          {
            name: "Express Store",
            detail: "Shopify set up with your brand, payment gateway and logistics ready to operate.",
          },
          {
            name: "Custom E-commerce",
            detail:
              "A store with its own rules: inventory, wholesale, subscriptions or ERP integrations.",
          },
        ],
        bullets: ["Optimized checkout", "Local payment methods", "Ready to scale campaigns"],
      },
    ],
    featured: {
      badge: "Flagship line",
      title: "Product & Apps",
      body: "Custom applications built in Flutter: a single codebase running on iOS, Android and web. One product, three platforms, one investment, and a team that keeps evolving it with you.",
      bullets: [
        "One codebase for iOS, Android and web",
        "From prototype to the app stores, with you the whole way",
        "A product built for your real operation, not a demo",
      ],
      cta: "Book a diagnostic",
      terminalTitle: "cowth ~ product",
      terminalOutput: "one codebase · three platforms",
      terminalWeb: "✓ Web      production",
      terminalNote:
        "One codebase, three platforms: lower maintenance cost and a consistent experience for your users.",
    },
    support: {
      title: "Support & Evolution",
      body: "Launch is the starting line. A monthly plan for maintenance, improvements and new features so your product keeps pace with the business.",
      badge: "Ongoing partnership",
    },
    ctaLab: "See Cowth Lab and pricing",
  },

  growth: {
    label: "Growth Partner",
    badge: "Limited spots · for stores ready to scale",
    title: "E-commerce that grows with you.",
    body: "This isn’t another store project. It’s stepping into the operation with you: we build the e-commerce and then work every month to make it sell more, with our revenue tied to your results.",
    model: [
      {
        term: "Monthly fee",
        detail: "Covers the ongoing work: campaigns, catalog, conversion and store improvements.",
      },
      {
        term: "% of attributable sales",
        detail: "Only on the growth that comes from the work we do together, measured in the open.",
      },
      {
        term: "Aligned incentives",
        detail: "If your sales don’t go up, neither does our revenue. We win when you win.",
      },
    ],
    ctaQuestion: "Is your store ready to grow?",
    cta: "Let’s talk",
    comparisonLabel: "Where each one fits",
    comparison: [
      {
        scope: "Cowth Lab · E-commerce Line",
        kind: "Project",
        text: "We build your store and hand it over running. It starts and it ends.",
        highlighted: false,
      },
      {
        scope: "Growth Partner",
        kind: "Partnership",
        text: "We build your store and stay to grow it, month after month, hands in the operation.",
        highlighted: true,
      },
    ],
    note: "We work with only a few stores at a time: the model only works if we can get properly involved in each operation.",
  },

  academy: {
    label: "Cowth Academy",
    title: "Training you can apply on Monday.",
    body: "Cowth’s education arm. No textbook theory, no financial-freedom promises: what works in real businesses, explained so you can execute it yourself.",
    ebookLabel: "Free e-book",
    ebookTitle: "Growing with backup: the first 90 days.",
    chapters: [
      "Why most businesses stall before year two",
      "The four decisions that define whether you grow or just survive",
      "How to know which technology you need (and which you don’t)",
      "A 90-day plan with what actually moves the needle",
    ],
    card: {
      title: "Download it free",
      body: "We’re still wiring up the automatic delivery.",
      submitLabel: "Send me the e-book",
      successTitle: "Done. Check your inbox.",
      successBody: "The e-book is on its way. If it doesn’t show up in a few minutes, check spam.",
      note: "No spam. Useful content only, and you can unsubscribe whenever you want.",
    },
  },

  community: {
    label: "Cowth Community",
    badge: "Coming soon",
    title: "The place where you stop deciding alone.",
    body: "A membership for founders who are building seriously. We’re putting it together slowly, with a small group, so it’s worth joining.",
    perks: [
      {
        title: "Working sessions",
        text: "Live sessions to solve your case, not to sit through theory.",
      },
      { title: "A real network", text: "Founders who already went through what you’re going through." },
      {
        title: "Ongoing support",
        text: "Follow-through on your decisions, not a class you watch once.",
      },
    ],
    card: {
      title: "Waitlist",
      body: "The first on the list get in early and with founder terms. We’re opening it up now.",
      submitLabel: "Join the list",
      successTitle: "You’re on the list.",
      successBody: "We’ll write as soon as we open the first spots. No noise in between.",
      note: "We only reach out when there’s something real to say.",
    },
  },

  manifesto: {
    label: "Manifesto",
    titlePrefix: "We’re not a ",
    titleAccent: "f*cking",
    titleSuffix: " agency.",
    paragraphs: [
      "Agencies invoice and disappear. They sell you a deliverable, charge for it, close the project, and your business is left exactly as alone as it was before.",
    ],
    paragraphStrong: "We stay until you pull it off. That’s the whole difference.",
    beliefs: [
      {
        title: "People before money",
        text: "First we understand who we’re dealing with and what’s at stake. The money comes after, and it comes out better.",
      },
      {
        title: "Execution before theory",
        text: "No framework replaces a working product. We’d rather ship something real this week than a perfect plan in three months.",
      },
      {
        title: "We stay",
        text: "We don’t charge for the deliverable and vanish. We’re still there when it’s time to fix, scale or start over.",
      },
    ],
    closing: "That’s why we exist: so growing stops being something you do alone.",
  },

  finalCta: {
    label: "Contact",
    title: "Tell us where your business stands today.",
    body: "A 30-minute conversation, no strings. You leave with a clear read on what to build first and what can wait. If we’re not what you need, we’ll say so.",
    cta: "Book a call",
    emailLabel: "Write to us",
  },

  footer: {
    navTitle: "Ecosystem",
    contactTitle: "Contact",
    sectionsLabel: "Sections",
    copyright: "Built in Latin America, working in your time zone.",
    closing: "co + growth · we grow with you",
  },

  labPage: {
    meta: {
      title: "Cowth Lab — Public pricing for web development and custom apps",
      description:
        "Cowth's technology studio: published prices, code delivered in your name, and support after launch. Web, e-commerce, Flutter apps and ongoing evolution.",
    },
    header: {
      backHome: "Back to Cowth",
    },
    hero: {
      eyebrow: "The anti-agency",
      title: "We charge for your growth, not for our activity.",
      subtitle:
        "A technology studio that publishes its prices, hands you the code, and stays until your business grows. The opposite of the agency that gives you a plan and disappears.",
      ctaPrimary: "See pricing",
      ctaWhatsapp: "Write to us on WhatsApp",
    },
    problem: {
      title:
        "Your last agency handed you a 40-page plan and your business is exactly the same. It wasn’t you. It was the model.",
      body: "Agencies charge for activity: meetings, decks, deliverables. And in 2026 activity is worth less than ever. What they never gave you is scarce: a business that actually grows, and someone who stays to see it through.",
    },
    differentiators: {
      label: "Why this is different",
      items: [
        {
          title: "Public pricing.",
          text: "The whole ladder is in the open. You don’t need a quote to know if you can afford it.",
        },
        {
          title: "The code is yours.",
          text: "What we build is delivered in your name. No technical lock-in.",
        },
        {
          title: "We stay.",
          text: "Support and evolution isn’t an add-on: it’s the core. We keep the product alive.",
        },
      ],
    },
    pricing: {
      label: "Pricing",
      title: "The pricing ladder.",
      note: "The code is yours. Scope closed in writing: price and date fixed from day one.",
      groups: [
        {
          icon: "🌐",
          name: "Web Line",
          tiers: [
            {
              name: "Landing Express",
              detail: "1 page, premium template, built to convert.",
              timeline: "3–5 days",
              price: "From $900,000 COP (~$290 USD)",
            },
            {
              name: "Web Express",
              detail: "Several sections, self-editing panel, pixel + analytics.",
              timeline: "5–10 days",
              price: "From $1,900,000 COP (~$610 USD)",
            },
            {
              name: "Custom Website",
              detail: "Custom frontend, own design, integrations.",
              timeline: "2–4 weeks",
              price: "From $6,000,000 COP (~$1,935 USD)",
            },
          ],
        },
        {
          icon: "🛒",
          name: "E-commerce Line",
          tiers: [
            {
              name: "Express Store (Shopify)",
              detail:
                "Theme, catalog, Wompi/Bold gateway, cash-on-delivery with WhatsApp confirmation.",
              timeline: "1–2 weeks",
              price: "From $3,900,000 COP (~$1,260 USD)",
            },
            {
              name: "Custom Store",
              detail: "Custom e-commerce (subscriptions/recurring billing, or off Shopify).",
              timeline: "3–5 weeks",
              price: "From $12,000,000 COP (~$3,870 USD)",
            },
          ],
        },
        {
          icon: "📱",
          name: "Product & Apps Line",
          badge: "Flagship line",
          tiers: [
            {
              name: "Essential · MVP",
              detail: "Flutter app (iOS + Android + web), core flows, simple backend, publishing.",
              timeline: "4–6 weeks",
              price: "From $16,900,000 COP (~$5,450 USD)",
            },
            {
              name: "Professional · Product",
              detail:
                "Full app + own backend + API + admin panel + integrations (payments, push, WhatsApp, CRM/ERP, tax) + roles + analytics + QA.",
              timeline: "8–12 weeks",
              price: "From $39,000,000 COP (~$12,600 USD)",
            },
            {
              name: "Advanced · Product + Evolution",
              detail: "Architecture built to scale (real time, offline, AI) + ongoing roadmap.",
              timeline: "12–20 weeks",
              price: "From $69,000,000 COP (~$22,300 USD)",
            },
          ],
        },
        {
          icon: "🔁",
          name: "Support & Evolution",
          badge: "Ongoing partnership",
          recurring: true,
          tiers: [
            { name: "Web Care", detail: "", timeline: "", price: "From $250,000 COP/mo (~$80 USD)" },
            {
              name: "Basic Support",
              detail: "",
              timeline: "",
              price: "From $600,000 COP/mo (~$195 USD)",
            },
            {
              name: "Professional Support (SLA)",
              detail: "",
              timeline: "",
              price: "From $1,500,000 COP/mo (~$485 USD)",
            },
            {
              name: "Evolution (retained dev)",
              detail: "",
              timeline: "",
              price: "From $3,500,000 COP/mo (~$1,130 USD)",
            },
          ],
        },
      ],
    },
    anchorCase: {
      label: "Proof cases",
      viewGallery: "See screenshots",
      close: "Close",
      cases: [
        {
          name: "Koru Club de Bienestar",
          platforms: "iOS · Android · Web dashboard",
          body: "An app for club members: they check their classes, book, buy their membership and their supplements, all from the phone. On the other side, the club runs on its own dashboard for access control, class scheduling, accounting and metrics — one platform for members and for staff.",
          logo: "/lab/cases/koru/logo.png",
          images: [
            { src: "/lab/cases/koru/app.png", width: 1320, height: 2868 },
            { src: "/lab/cases/koru/dashboard.png", width: 1664, height: 1021 },
          ],
        },
        {
          name: "ForjaFit",
          platforms: "iOS · Android",
          body: "A training and nutrition app: it builds the workout and meal plan around your goals and your real activity, day by day. It tracks progress, builds the grocery list for meal prep, and adjusts macros between training and rest days. Users hit their goals faster than with any other alternative.",
          logo: "/lab/cases/forjafit/logo.webp",
          images: [
            { src: "/lab/cases/forjafit/hoy.png", width: 1320, height: 2868 },
            { src: "/lab/cases/forjafit/mercado.png", width: 1320, height: 2868 },
          ],
        },
        {
          name: "Bros Hub",
          platforms: "Web (Admin + Creators)",
          body: "A web platform for a creator agency: a recruiting CRM, roster stats, event and training management, and manager bonus/compensation calculations, all in one panel. On the creator side, each one sees their progress, upcoming events based on their level, and their pre-recorded training.",
          logo: "/lab/cases/bros/logo.png",
          images: [
            { src: "/lab/cases/bros/dashboard.png", width: 1671, height: 1019 },
            { src: "/lab/cases/bros/crm.png", width: 1668, height: 1023 },
          ],
        },
      ],
    },
    howWeWork: {
      label: "How we work",
      title: "We start with a single sheet, not a two-week quote.",
      stepLabel: "Step 1",
      stepBody:
        "A one-page scope template. If a single sheet can explain what happens the first time a user opens the app, the project is clear and the price is firm. Scope locked → price locked → date locked.",
    },
    // Example testimonials (generic attribution, no real names or
    // companies): replace with real, authorized quotes as soon as you can
    // get them. Never use a real person's name/title without their consent.
    testimonials: {
      label: "Testimonials",
      items: [
        {
          quote:
            "We used to compete with WhatsApp and a notebook. With the app we stopped losing bookings, and people finally see what they're paying for — their classes, their membership, all of it. Cowth didn't deliver a pretty app, they delivered an operation that runs itself.",
          role: "Founder, wellness club",
        },
        {
          quote:
            "I told Cowth what I wanted and in weeks I had something people actually used, not a demo. The ones who started the plan hit their goal faster than with anything else we'd tried. That's not something you buy with marketing — you build it with product.",
          role: "Founder, training and nutrition app",
        },
        {
          quote:
            "We ran creators, payments and events across five different spreadsheets. Now it's all in one panel and the team stopped chasing information. What I value most: six months later, Cowth still picks up when something breaks.",
          role: "Operations manager, talent agency",
        },
      ],
    },
    about: {
      label: "About the studio",
      body: 'Run by Andrés Díaz: systems engineer, 9 years building mobile and web product. Custom Flutter apps. This isn’t "the nephew who knows computers" — it’s real product engineering, staying by your side.',
    },
    faq: {
      label: "FAQ",
      title: "Before you write to us",
      items: [
        {
          q: "How is this different from an agency?",
          a: "An agency charges you for the work and leaves once it delivers. We publish our prices, hand you the code in your name, and stay with support and evolution until the business grows.",
        },
        {
          q: "How much does it cost?",
          a: "It’s all published above. You don’t need a quote to know if it fits.",
        },
        {
          q: "Do you work alone? Is that a risk?",
          a: "Today Andrés runs it (9 years, Flutter). Scope is closed and in writing, with a firm price and date. The team grows when demand asks for it, not before.",
        },
        { q: "Who owns the code?", a: "You do. Always." },
        {
          q: "What happens after delivery?",
          a: "That’s where it matters most: support and evolution keep the product alive.",
        },
        {
          q: "Why act now?",
          a: "Founder pricing for whoever joins this launch.",
        },
      ],
    },
    finalCta: {
      label: "Contact",
      title: "Tell us what you want to build.",
      subtitle: "Founder pricing for the first projects of this launch.",
      whatsapp: "Write to us on WhatsApp",
      form: {
        namePlaceholder: "Your name",
        emailPlaceholder: "you@company.com",
        whatsappPlaceholder: "WhatsApp (optional)",
        needPlaceholder: "What do you want to build?",
        submitLabel: "Send",
        sending: "Sending…",
        successTitle: "Done, we’ve got it.",
        successBody: "We’ll reach out in the next few hours to talk about your project.",
        errorEmail: "That email looks incomplete.",
        errorName: "Add your name.",
        errorNeed: "Tell us briefly what you want to build.",
        errorGeneric: "We couldn’t send it. Try again or write to us on WhatsApp.",
      },
    },
    footer: {
      backHome: "Back to Cowth",
    },
  },

  kitWaitlist: {
    meta: {
      title: "Grow-Alongside Kit — Waitlist",
      description:
        "The Grow-Alongside Kit is in the works. Join the waitlist and get in on founder terms.",
    },
    header: {
      backHome: "Back to Cowth",
    },
    label: "Grow-Alongside Kit",
    badge: "In the works",
    title: "The Grow-Alongside Kit is on its way.",
    body: "It's the natural follow-up to the e-book: the templates, tools and support to execute the first 90 days, not just read about them. It isn’t ready yet, but you can get in before anyone else.",
    card: {
      title: "Waitlist",
      body: "The first on the list get in early and on founder terms.",
      submitLabel: "Join the list",
      successTitle: "You’re on the list.",
      successBody: "We’ll let you know as soon as the Kit is ready, with your founder spot reserved.",
      note: "We only write when there’s something real to say.",
    },
    footer: {
      backHome: "Back to Cowth",
    },
  },

  form: {
    soonBadge: "Coming soon",
    soonCta: "Available shortly",
    soonNoteBefore:
      "The automatic delivery isn’t connected yet, and we’d rather say so than fake it. If you want it now, write to ",
    soonNoteAfter: " and we’ll send it over by hand.",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@company.com",
    nameLabel: "Name",
    emailLabel: "Email address",
    sending: "Sending…",
    errorEmail: "That email looks incomplete.",
    errorName: "Add your name so we can address it to you.",
    errorGeneric: "We couldn’t sign you up. Please try again.",
  },
};
