import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    subheading: "Get in Touch",
    label: "We're here to help",
    email: "Email",
    phone: "Phone",
    message: "Your Message",
    send: "Send Request",
    location: "Head Office",
    name: "Your Name",
    company: "Company",
    successMessage: "Request sent! We will contact you shortly.",
    locationValue: "Noginsk, Moscow Region",
    phoneValue: "+7 (495) 000-00-00",
    emailValue: "info@follmann.ru",
  },
  de: {
    heading: "Kontakt",
    subheading: "Nehmen Sie Kontakt auf",
    label: "Wir helfen Ihnen gerne",
    email: "E-Mail",
    phone: "Telefon",
    message: "Ihre Nachricht",
    send: "Anfrage senden",
    location: "Hauptbüro",
    name: "Ihr Name",
    company: "Unternehmen",
    successMessage: "Anfrage gesendet! Wir melden uns in Kürze.",
    locationValue: "Noginsk, Region Moskau",
    phoneValue: "+7 (495) 000-00-00",
    emailValue: "info@follmann.ru",
  },
  ru: {
    heading: "Контакты",
    subheading: "Свяжитесь с нами",
    label: "Мы готовы помочь",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Ваше сообщение",
    send: "Отправить запрос",
    location: "Головной офис",
    name: "Ваше имя",
    company: "Компания",
    successMessage: "Запрос отправлен! Мы свяжемся с вами в ближайшее время.",
    locationValue: "г. Ногинск, Московская область",
    phoneValue: "+7 (495) 000-00-00",
    emailValue: "info@follmann.ru",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:info@follmann.ru?subject=${encodeURIComponent(`Запрос от ${formData.name} (${formData.company})`)}&body=${encodeURIComponent(`От: ${formData.email}\nКомпания: ${formData.company}\n\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", company: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-4">{t.label}</p>
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block uppercase tracking-wider text-xs">{t.email}</small>
              <p className="text-charcoal text-lg">{t.emailValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block uppercase tracking-wider text-xs">{t.phone}</small>
              <p className="text-charcoal text-lg">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block uppercase tracking-wider text-xs">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
              <p className="text-charcoal/60 text-sm mt-1">
                {language === "ru"
                  ? "Богородский Индустриальный парк «Технопарк»"
                  : language === "de"
                    ? "Industriepark Bogorodsky «Technopark»"
                    : "Bogorodsky Industrial Park «Technopark»"}
              </p>
            </div>

            {/* Trust badges */}
            <div className="pt-4 border-t border-taupe/20">
              <div className="space-y-3">
                {[
                  language === "ru" ? "✓ Ответ в течение 1 рабочего дня" : language === "de" ? "✓ Antwort innerhalb 1 Werktages" : "✓ Response within 1 business day",
                  language === "ru" ? "✓ Индивидуальные условия сотрудничества" : language === "de" ? "✓ Individuelle Kooperationsbedingungen" : "✓ Individual cooperation terms",
                  language === "ru" ? "✓ Бесплатные образцы по запросу" : language === "de" ? "✓ Kostenlose Muster auf Anfrage" : "✓ Free samples on request",
                ].map((item, i) => (
                  <p key={i} className="text-charcoal/70 text-sm">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t.company}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold transition-colors resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-4 font-medium hover:bg-charcoal/90 transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
