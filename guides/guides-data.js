/* ============================================================
   GUIDES DATA — this is the only file you need to edit.

   To add a new page: copy one line, paste it where you want it
   to appear, and change the title / url / category.

   - title:    text shown on the page
   - url:      path to the page, relative to the guides/ folder
               (pages inside guides/ → "my-folder/"
                pages at the site root → "../my-folder/")
   - category: must match one of the names in CATEGORY_ORDER below
   - isNew:    optional — add  isNew: true  to show a "New" badge
   ============================================================ */

// Controls the order the groups appear in on the page
const CATEGORY_ORDER = [
  "AI in Business Analysis",
  "Payments",
  "Case studies"
];

const GUIDES = [
  // ── AI in Business Analysis ──
  { title: "The Checkout Funnel",                 url: "ai-checkout-funnel/",      category: "AI in Business Analysis" },
  { title: "Payment Integration",                 url: "ai-payment-integration/",  category: "AI in Business Analysis" },
  { title: "UAT & Testing",                       url: "ai-uat-testing/",          category: "AI in Business Analysis" },
  { title: "The End-to-End Delivery Lifecycle",   url: "ai-delivery-lifecycle/",   category: "AI in Business Analysis" },
  { title: "The End-to-End Customer Journey",     url: "ai-customer-journey/",     category: "AI in Business Analysis" },
  { title: "The Order Journey",                   url: "ai-order-journey/",        category: "AI in Business Analysis" },

  // ── Payments ──
  { title: "Payment Providers & PSP Integration", url: "case-studies/payment-providers/",       category: "Payments" },

  // ── Case studies ──
  { title: "Insurance Industry BA Alignment",     url: "case-studies/insurance-alignment/",       category: "Case studies" },
  { title: "Stakeholder Management",              url: "case-studies/stakeholder-management/",    category: "Case studies" },
  { title: "Production Issues in Retail",         url: "case-studies/production-issues-retail/",  category: "Case studies" },
  { title: "Platform Migration: SAP Commerce Cloud to Centra", url: "case-studies/platform-migration/", category: "Case studies", isNew: true },
];
