type Stack = {
  name: string;
  message: string;
  platforms: string;
  persona: string;
  situation: string;
  complications: string[];
  solution: string[];
  useCases: string[];
  integration: string[];
  channels: string;
  extras?: string[];
};

const STACKS: Stack[] = [
  {
    name: 'CREATIVE STACK',
    message:
      'Repurpose exisitng/authentic raw videos into high value marketing assets to drive your engagement goals, across any channel',
    platforms: 'Adobe, Canva, Figma, Wix, GoDaddy, Square, Vimeo',
    persona: 'SMBs, Agencies, Creators',
    situation:
      'SMB/Brands/Creators are putting in resources (time and $$) in creating videos that are underutilized/suboptimized for engagement across multiple marketing channels',
    complications: [
      'SMBs lack ability to capture the best from their Video asssets → videos underperform',
      'Creators have unusable, treasure trove of video assets, that’s hard to repurpose',
    ],
    solution: [
      "VideoForce's HIGHLIGHTS solution can take original (authentic or sourced) video and repurpose it into high performing segmented videos from a winning engagement formula — extracting key Hooks, Problems, Solution, Proofs, CTA (the 'FORMULA' for engagement success)... that ready for distributed across a merchant’s site + socials.",
      'Turn raw content into polished clips → embed in sites, emails, campaigns',
      'Generate creative highlight variants for campaigns, personalization, and media buys',
    ],
    useCases: [
      'PDP or website (Hooks, Proof)',
      'Video highlights for blogs, social posts (insta/TT)',
      'Winning Ad creative - Paid or Social distribution',
    ],
    integration: ['White-label API in Media stack', 'API in Video Editing tool', 'API inside transcoding workflow', 'SDK integration'],
    channels: 'Websites, emails, social channels',
    extras: [
      'Helps creators & enterprises repurpose existing short form video into marketable video clips',
      'Helps enterprises/agencies scale personalized campaigns with highlights',
      'Helps SMBs & marketers deliver polished, social-ready videos instantly',
    ],
  },
  {
    name: 'COMMERCE STACK',
    message: 'Turn UGC/Reviews into product highlight reels and drive conversions',
    platforms: 'Shopify, WooCommerce, BigCommerce, Sitecore, Acquia',
    persona: 'SMB, Merchants (D2C brands)',
    situation:
      'SMB/Brands/Merchants need to constantly provide highly engageable/marketing videos to drive conversions of their products/services.',
    complications: [
      'Merchants rely on photos; video creation too resource-heavy',
      'Extracting relevant highlights from product videos is time consuming/impossible',
    ],
    solution: [
      'Partners can leverage Highlights to help small businesses turn their underutilized product videos and UGC assets into high-performing shoppable clips — embedded on websites, PDP, shared on social, and reused across campaigns.',
      'Repurpose existing video and generate product highlight reels for PDPs, ads, and campaigns',
    ],
    useCases: ['Shoppable video clips (HPSPC - VideoForce\'s Patented SVM formula)', 'PDP use (Hooks, Proof)'],
    integration: ['Highlights auto generated off of Product Page', 'API integration into commerce engine ("Prod Highlights")'],
    channels: 'Product pages, ads, social, email',
  },
  {
    name: 'MARTECH STACK',
    message: 'Deliver Targeted Communications (videos) that will drive engagement w/your Customers',
    platforms: 'Hubspot, Marketo/Adobe, Salesforce, Sprinklr, HootSuite',
    persona: 'Enterprise/SMBs for Customer Outreach/Communications',
    situation: 'Enterprise/SMBs are looking to stay "fresh" and "on-point" in theri communication outeach to their prospects.',
    complications: [
      'Enterprises leverage CRM and Direct email to engage w/their prospects → hard to repurpose video for outreach goal',
      'Marketers struggle to produce engaging video for inbound campaigns & lead nurturing',
    ],
    solution: [
      'Partners can provide their SMB/Enterprise clients with viral videos highlights that can be used for B2B or B2C marketing (email/social).',
      'Generate personalized video from Seller to Prospect - extracted from short form sales video created by enterprise sales',
    ],
    useCases: ['Personalized marekting messages to prospects (via email)', 'Customer story highlights', 'Blog + landing page video embeds'],
    integration: ['API integrated into DAM/CRM interface → highlight clips surfaced in personalization workflows'],
    channels: 'Email Marketing (CRM tools)',
  },
  {
    name: 'Agencies & AdTech',
    message: 'Accelerate & Optimize your Ad Production at a fraction of the cost',
    platforms: 'AKQA (WPP), REQ, O3World, MediaOcean',
    persona: 'Media planners, buyers, ad ops, brands/advertisers',
    situation:
      'Agencies need to quickly scale creation of multiple video variants across multiple channels for any ad campaign',
    complications: [
      'Extracting high performing, ad ready content from unedited sourced content (interview footage, brand events, UGC campaings, shoots) is inefficient today -- reduce from hours to minutes',
    ],
    solution: [
      'Partners can quickly produce video highlights from sourced brand and UGC videos, and stich into ad creatives for quick launch into paid and organic campaigns',
      'Auto-detect the best clips --> speeds up ad editing, social channel targeting, influencer recap reels',
      'Turn short form press & thought leadership videos into media-ready highlight clips',
    ],
    useCases: [
      'Multi-format ad variants (segments) for faster creative trafficking',
      'CXO keynote highlights',
      'Blog + landing page video embeds',
    ],
    integration: ['API integration into production stack → highlight clips become part of creative workflow'],
    channels: 'Social, Programmatic, Websites',
    extras: ['Helps Agencies and adops to launch faster, test more creative, and optimize campaigns'],
  },
];

export default function PartnerStacks() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-2">Partner Ecosystem Stacks</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          Four stack strategy for platform and agency partners. Content is exactly as provided.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STACKS.map((s) => (
            <div key={s.name} className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <div className="mt-2 text-sm text-muted-foreground">{s.message}</div>

              <div className="mt-4 grid grid-cols-1 gap-3">
                <Item label="Platforms to Partner With" value={s.platforms} />
                <Item label="Target Persona" value={s.persona} />
                <Item label="Situation (Need)" value={s.situation} />

                <List label="Complication (why)" items={s.complications} />
                <List label="Solution (VideoForce)" items={s.solution} />
                <List label="Key Use Cases" items={s.useCases} />
                <List label="Ease of Integration" items={s.integration} />

                <Item label="Channels" value={s.channels} />
                {s.extras && <List label="Other Value Props" items={s.extras} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-brand-purple uppercase tracking-wide">{label}</div>
      <div className="text-sm text-foreground">{value}</div>
    </div>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold text-brand-purple uppercase tracking-wide mb-1">{label}</div>
      <ul className="space-y-1 text-sm">
        {items.map((it) => (
          <li key={it} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-brand-orange">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}


