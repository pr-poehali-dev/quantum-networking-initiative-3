interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Our Expertise",
    subheading: "Product Categories",
    learnMore: "Request Info",
    label: "What we produce",
  },
  de: {
    heading: "Unsere Kompetenz",
    subheading: "Produktkategorien",
    learnMore: "Anfrage senden",
    label: "Was wir produzieren",
  },
  ru: {
    heading: "Наша экспертиза",
    subheading: "Продуктовые направления",
    learnMore: "Запросить информацию",
    label: "Что мы производим",
  },
}

const products = {
  en: [
    {
      category: "Industrial Adhesives",
      description: "High-performance adhesive systems for manufacturing, construction, and assembly applications",
      detail: "Noginsk Production Complex",
    },
    {
      category: "Specialty Coatings",
      description: "Protective and functional coatings developed for demanding industrial environments",
      detail: "Noginsk Production Complex",
    },
    {
      category: "Chemical Compounds",
      description: "Custom-formulated chemical compounds tailored to specific production processes",
      detail: "In-House R&D Laboratory",
    },
    {
      category: "Technical Sealants",
      description: "Precision sealant solutions ensuring reliable performance under extreme conditions",
      detail: "Noginsk Production Complex",
    },
  ],
  de: [
    {
      category: "Industrieklebstoffe",
      description: "Hochleistungsklebstoffsysteme für Fertigung, Bau und Montageanwendungen",
      detail: "Produktionskomplex Noginsk",
    },
    {
      category: "Spezielle Beschichtungen",
      description: "Schutz- und Funktionsbeschichtungen für anspruchsvolle Industrieumgebungen",
      detail: "Produktionskomplex Noginsk",
    },
    {
      category: "Chemische Verbindungen",
      description: "Maßgeschneiderte chemische Verbindungen für spezifische Produktionsprozesse",
      detail: "F&E-Labor",
    },
    {
      category: "Technische Dichtstoffe",
      description: "Präzise Dichtlösungen für zuverlässige Leistung unter extremen Bedingungen",
      detail: "Produktionskomplex Noginsk",
    },
  ],
  ru: [
    {
      category: "Промышленные клеи",
      description: "Высокоэффективные клеевые системы для производства, строительства и монтажных работ",
      detail: "Производственный комплекс, г. Ногинск",
    },
    {
      category: "Специальные покрытия",
      description: "Защитные и функциональные покрытия для сложных промышленных условий эксплуатации",
      detail: "Производственный комплекс, г. Ногинск",
    },
    {
      category: "Химические составы",
      description: "Составы по индивидуальным рецептурам, разработанные под конкретные производственные процессы",
      detail: "Собственная лаборатория R&D",
    },
    {
      category: "Технические герметики",
      description: "Прецизионные герметизирующие решения с надёжными характеристиками в экстремальных условиях",
      detail: "Производственный комплекс, г. Ногинск",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const productList = products[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">{t.label}</p>
          <h2 className="text-warm-white mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-0">
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-warm-white/10 last:border-b-0 group hover:bg-warm-white/5 transition-colors duration-300 px-4 -mx-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-center">
                <div>
                  <span className="text-gold/60 text-xs font-mono">0{idx + 1}</span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-warm-white mb-2 text-xl">{product.category}</h3>
                  <p className="text-warm-white/60 text-sm leading-relaxed">{product.description}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <small className="text-taupe text-xs">{product.detail}</small>
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium group-hover:translate-x-1 duration-300">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
