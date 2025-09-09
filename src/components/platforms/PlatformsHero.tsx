export default function PlatformsHero() {
  return (
    <section className="pt-28 pb-12 text-center">
      <div className="container max-w-5xl">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
          Highlights API for Platform Partners
        </h1>
        <p className="mt-5 text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Give your users the power to automatically extract high‑converting moments from their
          video content. Our patented technology identifies hooks, social proof, and CTAs that drive action.
        </p>
        {/* Mini demo preview - matches home hero styling */}
        <div className="mt-8 mx-auto max-w-xl">
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200/50 flex items-center justify-center">
              {/* Play Button */}
              <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 ml-1">
                  <path d="M8 5L19 12L8 19V5Z" fill="currentColor"/>
                </svg>
              </div>
              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">2:30</div>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


