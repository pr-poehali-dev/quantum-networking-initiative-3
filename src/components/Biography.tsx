interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Company",
    label: "Our Story",
    paragraphs: [
      "Follmann was founded in 2004 as a subsidiary of a German family-owned company, bringing European standards of quality and engineering culture to the Russian market. Over the years, the company has developed its own strategic direction while preserving the traditionally high level of quality and customer service that defined its origins.",
      "All production and product development are carried out in Russia, which allows Follmann solutions to fully meet the current and future needs of Russian customers. Our team of over 100 specialists — 80% of whom hold relevant higher education degrees and have successful industry experience — is our greatest asset.",
      "Today, the production complex is located 35 km east of Moscow in the Bogorodsky Industrial Park «Technopark» (Noginsk) and includes modern multifunctional production lines, an in-house laboratory equipped with measurement and testing instruments, and high-tech warehouses with controlled microclimate in the Moscow region, St. Petersburg, Rostov-on-Don, and Novosibirsk.",
    ],
  },
  de: {
    heading: "Über das Unternehmen",
    label: "Unsere Geschichte",
    paragraphs: [
      "Follmann wurde 2004 als Tochterunternehmen eines deutschen Familienunternehmens gegründet und brachte europäische Qualitätsstandards und Ingenieurskultur auf den russischen Markt. Im Laufe der Jahre hat das Unternehmen eine eigene strategische Richtung entwickelt, während es das traditionell hohe Qualitätsniveau und den Kundenservice beibehielt.",
      "Alle Produktion und Produktentwicklung erfolgen in Russland, was es Follmann ermöglicht, die aktuellen und zukünftigen Bedürfnisse russischer Kunden vollständig zu erfüllen. Unser Team aus über 100 Spezialisten — 80 % davon mit einschlägigem Hochschulabschluss und erfolgreicher Branchenerfahrung — ist unser wertvollstes Kapital.",
      "Heute befindet sich der Produktionskomplex 35 km östlich von Moskau im Industriepark Bogorodsky «Technopark» (Noginsk) und umfasst moderne multifunktionale Produktionslinien, ein eigenes Labor sowie Hochtech-Lager mit kontrolliertem Mikroklima in der Moskauer Region, St. Petersburg, Rostow am Don und Nowosibirsk.",
    ],
  },
  ru: {
    heading: "О компании",
    label: "Наша история",
    paragraphs: [
      "«Фольманн» начал работу в 2004 году как дочернее предприятие немецкой семейной компании, принося европейские стандарты качества и инженерной культуры на российский рынок. В последние годы компания следует собственному вектору развития, при этом сохраняя традиционно высокие качество и сервис.",
      "Выпуск продукции и её разработка ведутся в России, поэтому решения «Фольманн» полностью соответствуют потребностям заказчиков и учитывают их перспективные запросы. Более 100 специалистов — 80% из которых имеют высшее профильное образование и успешный опыт работы в отрасли — это наш главный актив.",
      "Производственный комплекс расположен в 35 км к востоку от Москвы в Богородском Индустриальном парке «Технопарк» (г. Ногинск). В его состав входят современные многофункциональные технологические линии, собственная лаборатория с измерительным и испытательным оборудованием, а также высокотехнологичные склады с управляемым микроклиматом в Подмосковье, Санкт-Петербурге, Ростове-на-Дону и Новосибирске.",
    ],
  },
}

const advantages = {
  en: [
    { icon: "🏭", title: "Own Production", text: "Modern multifunctional lines in Noginsk" },
    { icon: "🔬", title: "In-House Lab", text: "Full measurement and testing equipment" },
    { icon: "🚚", title: "4 Warehouses", text: "Moscow, St. Petersburg, Rostov, Novosibirsk" },
    { icon: "🎓", title: "Expert Team", text: "100+ specialists, 80% with specialized degrees" },
  ],
  de: [
    { icon: "🏭", title: "Eigene Produktion", text: "Moderne Linien in Noginsk" },
    { icon: "🔬", title: "Eigenes Labor", text: "Vollständige Mess- und Prüfausstattung" },
    { icon: "🚚", title: "4 Lager", text: "Moskau, St. Petersburg, Rostow, Nowosibirsk" },
    { icon: "🎓", title: "Expertenteam", text: "100+ Spezialisten, 80% mit Fachausbildung" },
  ],
  ru: [
    { icon: "🏭", title: "Собственное производство", text: "Современные линии в г. Ногинск" },
    { icon: "🔬", title: "Собственная лаборатория", text: "Полное измерительное и испытательное оборудование" },
    { icon: "🚚", title: "4 склада", text: "Москва, Петербург, Ростов, Новосибирск" },
    { icon: "🎓", title: "Экспертная команда", text: "100+ специалистов, 80% с профильным образованием" },
  ],
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]
  const adv = advantages[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">{t.label}</p>
            <h2 className="text-charcoal mb-12 text-pretty">{t.heading}</h2>
            <div className="space-y-6">
              {t.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-charcoal/80 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-20">
            {adv.map((item, i) => (
              <div
                key={i}
                className="p-6 border border-taupe/20 hover:border-gold/40 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-charcoal mb-2 text-base font-medium">{item.title}</h3>
                <p className="text-charcoal/60 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
