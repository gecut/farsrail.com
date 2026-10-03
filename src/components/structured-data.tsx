import type { Locale } from "@/i18n";

type StructuredDataProps = {
  locale: Locale;
};

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = "https://farsrail.com";
  const isTr = locale === "tr";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${baseUrl}/#organization`,
    name: "Khalij Fars Rail",
    alternateName: [
      "خلیج فارس ریل",
      "Khalij Fars Rail International Transportation",
      "Khalij Fars Rail Uluslararası Taşımacılık",
    ],
    url: baseUrl,
    logo: `${baseUrl}/logo.webp`,
    description: isTr
      ? "Khalij Fars Rail, BDT ülkeleri, Türkiye, İran ve Orta Asya genelinde uluslararası demiryolu yük taşımacılığı ve lojistik çözümleri sunar."
      : "Khalij Fars Rail International Transportation specializes in international rail freight services connecting Iran, CIS countries, Turkey, Afghanistan, and the Middle East.",
    foundingDate: "1999",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shahid Sadeghi 17, No. 7",
      addressLocality: "Mashhad",
      addressRegion: "Razavi Khorasan",
      addressCountry: "IR",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-554-739-6001",
        contactType: "customer service",
        availableLanguage: ["English", "Turkish", "Persian", "Russian"],
        areaServed: [
          "IR",
          "TR",
          "RU",
          "KZ",
          "UZ",
          "TM",
          "TJ",
          "KG",
          "AF",
        ],
      },
      {
        "@type": "ContactPoint",
        telephone: "+90-552-828-3985",
        contactType: "operations",
        availableLanguage: ["English", "Turkish", "Persian", "Russian"],
      },
    ],
    sameAs: [
      "https://instagram.com/Khaliffarsraillogistic",
      "https://instagram.com/mohamad.ghandchi",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Khalij Fars Rail",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "Turkish",
        alternateName: "tr",
      },
    ],
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isTr ? "Lojistik Hizmetleri" : "Logistics & Freight Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: isTr ? "Demiryolu Taşımacılığı" : "International Rail Transportation",
        description: isTr
          ? "BDT ülkeleri, İran ve Türkiye genelinde tüm vagon tiplerinde güvenilir ve zamanında demiryolu yük taşımacılığı."
          : "All types of rail wagon services across CIS countries, Iran, and regional corridors with timely delivery.",
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        serviceType: "Rail Freight",
        areaServed: ["CIS Countries", "Iran", "Turkey", "Afghanistan"],
      },
      {
        "@type": "Service",
        position: 2,
        name: isTr ? "Transit ve Koridor Hizmetleri" : "Transit & Regional Corridors",
        description: isTr
          ? "BDT ülkeleri ve bölgesel koridorlarda güvenilir transit taşımacılık çözümleri."
          : "Reliable transit freight solutions across CIS countries and Central Asian transport corridors.",
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        serviceType: "Transit Logistics",
      },
      {
        "@type": "Service",
        position: 3,
        name: isTr ? "Vagon Tedarik ve Rezervasyonu" : "Wagon Supply & Reservation",
        description: isTr
          ? "Yük ihtiyaçlarınızı karşılamak için kapalı, açık, platform ve tanker vagon tedarik ve rezervasyon hizmeti."
          : "Wagon supply and reservation of all types (covered boxcars, open wagons, flat platforms, tank wagons).",
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        serviceType: "Wagon Reservation",
      },
      {
        "@type": "Service",
        position: 4,
        name: isTr ? "Gümrükleme ve Dokümantasyon" : "Customs Clearance & Documentation",
        description: isTr
          ? "Tam mevzuat uyumu, sınır geçişleri ve limanlarda hızlı gümrükleme ve eksiksiz dokümantasyon desteği."
          : "Fast and compliant customs clearance and international documentation support at border crossings and ports.",
        provider: {
          "@id": `${baseUrl}/#organization`,
        },
        serviceType: "Customs Brokerage",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: isTr
      ? [
          {
            "@type": "Question",
            name: "Khalij Fars Rail hangi uluslararası demiryolu rotalarını kapsamaktadır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Khalij Fars Rail; İran terminalleri (Meşhed, Serahs, Bender Abbas, İnçe Burun, Lotf Abad, Tahran, Yezd, İsfahan) üzerinden BDT ülkeleri (Rusya, Kazakistan, Özbekistan, Türkmenistan, Kırgızistan, Tacikistan), Türkiye ve Afganistan rotalarını birbirine bağlamaktadır.",
            },
          },
          {
            "@type": "Question",
            name: "Hangi vagon tipleri için rezervasyon yapılabilir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kapalı vagonlar, lobi/açık vagonlar, konteyner platformları (düz vagonlar) ve tanker vagonlar dahil olmak üzere her türlü yük tipine uygun vagon tedarik ve kiralama hizmeti sunulmaktadır.",
            },
          },
          {
            "@type": "Question",
            name: "Gümrük ve transit işlemleri nasıl yürütülür?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "İran ve sınır kapılarında (Serahs, İnçe Burun, Bender Abbas) tam mevzuat uyumu, transit izinleri, sigorta ve dokümantasyon süreçleri profesyonel lojistik ekibimiz tarafından yürütülmektedir.",
            },
          },
          {
            "@type": "Question",
            name: "Uluslararası demiryolu navlun teklifi nasıl alınır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "+90 554 739 6001 ve +90 552 828 3985 numaralı telefonlardan veya Meşhed, Tahran, Bender Abbas ve Serahs ofislerimizden doğrudan uzmanlarımızla iletişime geçebilirsiniz.",
            },
          },
        ]
      : [
          {
            "@type": "Question",
            name: "Which international rail corridors and routes does Khalij Fars Rail operate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Khalij Fars Rail connects key Iranian terminals (Mashhad, Motahari, Sarakhs, Bandar Abbas, Inche Borun, Lotf Abad, Tehran, Yazd, Isfahan) with destination markets across Russia, Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan, Turkey, and Afghanistan.",
            },
          },
          {
            "@type": "Question",
            name: "What types of rail wagons are available for booking and reservation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide and manage all types of railway freight wagons including covered boxcars, high-sided open wagons, container flatbed platforms, and specialized tank wagons for diverse cargo requirements across standard and broad-gauge networks.",
            },
          },
          {
            "@type": "Question",
            name: "How are customs clearance and transit procedures managed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our dedicated logistics team handles end-to-end customs clearance, transit documentation, cross-border compliance, cargo insurance, and first/last mile road delivery at strategic border crossings and ports.",
            },
          },
          {
            "@type": "Question",
            name: "How can I request an international rail freight quotation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can request freight quotes and transit schedules by contacting our coordinators at +90 554 739 6001 or +90 552 828 3985, or by visiting our offices in Mashhad, Tehran, Bandar Abbas, and Sarakhs.",
            },
          },
        ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
