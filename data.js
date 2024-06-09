// Содержит товары отображаемые внутри категории "Квадроциклы"
const QUADRO = [];

// Содержит товары отображаемые внутри категории "Скутеры"
const SCOUTERS = [
  {
    id: 0,
    name: "Julong",
    category: "Электро-скутер",
    images: [
      "https://thumbs2.imgbox.com/79/14/HBHBaA7L_t.jpg",
      "https://thumbs2.imgbox.com/ae/63/rnyc4Z1x_t.jpg",
      "https://thumbs2.imgbox.com/de/98/s3loyPQy_t.jpg",
      "https://thumbs2.imgbox.com/e5/4b/n7LiDTFm_t.jpg",
      "https://thumbs2.imgbox.com/e0/6f/t630LDVx_t.jpg",
      "https://thumbs2.imgbox.com/0e/92/tED9Hm2g_t.jpg",
      "https://thumbs2.imgbox.com/39/ec/ndebW7ay_t.jpg",
      "https://thumbs2.imgbox.com/c3/42/TPHwH3Ip_t.jpg",
      "https://thumbs2.imgbox.com/21/0a/UyJujNZW_t.jpg",
      "https://thumbs2.imgbox.com/c7/ad/LIUb7ArN_t.jpg",
    ],
    variants: [
      {
        price: "52500",
        speed: "55-60",
        engine: "1500",
        controller: "1500",
      },
      {
        price: "60500",
        speed: "70-75",
        engine: "2000",
        controller: "3000",
      },
      {
        price: "85000",
        speed: "110-120",
        engine: "5000",
        controller: "8000",
      },
    ],
  },
  {
    id: 1,
    name: "Zuma",
    category: "Электро-скутер",
    images: [
      "https://thumbs2.imgbox.com/0c/a1/O8Y7KATx_t.jpg",
      "https://thumbs2.imgbox.com/34/fe/4k6xhTwl_t.jpg",
      "https://thumbs2.imgbox.com/cc/34/0uszrnsV_t.jpg",
      "https://thumbs2.imgbox.com/33/d6/q1zt2dKQ_t.jpg",
      "https://thumbs2.imgbox.com/22/da/jPL2YHPR_t.jpg",
      "https://thumbs2.imgbox.com/a2/34/UbwGU8M5_t.jpg",
      "https://thumbs2.imgbox.com/c2/ad/SmokXJ9N_t.jpg",
      "https://thumbs2.imgbox.com/97/76/F7ODTQtb_t.jpg",
      "https://thumbs2.imgbox.com/21/c4/1MmJykJv_t.jpg",
      "https://thumbs2.imgbox.com/79/94/97kCEokd_t.jpg",
      "https://thumbs2.imgbox.com/5e/79/HNrBGQyW_t.jpg",
    ],
    variants: [
      {
        price: "52500",
        speed: "55-60",
        engine: "1500",
        controller: "1500",
      },
      {
        price: "60500",
        speed: "70-75",
        engine: "2000",
        controller: "3000",
      },
      {
        price: "85000",
        speed: "110-120",
        engine: "5000",
        controller: "8000",
      },
    ],
  },
  {
    id: 2,
    name: "Новое столетие（新世纪）N1",
    category: "Электро-скутер",
    images: [
      "https://thumbs2.imgbox.com/94/16/dnnF1R4A_t.jpg",
      "https://thumbs2.imgbox.com/8c/cb/NuRqF09p_t.jpg",
      "https://thumbs2.imgbox.com/cd/8d/SGaQBCMg_t.jpg",
      "https://thumbs2.imgbox.com/72/38/QDDhxEoc_t.jpg",
      "https://thumbs2.imgbox.com/d3/2b/HJp2q8Y7_t.jpg",
    ],
    variants: [
      {
        price: "43000",
        speed: "48-50",
        engine: "1000",
        controller: "1000",
      },
      {
        price: "56000",
        speed: "70-75",
        engine: "2000",
        controller: "3000",
      },
    ],
  },
];

// Содержит товары отображаемые внутри категории "Мотоциклы"
const BIKES = [
  {
    id: 0,
    name: "Venum",
    category: "Электро-мотоцикл",
    images: [
      "https://thumbs2.imgbox.com/95/44/OuQjXLIi_t.jpg",
      "https://thumbs2.imgbox.com/97/65/l2ZnEYun_t.jpg",
      "https://thumbs2.imgbox.com/73/8a/YYfgluqS_t.jpg",
      "https://thumbs2.imgbox.com/46/05/jNP5n49s_t.jpg",
      "https://thumbs2.imgbox.com/41/ed/3B98bjDg_t.jpg",
    ],
    variants: [
      {
        price: "57000",
        speed: "55-60",
        engine: "1500",
        controller: "1500",
      },
      {
        price: "63000",
        speed: "70-75",
        engine: "2000",
        controller: "3000",
      },
      {
        price: "99000",
        speed: "115-125",
        engine: "5000",
        controller: "8000",
      },
    ],
  },
  {
    id: 1,
    name: "Little Monster",
    category: "Электро-мотоцикл",
    images: [
      "https://thumbs2.imgbox.com/9d/f4/RR3BAyHL_t.jpg",
      "https://thumbs2.imgbox.com/e5/a4/bKGIi1jy_t.jpg",
      "https://thumbs2.imgbox.com/b0/e9/Hjkg4iJP_t.jpg",
      "https://thumbs2.imgbox.com/61/6d/GmOP7uJz_t.jpg",
      "https://thumbs2.imgbox.com/a8/2b/0gVx0O8A_t.jpg",
    ],
    variants: [
      {
        price: "75000",
        speed: "55-60",
        engine: "1500",
        controller: "1500",
      },
      {
        price: "63000",
        speed: "70-75",
        engine: "2000",
        controller: "3000",
      },
      {
        price: "99000",
        speed: "115-125",
        engine: "5000",
        controller: "8000",
      },
    ],
  },
  {
    id: 2,
    name: "Ducati Panigale",
    category: "Электро-мотоцикл",
    images: [
      "https://thumbs2.imgbox.com/a5/24/Bl0tW6gI_t.jpg",
      "https://thumbs2.imgbox.com/e9/b1/j0jwP0FO_t.jpg",
      "https://thumbs2.imgbox.com/db/ee/yrhD6aoa_t.jpg",
      "https://thumbs2.imgbox.com/39/23/1WokpQXO_t.jpg",
      "https://thumbs2.imgbox.com/73/db/BnAE6XBq_t.jpg",
      "https://thumbs2.imgbox.com/81/7e/C946qO47_t.jpg",
      "https://thumbs2.imgbox.com/53/f4/bZd9x14e_t.jpg",
      "https://thumbs2.imgbox.com/9e/2e/3rrKDJ5R_t.jpg",
      "https://thumbs2.imgbox.com/b9/6a/BLolzCeX_t.jpg",
      "https://thumbs2.imgbox.com/c1/94/OWEWSq80_t.jpg",
    ],
    variants: [
      {
        price: "134000",
        speed: "100-110",
        engine: "3000",
        controller: "5000",
      },
      {
        price: "154000",
        speed: "120",
        engine: "4000",
        controller: "8000",
      },
    ],
  },
  {
    id: 3,
    name: "Kawasaki Ninja 🥷 🥷",
    category: "Электро-мотоцикл",
    images: [
      "https://thumbs2.imgbox.com/1d/81/dndUaNBy_t.jpg",
      "https://thumbs2.imgbox.com/e3/dc/ptgIOL9V_t.jpg",
      "https://thumbs2.imgbox.com/bf/da/b87ZTs25_t.jpg",
      "https://thumbs2.imgbox.com/cb/cb/bXzxdbKp_t.jpg",
      "https://thumbs2.imgbox.com/c4/cc/OCQzHzMs_t.jpg",
      "https://thumbs2.imgbox.com/ed/ac/xopOnW9T_t.jpg",
      "https://thumbs2.imgbox.com/43/c5/RpImGLzv_t.jpg",
      "https://thumbs2.imgbox.com/13/89/iczvGUJP_t.jpg",
    ],
    variants: [
      {
        price: "105000",
        speed: "100-110",
        engine: "3000",
        controller: "5000",
      },
      {
        price: "125000",
        speed: "120-130",
        engine: "4000",
        controller: "8000",
      },
      {
        price: "177000",
        speed: "135",
        engine: "8000",
        controller: "10000",
      },
    ],
  },
];

// Содержит информацию которую пользователь получает нажав в меню /info
const INFO = `
    @mistersleep11 - контакт владельца для обращений по возникшим вопросам.

1. Способ оплаты и как происходит оплата.
2. Доставка, сроки, гарантии.
    
1. Оплата происходит в 3 этапа:
После выбора мотоцикла и модификации к нему.
Сейчас доступен способ оплаты на счет в Газпромбанке, также можнкриптой.
    
1.1. - Залог 30% от стоимости мотоцикла оплачивается сразу, дальше идет процесс сборки мотоцикла 10-15 дней, после этого, клиент получает видео обзор мотоцикла, видео с максимальной скоростью мото👌🙌.
    
1.2. - После того как мотоцикл готов, заказчик оплачивает 70% оставшиеся суммы от мотоцикла, после оплаты мотоцикл отправляется в Россию. 
1.3. - Доставка за мотоцикл оплачивается при получении в Москве 👌
  
2. Доставка:
    
2.1. - Сроки доставки, 3 дня с фабрики, город Дженгджоу, до Транспортной компании.
Город Иу, 18-20 дней Иу-Москва, с Москвы по России доставка оплачивается отдельно транспортными компаниями 🙌
    
2.2. - Гарантия на груз, 1-1.5% от стоимости груза, на случай утери вашего мотоцикла, карго компания вернет все ваши деньги. 👌👍
    
2.3. - Так же имеется гарантия на мотор и аккумулятор, если фабричный брак, чего еще ни разу не было, тк все мотоциклы тщательно тестируются и проходят тестовые обкатки, то вы можете отправить бракованный мотор обратно в Китай, чтобы получить новый бесплатно🤝
  `;

// Шаблон для добавления товаров(для удобства)
const example = {
  id: 0,
  name: "",
  category: "",
  images: ["", "", "", "", "", "", ""],
  variants: [
    {
      price: "",
      speed: "",
      engine: "",
      controller: "",
    },
    {
      price: "",
      speed: "",
      engine: "",
      controller: "",
    },
    {
      price: "",
      speed: "",
      engine: "",
      controller: "",
    },
  ],
};

module.exports = { QUADRO, BIKES, SCOUTERS, INFO };
