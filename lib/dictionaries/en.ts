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
