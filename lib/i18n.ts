export type Lang = "ua" | "pl" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ua", label: "UA" },
  { code: "pl", label: "PL" },
  { code: "en", label: "EN" },
];

type Dict = {
  nav: {
    services: string;
    work: string;
    process: string;
    pricing: string;
    reviews: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleA: string;
    rotating: string[];
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string; tag: string }[];
  };
  work: {
    title: string;
    subtitle: string;
    items: { title: string; cat: string; link?: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    period: string;
    cta: string;
    plans: { name: string; price: string; desc: string; features: string[] }[];
  };
  reviews: {
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    service: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    services: string[];
    attachFiles: string;
    supportedFormats: string;
    maxFiles: string;
    selectedFiles: string;
  };
  footer: {
    tagline: string;
    rights: string;
    nav: string;
    contact: string;
    address: string;
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      pricing: "Pricing",
      reviews: "Reviews",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      badge: "Digital agency · Available for new projects",
      titleA: "We build digital experiences that",
      rotating: ["convert.", "inspire.", "scale.", "stand out."],
      titleB: "",
      subtitle:
        "Landing pages, web apps, branding and growth marketing — crafted with obsessive detail and engineered to move fast.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View our work",
      stats: [
        { value: "40+", label: "Projects shipped" },
        // { value: "40+", label: "Happy clients" },
        { value: "7d", label: "Avg. launch time" },
        { value: "4.7", label: "Client rating" },
      ],
    },
    features: {
      title: "Why teams choose us",
      subtitle: "A studio built for speed, craft and measurable results.",
      items: [
        {
          title: "Lightning fast",
          desc: "Optimized builds that load instantly and rank higher.",
        },
        {
          title: "Pixel-perfect",
          desc: "Design obsessed — every detail is intentional.",
        },
        {
          title: "Conversion-first",
          desc: "We design for outcomes, not just looks.",
        },
        {
          title: "End-to-end",
          desc: "Strategy, design, development and growth under one roof.",
        },
      ],
    },
    services: {
      title: "What we do",
      subtitle: "Full-stack creative and engineering services.",
      items: [
        {
          title: "Landing Pages",
          desc: "High-converting pages that turn visitors into customers.",
          tag: "Web",
        },
        {
          title: "Web Applications",
          desc: "Scalable, modern apps built on the latest stack.",
          tag: "Dev",
        },
        {
          title: "Branding & Identity",
          desc: "Logos, systems and brand guidelines that resonate.",
          tag: "Brand",
        },
        // {
        //   title: "Print Design",
        //   desc: "Business cards, posters and packaging that pop.",
        //   tag: "Print",
        // },
        {
          title: "Google Ads",
          desc: "Performance campaigns that maximize every dollar.",
          tag: "Growth",
        },
        {
          title: "Gift Surprise Sites",
          desc: "Interactive, personalized websites for unforgettable moments.",
          tag: "Special",
        },
      ],
    },
    work: {
      title: "Selected work",
      subtitle: "A glimpse of recent projects we are proud of.",
      items: [
        {
          title: "Our Love Story",
          cat: "Surprise Site",
          link: "https://love.tymchuk-digital.com/",
        },
        {
          title: "Beauty Studio",
          cat: "Landing Page",
          link: "https://beauty.tymchuk-digital.com/",
        },
        {
          title: "Landing Page",
          cat: "Landing Page",
          link: "https://portfolio.tymchuk-digital.com/",
        },
        {
          title: "Lega Office",
          cat: "Landing Page",
          link: "https://lega-office.tymchuk-digital.com",
        },
        // { title: "Nova Fintech", cat: "Web App" },
        // { title: "Bloom Studio", cat: "Branding" },
        // { title: "Pulse Fitness", cat: "Landing Page" },
        // { title: "Aurora Gift", cat: "Surprise Site" },
        // { title: "Vertex Labs", cat: "Web App" },
        // { title: "Lumen Ads", cat: "Google Ads" },
      ],
    },
    process: {
      title: "How we work",
      subtitle: "A clear, collaborative process from idea to launch.",
      steps: [
        {
          title: "Discover",
          desc: "We dive into your goals, audience and brand.",
        },
        {
          title: "Design",
          desc: "We craft prototypes and refine until it feels right.",
        },
        {
          title: "Build",
          desc: "We engineer fast, robust and scalable solutions.",
        },
        {
          title: "Launch & Grow",
          desc: "We ship, measure and optimize for results.",
        },
      ],
    },
    pricing: {
      title: "Simple pricing",
      subtitle: "Transparent packages that scale with your ambition.",
      popular: "Most popular",
      period: "starting",
      cta: "Choose plan",
      plans: [
        {
          name: "Starter",
          price: "$300",
          desc: "Perfect for a sleek landing page.",
          features: [
            "1 landing page",
            "Responsive design",
            "Basic SEO",
            "7-day delivery",
          ],
        },
        {
          name: "Growth",
          price: "$1,000",
          desc: "For brands ready to scale.",
          features: [
            "Multi-page site or web app",
            "Branding kit",
            "Advanced SEO",
            "Analytics setup",
            "Priority support",
          ],
        },
        {
          name: "Custom",
          price: "Privately",
          desc: "Tailored to your unique vision.",
          features: [
            "Custom web app",
            "Full brand identity",
            "Google Ads campaigns",
            "Dedicated team",
            "Ongoing growth",
          ],
        },
      ],
    },
    reviews: {
      title: "Loved by clients",
      subtitle: "Real words from people we have worked with.",
      items: [
        {
          quote:
            "They delivered beyond expectations. Our conversions doubled in a month.",
          name: "Sarah Klein",
          role: "CEO, Nova",
        },
        {
          quote:
            "The most detail-obsessed team I have ever worked with. Stunning results.",
          name: "Marco Ruiz",
          role: "Founder, Bloom",
        },
        {
          quote:
            "Fast, professional and incredibly creative. Highly recommended.",
          name: "Olena Petrova",
          role: "CMO, Pulse",
        },
      ],
    },
    faq: {
      title: "Frequently asked",
      subtitle: "Everything you need to know before we start.",
      items: [
        {
          q: "How long does a project take?",
          a: "Landing pages typically take 5–7 days. Larger web apps and branding projects range from 2–6 weeks depending on scope.",
        },
        {
          q: "Do you work with international clients?",
          a: "Absolutely. We work with clients worldwide and communicate in English, Ukrainian and Polish.",
        },
        {
          q: "What is a gift surprise website?",
          a: "A personalized, interactive website created as a unique gift — perfect for proposals, birthdays and special moments.",
        },
        {
          q: "How do payments work?",
          a: "We typically take 50% upfront and 50% on delivery. Custom arrangements are available for larger projects.",
        },
      ],
    },
    contact: {
      title: "Let's build something great",
      subtitle:
        "Tell us about your project and we will get back within 24 hours.",
      name: "Your name",
      email: "Email or phone",
      service: "Service",
      message: "Tell us about your project",
      submit: "Send message",
      sending: "Sending...",
      success: "Thank you! We received your message and will reply soon.",
      error: "Something went wrong. Please try again.",
      services: [
        "Landing Page",
        "Web App",
        "Branding",
        // "Print Design",
        "Google Ads",
        "Gift Surprise Site",
        "Other",
      ],
      attachFiles: "Attach files",
      supportedFormats: "JPG, PNG, WEBP, PDF, DOC, DOCX, ZIP, RAR, 7Z, Audio",
      maxFiles: "Max 10 files • up to 20 MB each",
      selectedFiles: "Selected",
    },
    footer: {
      tagline: "Crafting digital experiences that convert, inspire and scale.",
      rights: "All rights reserved.",
      nav: "Navigation",
      contact: "Contact",
      address: "59-300 Lubin, Poland",
    },
  },
  ua: {
    nav: {
      services: "Послуги",
      work: "Роботи",
      process: "Процес",
      pricing: "Ціни",
      reviews: "Відгуки",
      contact: "Контакти",
      cta: "Почати проєкт",
    },
    hero: {
      badge: "Діджитал-агенція · Відкриті до нових проєктів",
      titleA: "Ми створюємо цифрові продукти, що",
      rotating: ["конвертують.", "надихають.", "ростуть.", "вирізняються."],
      titleB: "",
      subtitle:
        "Лендінги, вебзастосунки, брендинг та маркетинг — зроблено з увагою до деталей і швидкістю.",
      ctaPrimary: "Почати проєкт",
      ctaSecondary: "Наші роботи",
      stats: [
        { value: "40+", label: "Реалізованих проєктів" },
        // { value: "40+", label: "Задоволених клієнтів" },
        { value: "7д", label: "Сер. час запуску" },
        { value: "4.7", label: "Рейтинг клієнтів" },
      ],
    },
    features: {
      title: "Чому обирають нас",
      subtitle: "Студія, створена для швидкості, якості та результату.",
      items: [
        {
          title: "Блискавично швидко",
          desc: "Оптимізовані сайти, що миттєво завантажуються.",
        },
        {
          title: "Піксельна точність",
          desc: "Кожна деталь продумана до дрібниць.",
        },
        {
          title: "Орієнтація на конверсії",
          desc: "Дизайн заради результату, а не лише краси.",
        },
        {
          title: "Повний цикл",
          desc: "Стратегія, дизайн, розробка та маркетинг разом.",
        },
      ],
    },
    services: {
      title: "Що ми робимо",
      subtitle: "Креативні та технічні послуги повного циклу.",
      items: [
        {
          title: "Лендінги",
          desc: "Сторінки, що перетворюють відвідувачів на клієнтів.",
          tag: "Веб",
        },
        {
          title: "Вебзастосунки",
          desc: "Сучасні масштабовані застосунки на новому стеку.",
          tag: "Розробка",
        },
        {
          title: "Брендинг",
          desc: "Логотипи, системи та гайдлайни, що запамʼятовуються.",
          tag: "Бренд",
        },
        // {
        //   title: "Поліграфія",
        //   desc: "Візитки, постери та упаковка, що вражають.",
        //   tag: "Друк",
        // },
        {
          title: "Google Ads",
          desc: "Кампанії, що максимізують кожну гривню.",
          tag: "Зростання",
        },
        {
          title: "Сайти-сюрпризи",
          desc: "Інтерактивні персональні сайти для особливих моментів.",
          tag: "Особливе",
        },
      ],
    },
    work: {
      title: "Обрані роботи",
      subtitle: "Кілька проєктів, якими ми пишаємось.",
      items: [
        {
          title: "Our Love Story",
          cat: "Сайт-сюрприз",
          link: "https://love.tymchuk-digital.com/",
        },
        {
          title: "Beauty Studio",
          cat: "Лендінг",
          link: "https://beauty.tymchuk-digital.com/",
        },
        {
          title: "Portolio",
          cat: "Лендінг",
          link: "https://portfolio.tymchuk-digital.com/",
        },
        {
          title: "Lega Office",
          cat: "Лендінг",
          link: "https://lega-office.tymchuk-digital.com",
        },
        // { title: "Vertex Labs", cat: "Вебзастосунок" },
        // { title: "Lumen Ads", cat: "Google Ads" },
      ],
    },
    process: {
      title: "Як ми працюємо",
      subtitle: "Прозорий процес від ідеї до запуску.",
      steps: [
        {
          title: "Дослідження",
          desc: "Занурюємось у ваші цілі, аудиторію та бренд.",
        },
        {
          title: "Дизайн",
          desc: "Створюємо прототипи й доопрацьовуємо до ідеалу.",
        },
        { title: "Розробка", desc: "Будуємо швидкі та надійні рішення." },
        {
          title: "Запуск і ріст",
          desc: "Запускаємо, вимірюємо та оптимізуємо.",
        },
      ],
    },
    pricing: {
      title: "Прості ціни",
      subtitle: "Прозорі пакети, що ростуть разом з вами.",
      popular: "Найпопулярніший",
      period: "від",
      cta: "Обрати",
      plans: [
        {
          name: "Старт",
          price: "$300",
          desc: "Ідеально для стильного лендінгу.",
          features: [
            "1 лендінг",
            "Адаптивний дизайн",
            "Базове SEO",
            "Здача за 7 днів",
          ],
        },
        {
          name: "Зростання",
          price: "$1,000",
          desc: "Для брендів, готових масштабуватись.",
          features: [
            "Багатосторінковий сайт чи застосунок",
            "Брендинг-кіт",
            "Просунуте SEO",
            "Налаштування аналітики",
            "Пріоритетна підтримка",
          ],
        },
        {
          name: "Індивідуально",
          price: "Особисто",
          desc: "Під вашу унікальну ідею.",
          features: [
            "Кастомний застосунок",
            "Повна айдентика",
            "Google Ads кампанії",
            "Виділена команда",
            "Постійний ріст",
          ],
        },
      ],
    },
    reviews: {
      title: "Нас люблять клієнти",
      subtitle: "Справжні відгуки тих, з ким ми працювали.",
      items: [
        {
          quote:
            "Результат перевершив очікування. Конверсії зросли вдвічі за місяць.",
          name: "Сара Кляйн",
          role: "CEO, Nova",
        },
        {
          quote: "Найуважніша до деталей команда. Приголомшливий результат.",
          name: "Марко Руїз",
          role: "Засновник, Bloom",
        },
        {
          quote: "Швидко, професійно та неймовірно креативно. Рекомендую.",
          name: "Олена Петрова",
          role: "CMO, Pulse",
        },
      ],
    },
    faq: {
      title: "Часті питання",
      subtitle: "Все, що варто знати перед стартом.",
      items: [
        {
          q: "Скільки триває проєкт?",
          a: "Лендінги зазвичай 5-7 днів. Більші застосунки та брендинг — від 2 до 6 тижнів залежно від обсягу.",
        },
        {
          q: "Чи працюєте з клієнтами з-за кордону?",
          a: "Звісно. Працюємо зі всім світом і спілкуємось англійською, українською та польською.",
        },
        {
          q: "Що таке сайт-сюрприз?",
          a: "Персональний інтерактивний сайт як унікальний подарунок — для освідчень, днів народження та особливих моментів.",
        },
        {
          q: "Як відбувається оплата?",
          a: "Зазвичай 50% передоплата і 50% при здачі. Для великих проєктів — індивідуальні умови.",
        },
      ],
    },
    contact: {
      title: "Створімо щось чудове",
      subtitle: "Розкажіть про проєкт — відповімо протягом 24 годин.",
      name: "Вашe ім'я",
      email: "Email або телефон",
      service: "Послуга",
      message: "Розкажіть про ваш проєкт",
      submit: "Надіслати",
      sending: "Надсилання...",
      success: "Дякуємо! Ми отримали повідомлення і скоро відповімо.",
      error: "Щось пішло не так. Спробуйте ще раз.",
      services: [
        "Лендінг",
        "Вебзастосунок",
        "Брендинг",
        // "Поліграфія",
        "Google Ads",
        "Сайт-сюрприз",
        "Інше",
      ],
      attachFiles: "Додати файли",
      supportedFormats:
        "JPG, PNG, WEBP, PDF, DOC, DOCX, ZIP, RAR, 7Z, аудіофайли",
      maxFiles: "До 10 файлів • до 20 МБ кожен",
      selectedFiles: "Обрано",
    },
    footer: {
      tagline:
        "Створюємо цифрові продукти, що конвертують, надихають і ростуть.",
      rights: "Усі права захищені.",
      nav: "Навігація",
      contact: "Контакти",
      address: "59-300 Любін, Польща",
    },
  },
  pl: {
    nav: {
      services: "Usługi",
      work: "Realizacje",
      process: "Proces",
      pricing: "Cennik",
      reviews: "Opinie",
      contact: "Kontakt",
      cta: "Rozpocznij projekt",
    },
    hero: {
      badge: "Agencja digital · Otwarci na nowe projekty",
      titleA: "Tworzymy cyfrowe doświadczenia, które",
      rotating: [
        "konwertują.",
        "inspirują.",
        "skalują się.",
        "wyróżniają się.",
      ],
      titleB: "",
      subtitle:
        "Landing page, aplikacje webowe, branding i marketing — dopracowane w detalach i szybkie w realizacji.",
      ctaPrimary: "Rozpocznij projekt",
      ctaSecondary: "Nasze realizacje",
      stats: [
        { value: "40+", label: "Zrealizowanych projektów" },
        // { value: "40+", label: "Zadowolonych klientów" },
        { value: "7d", label: "Śr. czas startu" },
        { value: "4.7", label: "Ocena klientów" },
      ],
    },
    features: {
      title: "Dlaczego my",
      subtitle: "Studio stworzone do szybkości, jakości i wyników.",
      items: [
        {
          title: "Błyskawicznie szybko",
          desc: "Zoptymalizowane strony ładujące się natychmiast.",
        },
        { title: "Pixel-perfect", desc: "Każdy detal jest przemyślany." },
        {
          title: "Nastawienie na konwersję",
          desc: "Projektujemy dla wyników, nie tylko estetyki.",
        },
        {
          title: "Kompleksowo",
          desc: "Strategia, design, development i marketing w jednym.",
        },
      ],
    },
    services: {
      title: "Co robimy",
      subtitle: "Pełen zakres usług kreatywnych i technicznych.",
      items: [
        {
          title: "Landing Page",
          desc: "Strony zamieniające odwiedzających w klientów.",
          tag: "Web",
        },
        {
          title: "Aplikacje webowe",
          desc: "Nowoczesne, skalowalne aplikacje na najnowszym stacku.",
          tag: "Dev",
        },
        {
          title: "Branding",
          desc: "Logo, systemy i wytyczne marki, które zapadają w pamięć.",
          tag: "Marka",
        },
        // {
        //   title: "Druk",
        //   desc: "Wizytówki, plakaty i opakowania, które przyciągają wzrok.",
        //   tag: "Druk",
        // },
        {
          title: "Google Ads",
          desc: "Kampanie maksymalizujące każdą złotówkę.",
          tag: "Wzrost",
        },
        {
          title: "Strony-niespodzianki",
          desc: "Interaktywne, spersonalizowane strony na wyjątkowe chwile.",
          tag: "Specjalne",
        },
      ],
    },
    work: {
      title: "Wybrane realizacje",
      subtitle: "Kilka projektów, z których jesteśmy dumni.",
      items: [
        {
          title: "Our Love Story",
          cat: "Strona-niespodzianka",
          link: "https://love.tymchuk-digital.com/",
        },
        {
          title: "Beauty Studio",
          cat: "Landing Page",
          link: "https://beauty.tymchuk-digital.com/",
        },
        {
          title: "Landing Page",
          cat: "Landing Page",
          link: "https://portfolio.tymchuk-digital.com/",
        },
        {
          title: "Lega Office",
          cat: "Landing Page",
          link: "https://lega-office.tymchuk-digital.com",
        },
        // { title: "Nova Fintech", cat: "Aplikacja web" },
        // { title: "Bloom Studio", cat: "Branding" },
        // { title: "Pulse Fitness", cat: "Landing Page" },
        // { title: "Aurora Gift", cat: "Strona-niespodzianka" },
        // { title: "Vertex Labs", cat: "Aplikacja web" },
        // { title: "Lumen Ads", cat: "Google Ads" },
      ],
    },
    process: {
      title: "Jak pracujemy",
      subtitle: "Przejrzysty proces od pomysłu do startu.",
      steps: [
        {
          title: "Odkrywanie",
          desc: "Poznajemy Twoje cele, odbiorców i markę.",
        },
        {
          title: "Projekt",
          desc: "Tworzymy prototypy i dopracowujemy do perfekcji.",
        },
        { title: "Budowa", desc: "Tworzymy szybkie i niezawodne rozwiązania." },
        {
          title: "Start i wzrost",
          desc: "Uruchamiamy, mierzymy i optymalizujemy.",
        },
      ],
    },
    pricing: {
      title: "Proste ceny",
      subtitle: "Przejrzyste pakiety rosnące wraz z Twoją ambicją.",
      popular: "Najpopularniejszy",
      period: "od",
      cta: "Wybierz plan",
      plans: [
        {
          name: "Start",
          price: "$300",
          desc: "Idealny na elegancki landing page.",
          features: [
            "1 landing page",
            "Responsywny design",
            "Podstawowe SEO",
            "Realizacja w 7 dni",
          ],
        },
        {
          name: "Wzrost",
          price: "$1,000",
          desc: "Dla marek gotowych się skalować.",
          features: [
            "Strona wielostronicowa lub aplikacja",
            "Zestaw brandingowy",
            "Zaawansowane SEO",
            "Konfiguracja analityki",
            "Priorytetowe wsparcie",
          ],
        },
        {
          name: "Custom",
          price: "Prywatnie",
          desc: "Dopasowany do Twojej wizji.",
          features: [
            "Aplikacja na zamówienie",
            "Pełna identyfikacja",
            "Kampanie Google Ads",
            "Dedykowany zespół",
            "Stały wzrost",
          ],
        },
      ],
    },
    reviews: {
      title: "Kochani przez klientów",
      subtitle: "Prawdziwe słowa osób, z którymi pracowaliśmy.",
      items: [
        {
          quote:
            "Przeszli nasze oczekiwania. Konwersje podwoiły się w miesiąc.",
          name: "Sarah Klein",
          role: "CEO, Nova",
        },
        {
          quote: "Najbardziej dbający o detale zespół, z jakim pracowałem.",
          name: "Marco Ruiz",
          role: "Założyciel, Bloom",
        },
        {
          quote: "Szybko, profesjonalnie i niezwykle kreatywnie. Polecam.",
          name: "Olena Petrova",
          role: "CMO, Pulse",
        },
      ],
    },
    faq: {
      title: "Częste pytania",
      subtitle: "Wszystko, co warto wiedzieć przed startem.",
      items: [
        {
          q: "Ile trwa projekt?",
          a: "Landing page zwykle 5–7 dni. Większe aplikacje i branding od 2 do 6 tygodni w zależności od zakresu.",
        },
        {
          q: "Czy pracujecie z klientami zagranicznymi?",
          a: "Oczywiście. Pracujemy z całym światem i komunikujemy się po angielsku, ukraińsku i polsku.",
        },
        {
          q: "Czym jest strona-niespodzianka?",
          a: "Spersonalizowana, interaktywna strona jako unikalny prezent — idealna na oświadczyny, urodziny i wyjątkowe chwile.",
        },
        {
          q: "Jak wyglądają płatności?",
          a: "Zwykle 50% z góry i 50% przy oddaniu. Przy większych projektach możliwe indywidualne ustalenia.",
        },
      ],
    },
    contact: {
      title: "Zbudujmy coś wspaniałego",
      subtitle: "Opowiedz o projekcie, a odpowiemy w ciągu 24 godzin.",
      name: "Twoje imię",
      email: "Email lub telefon",
      service: "Usługa",
      message: "Opowiedz o swoim projekcie",
      submit: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      success: "Dziękujemy! Otrzymaliśmy wiadomość i wkrótce odpowiemy.",
      error: "Coś poszło nie tak. Spróbuj ponownie.",
      services: [
        "Landing Page",
        "Aplikacja web",
        "Branding",
        // "Druk",
        "Google Ads",
        "Strona-niespodzianka",
        "Inne",
      ],
      attachFiles: "Dodaj pliki",
      supportedFormats:
        "JPG, PNG, WEBP, PDF, DOC, DOCX, ZIP, RAR, 7Z, pliki audio",
      maxFiles: "Maks. 10 plików • do 20 MB każdy",
      selectedFiles: "Wybrano",
    },
    footer: {
      tagline:
        "Tworzymy cyfrowe doświadczenia, które konwertują, inspirują i skalują się.",
      rights: "Wszelkie prawa zastrzeżone.",
      nav: "Nawigacja",
      contact: "Kontakt",
      address: "59-300 Lubin, Polska",
    },
  },
};
