// export const CATEGORIES = ["мотоциклы", "квадроциклы"];
const QUADRO = [];

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
    name: "Julong",
    category: "Электро-скутер",
    images: [
      "https://thumbs2.imgbox.com/de/98/s3loyPQy_t.jpg",
      "https://thumbs2.imgbox.com/ae/63/rnyc4Z1x_t.jpg",
      "https://thumbs2.imgbox.com/79/14/HBHBaA7L_t.jpg",
      "https://thumbs2.imgbox.com/e5/4b/n7LiDTFm_t.jpg",
      "https://thumbs2.imgbox.com/e0/6f/t630LDVx_t.jpg",
    ],
    variants: [
      {
        price: "50000",
        speed: "55",
        engine: "1500",
        controller: "1500",
      },
      {
        price: "57500",
        speed: "70",
        engine: "2000",
        controller: "3000",
      },
      {
        price: "82000",
        speed: "110-110",
        engine: "5000",
        controller: "8000",
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "m3m5",
  //   category: "Электро-мотоцикл",
  //   images: [
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //   ],
  //   variants: [
  //     {
  //       price: "50000",
  //       speed: "55-60",
  //       engine: "1500",
  //       controller: "1500",
  //     },
  //     {
  //       price: "57500",
  //       speed: "70-75",
  //       engine: "2000",
  //       controller: "3000",
  //     },
  //     {
  //       price: "78000",
  //       speed: "100-110",
  //       engine: "3000",
  //       controller: "5000",
  //     },
  //   ],
  // },
  {
    id: 4,
    name: "Ducati Panigale",
    category: "Электро-мотоцикл",
    images: [
      "https://thumbs2.imgbox.com/e9/b1/j0jwP0FO_t.jpg",
      "https://thumbs2.imgbox.com/db/ee/yrhD6aoa_t.jpg",
      "https://thumbs2.imgbox.com/39/23/1WokpQXO_t.jpg",
      "https://thumbs2.imgbox.com/a5/24/Bl0tW6gI_t.jpg",
      "https://thumbs2.imgbox.com/73/db/BnAE6XBq_t.jpg",
    ],
    variants: [
      {
        price: "127400",
        speed: "100",
        engine: "3000",
        controller: "5000",
      },
      {
        price: "148000",
        speed: "120",
        engine: "4000",
        controller: "8000",
      },
    ],
  },
];

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

module.exports = { QUADRO, BIKES, INFO };
