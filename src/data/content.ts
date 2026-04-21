export type Locale = "ru" | "en";

export type LandingContent = {
  locale: Locale;
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  nav: {
    home: string;
    about: string;
    services: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    contact: string;
    invest: string;
  };
  problems: {
    title: string;
    items: string[];
    solutionTitle: string;
    solutionText: string;
  };
  services: {
    title: string;
    learnMore: string;
    items: { name: string; description: string }[];
  };
  global: {
    title: string;
    stats: { label: string; value: string }[];
  };
  it: {
    title: string;
    items: string[];
  };
  market: {
    title: string;
    text: string;
  };
  model: {
    title: string;
    items: { name: string; description: string }[];
  };
  roadmap: {
    title: string;
    phases: { period: string; goal: string }[];
  };
  offer: {
    title: string;
    amount: string;
    splitTitle: string;
    split: string;
    deck: string;
  };
  team: {
    title: string;
    text: string;
  };
  footer: {
    rights: string;
    contact: string;
  };
};

export const contentByLocale: Record<Locale, LandingContent> = {
  ru: {
    locale: "ru",
    htmlLang: "ru",
    metaTitle: "Halora - Инвестиционная платформа нового поколения",
    metaDescription:
      "Halora: этические финансы и трансграничные решения на базе реальных активов.",
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      blog: "Блог",
    },
    hero: {
      title: "Halora - Инвестиционная платформа нового поколения",
      subtitle:
        "Этические финансы и трансграничные решения на базе реальных активов.",
      contact: "Связаться с нами",
      invest: "Инвестировать",
    },
    problems: {
      title: "Проблемы и решение",
      items: [
        "Недоступность для этических инвесторов",
        "Медленные и дорогие переводы",
        "Волатильность фондовых рынков",
      ],
      solutionTitle: "Наше решение",
      solutionText:
        "Halora дает прямой доступ к реальным активам: без процентов, без спекуляций и без зависимости от биржевых колебаний.",
    },
    services: {
      title: "Наши услуги",
      learnMore: "Узнать больше",
      items: [
        {
          name: "Мудараба",
          description: "Долевое партнерство: прибыль делится по согласованной модели.",
        },
        {
          name: "Иджара",
          description: "Арендное финансирование для бизнеса и капитальных активов.",
        },
        {
          name: "Мурабаха",
          description: "Поставка товаров с прозрачной наценкой и фиксированными условиями.",
        },
        {
          name: "Вакалла",
          description: "Агентские услуги и доверительное сопровождение сделок.",
        },
      ],
    },
    global: {
      title: "Глобальное присутствие",
      stats: [
        { label: "Стран в сети партнеров", value: "36" },
        { label: "Трансграничные комиссии", value: "0%" },
        { label: "Средний расчет", value: "2-3 сек" },
      ],
    },
    it: {
      title: "IT-экосистема",
      items: [
        "Выбор сделки в один клик",
        "Мониторинг доходности в реальном времени",
        "Электронное подписание договоров",
      ],
    },
    market: {
      title: "Рыночная возможность",
      text: "Рынок исламских финансов и ESG достигает $4.5 трлн к 2025 году: 1.9 млрд мусульман и растущий спрос ответственных инвесторов.",
    },
    model: {
      title: "Бизнес-модель",
      items: [
        { name: "Management Fee", description: "Комиссия за управление портфелями клиентов." },
        { name: "Success Fee", description: "Вознаграждение за достижение целевой доходности." },
        { name: "Margin on transactions", description: "Маржа на структурированных сделках и поставках." },
      ],
    },
    roadmap: {
      title: "Дорожная карта",
      phases: [
        { period: "3 месяца", goal: "Запуск MVP, пилотные сделки и юридическая структура." },
        { period: "6 месяцев", goal: "Выход на международные партнерские коридоры." },
        { period: "12-18 месяцев", goal: "AUM 300 000 000 руб. и масштабирование платформы." },
      ],
    },
    offer: {
      title: "Инвестиционное предложение",
      amount: "Запрашиваемая сумма: 25 000 000 за 50% доли",
      splitTitle: "Распределение бюджета",
      split: "40% платформа, 30% юридическая инфраструктура, 30% маркетинг",
      deck: "Скачать презентацию",
    },
    team: {
      title: "Команда",
      text: "Международная Ассамблея Исламского Бизнеса, группа инновационного и инвестиционного проектирования, юристы и аудиторы с международной экспертизой.",
    },
    footer: {
      rights: "© 2026 Halora. Все права защищены.",
      contact: "Контакт",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    metaTitle: "Halora - Next-generation investment platform",
    metaDescription:
      "Halora: ethical finance and cross-border solutions backed by real assets.",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      blog: "Blog",
    },
    hero: {
      title: "Halora - Next-generation investment platform",
      subtitle:
        "Ethical finance and cross-border solutions backed by real assets.",
      contact: "Contact us",
      invest: "Invest now",
    },
    problems: {
      title: "Problems and solution",
      items: [
        "Limited access for ethical investors",
        "Slow and expensive transfers",
        "Volatility of stock markets",
      ],
      solutionTitle: "Our solution",
      solutionText:
        "Halora gives direct access to real assets: no interest, no speculative exposure, and no dependency on stock market swings.",
    },
    services: {
      title: "Our services",
      learnMore: "Learn more",
      items: [
        {
          name: "Mudaraba",
          description: "Profit-sharing partnership with transparent deal terms.",
        },
        {
          name: "Ijara",
          description: "Asset-based leasing solutions for businesses.",
        },
        {
          name: "Murabaha",
          description: "Trade financing with clear markup and fixed structure.",
        },
        {
          name: "Wakala",
          description: "Agency services and fiduciary transaction support.",
        },
      ],
    },
    global: {
      title: "Global presence",
      stats: [
        { label: "Partner countries", value: "36" },
        { label: "Cross-border fees", value: "0%" },
        { label: "Settlement speed", value: "2-3 sec" },
      ],
    },
    it: {
      title: "IT ecosystem",
      items: [
        "One-click deal selection",
        "Real-time profitability monitoring",
        "Electronic contract signing",
      ],
    },
    market: {
      title: "Market opportunity",
      text: "Islamic finance and ESG markets are projected at $4.5T by 2025, covering 1.9B Muslims plus rapidly growing responsible-investing demand.",
    },
    model: {
      title: "Business model",
      items: [
        { name: "Management Fee", description: "Portfolio management fee for clients." },
        { name: "Success Fee", description: "Performance-based fee for target returns." },
        { name: "Margin on transactions", description: "Margin on structured deals and trade operations." },
      ],
    },
    roadmap: {
      title: "Roadmap",
      phases: [
        { period: "3 months", goal: "MVP launch, pilot deals, and legal setup." },
        { period: "6 months", goal: "Expansion into international partner corridors." },
        { period: "12-18 months", goal: "RUB 300,000,000 AUM and platform scale-up." },
      ],
    },
    offer: {
      title: "Investment offer",
      amount: "Requested amount: 25,000,000 for 50% equity",
      splitTitle: "Budget allocation",
      split: "40% platform, 30% legal infrastructure, 30% marketing",
      deck: "Download investor deck",
    },
    team: {
      title: "Team",
      text: "International Assembly of Islamic Business, innovation and investment design group, legal advisors, and auditors with cross-border expertise.",
    },
    footer: {
      rights: "© 2026 Halora. All rights reserved.",
      contact: "Contact",
    },
  },
};
