interface FooterProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    copyright: "All rights reserved.",
    contacts: "Contacts",
    subtitle: "Innovative Chemical Solutions",
    quickLinks: "Navigation",
    about: "About",
    products: "Products",
    production: "Production",
    about2004: "Since 2004",
    privacyPolicy: "Privacy Policy",
    terms: "Terms",
    description: "Russian manufacturer of innovative chemical products with German heritage.",
  },
  de: {
    copyright: "Alle Rechte vorbehalten.",
    contacts: "Kontakte",
    subtitle: "Innovative Chemische Lösungen",
    quickLinks: "Navigation",
    about: "Über uns",
    products: "Produkte",
    production: "Produktion",
    about2004: "Seit 2004",
    privacyPolicy: "Datenschutz",
    terms: "AGB",
    description: "Russischer Hersteller innovativer Chemieprodukte mit deutschem Erbe.",
  },
  ru: {
    copyright: "Все права защищены.",
    contacts: "Контакты",
    subtitle: "Инновационная химическая продукция",
    quickLinks: "Навигация",
    about: "О компании",
    products: "Продукция",
    production: "Производство",
    about2004: "С 2004 года",
    privacyPolicy: "Политика конфиденциальности",
    terms: "Условия",
    description: "Российский производитель инновационной химической продукции с немецкими корнями.",
  },
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-charcoal text-warm-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-warm-white mb-3 font-serif text-2xl">Фольманн</h3>
            <small className="text-warm-white/60 block mb-2">{t.subtitle}</small>
            <span className="text-gold/70 text-xs tracking-widest uppercase">{t.about2004}</span>
            <p className="text-warm-white/50 text-xs mt-3 leading-relaxed">{t.description}</p>
          </div>

          <div>
            <h3 className="text-warm-white mb-4 text-sm font-medium uppercase tracking-wider">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-warm-white/70">
              <li>
                <a href="#biography" className="hover:text-gold transition-colors">{t.about}</a>
              </li>
              <li>
                <a href="#concerts" className="hover:text-gold transition-colors">{t.products}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">{t.production}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">{t.contacts}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-warm-white mb-4 text-sm font-medium uppercase tracking-wider">{t.contacts}</h3>
            <div className="space-y-2 text-sm text-warm-white/70">
              <p>info@follmann.ru</p>
              <p>+7 (495) 000-00-00</p>
              <p className="leading-relaxed">
                {language === "ru"
                  ? "г. Ногинск, Московская обл.\nБогородский Индустриальный парк «Технопарк»"
                  : language === "de"
                    ? "Noginsk, Region Moskau\nIndustriepark «Technopark»"
                    : "Noginsk, Moscow Region\nBogorodsky Industrial Park «Technopark»"}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-warm-white/50">
          <small>&copy; 2025 Фольманн. {t.copyright}</small>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-warm-white transition-colors">{t.privacyPolicy}</a>
            <a href="#" className="hover:text-warm-white transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
