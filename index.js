require("dotenv").config(); // Загружаем переменные окружения из .env
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { QUADRO, BIKES, INFO, SCOUTERS } = require("./data.js");
const token = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAPH_TOKEN = process.env.TELEGRAPH_TOKEN;
const Telegraph = require("telegraph-node");
const ph = new Telegraph();

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN не задан в переменных окружения.");
}

if (!TELEGRAPH_TOKEN) {
  throw new Error("TELEGRAPH_TOKEN не задан в переменных окружения.");
}

// Экземпляр бота
const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", (err) => console.log(err));

// Настройка экспресс сервера
const app = express();
app.use(bodyParser.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));

const commands = [
  {
    command: "start",
    description: "Запуск бота",
  },
  {
    command: "catalog",
    description: "Каталог товаров",
  },
  {
    command: "info",
    description: "Часто задаваемые вопросы",
  },
];

bot.setMyCommands(commands);

const userStates = {};
const welcomeMessage =
  "Здравствуйте,\nВы можете использовать следующие команды:\n/start - Запуск бота\n/catalog - Здесь вы можете самостоятельно изучить весь каталог (мотоциклы, скутеры и т.д.)\n/info - Интересующие вас вопросы";
const categoryEmptyMessage = `Товары данной категории скоро будут доступны. Пожалуйста, попробуйте позже.`;

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, welcomeMessage);
});

// Обработчик команды /catalog
bot.onText(/\/catalog/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "catalog";
  const options = {
    reply_markup: {
      keyboard: [
        [{ text: "мотоциклы" }],
        [{ text: "скутеры" }],
        [{ text: "квадроциклы" }],
        // [{ text: "Вернуться" }],
      ],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  };
  bot.sendMessage(
    chatId,
    `Выберите что вас интересует в выпадающем меню или впишите:
  -  мотоциклы
  -  скутеры
  -  квадроциклы`,
    options
  );
});

// Обработчик команды "Мотоциклы"
bot.onText(/\мотоциклы/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "bikes";
  if (BIKES.length !== 0) {
    sendProductList(chatId, BIKES);
  } else {
    bot.sendMessage(chatId, categoryEmptyMessage);
  }
});

// Обработчик команды "Скутеры"
bot.onText(/\скутеры/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "scouters";
  if (SCOUTERS.length !== 0) {
    sendProductList(chatId, SCOUTERS);
  } else {
    bot.sendMessage(chatId, categoryEmptyMessage);
  }
});

// Обработчик команды "Квадроциклы"
bot.onText(/\свадроциклы/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "quadrocycles";
  if (QUADRO.length !== 0) {
    sendProductList(chatId, QUADRO);
  } else {
    bot.sendMessage(chatId, categoryEmptyMessage);
  }
});

bot.onText(/\вернуться/, (msg) => {
  const chatId = msg.chat.id;
  const currentState = userStates[chatId];

  if (currentState === "catalog") {
    userStates[chatId] = "start";
    bot.sendMessage(chatId, "Возвращаемся на стартовый экран.", {
      reply_markup: {
        keyboard: [[{ text: "/catalog" }], [{ text: "/info" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else if (
    currentState === "bikes" ||
    currentState === "quadrocycles" ||
    currentState === "scouters"
  ) {
    userStates[chatId] = "catalog";

    bot.sendMessage(chatId, "Возвращаемся к каталогу.", {
      reply_markup: {
        keyboard: [
          [{ text: "мотоциклы" }],
          [{ text: "квадроциклы" }],
          [{ text: "скутеры" }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, "Возвращаемся на стартовый экран.", {
      reply_markup: {
        keyboard: [[{ text: "/catalog" }], [{ text: "/info" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
});

async function sendProductList(chatId, category) {
  for (const product of category) {
    let content = [];

    content.push({
      tag: "figcaption",
      children: [product.category, " - ", product.name],
    });
    content.push({
      tag: "p",
      children: [`Цены указаны без 🔋 АКБ 🔋!`],
    });
    product.variants.forEach((variant, idx) => {
      content.push({
        tag: "p",
        children: [
          `Модификация №${idx + 1}:\n`,
          `Цена: 💵${variant.price} руб.\n`,
          `Скорость: 🚀${variant.speed} км/ч.\n`,
          `Мотор колесо: ${variant.engine}w.\n`,
          `Контроллер: ${variant.controller}w.\n`,
        ],
      });
    });

    product.images.map((image) => {
      content.push({
        tag: "figure",
        children: [
          {
            tag: "img",
            attrs: {
              src: image,
            },
          },
        ],
      });
    });

    try {
      const page = await ph.createPage(TELEGRAPH_TOKEN, "Small Shop", content);

      let priceString = ``;
      product.variants.forEach((variant, index) => {
        priceString += `${variant.price}`;
        if (index !== product.variants.length - 1) {
          priceString += "/";
        }
      });

      const sellerContactString = `@mistersleep11 - контакт продавца для заказа`;

      const captionString = `${product.id + 1}. ${product.category} ${
        product.name
      }\nЦена: ${priceString} руб.\n${sellerContactString}`;

      const options = {
        caption: captionString,
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Подробнее", url: `https://telegra.ph/${page.path}` }],
          ],
        },
      };

      await bot.sendPhoto(chatId, product.images[0], options);
    } catch (error) {
      console.error("Error on method createPage:", error);
      bot.sendMessage(
        chatId,
        `Ошибка при создании страницы для продукта "${product.name}". Пожалуйста, попробуйте позже.`
      );
    }
  }
}

bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, INFO);
});

// Запуск экспресс сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
