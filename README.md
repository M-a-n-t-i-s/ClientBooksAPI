<<<<<<< HEAD
=======
# React-приложение поиска книг с помощью Google Books API

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


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/bbc28d68-f275-4ef8-af45-0df23ab01000)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/0aa61923-9dfe-4113-a100-4db5f7958e3e)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/03eeec32-e800-44bf-a8ae-182298c938a4)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/d3b49b5d-6afc-47af-ae99-7fd978c946fe)


## `Версия для смартфона (вертикальная ориентация)`


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/f2a2cda7-13f6-438e-99db-a3e02baa4220)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/9d396aa8-f6e5-4d43-a464-8089919127c0)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/2d5f8ddc-1001-409e-b172-0cefd9c29dc3)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/68a2d4b7-0022-4fca-8413-ec6fe61e3c61)

![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/e550d554-b21f-42f5-9608-385eb85650b6)



## `Версия для смартфона (горизонтальная ориентация)`


![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/bab3726d-cf7b-4903-b773-27a3717f7fb5)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/9b0851e4-20a9-4a99-b108-0a06d5cf8c95)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/1fd7782e-6d0c-4c02-ae92-69f5649b58e7)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/c70bf801-7077-4d7e-9db2-44d485a62429)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/ed91fb6a-6f07-4344-8729-37ddabc630f2)
![image](https://github.com/M-a-n-t-i-s/ClientBooksAPI/assets/106916069/e837a298-7838-4de7-b79b-c08a0aa137b6)







>>>>>>> 526f1dafc389730ca5405b62c7eb39f373194729
