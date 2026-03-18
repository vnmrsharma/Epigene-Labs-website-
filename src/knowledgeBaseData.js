export const BLOG_TOPICS = [
  { id: "all", label: "All Topics" },
  { id: "formulation", label: "Formulation Science" },
  { id: "regulatory", label: "Regulatory & FSSAI" },
  { id: "ayurveda", label: "Ayurveda + Science" },
  { id: "market", label: "Market Trends" },
  { id: "startup", label: "Startup Guide" },
  { id: "qc", label: "Quality Control" },
  { id: "b2b", label: "B2B Strategy" },
  { id: "clinical", label: "Clinical Evidence" },
  { id: "sports", label: "Sports Nutrition" },
  { id: "epigenetics", label: "Epigenetics & Future" },
  { id: "consumer", label: "Consumer Guide" },
];

export const BLOGS = [
  {
    slug: "startup-formulation-failure-guide",
    title:
      "Why 80% of Indian Supplement Startups Fail at the Formulation Stage — and What to Do Instead",
    categoryLabel: "Formulation Science",
    categoryId: "formulation",
    excerpt:
      "The real problem is not money or marketing. It is choosing the wrong actives, wrong delivery system, or trusting raw material suppliers without independent verification.",
    readTime: "8 min read",
    icon: "🧬",
    gradient: "linear-gradient(135deg, #D8EDE3, #b7dccb)",
    content: [
      "Most startup failures in nutraceuticals happen before the first sale, during formulation. Teams often start with trendy ingredients and social media claims instead of building from mechanism, dosage evidence, and stability.",
      "A winning formulation starts by defining one clear outcome per product: energy support, recovery, sleep quality, metabolic support, or gut comfort. Once that is fixed, every ingredient must justify its place through human data, not just in vitro papers.",
      "The second common failure is dose illusion. Labels look attractive, but effective doses are undercut to meet COGS targets. This creates products that are marketable but not repeatable. In supplements, repeat purchase depends on felt benefit.",
      "Third, founders ignore delivery system fit. Powders, capsules, tablets, and liquids each have different constraints for taste masking, oxidation risk, hygroscopic behavior, and compliance practicality.",
      "The correct process is: define user outcome -> shortlist evidence-backed actives -> validate effective dosage ranges -> map ingredient interactions -> choose dosage form -> run pilot stability checks -> validate final claim language for compliance.",
      "Raw material validation is non-negotiable. Never rely only on vendor CoA. Ask for method references, perform identity checks, and verify marker compound consistency lot-to-lot. Supplier variance can collapse a working formula in scale-up.",
      "If you are launching your first product, reduce complexity: one hero promise, two to four core actives, transparent dose logic, and clean compliance copy. Clarity outperforms hype every time.",
    ],
  },
  {
    slug: "fssai-2025-compliance-checklist",
    title: "FSSAI 2025 Compliance Checklist for Nutraceutical Brands",
    categoryLabel: "Regulatory & FSSAI",
    categoryId: "regulatory",
    excerpt:
      "Every document, every test, every claim FSSAI needs before you can legally sell your supplement in India.",
    readTime: "6 min read",
    icon: "📋",
    gradient: "linear-gradient(135deg, #e8f0fe, #c8d8f8)",
    content: [
      "Compliance delays usually come from incomplete documentation and incorrect claim language. A proper checklist before launch avoids expensive reformulation and relabeling cycles.",
      "Start with classification clarity: nutraceutical, health supplement, or special category. Misclassification drives the wrong dossier structure and rejection risk.",
      "Keep your core file ready: finalized formula sheet, ingredient specifications, vendor documents, internal QC plan, batch manufacturing process, label artwork draft, and claim substantiation references.",
      "Your label must be compliant in both what it says and what it omits. Avoid disease-treatment implications, absolute cure language, and unsubstantiated performance claims.",
      "For each ingredient, maintain a defendable source chain and internal quality acceptance criteria. A documented incoming QC process materially strengthens regulatory confidence.",
      "Before submission, run a pre-audit review: formula-to-label dose consistency, mandatory declarations, warning statements, and clean typographic hierarchy for readability.",
      "The practical rule: if a claim appears on pack, it must map to a compliant category, a measurable ingredient, and an internally documented rationale. That discipline prevents most first-round objections.",
    ],
  },
  {
    slug: "ashwagandha-ksm66-vs-sensoril",
    title: "Ashwagandha vs KSM-66 vs Sensoril: Which Extract Actually Works?",
    categoryLabel: "Ayurveda + Epigenetics",
    categoryId: "ayurveda",
    excerpt:
      "A clinical evidence review of the three most-used Ashwagandha extracts — what science says about bioavailability, epigenetic effects, and efficacy.",
    readTime: "7 min read",
    icon: "🌿",
    gradient: "linear-gradient(135deg, #fef3e2, #f5d9a8)",
    content: [
      "Not all Ashwagandha is interchangeable. The source material, extraction method, marker profile, and dose range all affect outcomes in stress modulation, sleep, and perceived recovery.",
      "Standardized extracts provide consistency that raw powders often cannot. For product teams, reproducibility matters more than ingredient romance.",
      "When comparing extract options, focus on validated dose windows, trial population relevance, and endpoint quality. Lifestyle-stress outcomes should be measured with practical scales and meaningful timelines.",
      "Epigenetic framing is useful when discussing long-term adaptation, but consumer-facing communication must remain compliant and precise. Avoid deterministic gene-switch claims on-pack.",
      "For formulation, combine Ashwagandha with compatible support nutrients only when there is a clear objective and no absorption or tolerance conflict.",
      "A good decision framework: target user profile -> desired effect timeline -> dose practicality -> sensory tolerance -> cost per effective serving.",
      "The best extract is not the most marketed one; it is the one that gives consistent user outcomes at a realistic dose and survives quality testing across production lots.",
    ],
  },
];
