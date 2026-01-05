"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    "nav.howItWorks": "Comment ça marche",
    "nav.benefits": "Avantages",
    "nav.contact": "Contact",
    "nav.becomeMerchant": "Devenir Commerçant",
    "hero.badge": "Solution 100% camerounaise",
    "hero.title": "Acceptez les paiements mobiles sans frais",
    "hero.subtitle":
      "EnCash permet à votre commerce d'accepter MTN Mobile Money et Orange Money instantanément. Un simple scan, zéro frais, argent direct dans votre compte.",
    "hero.cta.start": "Commencer Maintenant",
    "hero.cta.scan": "Scanner un QR Code",
    "stats.fees": "Frais de transaction",
    "stats.time": "Temps de paiement",
    "stats.uptime": "Disponibilité",
    "stats.secure": "Sécurisé",
    "how.title": "Comment ça marche ?",
    "how.subtitle": "En 3 étapes simples, commencez à accepter les paiements mobiles dans votre commerce",
    "how.step1.title": "Inscrivez-vous",
    "how.step1.desc": "Créez votre compte commerçant en moins de 5 minutes. Aucun document compliqué requis.",
    "how.step2.title": "Recevez votre plaque QR",
    "how.step2.desc": "Nous vous livrons gratuitement votre plaque QR personnalisée avec le nom de votre commerce.",
    "how.step3.title": "Encaissez instantanément",
    "how.step3.desc": "Vos clients scannent, paient, et l'argent arrive directement dans votre Mobile Money.",
    "pay.merchantDetails": "Détails du paiement",
    "pay.merchantId": "ID Marchand",
    "pay.fees": "Frais EnCash",
    "pay.free": "Gratuit (0 FCFA)",
    "pay.chooseMethod": "Choisissez votre mode de paiement",
    "pay.instant": "Le paiement sera instantané",
    "pay.secureOrange": "Sécurisé par Orange",
    "pay.secureFooter": "Paiement 100% sécurisé par EnCash Cameroun",
    "pay.terms": "En continuant, vous acceptez les conditions de service de EnCash.",
  },
  en: {
    "nav.howItWorks": "How it works",
    "nav.benefits": "Benefits",
    "nav.contact": "Contact",
    "nav.becomeMerchant": "Become a Merchant",
    "hero.badge": "100% Cameroonian Solution",
    "hero.title": "Accept mobile payments with zero fees",
    "hero.subtitle":
      "EnCash allows your business to accept MTN Mobile Money and Orange Money instantly. A simple scan, zero fees, money directly in your account.",
    "hero.cta.start": "Start Now",
    "hero.cta.scan": "Scan a QR Code",
    "stats.fees": "Transaction fees",
    "stats.time": "Payment time",
    "stats.uptime": "Availability",
    "stats.secure": "Secure",
    "how.title": "How it works?",
    "how.subtitle": "In 3 simple steps, start accepting mobile payments in your business",
    "how.step1.title": "Sign Up",
    "how.step1.desc": "Create your merchant account in less than 5 minutes. No complicated documents required.",
    "how.step2.title": "Get your QR plate",
    "how.step2.desc": "We deliver your personalized QR plate with your business name for free.",
    "how.step3.title": "Collect instantly",
    "how.step3.desc": "Your customers scan, pay, and the money goes directly into your Mobile Money.",
    "pay.merchantDetails": "Payment Details",
    "pay.merchantId": "Merchant ID",
    "pay.fees": "EnCash Fees",
    "pay.free": "Free (0 FCFA)",
    "pay.chooseMethod": "Choose your payment method",
    "pay.instant": "Payment will be instant",
    "pay.secureOrange": "Secured by Orange",
    "pay.secureFooter": "100% secure payment by EnCash Cameroon",
    "pay.terms": "By continuing, you accept EnCash's terms of service.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)["fr"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
