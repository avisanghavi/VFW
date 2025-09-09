const CARDS = [
  { value: '3X', label: 'More Content Created per user per month' },
  { value: '25%', label: 'Higher Premium Conversion with video features' },
  { value: '$0', label: 'Infrastructure Investment — we handle everything' },
];

export default function ValueProps() {
  return (
    <section className="py-12">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div key={c.value} className="text-center p-6">
              <div className="text-4xl lg:text-5xl font-extrabold text-gradient mb-2">{c.value}</div>
              <div className="text-sm lg:text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: c.label.replace(/\n/g, '<br/>') }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


