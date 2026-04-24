import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Production",
    label: "Our Facilities",
  },
  de: {
    heading: "Produktion",
    label: "Unsere Anlagen",
  },
  ru: {
    heading: "Производство",
    label: "Наши мощности",
  },
}

const galleryItems = {
  en: [
    { id: 1, image: "/images/gallery-1.jpg", title: "Production Lines" },
    { id: 2, image: "/images/gallery-2.jpg", title: "Laboratory" },
    { id: 3, image: "/images/gallery-3.jpg", title: "Warehouse" },
    { id: 4, image: "/images/gallery-4.jpg", title: "Quality Control" },
    { id: 5, image: "/images/gallery-5.jpg", title: "R&D" },
  ],
  de: [
    { id: 1, image: "/images/gallery-1.jpg", title: "Produktionslinien" },
    { id: 2, image: "/images/gallery-2.jpg", title: "Labor" },
    { id: 3, image: "/images/gallery-3.jpg", title: "Lager" },
    { id: 4, image: "/images/gallery-4.jpg", title: "Qualitätskontrolle" },
    { id: 5, image: "/images/gallery-5.jpg", title: "F&E" },
  ],
  ru: [
    { id: 1, image: "/images/gallery-1.jpg", title: "Технологические линии" },
    { id: 2, image: "/images/gallery-2.jpg", title: "Лаборатория" },
    { id: 3, image: "/images/gallery-3.jpg", title: "Складские помещения" },
    { id: 4, image: "/images/gallery-4.jpg", title: "Контроль качества" },
    { id: 5, image: "/images/gallery-5.jpg", title: "Разработка продукта" },
  ],
}

const placeholderColors = [
  "bg-charcoal/10",
  "bg-charcoal/15",
  "bg-charcoal/8",
  "bg-charcoal/12",
  "bg-charcoal/18",
]

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">{t.label}</p>
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden cursor-pointer"
            >
              <div className={`relative h-64 overflow-hidden ${placeholderColors[index]}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border border-white/0 group-hover:border-white/80 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xl">+</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border border-t-0 border-taupe/15">
                <small className="text-charcoal/70 font-medium">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />

            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
