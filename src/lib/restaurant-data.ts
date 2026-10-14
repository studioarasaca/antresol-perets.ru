// Данные ресторана «Антресоль и Перец»

export const RESTAURANT = {
  name: "Антресоль и Перец",
  tagline: "Культовая мансарда Петербурга",
  mantra: "Культура. Еда. Искусство.",
  quote:
    "Место, куда можно и в рваных кедах, и в жемчугах с платьем в пол",
  phone: "+7 (905) 230-88-77",
  phoneRaw: "+79052308877",
  address: "Санкт-Петербург, ул. Марата 1/71",
  email: "info@antresol-pepper.ru",
  hours: [
    { day: "Понедельник — Четверг", time: "15:00 — 23:00" },
    { day: "Пятница", time: "15:00 — 02:00" },
    { day: "Суббота", time: "13:00 — 02:00" },
    { day: "Воскресенье", time: "13:00 — 23:00" },
  ],
};

export type Space = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
};

export const SPACES: Space[] = [
  {
    id: "gostinaya",
    name: "Гостиная",
    subtitle: "сердце дома",
    description:
      "В Гостиной расположился ресторан. Небанальная, отражающая современные тренды еда на каждый день. Открытая кухня — в распоряжении гостей круглые сутки: завтрак, обед, открытый ужин или лёгкий перекус в ночи.",
    image: "/images/room-gostinaya.jpg",
    accent: "Открытая кухня",
  },
  {
    id: "chaynaya",
    name: "Чайная",
    subtitle: "окно в небо",
    description:
      "Большое круглое пространство со стеклянным атриумом — «небесным колодцем». Идеальное место для уютных посиделок, но в то же время комфортное пространство для концертов, спектаклей и лекций.",
    image: "/images/room-chaynaya.jpg",
    accent: "Стеклянный атриум",
  },
  {
    id: "bar",
    name: "Бар",
    subtitle: "брутальное место",
    description:
      "Самое брутальное место нашего дома. Здесь всегда найдётся правильная бутылка вина под настроение или к определённому блюду. А если сердце к вину не лежит — рядом появится идеальный коктейль.",
    image: "/images/room-bar.jpg",
    accent: "Авторские коктейли",
  },
  {
    id: "kabinet",
    name: "Кабинет",
    subtitle: "приватность",
    description:
      "Пространство для частных мероприятий, деловых переговоров, приватных разговоров, чтений и лекций. Атмосфера, в которой время замедляется, а разговоры становятся глубже.",
    image: "/images/room-kabinet.jpg",
    accent: "Частные события",
  },
];

export type Dish = {
  name: string;
  description?: string;
  price: string;
  tag?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: Dish[];
};

// Кухня — избранное для главной страницы
export const MENU_FEATURED: { dish: Dish; image: string }[] = [
  {
    dish: {
      name: "Стейк Мачете",
      description: "с миксом салата и соусом винный демигляс",
      price: "1850 ₽",
      tag: "Стейки",
    },
    image: "/images/dish-steak.jpg",
  },
  {
    dish: {
      name: "Перец Рамиро",
      description: "с творожным кремом и стружкой из пармы",
      price: "830 ₽",
      tag: "Фирменное",
    },
    image: "/images/dish-pepper.jpg",
  },
  {
    dish: {
      name: "Паста Ригатони",
      description: "в грибном соусе с трюфельным маслом",
      price: "780 ₽",
      tag: "Паста",
    },
    image: "/images/dish-pasta.jpg",
  },
  {
    dish: {
      name: "Пицца пепперони",
      description: "томаты, моцарелла, острая пепперони",
      price: "680 ₽",
      tag: "Пицца",
    },
    image: "/images/dish-pizza.jpg",
  },
  {
    dish: {
      name: "Крем-брюле",
      description: "карамельная корочка, ванильный крем",
      price: "600 ₽",
      tag: "Десерты",
    },
    image: "/images/dish-dessert.jpg",
  },
];

export const MENU_FULL: MenuCategory[] = [
  {
    id: "starters",
    title: "Стартеры",
    items: [
      { name: "Вяленые томаты", price: "450 ₽" },
      { name: "Оливки Белла Чериньола", price: "450 ₽" },
      { name: "Оливки Каламата", price: "470 ₽" },
      { name: "Артишоки в масле", price: "450 ₽" },
      { name: "Сыр Пармезан", price: "450 ₽" },
      { name: "Сыр Бри", price: "450 ₽" },
      { name: "Сыр Дор-блю", price: "470 ₽" },
    ],
  },
  {
    id: "cold",
    title: "Холодные закуски",
    items: [
      {
        name: "Перец Рамиро с соусом тоннато",
        description: "и руккола",
        price: "780 ₽",
      },
      {
        name: "Перец Рамиро с творожным кремом",
        description: "и стружкой из пармы",
        price: "830 ₽",
      },
      { name: "Тартар классический", description: "с пивным хлебом", price: "940 ₽" },
      {
        name: "Форель слабой соли",
        description: "с жареной фокаччей и кремом сливочный хрен",
        price: "670 ₽",
      },
    ],
  },
  {
    id: "salads",
    title: "Салаты",
    items: [
      {
        name: "Жареные баклажаны",
        description: "с томатами и печёным перцем Рамиро",
        price: "820 ₽",
      },
      { name: "Цезарь", description: "с куриным филе", price: "620 ₽" },
      {
        name: "Микс салата с форелью",
        description: "слабой соли и оливками Каламата",
        price: "830 ₽",
      },
      {
        name: "Салат Романо",
        description: "с артишоками в вине и пармезаном",
        price: "780 ₽",
      },
    ],
  },
  {
    id: "hot-snacks",
    title: "Горячие закуски",
    items: [
      {
        name: "Картофель фри",
        description: "с трюфельным соусом и пармезаном",
        price: "450 ₽",
      },
      { name: "Креветки в кляре", description: "с соусом васаби", price: "680 ₽" },
      { name: "Тако", description: "с рваной перечной говядиной", price: "840 ₽" },
      { name: "Чебуреки говяжьи", description: "с острым кетчупом", price: "560 ₽" },
    ],
  },
  {
    id: "pasta",
    title: "Паста",
    items: [
      { name: "Папарделле", description: "в соусе Наполи", price: "610 ₽" },
      {
        name: "Ригатони",
        description: "в грибном соусе с трюфельным маслом",
        price: "780 ₽",
      },
      {
        name: "Папарделле",
        description: "в соусе песто с куриным филе",
        price: "890 ₽",
      },
    ],
  },
  {
    id: "mains",
    title: "Горячие блюда",
    items: [
      {
        name: "Бифштекс",
        description: "с картофельным пюре и соусом винный демигляс",
        price: "880 ₽",
      },
      { name: "Бургер говяжий", description: "с соусом чипотле", price: "860 ₽" },
      {
        name: "Цыплёнок корнишон",
        description: "со свежими овощами и соусом дзадзики",
        price: "920 ₽",
      },
      {
        name: "Щучьи котлеты",
        description: "с картофельным пюре и грибным соусом",
        price: "870 ₽",
      },
      {
        name: "Филе судака",
        description: "в сливочном соусе с каперсами",
        price: "840 ₽",
      },
    ],
  },
  {
    id: "steaks",
    title: "Стейки",
    items: [
      {
        name: "Стейк Мачете",
        description: "с миксом салата и соусом винный демигляс",
        price: "1850 ₽",
      },
      {
        name: "Стейк чак-ролл",
        description: "с картофелем фри и соусом демигляс",
        price: "1640 ₽",
      },
    ],
  },
  {
    id: "pizza",
    title: "Пицца",
    items: [
      { name: "Пицца тартар", description: "с соусом картон и руккола", price: "1200 ₽" },
      { name: "Пицца с говядиной", description: "и трюфельным соусом", price: "1200 ₽" },
      { name: "Пицца пепперони", price: "680 ₽" },
      { name: "Пицца с анчоусами", description: "и пармезаном", price: "720 ₽" },
    ],
  },
  {
    id: "soups",
    title: "Супы",
    items: [
      {
        name: "Том ям",
        description: "с морепродуктами и рисом басмати",
        price: "680 ₽",
      },
      {
        name: "Куриный бульон",
        description: "с домашней лапшой и яйцом",
        price: "560 ₽",
      },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    items: [
      {
        name: "Брауни",
        description: "с ванильным мороженым и солёной карамелью",
        price: "640 ₽",
      },
      { name: "Семифредо", price: "520 ₽" },
      { name: "Шоколадный торт", price: "740 ₽" },
      { name: "Крем-брюле", price: "600 ₽" },
      {
        name: "Мороженое",
        description: "ванильное, шоколадное, клубничное, крем-брюле",
        price: "250 ₽",
      },
    ],
  },
];

export type BarCategory = {
  id: string;
  title: string;
  note?: string;
  items: Dish[];
};

export const BAR_MENU: BarCategory[] = [
  {
    id: "author-tea",
    title: "Авторские чаи",
    note: "700 мл",
    items: [
      { name: "Груша — Жасмин", price: "700 ₽" },
      { name: "Киви — Базилик", price: "700 ₽" },
      { name: "Облепиха — Имбирь", price: "700 ₽" },
    ],
  },
  {
    id: "classic-tea",
    title: "Классические чаи",
    items: [
      { name: "Ассам", price: "500 ₽" },
      { name: "Эрл Грей", price: "500 ₽" },
      { name: "Сенча", price: "500 ₽" },
      { name: "Зелёный с жасмином", price: "500 ₽" },
      { name: "Молочный улун", price: "500 ₽" },
    ],
  },
  {
    id: "lemonades",
    title: "Домашние лимонады",
    note: "300 мл",
    items: [
      { name: "Чёрная смородина — вереск", price: "450 ₽" },
      { name: "Ананас — Лемонграс", price: "450 ₽" },
      { name: "Ананас-Манго-Маракуйя", price: "450 ₽" },
      { name: "Вишня — Шисо", price: "450 ₽" },
    ],
  },
  {
    id: "coffee",
    title: "Кофе",
    items: [
      { name: "Эспрессо", description: "30 мл", price: "300 ₽" },
      { name: "Американо", description: "120 мл", price: "300 ₽" },
      { name: "Двойной эспрессо", description: "60 мл", price: "400 ₽" },
      { name: "Капучино", description: "250 мл", price: "350 ₽" },
      { name: "Латте", description: "300 мл", price: "400 ₽" },
      { name: "Раф", description: "300 мл", price: "450 ₽" },
      { name: "Флэт Уайт", description: "250 мл", price: "450 ₽" },
    ],
  },
  {
    id: "beer",
    title: "Разливное пиво",
    note: "500 мл",
    items: [
      { name: "Khoffner La Lucha Libre", description: "мексиканский лагер", price: "500 ₽" },
      { name: "Khoffner Borgata", description: "стаут", price: "500 ₽" },
      { name: "Dutch Blanche", description: "бланш", price: "500 ₽" },
    ],
  },
];

export const GALLERY = [
  { src: "/images/gallery-1.jpg", alt: "Зал мансарды под витражным куполом", span: "tall" },
  { src: "/images/gallery-6.jpg", alt: "Лаунж-бар с колоннами и звёздными гирляндами", span: "wide" },
  { src: "/images/gallery-2.jpg", alt: "Гостиная у камина с винтажными креслами", span: "normal" },
  { src: "/images/gallery-3.jpg", alt: "Парадный коридор с алой дорожкой", span: "tall" },
  { src: "/images/gallery-4.jpg", alt: "Гостиная с диванами Chesterfield", span: "wide" },
  { src: "/images/gallery-5.jpg", alt: "Антикварный фарфор в горке", span: "normal" },
];
