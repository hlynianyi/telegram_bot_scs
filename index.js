require("dotenv").config(); // Загружаем переменные окружения из .env
const token = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAPH_TOKEN = process.env.TELEGRAPH_TOKEN;
const ADMIN_ID = process.env.ADMIN_ID; // ID администратора
const TelegramBot = require("node-telegram-bot-api");
const Telegraph = require("telegraph-node");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { INFO, WELCOME_MESSAGE } = require("./data.js");
const fs = require("fs");

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN не задан в переменных окружения.");
}
if (!TELEGRAPH_TOKEN) {
  throw new Error("TELEGRAPH_TOKEN не задан в переменных окружения.");
}
if (!ADMIN_ID) {
  throw new Error("ADMIN_ID не задан в переменных окружения.");
}

const ph = new Telegraph();
const bot = new TelegramBot(token, { polling: true });

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

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, WELCOME_MESSAGE);
});

// Получение ID телеграм-пользователя
bot.onText(/\/getid/, (msg) => {
  console.log("User asking for ID :>> ", msg.chat.username, msg.chat.id);
  bot.sendMessage(msg.chat.id, `Ваш ID: ${msg.chat.id}`);
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

// Обработчик команды "мотоциклы"
bot.onText(/\мотоциклы/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "bikes";
  sendProductList(chatId, "Электро-мотоцикл");
});

// Обработчик команды "скутеры"
bot.onText(/\скутеры/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "scouters";
  sendProductList(chatId, "Электро-скутер");
});

// Обработчик команды "квадроциклы"
bot.onText(/\квадроциклы/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = "quadrocycles";
  sendProductList(chatId, "Квадроцикл");
});

async function sendProductList(chatId, categoryName) {
  const allProducts = loadProducts();
  const products = allProducts.filter((prod) => prod.category === categoryName);

  if (products.length === 0) {
    bot.sendMessage(chatId, "В настоящее время нет доступных товаров.");
    return;
  }

  for (const [index, product] of products.entries()) {
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

    if (product.images) {
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
    }

    if (product.videos) {
      product.videos.map((video) => {
        content.push({
          tag: "figure",
          children: [
            {
              tag: "video",
              attrs: {
                src: video,
                controls: true,
              },
            },
          ],
        });
      });
    }

    let priceString = "";
    product.variants.forEach((variant, idx) => {
      priceString += `Модификация ${idx + 1}: ${variant.price} руб.\n`;
    });

    const pageContent = product.variants.map((variant, idx) => {
      return {
        tag: "p",
        children: [`Модификация ${idx + 1}: ${variant.price} руб.`],
      };
    });

    if (pageContent.length === 0) {
      pageContent.push({
        tag: "p",
        children: ["Информация о модификациях отсутствует"],
      });
    }

    try {
      const page = await ph.createPage(TELEGRAPH_TOKEN, "Small Shop", content);

      const sellerContactString = `@mistersleep11 - контакт для заказа`;
      let captionString = `${index + 1}. ${product.category} ${
        product.name
      }\n${sellerContactString}`;
      if (product.variants.length > 1) {
        captionString = `${captionString}\nЦена💰: ${
          product.variants[0].price
        } - ${product.variants.at(-1).price} руб.`;
      } else {
        captionString = `${captionString}\nЦена💰: ${product.variants[0].price} руб.`;
      }

      const mediaGroup = [
        ...(product.images || []).map((image) => ({
          type: "photo",
          media: image,
          parse_mode: "Markdown",
        })),
        ...(product.videos || []).map((video) => ({
          type: "video",
          media: video,
          parse_mode: "Markdown",
        })),
      ];

      const options = {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Подробнее", url: `https://telegra.ph/${page.path}` }],
          ],
        },
      };

      // Отправка медиафайлов группами по 10
      for (let i = 0; i < mediaGroup.length; i += 10) {
        const mediaChunk = mediaGroup.slice(i, i + 10);
        await bot.sendMediaGroup(chatId, mediaChunk);
      }

      await bot.sendMessage(chatId, `${captionString}`, options);
    } catch (error) {
      console.error("Error on method createPage:", error);
      bot.sendMessage(
        chatId,
        `Ошибка при создании страницы для продукта "${product.name}". Пожалуйста, попробуйте позже.`
      );
    }
  }
}

const addProductSteps = {
  awaiting_category: "awaiting_name",
  awaiting_name: "awaiting_variant",
  awaiting_variant: "awaiting_more_variants_or_media",
  awaiting_more_variants_or_media: "awaiting_media",
  awaiting_media: "complete",
};

const addProductMessages = {
  awaiting_name: "Введите название товара.",
  awaiting_variant:
    "Введите первую комплектацию товара (цена, скорость, мотор, контроллер) через запятую.",
  awaiting_more_variants_or_media:
    "Введите следующую комплектацию товара или введите /skip для завершения.",
  awaiting_media:
    "Загрузите изображения или видео товара. Введите /skip для завершения.",
};

const userStates = {};
let productBuffer = {}; // Временное хранилище для ввода данных о товаре

// Обработчик команды /addproduct для администратора
bot.onText(/\/addproduct/, (msg) => {
  const chatId = msg.chat.id;
  if (String(chatId) === String(ADMIN_ID)) {
    userStates[chatId] = "awaiting_category";
    productBuffer = {}; // Сбрасываем буфер
    bot.sendMessage(chatId, "Введите категорию продукта:");
  } else {
    bot.sendMessage(chatId, "Вы не имеете прав для выполнения этой команды.");
  }
});

// Функция для обработки добавления продукта и его сохранения
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (chatId !== Number(ADMIN_ID)) return;

  const currentStep = userStates[chatId];

  if (currentStep in addProductSteps && currentStep !== "awaiting_media") {
    if (
      currentStep === "awaiting_variant" ||
      currentStep === "awaiting_more_variants_or_media"
    ) {
      const [price, speed, engine, controller] = text
        .split(",")
        .map((item) => item.trim());

      if (price !== "/skip") {
        // Добавляем проверку на /skip
        const variant = { price, speed, engine, controller };
        if (!productBuffer.variants) {
          productBuffer.variants = [];
        }
        productBuffer.variants.push(variant);
      }

      userStates[chatId] = "awaiting_more_variants_or_media";
    } else {
      productBuffer[currentStep.replace("awaiting_", "")] = text;
      userStates[chatId] = addProductSteps[currentStep];
    }
    bot.sendMessage(chatId, addProductMessages[userStates[chatId]]);
  }

  if (currentStep === "awaiting_media" && (msg.photo || msg.video)) {
    try {
      const fileId = msg.photo
        ? msg.photo[msg.photo.length - 1].file_id
        : msg.video.file_id;
      const mediaType = msg.photo ? "images" : "videos";
      if (!productBuffer[mediaType]) {
        productBuffer[mediaType] = [];
      }
      productBuffer[mediaType].push(fileId);
      bot.sendMessage(
        chatId,
        `Медиа добавлено. Добавьте ещё или введите /skip для завершения.`
      );
    } catch (error) {
      console.error("Ошибка при получении файла: ", error);
      bot.sendMessage(
        chatId,
        "Произошла ошибка при добавлении медиа. Пожалуйста, попробуйте снова."
      );
    }
  }

  if (currentStep === "complete") {
    saveProduct(chatId);
  }
});

function saveProduct(chatId) {
  const products = loadProducts();
  productBuffer.images = productBuffer.images || [];
  productBuffer.videos = productBuffer.videos || [];
  products.push(productBuffer);
  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
  bot.sendMessage(chatId, "Продукт успешно сохранен.");
  userStates[chatId] = null;
  productBuffer = {};
}

function loadProducts() {
  // Загрузка продуктов из JSON файла
  if (fs.existsSync("products.json")) {
    try {
      const data = fs.readFileSync("products.json", "utf8");
      if (data.trim().length === 0) {
        return []; // Возвращаем пустой массив, если файл пуст
      }
      const products = JSON.parse(data);
      // Проверка и исправление структуры данных
      return products.map((product) => {
        if (!Array.isArray(product.variants)) {
          product.variants = [];
        }
        return product;
      });
    } catch (error) {
      console.error("Ошибка при чтении файла products.json:", error);
      return []; // Возвращаем пустой массив в случае ошибки парсинга
    }
  }
  return [];
}

// Команда /skip для завершения ввода этапа
bot.onText(/\/skip/, (msg) => {
  const chatId = msg.chat.id;
  const currentStep = userStates[chatId];

  if (currentStep === "awaiting_more_variants_or_media") {
    userStates[chatId] = "awaiting_media";
    bot.sendMessage(chatId, addProductMessages[userStates[chatId]]);
  } else if (currentStep === "awaiting_media") {
    userStates[chatId] = "complete";
    saveProduct(chatId);
  }
});

bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, INFO);
});

bot.on("polling_error", (err) => console.log(err));
// Запуск экспресс сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
