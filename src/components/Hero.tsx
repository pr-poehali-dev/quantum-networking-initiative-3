interface HeroProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    title: "Follmann",
    subtitle: "Innovative Chemical Solutions",
    description: "A German-heritage manufacturer delivering precision-grade chemistry since 2004 — from our state-of-the-art facility in Moscow Region to your production line",
    cta: "Learn More",
    ctaContact: "Contact Us",
  },
  de: {
    title: "Follmann",
    subtitle: "Innovative Chemische Lösungen",
    description: "Seit 2004 liefern wir präzise Chemielösungen mit deutschem Qualitätsanspruch — von unserem modernen Werk in der Moskauer Region direkt zu Ihnen",
    cta: "Mehr erfahren",
    ctaContact: "Kontakt",
  },
  ru: {
    title: "Фольманн",
    subtitle: "Инновационная химическая продукция",
    description: "Российский производитель с немецкими корнями — с 2004 года создаём решения мирового уровня прямо здесь, в России, для ваших задач",
    cta: "О компании",
    ctaContact: "Связаться",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section id="hero" className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/ddbe49e1-ee4e-4117-9088-ddb48b995ca4/files/01344750-f71d-4cca-a8bf-2dc5ea9025a3.jpg"
          alt="Follmann производство"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = "none"
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70"></div>
        {/* Subtle grid overlay for industrial feel */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,169,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in-up">
            {language === "ru" ? "с 2004 года" : language === "de" ? "seit 2004" : "since 2004"}
          </p>
          <h1 className="text-white mb-6 animate-fade-in-up">{t.title}</h1>
          <h3 className="text-white font-light mb-8 animate-fade-in-up animation-delay-100">{t.subtitle}</h3>
          <div className="line-accent mb-10 animate-fade-in-up animation-delay-200"></div>
          <p className="text-white/85 font-light max-w-2xl mb-16 animate-fade-in-up animation-delay-300 text-lg leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap animate-fade-in-up animation-delay-400">
            <a
              href="#biography"
              className="px-8 py-3 bg-gold text-charcoal font-medium text-sm tracking-wide hover:bg-gold/90 transition-colors duration-300"
            >
              {t.cta}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/50 text-white font-medium text-sm tracking-wide hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-charcoal/80 backdrop-blur-sm border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gold/20 py-4">
            {[
              { num: "20+", label: language === "ru" ? "лет на рынке" : language === "de" ? "Jahre Erfahrung" : "years on market" },
              { num: "100+", label: language === "ru" ? "специалистов" : language === "de" ? "Spezialisten" : "specialists" },
              { num: "4", label: language === "ru" ? "склада в России" : language === "de" ? "Lager in Russland" : "warehouses in Russia" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-gold text-2xl font-serif">{stat.num}</div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}