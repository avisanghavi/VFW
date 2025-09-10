type Card = {
  icon: string;
  title: string;
  partners: string;
  description: string;
  bullets: string[];
};

const CARDS: Card[] = [
  {
    icon: '🎨',
    title: 'Creative Platforms',
    partners: 'Adobe • Canva • Figma • Wix • GoDaddy • Square • Vimeo',
    description:
      'Repurpose existing/authentic videos into high value marketing assets to drive your engagement goals, across any channel',
    bullets: ['Extract viral hooks from raw footage', 'Create multi-format exports (6s, 15s, 30s)', 'A/B test different moments'],
  },
  {
    icon: '🛍️',
    title: 'Commerce Platforms',
    partners: 'Shopify • WooCommerce • BigCommerce • Sitecore • Acquia',
    description: 'Transform product videos and customer testimonials into conversion-driving assets.',
    bullets: ['Auto-generate product highlight reels', 'Extract testimonials from video reviews', 'Create shoppable video moments'],
  },
  {
    icon: '📊',
    title: 'Marketing Platforms',
    partners: 'HubSpot • Marketo/Adobe • Salesforce • Sprinklr • Hootsuite',
    description: 'Deliver Personalized Communications that will drive engagement w/your Customers',
    bullets: [
      'Personalized video messages to prospects (via email), extracted from short form sales video',
      'Viral videos highlights that can be used for B2B or B2C marketing (email/social).',
    ],
  },
  {
    icon: '🎯',
    title: 'Agencies & AdTech',
    partners: 'AKQA (WPP) • REQ • O3World • MediaOcean',
    description: 'Scale ad creative production with highlight extraction and fast variant generation.',
    bullets: [
      'Auto-detect best clips for ads and recap reels',
      'Generate channel-specific variants (6s, 15s, 30s)',
      'Spin press/thought-leadership into media-ready clips',
    ],
  },
];

export default function WhoShouldIntegrate() {
  return (
    <section className="py-12 border-t">
      <div className="container">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-3">Who Should Integrate Highlights</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          If your users create, store, or distribute video content, Highlights helps them use it more effectively.
        </p>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {CARDS.map((c) => (
            <div key={c.title} className="bg-white rounded-xl border p-6">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <div className="text-sm text-brand-purple font-medium mt-1">{c.partners}</div>
              <p className="text-sm text-muted-foreground mt-3">{c.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-brand-orange">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* CTAs after the 4 cards */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:partnerships@videoforce.ai"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-white font-semibold bg-gradient-to-r from-brand-purple to-brand-orange shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            Talk to Partnerships
          </a>
          <a
            href="/api"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted"
          >
            View API / MCP Docs
          </a>
        </div>
      </div>
    </section>
  );
}


