const fs = require("fs");

async function addPathToProductsDetails(filePath) {
  let products = JSON.parse(fs.readFileSync(filePath, "utf8"));

  async function addDetails(product) {
    let content = [];

    content.push({
      tag: "figcaption",
      children: [capitalizeFirstLetter(product.category), " - ", product.name],
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

    const page = await ph.createPage(
      TELEGRAPH_TOKEN,
      "Small Shop China",
      content
    );
    return page.url;
  }

  for (const product of products) {
    product.detailsPath = await addDetails(product);
    console.log("2 @ product details :>> ", product);
  }

  fs.writeFileSync("products.json", JSON.stringify(products, null, 2));
}

function capitalizeFirstLetter(string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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

// Сохранение списка пользователей в файл
function saveUserList(userList) {
  fs.writeFileSync("users.json", JSON.stringify(userList, null, 2));
}

module.exports = {
  capitalizeFirstLetter,
  addPathToProductsDetails,
  loadProducts,
  saveUserList,
};
