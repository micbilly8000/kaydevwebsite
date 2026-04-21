// KayDev AI Security & Governance Services
// Vendor-neutral assessments with flexible remediation across Palo Alto Networks, Microsoft, Zscaler, CrowdStrike, Fortinet, and others.
// Services priced $10K+ use `requestMeeting: true` instead of a fixed public price.

export interface AISecurityService {
  id: string
  tier: 'tier1' | 'tier2' | 'tier3' | 'tier4'
  name: string
  tag: string
  featured?: boolean
  price: string
  priceNote: string
  priceSuffix?: string
  meta: string[]
  description: string
  bullets: string[]
  implementation: {
    platforms: string
    description: string
  }
  ctaLabel: string
  requestMeeting?: boolean
}

export interface ServiceTierMeta {
  id: string
  eyebrow: string
  title: string
  subtitle: string
}

export const aiServiceTiers: ServiceTierMeta[] = [
  {
    id: 'tier1',
    eyebrow: 'Tier 1 — Entry Offers',
    title: 'Fast-Close Assessments (2–3 Business Days)',
    subtitle:
      'Small-ticket, high-signal assessments designed for professional-services firms that need answers this week — not next quarter.',
  },
  {
    id: 'tier2',
    eyebrow: 'Tier 2 — Governance Assessments',
    title: 'Structured NIST AI RMF Assessments',
    subtitle:
      'For firms that need a defensible framework they can show clients, insurers, regulators, or prime contractors. Built on NIST AI RMF (Govern • Map • Measure • Manage).',
  },
  {
    id: 'tier3',
    eyebrow: 'Tier 3 — Deployment & Remediation',
    title: 'Fix What the Audit Found',
    subtitle:
      'Implementation services that turn assessment findings into secured AI deployments.',
  },
  {
    id: 'tier4',
    eyebrow: 'Tier 4 — Managed & Advisory',
    title: 'Ongoing AI Governance — Recurring Retainers',
    subtitle:
      'AI is not one-and-done. Regulations evolve, tools change, employees come and go. Our managed services keep your AI program defensible every quarter.',
  },
]

export const aiSecurityServices: AISecurityService[] = [
  // ===== TIER 1 =====
  {
    id: 'shadow-ai-discovery',
    tier: 'tier1',
    tag: 'Trial Offer',
    name: 'Shadow AI Discovery',
    price: '$997',
    priceNote: 'One-time, fixed fee',
    meta: ['90-minute scan', '2-day report'],
    description:
      "We discover every AI tool your employees are actually using — the ones you authorized, and the ones you didn't. Most firms find 3–5× more than they expected.",
    bullets: [
      'Guided 90-minute scan of accounts, browsers, devices',
      'Map of active and shadow AI usage across the firm',
      '2-page executive report — risks flagged, priorities ranked',
      'Recommendation: stop, sanction, or secure each tool',
    ],
    implementation: {
      platforms: 'CASB-X • Defender for Cloud Apps • Zscaler',
      description:
        "Vendor-neutral discovery methodology. We surface SaaS AI tools using the CASB/DSPM stack you already have (or recommend one if you don't).",
    },
    ctaLabel: 'Book Discovery Scan',
  },
  {
    id: 'ai-privacy-audit',
    tier: 'tier1',
    tag: 'Flagship Entry Offer',
    name: 'AI Privacy Audit',
    featured: true,
    price: '$1,997',
    priceNote: 'Launch pricing (limited) • standard $3,497',
    meta: ['2–3 business days', 'Fixed fee'],
    description:
      'The confidentiality-focused audit for professional services firms. If your team is using ChatGPT or Claude on client work, your client data is going somewhere — we tell you where and what to do about it.',
    bullets: [
      '60-minute kickoff + 15-question intake',
      '8-page written risk memo with 5–10 specific confidentiality risks',
      'Compliance-gap summary (Bar / HIPAA / SEC / state license)',
      'Recommended AI tier + next-step plan',
      '30-minute readout call + Q&A',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + CASB-X + DLP • Microsoft Purview • Your existing stack',
      description:
        "Every finding maps to concrete remediation controls. We lead with Palo Alto Networks, but we'll tune Microsoft, Zscaler, or your current stack if that's a better fit.",
    },
    ctaLabel: 'Book Your Audit',
  },
  {
    id: 'ai-vendor-risk',
    tier: 'tier1',
    tag: 'Procurement-Ready',
    name: 'AI Vendor Risk Assessment',
    price: '$4,997',
    priceNote: 'One-time, fixed fee',
    meta: ['3–5 business days', 'Up to 5 tools'],
    description:
      'Review of every AI tool in your stack — ChatGPT, Claude, Copilot, Gemini, and your niche vertical tools. We score each against your confidentiality obligations and produce a procurement-ready risk matrix.',
    bullets: [
      'Intake of up to 5 AI tools + data flow diagram',
      'DPA and subprocessor review for each tool',
      'Risk matrix scored on 7 dimensions (data residency, training, retention, etc.)',
      'Remediation priority list with tier recommendations',
    ],
    implementation: {
      platforms: 'CASB-X • Defender for Cloud Apps • Netskope',
      description:
        'Vendor-neutral scoring methodology. We use whichever CASB/DSPM feed is available in your environment (or an offline risk matrix if you have none).',
    },
    ctaLabel: 'Book Vendor Review',
  },

  // ===== TIER 2 =====
  {
    id: 'governance-readiness',
    tier: 'tier2',
    tag: 'New • Most-Sold Tier',
    name: 'AI Governance Readiness Assessment',
    featured: true,
    price: '$12,500 – $18,500',
    priceNote: 'Fixed fee based on complexity',
    meta: ['1–2 weeks', 'Up to 50 employees'],
    description:
      'Our mid-tier assessment maps your AI program to all four NIST AI RMF functions. The single most-purchased assessment in the SMB AI market right now — this is what your clients and insurers are asking for by name.',
    bullets: [
      'Govern function review: policy, accountability, roles, oversight',
      'Map function review: use cases, data flows, failure modes',
      'Measure function review: testing, monitoring, KPIs',
      'Manage function review: incident response, continuous improvement',
      '20-page report with gap matrix + 30-60-90 day roadmap',
      'Executive + stakeholder readout',
    ],
    implementation: {
      platforms: 'Palo Alto Strata + AIRS • Microsoft Purview + Defender • Zscaler ZTNA',
      description:
        'Each NIST function maps to concrete controls. The roadmap is actionable against any modern stack — not a theoretical PowerPoint.',
    },
    ctaLabel: 'Schedule Consultation',
  },
  {
    id: 'enterprise-assessment',
    tier: 'tier2',
    tag: 'Enterprise Tier',
    name: 'AI Security Readiness Assessment',
    price: '$22,500',
    priceNote: 'Fixed fee',
    meta: ['5 business days', 'Up to 500 employees'],
    description:
      'Our enterprise flagship — for mid-market companies and regulated industries. Full-stack AI security review with prompt-injection testing, posture analysis, and a detailed remediation plan.',
    bullets: [
      'Shadow-AI discovery across the environment',
      'Stakeholder interviews + policy/control review',
      'Technical gap analysis + prompt-injection red-team',
      'AI runtime / AIRS posture review',
      '40-page report + 12-slide executive deck',
      '10-point prioritized remediation roadmap',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + XSIAM + CASB-X + DLP • Microsoft Sentinel + Purview • Splunk + CrowdStrike',
      description:
        'Results feed into your chosen SIEM/XDR and AI runtime stack. Palo Alto is our reference architecture, but we deliver against Microsoft Sentinel, Splunk, CrowdStrike, or your existing stack.',
    },
    ctaLabel: 'Book Enterprise Assessment',
  },

  // ===== TIER 3 =====
  {
    id: 'deployment-starter',
    tier: 'tier3',
    tag: 'Entry Deployment',
    name: 'AI Deployment Starter',
    price: '$7,997',
    priceNote: 'Fixed fee',
    meta: ['1–2 weeks', 'Up to 25 seats'],
    description:
      "Your firm picked an AI tool — now deploy it right. We handle tier selection, account setup, policy authorship, endpoint hardening, and team training in one fixed-fee package.",
    bullets: [
      'Claude Teams / ChatGPT Business / Copilot tier selection',
      'Organization setup, SSO, admin seats',
      '15-page custom AI usage policy (editable Word)',
      'Mac/PC hardening checklist + walkthrough',
      '1-hour team training (recorded)',
    ],
    implementation: {
      platforms: 'Palo Alto Prisma Browser + DLP • Microsoft Edge for Business + Purview • Google Workspace controls',
      description:
        'Secure browser + DLP layer tuned to your environment. We implement on Palo Alto, Microsoft, or Google depending on your existing license investment.',
    },
    ctaLabel: 'Start Deployment',
  },
  {
    id: 'secure-chatgpt-deployment',
    tier: 'tier3',
    tag: 'Flagship Remediation',
    name: 'Secure ChatGPT / Claude Deployment',
    featured: true,
    price: 'Starts at $35,000',
    priceNote: 'Custom engagement • Final scope during discovery',
    meta: ['3–4 weeks', '50–500 seats'],
    description:
      'Complete AI-security transformation built on a full AI security stack: AIRS + CASB + DLP + Zero Trust Access. Turn your organization from "shadow AI chaos" to "sanctioned, monitored, compliant AI" in under a month.',
    bullets: [
      'AIRS / AI runtime deployment and tuning',
      'CASB AI-application policies',
      'DLP rules for client PII, PHI, privileged data',
      'Zero Trust Access or secure browser rollout',
      'SSO + identity-based AI access controls',
      'Incident-response runbook for AI misuse',
      'Admin training + 30-day hypercare',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + CASB-X + DLP + Prisma Access • Microsoft Defender + Purview + Entra • Zscaler Zero Trust',
      description:
        "Full AI security stack deployed and tuned to your firm's confidentiality model. Palo Alto is our preferred reference architecture; Microsoft and Zscaler deployments available when the existing environment favors them.",
    },
    ctaLabel: 'Request a Meeting',
    requestMeeting: true,
  },
  {
    id: 'private-llm-appliance',
    tier: 'tier3',
    tag: 'High-Security Niche',
    name: 'Private LLM Appliance',
    price: 'Starts at $40,000',
    priceNote: 'Custom engagement • Hardware-dependent',
    meta: ['2–3 weeks', 'Fully on-prem'],
    description:
      'For firms that cannot send client data to any public AI service. On-premise open-weight LLM deployment with full security instrumentation.',
    bullets: [
      'On-prem Ollama or vLLM with Llama 3.3 70B / Qwen 2.5 / DeepSeek',
      'Open WebUI front-end with SSO',
      'Hardware recommendation + procurement',
      'AI runtime security instrumentation',
      'XDR endpoint integration',
      'Monthly managed operations',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + Cortex XDR • Microsoft Defender XDR • CrowdStrike Falcon',
      description:
        'Private LLM operates behind full inspection on your preferred XDR platform — on-prem data never leaves your network, and every query is logged to your SIEM of choice.',
    },
    ctaLabel: 'Request a Meeting',
    requestMeeting: true,
  },
  {
    id: 'custom-agent-build',
    tier: 'tier3',
    tag: 'Custom Build',
    name: 'Custom Claude Agent / MCP Build',
    price: 'Starts at $45,000',
    priceNote: 'Custom engagement • Project-scoped',
    meta: ['3–6 weeks', 'Delivered secure'],
    description:
      'Custom AI agents and Model Context Protocol (MCP) servers that integrate with your business systems — built with Claude Agent SDK and secured by a hardened AI security stack.',
    bullets: [
      'Use-case discovery + architecture design',
      'Claude Agent SDK or custom LLM orchestration',
      'MCP server integrations to your internal tools',
      'Security review + runtime AI protection',
      'Deployment to your cloud or on-prem',
      '30-day bug-fix warranty + optional retainer',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + XSIAM + XSOAR • Microsoft Sentinel + Logic Apps • Splunk SOAR',
      description:
        'Every custom agent runs behind runtime AI security; output and audit trails integrate with the SIEM/SOAR of your choice for detection + response.',
    },
    ctaLabel: 'Request a Meeting',
    requestMeeting: true,
  },

  // ===== TIER 4 =====
  {
    id: 'managed-governance',
    tier: 'tier4',
    tag: 'Foundation MRR',
    name: 'Managed AI Governance',
    price: '$2,000 – $4,500',
    priceSuffix: '/mo',
    priceNote: 'Month-to-month • No annual commitment',
    meta: ['Ongoing', '2–4 hrs/mo'],
    description:
      'Your outsourced AI governance function. We keep your policy, licenses, and compliance posture current so your team can use AI safely without you thinking about it.',
    bullets: [
      'Monthly policy updates as regulation evolves',
      'Quarterly mini-audit + posture report',
      'License and seat management',
      'New-user onboarding + training refresh',
      'Incident support (AI-related)',
    ],
    implementation: {
      platforms: 'Any CASB + DLP feed • Palo Alto CASB-X • Microsoft Purview • Zscaler',
      description:
        "Your monthly report is populated from live telemetry — from whichever CASB/DLP platform you run — so it's evidence-based, not checklist-based.",
    },
    ctaLabel: 'Start Retainer',
  },
  {
    id: 'fractional-advisor',
    tier: 'tier4',
    tag: 'Premium Advisory',
    name: 'Fractional AI Advisor / vCISO',
    featured: true,
    price: '$8,500 – $15,000',
    priceSuffix: '/mo',
    priceNote: '3–12 month engagement',
    meta: ['8–20 hrs/mo', 'Direct advisory'],
    description:
      'Executive-level AI + security leadership without a full-time hire. Monthly strategy calls, board-ready reporting, vendor-selection guidance, and direct access for whenever AI questions come up.',
    bullets: [
      'Monthly strategy + roadmap session with leadership',
      'Quarterly board-ready AI governance report',
      'Vendor-selection and contract review',
      'Direct Slack/email access for ad-hoc questions',
      'Incident command for AI-related events',
      'Annual tabletop exercise',
    ],
    implementation: {
      platforms: 'Vendor-neutral advisory — Palo Alto, Microsoft, Zscaler, Fortinet, CrowdStrike',
      description:
        "Your fractional advisor is vendor-neutral and experienced across major AI security platforms. We advise on the stack you have — and tell you honestly when it's the wrong stack.",
    },
    ctaLabel: 'Book Advisory Call',
  },
  {
    id: 'enterprise-managed',
    tier: 'tier4',
    tag: 'Enterprise MRR',
    name: 'Enterprise Managed AI Security',
    price: 'Starts at $12,500/mo',
    priceNote: 'Custom engagement • Environment-dependent',
    meta: ['24/7 posture', 'SLA-backed'],
    description:
      'Full managed AI security for mid-market organizations. We operate your AI security stack, respond to AI incidents, and deliver monthly executive reporting.',
    bullets: [
      '24/7 AIRS + CASB monitoring',
      'XSIAM or Sentinel-backed incident response',
      'Weekly tuning and policy updates',
      'Monthly executive + technical reporting',
      'Quarterly audit refresh',
      'Named engagement manager',
    ],
    implementation: {
      platforms: 'Palo Alto AIRS + XSIAM + CASB-X + Cortex • Microsoft Sentinel + Defender • Splunk + CrowdStrike',
      description:
        "KayDev operates your AI security stack as a managed service — Palo Alto is our preferred platform, but we'll run yours if Microsoft, Splunk, or CrowdStrike is already in place.",
    },
    ctaLabel: 'Request a Meeting',
    requestMeeting: true,
  },
]

export interface TechPlatform {
  name: string
  description: string
  featured?: boolean
}

export const techPlatforms: TechPlatform[] = [
  {
    name: 'Palo Alto Networks (Reference Architecture)',
    description:
      'Our preferred reference architecture for most engagements. Technologies we implement include AIRS (AI Runtime Security), CASB-X, Prisma Browser, Prisma Access, Enterprise DLP, XSIAM, Cortex XDR, and Cortex XSOAR.',
    featured: true,
  },
  {
    name: 'Microsoft Security',
    description:
      'Microsoft Defender XDR, Defender for Cloud Apps, Purview DLP, Sentinel SIEM, Entra ID Conditional Access. The right fit for Microsoft-365-heavy environments.',
  },
  {
    name: 'Zscaler',
    description:
      'Zero Trust Exchange, ZIA for web/SaaS AI control, ZPA for private app access, SSE for distributed workforce governance.',
  },
  {
    name: 'CrowdStrike & Splunk',
    description:
      'Falcon XDR endpoint + identity protection, Splunk SIEM for AI telemetry, Splunk SOAR for AI-incident orchestration.',
  },
  {
    name: 'Fortinet',
    description:
      'FortiGate, FortiAI, and FortiSASE technologies for mid-market firms with existing Fortinet investments.',
  },
  {
    name: 'Netskope',
    description:
      'Netskope SASE and DSPM — excellent option for shadow-AI discovery and data-centric governance when favored over Palo Alto or Microsoft.',
  },
  {
    name: 'Anthropic & OpenAI',
    description:
      "Claude Teams/Enterprise and ChatGPT Business/Enterprise deployments. We scope, configure, and secure whichever LLM provider fits your confidentiality model.",
  },
  {
    name: 'Open-Source & On-Prem',
    description:
      'Ollama, vLLM, Open WebUI on your infrastructure. When confidentiality obligations require air-gapped or VPC-isolated AI, we build it.',
  },
]

export interface Vertical {
  name: string
  why: string
}

export const aiSecurityVerticals: Vertical[] = [
  { name: 'Private Investigators', why: 'Client confidentiality + license preservation' },
  { name: 'Law Firms', why: 'Attorney-client privilege + state bar rules' },
  { name: 'Insurance Adjusters', why: 'PII + claims data + E&O exposure' },
  { name: 'Forensic Accountants', why: 'Client financials + audit-trail requirements' },
  { name: 'HR Consultants', why: 'Employee PII + investigation confidentiality' },
  { name: 'Medical Practices', why: 'HIPAA + BAA requirements for AI tools' },
  { name: 'Financial Advisors', why: 'SEC rules + fiduciary + custodian pressure' },
  { name: 'Government Contractors', why: 'CMMC + NIST + CUI handling' },
]

export interface Certification {
  name: string
  description: string
}

export const businessCertifications: Certification[] = [
  { name: 'Native-Owned', description: 'Federally recognized Native American ownership — Tribal 8(a) and BIA eligible.' },
  { name: 'SDVOSB', description: 'Service-Disabled Veteran-Owned Small Business — VetCert verified for federal set-asides.' },
  { name: 'MBE', description: 'Minority Business Enterprise — NMSDC certified for Fortune 500 supplier diversity programs.' },
  { name: 'SBE', description: 'Small Business Enterprise — certified for state and municipal SBE set-asides.' },
  { name: 'DBE', description: 'Disadvantaged Business Enterprise — US DOT certified for federally-funded projects.' },
]
