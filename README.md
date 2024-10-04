# Описание

Проект для тестового задания:

### Используемые пакеты:

    1. "@reduxjs/toolkit": "^2.2.7",
    2. "bootstrap": "^5.3.3",
    3. "framer-motion": "^11.9.0",
    4. "next": "14.2.13",
    5. "overlayscrollbars-react": "^0.5.6",
    6. "react": "^18",
    7. "react-dom": "^18",
    7. "react-redux": "^9.1.2",
    8. "socket.io": "^4.8.0",
    9. "socket.io-client": "^4.8.0"

По своей сути это протатип админ панели, в которой отображаются товары и приходы товаров. Так как опыта реляционными базами данных у меня нету. Я использовал моковые данные, что бы эмитировать REST запросы были написаны 2 небольших api.

В проете роутинг сделан через App дерикторию, отображется дата и реальное время в хедере, а также количество открытых вкладок приложения. Гланая страница без коннента. На страницы товаров - отображается список товаров и фильтр по типу, на страницы приходов так же. При клике на приход открывается список товаров из него, при нажатии на кнопку удалить открывается модальное окно с подтверждением и спиком товаров в приходе.

## Environment Variables

Проект использует моковые данные и моковое api, для этого нужно
указать переменные окружения

`API_KEY`

`NEXT_PUBLIC_URL`= 'https://example.com'

# Локальный запуск проекта

## Git Hub

```bash
 git clone https://github.com/serhiimatv/dzencodetest.git
```

Перейти в папку с проектом

```bash
npm install
```

```bash
 npm run dev || npm run build && npm run start
```

## Docker

### Запуск деплой проекта на локальной машине

```bash
 docker pull serhiimatv/dzencodetest
```

```bash
 docker run -p 3000:3000 serhiimatv/dzencodetest
```

Проект будет доступен по http://localhost:3000

### Распакавать проект из docker container

```bash
 docker pull serhiimatv/dzencodetest
```

${NAME} = введите имя контйнера

```bash
  docker create --name ${NAME} serhiimatv/dzencodetest
```

```bash
  docker cp ${NAME}:/app/ .
```

```bash
  docker rm ${NAME}
```

Перейти в папку "app"

```bash
  cd app
```

```bash
 npm run dev || npm run build && npm run start
```

## Deployment

Проект развернут на Heraku так как он поддерживает web socket

https://dzencode-699eb96cc013.herokuapp.com/
