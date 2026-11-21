/**
 * AI News & Strategy posts.
 *
 * To add a post: copy one of the objects below, give it a new unique `slug`,
 * and put it at the TOP of the list (newest first). Set `featured: true` on the
 * one post you want in the big spot at the top of the page, and `popular: true`
 * on up to three posts for the "Most popular" row.
 *
 * Body blocks: { p: 'paragraph' }, { h2: 'heading' }, { ul: ['item', 'item'] },
 * { quote: 'pull quote' }.
 *
 * Sources: whenever a post relies on an outside standard, report, study or news
 * story, list it in `sources` with the publisher, publication date and a link to
 * the original. Pull quotes are KayDev's own words, not quotations from others.
 */

export type PostCategory = 'AI Strategy' | 'AI Security' | 'AI and Staffing' | 'Building With AI'

export type Block = { p: string } | { h2: string } | { ul: string[] } | { quote: string }

export interface Source {
  title: string
  publisher: string
  date?: string // as published, e.g. 'January 2023'
  url: string
}

export interface Post {
  slug: string
  title: string
  subtitle: string
  category: PostCategory
  date: string // YYYY-MM-DD
  readMinutes: number
  author: string
  cover: 'grid' | 'rings' | 'bars' | 'wave' | 'nodes'
  featured?: boolean
  popular?: boolean
  body: Block[]
  /** Outside material the post relies on or points readers to. Shown at the end of the post. */
  sources?: Source[]
}

export const categories: PostCategory[] = ['AI Strategy', 'AI Security', 'AI and Staffing', 'Building With AI']

export const posts: Post[] = [
  {
    slug: 'ai-strategy-three-questions',
    title: 'An AI strategy for mid-size companies starts with three questions',
    subtitle: 'Skip the 40-page roadmap. Decide where AI should help, what data it may touch, and who owns the outcome.',
    category: 'AI Strategy',
    date: '2026-11-20',
    readMinutes: 5,
    author: 'KayDev Technology',
    cover: 'grid',
    featured: true,
    popular: true,
    body: [
      { p: 'Most mid-size companies do not need an "AI transformation." They need a short, honest answer to where AI can save real time this year, and a set of guardrails that keeps it from creating new risk. You can get there with three questions.' },
      { h2: '1. Where would AI remove real work?' },
      { p: 'Start with work, not tools. Ask each department head for the three tasks that eat the most hours and follow a repeatable pattern: summarizing documents, drafting first versions, answering the same internal questions, reconciling records. Those are the places where AI pays off quickly.' },
      { ul: ['List the task, who does it and roughly how many hours a week it takes', 'Note what "good" looks like, so you can tell whether AI is helping', 'Rank by hours saved, not by how exciting the tool is'] },
      { h2: '2. What data is it allowed to touch?' },
      { p: 'Every AI use case is also a data decision. Before anyone pilots a tool, classify the data involved: public, internal, confidential or regulated. Client records, health information and financial data need approved tools with clear retention and training terms. Public marketing copy does not.' },
      { quote: 'If you cannot say what data a tool sees, you are not ready to roll it out.' },
      { h2: '3. Who owns the outcome?' },
      { p: 'Name one accountable owner per use case. That person decides when the pilot is working, signs off on the vendor and is the first call when something goes wrong. Without an owner, pilots drift and nobody notices when a tool quietly starts handling data it should not.' },
      { h2: 'Put it on one page' },
      { p: 'The output of these three questions fits on a single page: a ranked list of use cases, the data class for each, the approved tool and the owner. Review it every quarter. That page is your AI strategy, and it is more useful than most roadmaps we see.' },
      { p: 'If you want help running this exercise or staffing the people to deliver it, book a call with our team.' },
    ],
  },
  {
    slug: 'shadow-ai-find-it-first',
    title: 'Shadow AI: find it before it finds your data',
    subtitle: 'Your employees are already using AI tools you have not approved. Here is how to see them and what to do next.',
    category: 'AI Security',
    date: '2026-11-17',
    readMinutes: 4,
    author: 'KayDev Technology',
    cover: 'rings',
    popular: true,
    body: [
      { p: 'Shadow AI is any AI tool used for work without the organization knowing or approving it: a browser extension that summarizes email, a free chatbot used to rewrite a contract, a note-taker that joins meetings. It is rarely malicious. People use these tools because they help. The risk is that sensitive data leaves your control without anyone deciding it should.' },
      { h2: 'Where to look' },
      { ul: ['Network and DNS logs for traffic to known AI services', 'Browser extension inventories on managed devices', 'SaaS sign-ins using company email addresses', 'Expense reports and card statements for AI subscriptions', 'A short, non-punitive survey asking people what they use'] },
      { h2: 'Sort what you find' },
      { p: 'Group each tool into one of three buckets. Approve the tools that meet your data and contract requirements and make them easy to get. Restrict the tools that are fine for public data but not for confidential work. Block the few that retain or train on your data with no way to opt out.' },
      { quote: 'The goal is not to stop people using AI. It is to move them onto tools you can stand behind.' },
      { h2: 'Close the loop' },
      { p: 'Publish a short list of approved tools, explain why the others are restricted, and give people a simple way to request something new. Shadow AI shrinks fastest when the approved option is easier than the workaround.' },
      { p: 'Keeping an inventory of the AI systems in use is also one of the governance outcomes in the NIST AI Risk Management Framework (Govern 1.6), so this work supports a broader governance program.' },
      { p: 'Our Shadow AI discovery assessment does this end to end and delivers findings with a remediation roadmap.' },
    ],
    sources: [
      { title: 'AI RMF Core: Govern, Map, Measure and Manage', publisher: 'NIST Trustworthy and Responsible AI Resource Center', url: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/' },
      { title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1', publisher: 'National Institute of Standards and Technology (NIST)', date: 'January 2023', url: 'https://doi.org/10.6028/NIST.AI.100-1' },
    ],
  },
  {
    slug: 'hiring-for-ai-roles-first',
    title: 'Hiring for AI: the roles you actually need first',
    subtitle: 'Before you hire a machine learning researcher, make sure you have the people who make AI useful and safe.',
    category: 'AI and Staffing',
    date: '2026-11-13',
    readMinutes: 4,
    author: 'KayDev Technology',
    cover: 'bars',
    popular: true,
    body: [
      { p: 'When companies decide to "do AI," the first job posting is often for a machine learning engineer or a data scientist. For most mid-size organizations, that is the wrong first hire. The early wins come from connecting existing AI services to your data and workflows, safely.' },
      { h2: 'The first wave' },
      { ul: ['Data engineer: gets clean, well-governed data where AI tools can use it', 'Integration or application developer: connects AI services to the systems people already work in', 'Security engineer with cloud and IAM depth: controls who and what can reach sensitive data', 'Business analyst: turns "use AI for this" into requirements and measures whether it worked'] },
      { h2: 'The second wave' },
      { p: 'Once you have use cases in production and data you trust, specialist roles start to pay for themselves: machine learning engineers to tune and evaluate models, data analysts to track results, and governance or compliance analysts to keep documentation current as rules change.' },
      { h2: 'Contract first, then convert' },
      { p: 'AI needs change quickly. Contract and contract-to-hire arrangements let you bring in experienced people for the first wave, learn which skills you need long term, and convert the right people to full-time once the work is proven.' },
      { p: 'KayDev places data, integration, security and analyst talent vetted by security practitioners. Tell us the role and we will tell you who is available.' },
    ],
  },
  {
    slug: 'ai-vendor-due-diligence-questions',
    title: 'AI vendor due diligence: 10 questions to ask before you sign',
    subtitle: 'A short checklist for legal, security and procurement teams evaluating AI products.',
    category: 'AI Security',
    date: '2026-11-10',
    readMinutes: 3,
    author: 'KayDev Technology',
    cover: 'nodes',
    popular: true,
    body: [
      { p: 'AI vendors are quick to demo and slow to answer hard questions in writing. Ask these before you sign, and get the answers into the contract or data processing agreement.' },
      { ul: [
        'Do you use our inputs or outputs to train or improve your models? Can we opt out in writing?',
        'How long do you retain our data, and can we delete it on request?',
        'Where is our data stored and processed?',
        'Which subprocessors, including model providers, can access our data?',
        'Do you support single sign-on, role-based access and audit logs?',
        'What independent security assessments or certifications can you share?',
        'How do you isolate our data from other customers?',
        'How will you notify us of a security incident, and how quickly?',
        'What happens to our data if we end the contract?',
        'Who is accountable if the tool produces harmful or incorrect output?',
      ] },
      { h2: 'Red flags' },
      { p: 'Vague answers on training and retention, no audit logging, or terms that let the vendor change data practices without notice are reasons to pause. A good vendor will answer all ten clearly.' },
      { p: 'For a formal reference point, the Govern function of the NIST AI Risk Management Framework includes outcomes for AI risks that come from third-party software, data and other supply chain issues (Govern 6).' },
      { p: 'Our AI privacy and vendor risk assessment reviews vendors against these questions and your own requirements.' },
    ],
    sources: [
      { title: 'AI RMF Core: Govern, Map, Measure and Manage', publisher: 'NIST Trustworthy and Responsible AI Resource Center', url: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/' },
      { title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1', publisher: 'National Institute of Standards and Technology (NIST)', date: 'January 2023', url: 'https://doi.org/10.6028/NIST.AI.100-1' },
    ],
  },
  {
    slug: 'nist-ai-rmf-plain-english',
    title: 'The NIST AI Risk Management Framework in plain English',
    subtitle: 'Govern, Map, Measure, Manage: what each function means for a company that is not a tech giant.',
    category: 'AI Strategy',
    date: '2026-11-06',
    readMinutes: 4,
    author: 'KayDev Technology',
    cover: 'wave',
    body: [
      { p: 'The NIST AI Risk Management Framework (AI RMF) is a voluntary framework from the National Institute of Standards and Technology for organizations that design, develop, deploy or use AI systems. NIST published version 1.0 in January 2023 and has said a revised version is in progress. Its core is organized into four functions: Govern, Map, Measure and Manage, with Govern cutting across the other three.' },
      { p: 'You do not need a large team to use it; you need to apply each function at a size that fits your organization. The summaries below are our plain-English reading of each function, not NIST text.' },
      { h2: 'Govern' },
      { p: 'Set the rules and the owners. Write a short AI use policy, name who approves new tools, and decide how AI risk is reported to leadership.' },
      { h2: 'Map' },
      { p: 'Know what you have. Keep an inventory of AI systems in use, what each one does, what data it touches and who it affects.' },
      { h2: 'Measure' },
      { p: 'Check whether systems work as intended. Track accuracy on real tasks, watch for bias where decisions affect people, and test security controls around the data.' },
      { h2: 'Manage' },
      { p: 'Act on what you find. Prioritize risks, fix or retire systems that fall short, and keep a record of decisions so you can show your work to clients, auditors or regulators.' },
      { quote: 'Start small: a policy, an inventory and an owner for each system covers most of the framework for most companies.' },
      { p: 'Our AI governance readiness assessment is aligned to the NIST AI RMF and identifies the control gaps to close first.' },
    ],
    sources: [
      { title: 'Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1', publisher: 'National Institute of Standards and Technology (NIST)', date: 'January 2023', url: 'https://doi.org/10.6028/NIST.AI.100-1' },
      { title: 'AI RMF Core: Govern, Map, Measure and Manage', publisher: 'NIST Trustworthy and Responsible AI Resource Center', url: 'https://airc.nist.gov/airmf-resources/airmf/5-sec-core/' },
      { title: 'AI Risk Management Framework (overview and AI RMF Playbook)', publisher: 'National Institute of Standards and Technology (NIST)', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
    ],
  },
]

export const formatDate = (d: string) =>
  new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
