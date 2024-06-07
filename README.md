## Гайд по установке и использованию

### Установка

Открыть терминал, скопировать ссылку ниже и вставить ее в нужной папке где будет находиться проект.

```
git clone https://github.com/hlynianyi/telegram_bot_scs.git
```

Вписать **npm install** && **npm ci** после. (убедиться что Node.js установлен на компьютере, для проверки вписать команду "node -v")
Это установит необходимые зависимости(пакеты необходимые для работы проекта с внешними источниками).

После этого можно приступать к запуску.

### Запуск

Вписать в терминале команду ниже

```
node bot.js
```

Бот должен запуститься и реагировать на действия в телеграме.

### Добавление товаров

Файл **data.js** содержит данные о мотоциклах, скутерах и прочих категориях(одноименные названия внутри файла, не потеряться).

Внутри файла в самом низу есть переменная **example**.
Она содержит незаполненные данные товара. Все данные должны быть внутри "".

- id: номер товара в категории, для нового товара должен быть "номер последнего добавленного+1"
- name: имя товара(без категории)
- category: название категории товара(например: Электро-самокат/Электро-мотоцикл/Квадроцикл)
- images: описание для добавления картинок будет ниже.
- variants: отвечает за модификации/комплектации. Внутри прямых скобок([]), есть фигурные. Каждая фигурная скобка - комплектация, содержащая хар-ки. Чтобы добавить комплектацию или убрать нужно добавить/удалить фигурные скобки.

### Картинки для товаров

Этот ресурс можно использовать для загрузки картинок, всей пачкой.
Они хранятся там неопределенный срок.

```
https://imgbox.com/
```

- Нажать Upload Images - Выбрать нужные картинки - Select Content Type (Family Safe Content) - Thumbnail (800x800 Resized) - Start Upload.
- После загрузки нужно скопировать все что внутри поля HTML-Code
  Пример:

  ```
  <a href="https://imgbox.com/iOiYQ4sZ" target="_blank">
  <img src="https://thumbs2.imgbox.com/e6/f8/iOiYQ4sZ_t.jpg" alt="image host"/>
  </a>
  ```

- Нам нужно то, что внутри <img src="">, копируем это и вставляем в поле images каждую ссылку в зависимости от количества загруженных катинок.
- Я создал закладку в чатгпт, сказал ему что я буду скидывать ему ссылки в таком формате и ему нужно доставать эту ссылку и оставлять мне, я просто скидывал ему грязный код а он мне отправлял готовые ссылки(ускоряет значительно работу).

**После внесения изменений нажать ctrl+c и перезапустить бота заного**
