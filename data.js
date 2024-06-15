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
const WELCOME_MESSAGE =
  "Здравствуйте,\nВы можете использовать следующие команды:\n/start - Запуск бота\n/catalog - Здесь вы можете самостоятельно изучить весь каталог (мотоциклы, скутеры и т.д.)\n/info - Интересующие вас вопросы\n/addproduct - добавление товара (admin)\n";
// const CATEGORY_EMPTY_MESSAGE = `Товары данной категории скоро будут доступны. Пожалуйста, попробуйте позже.`;
// Шаблон для добавления товаров(для удобства)

module.exports = {
  INFO,
  WELCOME_MESSAGE,
  // CATEGORY_EMPTY_MESSAGE,
};
