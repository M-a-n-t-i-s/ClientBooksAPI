
# React-приложение поиска книг с помощью Google Books API

Демонстрация приложения: https://m-a-n-t-i-s.github.io/ClientBooksAPI/

Документация Google Books API: https://developers.google.com/books/docs/v1/using.

Внимание! Обложки книг в большем разрешении не представлены Google Books API. В приложении используется максимально большие.

## Функционал

Должны быть текстовое поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.

Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.

Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest.

Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.

Над блоком с карточками отображается количество найденных по запросу книг.

Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.

При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.

## Используемые технологии

React, React-Redux, Redux, CSS, HTML, JavaScript, Axios

## Запуск

npm run start - комманда для запуска приложения



## `Версия для компьютера`


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/c25c3cca-e7eb-448c-9570-73cceeaa8d31)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/016a0719-3b8c-4ace-8435-f59a1ead4946)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/a6b55a68-987c-44b9-9dcb-390226f6f6ab)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/b95061d6-4f25-4224-9a6d-346d5c17462e)



## `Версия для смартфона (вертикальная ориентация)`


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/b2f65b64-9ebe-49a1-83a2-0691c89b8fbc)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/a5fe844b-0ee5-4d19-9a15-863cb3417c16)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/d6644ae8-41bc-4022-b200-ba5b6add177b)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/d406ea97-5873-4cd4-b759-0ade7a0e3866)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/a9a05153-67fe-45c4-9263-60f4010277a9)





## `Версия для смартфона (горизонтальная ориентация)`


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/c39f45dd-a20e-4af3-9d6b-c2441f0b82cb)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/b257b8ef-518a-4236-bbf6-9d7cecef3a39)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/9d048b04-6577-4732-9f20-608ba683828a)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/81ab8369-b56b-4b5e-b687-748458e6d232)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/d257e135-d955-4a93-be4d-eedb851085f5)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/6c29bff0-ac68-448e-b484-cbfa5e59cc65)



